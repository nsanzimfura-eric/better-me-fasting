import React, { useState } from "react";

const CustomCssEditor = ({ onApplyCss }) => {
  const [css, setCss] = useState("");

  const handleApplyCss = () => {
    onApplyCss(css);
    setCss("");
  };

  return (
    <div className="custom-css-editor" data-gjs-type="text">
      <textarea
        value={css}
        onChange={(e) => setCss(e.target.value)}
        placeholder="Enter CSS rules"
      ></textarea>
      <button onClick={handleApplyCss}>Apply CSS</button>
    </div>
  );
};

export default CustomCssEditor;
