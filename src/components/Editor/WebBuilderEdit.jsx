import React, { useEffect, useState } from "react";
import { grapesjs } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import gjsPreset from "grapesjs-preset-webpage";
import basicBlocks from "grapesjs-blocks-basic";
import grapesComponentCodeEditorPlugin from "grapesjs-component-code-editor";
import parserPostCSS from "grapesjs-parser-postcss";
import grapesjsTuiImageEditor from "grapesjs-tui-image-editor";
import countdownPlugin from "grapesjs-component-countdown";
import customSectorPlugin from "./customSectorsPlugin";
import axios from "axios";
import { toast } from "react-toastify";
import componentTemplate from "../../utils/componentTemplate";
import { useParams, useNavigate } from "react-router-dom";
import handleUpdate from "../../utils/handleUpdate";
import { handleFileUpload } from "../../utils/handleFileUpload";
import { AddCustomComponents, GroupBasicBlocks } from "./initCustomComponents";

const WebBuilderEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState("");
  const [editorInstance, setEditorInstance] = useState(null);
  const [components, setComponents] = useState([]);
  const [editingData, setEditingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [assetsManager, setAssetsManager] = useState([]);
  let editor = null;

  useEffect(() => {
    const localAssets = localStorage.getItem("assets");
    const assets = JSON.parse(localAssets);
    if (assets) {
      setAssetsManager(assets);
    } else {
      setAssetsManager([]);
    }
    if (editor) {
      editor.on("canvas:clear", () => {
        localStorage.removeItem("gjs-data");
      });
    } else {
      localStorage.setItem("gjs-data", null);
    }
  }, []);

  useEffect(() => {
    // Fetch components from Strapi
    axios
      .get(`${import.meta.env.VITE_STRAPI_COMPONENT_CONFIG_URL}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
      })
      .then((response) => {
        setComponents(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.error("Error fetching components:", error);
      });

    axios
      .get(`${import.meta.env.VITE_STRAPI_COMPONENT_DATA_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPageTitle(response.data.data?.attributes?.title);
        setEditingData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Page not found");
        setIsLoading(false);
        navigate("/");
        console.error("Error fetching page:", error);
      });
  }, [id]);

  useEffect(() => {
    const container = document.querySelector("#gjs");

    if (editor === null && !isLoading && container) {
      editor = grapesjs.init({
        container: "#gjs",
        height: "100vh",
        width: "100%",
        plugins: [
          gjsPreset,
          basicBlocks,
          grapesComponentCodeEditorPlugin,
          parserPostCSS,
          customSectorPlugin,
          grapesjsTuiImageEditor,
          countdownPlugin,
        ],
        showOffsets: true,
        fromElement: true,
        noticeOnUnload: false,
        selectorManager: {
          componentFirst: true,
        },
        assetManager: {
          assets: assetsManager,
          upload: `${import.meta.env.VITE_STRAPI_API_ROOT}/upload`,
          uploadName: "files",
          // Text on upload input
          uploadText: "Drop files here or click to upload",
          // Label for the add button
          addBtnText: "Add Images",
          uploadFile: async (e) => {
            const files = e.dataTransfer
              ? e.dataTransfer.files
              : e.target.files;
            console.log(files);

            const formData = new FormData();

            for (const i in files) {
              formData.append("file-" + i, files[i]);
            }
            console.log(formData);
            handleFileUpload(e.target.files[0], editor);
          },
        },
        storageManager: {
          id: "gjs-",
          type: "local",
          componentFirst: true,
          autosave: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
        canvas: {
          styles: [
            "http://localhost:3000/src/assets/css/editor/webbuilder.css",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
          ],
          scripts: [
            "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js",
          ],
        },
        deviceManager: {
          devices: [
            {
              id: "desktop",
              name: "Desktop",
              width: "",
            },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile portrait",
              width: "320px",
              widthMedia: "575px",
            },
          ],
        },
        pluginsOpts: {
          "grapesjs-preset-webpage": {
            blocksBasicOpts: {
              blocks: [
                "column1",
                "column2",
                "column3",
                "column3-7",
                "text",
                "link",
                "image",
                "video",
                "textarea",
              ],
              flexGrid: 1,
            },
            blocks: ["link-block", "quote", "text-basic"],
          },
          [countdownPlugin]: {
            block: {
              label: "Countdown",
              category: "Components",
            },
            dateInputType: "date",
          },
        },
      });

      setEditorInstance(editor);

      const pn = editor.Panels;
      const panelViews = pn.addPanel({
        id: "views",
      });
      panelViews.get("buttons").add([
        {
          attributes: {
            title: "Open Code",
          },
          className: "fa fa-file-code-o",
          command: "open-code",
          togglable: true,
          id: "open-code",
        },
      ]);

      editor.refresh();
    }
    if (components.length > 0) {
      components.forEach((component) => {
        const newComponent = componentTemplate(component);
        editor.BlockManager.add(newComponent.id, {
          ...newComponent,
          media: `<i class="fa-solid fa-text-width" style="font-size:2em"></i>`,
        });
      });
    }

    if (editor) {
      window.editor = editor;
      GroupBasicBlocks(editor);
      AddCustomComponents(editor);
    }

    if (editingData) {
      const existingLocalData = localStorage.getItem("gjsProject");
      localStorage.setItem("gjs_localExistingData", existingLocalData);
      localStorage.removeItem("gjsProject");
      const projectData = JSON.parse(editingData.attributes.projectData);

      editor.loadProjectData(projectData);
    }
  }, [components, editor, isLoading]);

  const handleTitleChnage = (e) => {
    setPageTitle(e.target.value);
  };

  const updatePage = () => {
    handleUpdate(editorInstance, pageTitle, id);
  };

  // Check the loading state and render accordingly
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="topbar">
        <div className="topbar-container">
          <input
            type="text"
            placeholder="Page Title"
            defaultValue={pageTitle}
            onChange={handleTitleChnage}
          />
          <span className="action-button-inner" onClick={updatePage}>
            Update <i className="fa-solid fa-paper-plane"></i>
          </span>
        </div>
      </div>
      <div id="gjs"></div>
    </>
  );
};

export default WebBuilderEdit;
