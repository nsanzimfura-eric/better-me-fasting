const initShareButtonsType = (domc) => {
  domc.addType("share-buttons", {
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          id: "aebd1956f",
        },
        components: [
          {
            type: "link",
            components: [
              {
                type: "icon",
                attributes: {
                  class: "fab fa-facebook-f",
                },
              },
            ],
          },
          {
            type: "link",
            components: [
              {
                type: "icon",
                attributes: {
                  class: "fab fa-twitter",
                  backgroundColor: "#1da1f2",
                },
              },
            ],
          },
          {
            type: "link",
            components: [
              {
                type: "icon",
                attributes: {
                  class: "fab fa-linkedin-in",
                  backgroundColor: "#1da1f2",
                },
              },
            ],
          },
          {
            type: "link",
            components: [
              {
                type: "icon",
                attributes: {
                  class: "fab fa-whatsapp",
                  backgroundColor: "#25d366",
                },
              },
            ],
          },
        ],
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          display: "flex",
          gap: "0.2rem",
        });
      },
    },
  });
};

export { initShareButtonsType };
