const initAccordionType = (domc) => {
  domc.addType("accordion-button", {
    model: {
      defaults: {
        name: "Accordion Button",
        tagName: "button",
        attributes: {
          class: "accordion-button collapsed",
          "data-bs-toggle": "collapse",
          "data-bs-target": "",
        },
        components: [
          {
            type: "text",
            content: "Accordion Item #1",
          },
        ],
      },
    },
  });

  domc.addType("accordion-header", {
    model: {
      defaults: {
        name: "Accordion Header",
        tagName: "h2",
        attributes: {
          class: "accordion-header",
        },
        components: [
          {
            type: "accordion-button",
          },
        ],
      },
    },
  });

  domc.addType("accordion-body", {
    model: {
      defaults: {
        name: "Accordion Body",
        tagName: "div",
        attributes: {
          class: "accordion-body",
        },
        components: [
          {
            tagName: "div",
            components: [
              {
                type: "text",
                content:
                  "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
              },
            ],
          },
        ],
      },
    },
  });

  domc.addType("accordion-collapse", {
    model: {
      defaults: {
        name: "Accordion Collapse",
        tagName: "div",
        attributes: {
          class: "accordion-collapse collapse",
          "data-bs-parent": "",
        },
        components: [
          {
            type: "accordion-body",
          },
        ],
      },
    },
  });

  domc.addType("accordion-item", {
    model: {
      defaults: {
        name: "Accordion Item",
        tagName: "div",
        attributes: {
          isOpened: false,
        },
        components: [
          {
            tagName: "div",
            attributes: {
              class: "accordion-item",
            },
            components: [
              {
                type: "accordion-header",
              },
              {
                type: "accordion-collapse",
              },
            ],
          },
        ],
        "script-props": ["attributes"],
        script: function (props) {
          let { isOpened } = props.attributes;
          if (isOpened) {
            this.querySelector(".accordion-collapse").classList.add("show");
            this.querySelector(".accordion-button").classList.remove(
              "collapsed"
            );
          }
        },
        traits: [
          {
            type: "checkbox",
            name: "isOpened",
            label: "Is Opened",
          },
        ],
        style: {
          padding: "0 0.5rem",
        },
      },
    },
    view: {
      init({ model }) {
        let parentId = model.parent();
        let [collapeEl] = model.findType("accordion-collapse");
        let [buttonEl] = model.findType("accordion-button");

        collapeEl.setAttributes({
          ...collapeEl.getAttributes(),
          id: collapeEl.ccid,
          "data-bs-parent": `#${parentId.ccid}`,
        });

        buttonEl.setAttributes({
          ...buttonEl.getAttributes(),
          "data-bs-target": `#${collapeEl.ccid}`,
        });
      },
    },
  });

  domc.addType("accordion", {
    model: {
      defaults: {
        name: "Accordion",
        tagName: "div",
        attributes: {
          class: "accordion",
        },
        components: [
          {
            type: "accordion-item",
          },
        ],
        style: {
          padding: "1rem 0.5rem",
        },
      },
    },
  });
};

export { initAccordionType };
