import React from "react";

const ViewerModel = ({ data, css }) => {
  return (
    <>
      {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </>
  );
};

export default ViewerModel;
