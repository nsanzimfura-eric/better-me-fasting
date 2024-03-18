const initBreadcrumbType = (domc) => {
  domc.addType("breadcrumb-item", {
    model: {
      defaults: {
        name: "Breadcrumb Item",
        tagName: "div",
        attributes: {
          lastItem: false,
          class: "breadcrumb-item",
        },
        components: [
          {
            type: "link",
            attributes: {
              href: "#",
            },
            style: {
              color: "black",
              "text-decoration": "none",
              "font-size": "17px",
            },
            content: "Home",
          },
          {
            type: "icon",
            attributes: {
              class: "fas fa-angle-right",
              backgroundColor: "transparent",
              iconColor: "black",
              size: "14",
              height: "25",
              width: "25",
            },
          },
        ],
        traits: [
          {
            type: "checkbox",
            label: "Last item",
            name: "lastItem",
          },
        ],
        "script-props": ["attributes"],
        script: function (props) {
          let { lastItem } = props.attributes;

          let icon = this.querySelector("i");
          if (lastItem) {
            icon.style.display = "none";
          } else {
            icon.style.display = "flex";
          }
        },
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          display: "flex",
          "align-items": "center",
          padding: "0.5rem 0",
        });
      },
    },
  });

  domc.addType("breadcrumb", {
    model: {
      defaults: {
        name: "Breadcrumb",
        tagName: "div",
        attributes: {
          icon: "fas fa-angle-right",
          class: "breadcrumb",
        },
        components: [
          {
            type: "breadcrumb-item",
          },
          {
            type: "breadcrumb-item",
          },
          {
            type: "breadcrumb-item",
            attributes: {
              lastItem: true,
            },
          },
        ],
        traits: [
          {
            type: "button",
            label: "Separator",
            name: "icon",
            text: "choose icon",
            full: true,
            command: "icon",
          },
        ],
      },
      updated(property) {
        if (property === "traits") {
          let icon = this.getTrait("icon").attributes.value;

          const seprators = this.findType("icon");
          seprators?.forEach((seperator) => {
            let attributes = seperator.getAttributes();
            seperator.setAttributes({
              ...attributes,
              class: `fas ${icon}`,
            });
          });
        }
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          display: "flex",
          "align-items": "center",
          padding: "0.5rem",
        });
      },
    },
  });
};

export { initBreadcrumbType };
