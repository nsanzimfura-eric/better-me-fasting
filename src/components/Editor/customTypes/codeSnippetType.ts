const initCodSnippetType = (domc, editor) => {
  // Each new type extends the default Trait
  editor.TraitManager.addType("code-input-trait", {
    events: {
      keyup: "onChange",
    },

    onValueChange() {
      var traitModel = this.model;
      var selectedComponent = this.target;
      var inputValue = traitModel.get("value");
      selectedComponent.set("code", inputValue);
    },

    getInputEl() {
      var textarea = document.createElement("textarea");
      textarea.rows = 6;
      return textarea;
    },

    onUpdate({ elInput, component }) {
      elInput.value = component.get("code");
    },
  });

  domc.addType("code", {
    model: {
      defaults: {
        name: "Code",
        tagName: "div",
        selectable: false,
        badgable: false,
        code: "import React from 'react';",
        language: "javascript",
        "script-props": ["code", "language"],
        script: function (props) {
          let { code, language } = props;

          let link = document.createElement("link");
          link.rel = "stylesheet";
          link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css";

          const hightLightCode = () => {
            // @ts-ignore-next-line
            let highlightedCode = hljs.highlight(code, {
              language,
            });

            let codeEle = document.createElement("code");
            codeEle.innerHTML = highlightedCode.value;
            codeEle.classList.add(`language-${language || "javascript"}`);
            let pre = document.createElement("pre");
            pre.style.margin = "0";
            pre.appendChild(codeEle);
            this.appendChild(pre);
          };

          // @ts-ignore-next-line
          if (typeof hljs == "undefined") {
            var script = document.createElement("script");
            script.src =
              "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
            script.onload = hightLightCode;
            document.head.appendChild(script);
            document.head.appendChild(link);
          } else {
            hightLightCode();
          }

          let clipboardIcon = this.nextElementSibling;
          clipboardIcon.addEventListener("click", (e) => {
            const textarea = document.createElement("textarea");
            textarea.value = code;
            textarea.style.display = "";
            document.body.appendChild(textarea);
            textarea.select();
            navigator.clipboard.writeText(textarea.value);
            document.body.removeChild(textarea);
            clipboardIcon.title = "Copied";
          });
        },
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          "font-weight": 400,
          width: "auto",
          "font-size": "14px",
          "line-height": "21px",
        });
      },
    },
  });

  domc.addType("code-snippet", {
    model: {
      defaults: {
        name: "Code Snippet",
        tagName: "div",
        code: "",
        attributes: {
          language: "javascript",
        },
        components: [
          {
            type: "code",
          },
          {
            type: "icon",
            attributes: {
              class: "fas fa-clipboard",
              iconColor: "#c0c0cd",
              backgroundColor: "transparent",
              height: "20",
              width: "20",
              type: "rectangle",
              title: "Copy to clipboard",
            },
            style: {
              "border-radius": 0,
            },
          },
        ],
        traits: [
          {
            type: "select",
            label: "Language",
            name: "language",
            options: [
              { value: "html", name: "Html" },
              { value: "css", name: "Css" },
              { value: "javascript", name: "JavaScript" },
              { value: "java", name: "Java" },
              { value: "php", name: "PHP" },
              { value: "python", name: "Python" },
              { value: "go", name: "Go" },
              { value: "rust", name: "Rust" },
              { value: "csharp", name: "C#" },
              { value: "c", name: "C" },
              { value: "cpp", name: "C++" },
              { value: "bash", name: "Bash" },
              { value: "shell", name: "Shell" },
            ],
          },
          {
            label: "Code",
            type: "code-input-trait",
            name: "code",
          },
        ],
      },
      init() {
        this.on("change:code", this.handleCodeChange);
      },

      handleCodeChange() {
        const { code } = this.props();
        this.getChildAt(0).set("code", code);
      },
      updated(property) {
        // only if traits are updated
        if (property === "traits") {
          this.getChildAt(0).set(
            "language",
            this.getTrait("language").attributes.value
          );
        }
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          height: "auto",
          width: "100%",
          padding: "12px 20px",
          "background-color": "#1a1b26",
          color: "#9aa5ce",
          "border-radius": "5px",
          border: "1px solid #495057",
          margin: "0 0 1rem 0",
          display: "flex",
          "justify-content": "space-between",
          "align-items": "flex-start",
        });
        model
          .getChildAt(0)
          .set("language", model.getTrait("language").attributes.value);
      },
    },
  });
};

export { initCodSnippetType };
