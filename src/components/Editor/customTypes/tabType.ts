const initTabType = (domc) => {
  domc.addType("tab-pane", {
    model: {
      defaults: {
        name: "Tab Pane",
        tagName: "div",
        attributes: {
          class: "tab-pane fade",
          role: "tabpanel",
          tabindex: "0",
        },
        components: [
          {
            type: "text",
            tagName: "h1",
            content: "Tab content",
          },
        ],
        style: {
          padding: "1rem",
        },
        toolbar: [
          {
            attributes: { class: "fa fa-arrow-up" },
            command: "select-parent",
          },
        ],
      },
    },
  });

  domc.addType("tab-content", {
    model: {
      defaults: {
        name: "Tab Content",
        tagName: "div",
        attributes: {
          class: "tab-content",
        },
        components: [
          {
            type: "tab-pane",
          },
          {
            type: "tab-pane",
          },
        ],
      },
    },
  });

  domc.addType("tab-button", {
    model: {
      defaults: {
        name: "Tab Button",
        tagName: "button",
        highlightable: false,
        selectable: false,
        badgable: false,
        hoverable: false,
        attributes: {
          class: "nav-link",
          role: "tab",
          "data-bs-toggle": "tab",
          "data-bs-target": "",
          type: "button",
        },
        components: [
          {
            type: "text",
            content: "Tab",
          },
        ],
      },
    },
  });

  domc.addType("tab-item", {
    model: {
      defaults: {
        name: "Tab Item",
        tagName: "li",
        attributes: {
          class: "nav-item",
          role: "presentation",
        },
        components: [
          {
            type: "tab-button",
          },
        ],
      },
      removed() {
        let content = this.parent().parent();
        let [firstTab] = content.findType("tab-button");
        let [btn] = this.findType("tab-button");
        let paneIdToremove = btn.getAttributes()["data-bs-target"];
        let [paneToRemove] = content.find(paneIdToremove);
        paneToRemove.remove();

        if (firstTab) {
          firstTab.view.el.click();
        }
      },
    },
  });

  domc.addType("tab-list", {
    model: {
      defaults: {
        name: "Tablist",
        tagName: "ul",
        attributes: {
          class: "nav nav-tabs",
          role: "tablist",
        },
        components: [
          {
            type: "tab-item",
          },
          {
            type: "tab-item",
          },
        ],
      },
    },
  });

  domc.addType("tab", {
    model: {
      defaults: {
        name: "Tab",
        tagName: "div",
        components: [
          {
            type: "tab-list",
          },
          {
            type: "tab-content",
          },
        ],
        style: {
          padding: "1rem 0.5rem",
        },
      },
    },
    view: {
      init({ model }) {
        const tabs = model.findType("tab-button");
        const panes = model.findType("tab-pane");

        for (let i = 0; i < tabs.length; i++) {
          tabs[i].setAttributes({
            ...tabs[i].getAttributes(),
            "data-bs-target": `#${panes[i].ccid}`,
            ...(i === 0 && {
              class: "nav-link active",
            }),
          });

          panes[i].setAttributes({
            ...panes[i].getAttributes(),
            ...(i === 0 && {
              class: "tab-pane fade show active",
            }),
          });
        }
      },
    },
  });
};

export { initTabType };
