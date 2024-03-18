import React, { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/editor/webbuilder.css";
import "@fortawesome/fontawesome-free/css/all.css";
import WebBuilder from "./components/Editor/WebBuilder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewerModel from "./components/Views/ViewerModel";
import axios from "axios";
import StandardComponentList from "./components/Views/StandardComponentList";
import WebBuilderEdit from "./components/Editor/WebBuilderEdit";
import removeCustomCssInput from "./utils/removeCustomCssInput";

function App() {
  const [pageData, setPageData] = useState([]);
  const [subdomain, setSubdomain] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_STRAPI_API_ROOT}/html-storages?populate=*`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
        },
      })
      .then((response) => {
        console.log("DATA COLLECTED");
        setPageData(response.data.data); 
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });

    const host = window.location.host;
    if (window.location.hostname === "localhost") {
      const arr = host
        .split(".")
        .slice(0, host.includes("localhost") ? -1 : -2);
      if (arr.length > 0) setSubdomain(arr[0]);
    } else {
      const parts = window.location.hostname.split(".");
      if (parts.length > 2) {
        setSubdomain(parts[0]);
      } else if (parts.length === 2) {
        setSubdomain(parts[0]); // Use this or parts[1] based on your domain structure
      }
    }
  }, []);

  const getData = pageData.find(
    (data) => data.attributes.routeName === subdomain
  );

  // Check the loading state and render accordingly
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { updatedHtmlCSSData, extractedCSS } = removeCustomCssInput(
    getData?.attributes.htmlCSSData
  );

  return !isLoading && getData ? (
    <ViewerModel data={updatedHtmlCSSData} css={extractedCSS} />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebBuilder />} />
        <Route
          path="/standard-component-list"
          element={<StandardComponentList data={pageData} />}
        />
        <Route path="/edit-page/:id" element={<WebBuilderEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
