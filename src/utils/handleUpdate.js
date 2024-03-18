import axios from "axios";
import { toast } from "react-toastify";
import { getUpdatedHtml } from "./getUpdatedHtml";

const handleUpdate = async (editor, title, id) => {
  // Export the HTML and CSS content from the editor
  const pageCSS = editor.getCss();
  const htmlData = editor.getHtml();
  const projectData = JSON.stringify(editor.getProjectData());

  const requestData = {
    data: {
      projectData: projectData,
      htmlData: getUpdatedHtml(htmlData),
      cssData: pageCSS,
    },
  };

  if (title !== null) {
    requestData.data.title = title;
  }

  try {
    await axios
      .put(
        `${import.meta.env.VITE_STRAPI_API_ROOT}/html-storages/${id}`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
          },
        }
      )
      .then(() => {
        toast.success("Page Updated Successfully");
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export default handleUpdate;
