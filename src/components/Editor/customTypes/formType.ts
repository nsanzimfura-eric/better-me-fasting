const initFormType = (domc) => {
  domc.addType("form-label", {
    model: {
      defaults: {
        name: "Form Label",
        tagName: "label",
        attributes: {
          for: "",
          class: "form-label",
        },
        content: "Input Label",
        traits: [
          {
            type: "text",
            label: "Label",
            name: "content",
            changeProp: 1,
          },
          {
            type: "text",
            label: "For",
            name: "for",
          },
        ],
      },
    },
  });

  domc.addType("form-input", {
    model: {
      defaults: {
        name: "Form Input",
        tagName: "input",
        attributes: {
          class: "form-control",
          placeholder: "placeholder text",
          name: "",
          type: "text",
          required: false,
          disabled: false,
        },
        traits: [
          {
            type: "text",
            label: "Placeholder",
            name: "placeholder",
          },
          {
            type: "text",
            label: "Name",
            name: "name",
          },
          {
            type: "select",
            label: "Type",
            name: "type",
            options: [
              { value: "text", name: "Text" },
              { value: "email", name: "Email" },
              { value: "password", name: "Password" },
              { value: "number", name: "Number" },
              { value: "file", name: "File" },
              { value: "color", name: "Color" },
              { value: "time", name: "Time" },
              { value: "date", name: "Date" },
              { value: "datetime-local", name: "Datetime Local" },
            ],
          },
          {
            type: "checkbox",
            label: "Required",
            name: "required",
          },
          {
            type: "checkbox",
            label: "Disabled",
            name: "disabled",
          },
        ],
      },
    },
  });

  domc.addType("form-group", {
    model: {
      defaults: {
        name: "Form Group",
        tagName: "div",
        attributes: {
          class: "mb-3",
        },
        components: [
          {
            type: "form-label",
          },
          {
            type: "form-input",
          },
        ],
      },
    },
  });

  domc.addType("form-submit", {
    model: {
      defaults: {
        name: "Form Submit",
        tagName: "button",
        attributes: {
          class: "w-100 btn btn-lg btn-primary",
          type: "submit",
        },
        content: "Submit",
        traits: [
          {
            type: "text",
            label: "Label",
            name: "content",
            changeProp: 1,
          },
        ],
      },
    },
  });

  domc.addType("form-footer", {
    model: {
      defaults: {
        name: "Form Footer",
        tagName: "small",
        attributes: {
          class: "text-body-secondary",
        },
        content: "By clicking Sign up, you agree to the terms of use.",
        traits: [
          {
            type: "text",
            label: "Label",
            name: "content",
            changeProp: 1,
          },
        ],
      },
    },
  });

  domc.addType("form-cs", {
    model: {
      defaults: {
        name: "Sign up",
        tagName: "form",
        attributes: {
          class: "p-4 p-md-5 border rounded-3 bg-body-tertiary",
          action: "",
          method: "POST",
        },

        components: [
          {
            type: "form-group",
          },
          {
            type: "form-group",
          },
          {
            type: "form-submit",
          },
          {
            tagName: "hr",
            attributes: {
              class: "mt-4 mb-2",
            },
          },
          {
            type: "form-footer",
          },
        ],
        traits: [
          {
            type: "text",
            label: "Action Url",
            name: "action",
          },
          {
            type: "select",
            label: "Method",
            name: "method",
            options: [
              { value: "GET", name: "Get" },
              { value: "POST", name: "Post" },
              { value: "PUT", name: "Put" },
              { value: "DELETE", name: "Delete" },
            ],
          },
        ],
      },
    },
  });
};

export { initFormType };
