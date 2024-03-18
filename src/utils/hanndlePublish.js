import axios from "axios";
import { toast } from "react-toastify";

const handlePublish = async (editor, route, title, navigate) => {
  if (route) {
    // Export the HTML and CSS content from the editor
    const pageCSS = editor.getCss();
    const htmlData = editor.getHtml();
    const projectData = JSON.stringify(editor.getProjectData());

    const requestData = {
      data: {
        projectData: projectData,
        routeName: route,
        htmlData: htmlData,
        cssData: pageCSS,
        title,
      },
    };

    try {
      await axios
        .post(
          `${import.meta.env.VITE_STRAPI_API_ROOT}/html-storages`,
          requestData,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          toast.success("Page Created Successfully");
          navigate("/edit-page/" + res.data.data.id);
        })
        .catch((error) => {
          toast.error("Something went wrong");
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  } else {
    toast.error("Please enter a valid page title before publishing.");
  }
};

export default handlePublish;
