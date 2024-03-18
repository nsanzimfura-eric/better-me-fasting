import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import componentTemplate from "../../utils/componentTemplate";
import findElementsWithClasses from "../../utils/findElementsWithClasses";
import handlePublish from "../../utils/hanndlePublish";
import { v4 as uuidv4 } from "uuid";
import { handleFileUpload } from "../../utils/handleFileUpload";
import { AddCustomComponents, GroupBasicBlocks } from "./initCustomComponents";

const WebBuilder = () => {
  const [components, setComponents] = useState([]);
  const [componentsData, setComponentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const [editorInstance, setEditorInstance] = useState(null);
  const [allCss, setAllCss] = useState("");
  const [subdomainData, setSubdomainData] = useState([]);
  const [selectedSubdomainCssData, setSelectedSubdomainCssData] = useState();
  const [selectedSubdomain, setSelectedSubdomain] = useState("");
  const [selectedSubdomainId, setSelectedSubdomainId] = useState(0);
  const [editorData, setEditorData] = useState([]);
  const [customClassList, setCustomClassList] = useState([]);
  const [assetsManager, setAssetsManager] = useState([]);
  const navigate = useNavigate();
  let editor = null;

  useEffect(() => {
    localStorage.removeItem("gjsProject");

    const container = document.querySelector("#gjs");

    if (editor === null && container) {
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
      if (editor) {
        editor.runCommand("core:canvas-clear");
      }

      const projectData = async () => {
        const data = await editor.StorageManager.load();
        const classToFind = "custom-component-wrapper";
        const contentArray = findElementsWithClasses(data, classToFind);

        for (const content of contentArray) {
          const key = Object.keys(content)[0];
          await axios
            .get(`${import.meta.env.VITE_STRAPI_CONTENT_TYPE}${key}`, {
              headers: {
                Authorization: `Bearer ${
                  import.meta.env.VITE_STRAPI_API_TOKEN
                }`,
              },
            })
            .then((response) => {
              const attributeKey = Object.keys(
                response.data.data.schema.attributes
              )[0];
              content[attributeKey] = content[key];
              content["endpointName"] = response.data.data.schema.pluralName;
              delete content[key];
            })
            .catch((error) => {
              console.error("Error fetching components:", error);
            });
        }

        return contentArray;
      };

      if (selectedSubdomainId !== 0) {
        localStorage.removeItem("gjsProject");
        const findSubdomainName = subdomainData.find(
          (subdomain) => subdomain.id === selectedSubdomainId
        );
        const htmlData = findSubdomainName.attributes.htmlData;
        const cssData = findSubdomainName.attributes.cssData;
        editor.setComponents(htmlData);
        editor.setStyle(cssData);

        String.prototype.toCamelCase = function () {
          return this.replace(
            /^([A-Z])|[\s-](\w)/g,
            function (match, p1, p2, offset) {
              if (p2) return p2.toUpperCase();
              return p1.toLowerCase();
            }
          );
        };

        const toRemove =
          "* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}";

        if (selectedSubdomainCssData === undefined) {
          setSelectedSubdomainCssData(cssData.slice(toRemove.length));
        }
      }

      editor.DomComponents.getWrapper().set({
        badgable: false,
        selectable: false,
      });

      editor.on("asset:upload:start", (data) => {
        // alert("Image uploading started...");
        console.log(data);
      });

      editor.on("asset:upload:error", (err) => {
        console.log(err);
      });

      editor.on("asset:upload:response", (response) => {
        console.log(response);
      });

      editor.on("component:selected", (component) => {
        // Check if the selected component has a valid HTML element
        if (component.view && component.view.el) {
          const element = component.view.el;
          const oldClasses = element.getAttribute("class");
          const oldClassList = oldClasses ? oldClasses.split(" ") : [];
          const extractCustomOldClassList = oldClassList.filter(
            (custom) =>
              custom !== "common-builder-editor" &&
              custom !== "common-builder-input" &&
              custom !== "gjs-selected" &&
              custom !== "gjs-hovered"
          );

          console.log("Old classlist: ", extractCustomOldClassList);

          const stylesForOldClasses = getCSSRulesForClasses(
            extractCustomOldClassList
          );

          console.log("Old classlist styles: ", stylesForOldClasses);

          // Create a MutationObserver to watch for changes to attributes
          const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
              ) {
                // The class attribute has changed
                const currentClasses = element.getAttribute("class");
                const currentId = element.getAttribute("id");

                const currentClassList = currentClasses
                  ? currentClasses.split(" ")
                  : [];

                const extractCustomClassList = currentClassList.filter(
                  (custom) =>
                    custom !== "common-builder-editor" &&
                    custom !== "common-builder-input" &&
                    custom !== "gjs-selected" &&
                    custom !== "gjs-hovered"
                );
                // Log the updated class list
                console.log("Updated Class List:", extractCustomClassList);

                // Get the styles applied to each class
                const stylesForClasses = getCSSRulesForClasses(
                  extractCustomClassList
                );

                // Log the styles for the filtered classes
                console.log("Styles for Filtered Classes:", stylesForClasses);

                const newClassName = extractCustomClassList.slice(-1)[0];
                if (
                  newClassName !== undefined &&
                  extractCustomOldClassList.length !==
                    extractCustomClassList.length &&
                  extractCustomOldClassList.length <
                    extractCustomClassList.length
                ) {
                  const classExist = customClassList.find(
                    (item) => item.className === `.${newClassName}`
                  );

                  if (classExist && selectedSubdomainCssData) {
                    const newCssData = `${selectedSubdomainCssData}#${currentId}${classExist.cssData}`;
                    editor.setStyle(newCssData);
                    setSelectedSubdomainCssData(newCssData);
                  } else {
                    const newCssData = `${selectedSubdomainCssData}#${currentId}.${newClassName}{
                      visibility: unset;
                    }`;
                    editor.setStyle(newCssData);
                    setSelectedSubdomainCssData(newCssData);
                  }
                }
              }
            }
          });

          // Start observing the element for attribute changes
          // observer.observe(element, { attributes: true });
        }
      });

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
      const formComponent = {
        id: "custom-form",
        label: "Custom Form",
        content: `<form method="POST" action="${
          import.meta.env.VITE_STRAPI_API_ROOT
        }/sample-components" style="width:100%; padding:10px; height:400px"></form>`,
      };

      // Add the custom form component
      editor.BlockManager.add(formComponent.id, {
        ...formComponent,
        attributes: { title: "Custom Form" },
        media: `<i class="fa-brands fa-wpforms" style="font-size:5em"></i>`,
      });

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
  }, [
    components,
    editor,
    isLoading,
    selectedSubdomain,
    subdomainData,
    selectedSubdomainCssData,
  ]);

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
    const data = subdomainData[0]?.attributes.htmlData;

    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    setEditorData(html.body);
  }, [subdomainData]);

  useEffect(() => {
    const { cssRules } = Object.values(document.styleSheets).find((sheet) =>
      Object.values(sheet.cssRules).find((rule) =>
        (rule.selectorText || "").match(/^.custom/)
      )
    ) || { cssRules: {} };

    const customClassesList = Object.values(cssRules).map((i) => {
      const className = i.selectorText;
      const cssData = { className, cssData: i.cssText };
      return cssData;
    });
    setCustomClassList(customClassesList);
  }, []);

  useEffect(() => {
    if (customClassList) {
      const cssObjectData = customClassList.map((item) => item.cssData);
      setAllCss(cssObjectData);
    } else {
      setAllCss(editor.getCss());
    }
  }, [customClassList]);

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
        console.error("Error fetching components:", error);
      });
  }, []);

  function getCSSRulesForClasses(classNames) {
    // Select the <style> elements within the custom styles <div>
    const gjsIframe = document.querySelector(".gjs-frame");

    const styleElements = gjsIframe.contentDocument.body.querySelectorAll(
      ".gjs-css-rules style"
    );

    // Initialize an object to store the CSS rules for the specified classes
    let cssRules = "";

    // Loop through each <style> element
    styleElements.forEach((styleElement) => {
      const uniqueId = uuidv4();
      // Remove hyphens and convert to bytes
      const uuidBytes = uniqueId
        .replace(/-/g, "")
        .match(/.{2}/g)
        .map((byte) => parseInt(byte, 16));

      // Encode as Base64
      const base64Id = btoa(String.fromCharCode.apply(null, uuidBytes))
        .replace("+", "-")
        .replace("/", "_")
        .replace(/=+$/, "");
      // Get the CSS rules within the <style> element
      const cssText = styleElement.innerHTML;

      // Check if any of the class names are present in the cssText
      const includesClassNames = classNames.some((className) => {
        return cssText.includes(`.${className}`);
      });

      // If any of the class names are included, store the cssText
      if (includesClassNames) {
        // Extract the CSS selector (e.g., ".test-class") from the style element's ID
        const selector = base64Id;

        // Store the CSS rules for the matching selector
        cssRules = cssRules + cssText;
      }
    });

    return cssRules;
  }

  useEffect(() => {
    if (componentsData.length) {
      storeComponentDataToStrapi(componentsData);
    }
  }, [componentsData.length]);

  const storeComponentDataToStrapi = async (data) => {
    for (const item of data) {
      const componentName = Object.keys(item)[0]; // Get the component name
      const componentData = item[componentName]; // Get the component data
      const endpointName = item.endpointName;
      componentData.cssField = allCss;

      const requestData = {
        data: {
          [componentName]: [componentData],
        },
      };
      console.log(requestData);
      await axios
        .post(
          `${import.meta.env.VITE_STRAPI_API_ROOT}/${endpointName}`,
          requestData,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
            },
          }
        )
        .then((response) => {
          console.log("COMPONENT DATA STORED");
        })
        .catch((error) => {
          console.error("Error fetching components:", error);
        });
    }
  };
  const handleTitleChnage = (e) => {
    setPageTitle(e.target.value);
  };

  const savePage = async () => {
    const userInput = pageTitle;
    const userInputWithoutSpaces = userInput
      ?.toLocaleLowerCase()
      ?.replace(/\s/g, "-");
    handlePublish(editorInstance, userInputWithoutSpaces, userInput, navigate);
    setAllCss(editorInstance.getCss());
    const componentsData = await projectData();
    setComponentsData(componentsData);
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
          <span className="action-button-inner" onClick={savePage}>
            Create <i className="fa-solid fa-paper-plane"></i>
          </span>
        </div>
      </div>
      <div id="gjs"></div>
    </>
  );
};

export default WebBuilder;
