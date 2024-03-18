const initIconButtonType = (domc) => {
  domc.addType("icon-button", {
    model: {
      defaults: {
        name: "Icon Button",
        tagName: "button",
        components: [
          {
            type: "icon",
            attributes: {
              class: "fas fa-code",
              backgroundColor: "transparent",
              size: "26",
            },
          },
        ],
      },
    },
    view: {
      init({ model }) {
        let bgColor = model.getAttributes()["backgroundColor"];

        model.setStyle({
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          margin: "0 0 1.5rem 0",
          width: "60px",
          height: "60px",
          "border-radius": "50%",
          "background-color": "#342632",
          border: 0,
          cursor: "pointer",
        });
      },
    },
  });
};

export { initIconButtonType };
