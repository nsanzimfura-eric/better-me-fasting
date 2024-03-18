const initInputTypes = (domc) => {
  domc.addType("textarea", {
    model: {
      defaults: {
        attributes: {
          id: "d371f8acf",
          cols: 50,
          rows: 7,
          placeholder: "Enter text here",
          style: "resize:none",
        },
        styles: `#d371f8acf{padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;outline:0;resize:vertical}`,
        traits: [{ name: "rows" }, { name: "cols" }, { name: "placeholder" }],
      },
    },
  });

  domc.addType("select", {
    model: {
      defaults: {
        attributes: {
          id: "aebd1956f",
        },
        styles: `#aebd1956f{padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;width:200px;outline:0}`,
      },
    },
  });
};

export { initInputTypes };
