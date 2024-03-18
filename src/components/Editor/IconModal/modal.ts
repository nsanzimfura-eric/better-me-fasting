import icons from "./icons";

const OpenIconsModal = (editor) => {
  const modal = editor.Modal;

  const modalContainer = document.createElement("div");
  const modalContent = `
  <style>
    .iconModalContainer {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    #searchIcon input {
      width: 100%;
      padding: 10px;
      border: 1px solid #646474;
      outline: none;
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #c0c0ce;
      background: #1a1a27;
    }

    .iconListContainer {
      height: 550px;
      overflow-y:auto;
    }

    .iconList {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      font-size: 20px;
    }

    .iconList i {
      text-align: center;
      background-color: #1a1a26;
      padding: 10px;
      border: 1px solid #272626;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(15, 13, 13, 0.1);
      cursor: pointer;
      width: 55px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <div class="iconModalContainer">
    <div id="searchIcon">
      <input type="text" placeholder="Search..." id="search" />
    </div>
    <div class="iconListContainer">
    <div class="iconList" id="iconList"></div>
    </div>
  </div>`;

  let container;
  function createChildElement(iconClass) {
    const icon = document.createElement("i");
    icon.classList.add("fas", iconClass);
    icon.addEventListener("click", updateIcon);
    icon.addEventListener("dblclick", (e) => updateIcon(e, true));

    return icon;
  }

  const updateIcon = (e, close = false) => {
    let iconName = [...e.target.classList][1];
    editor.getSelected().getTrait("icon").set("value", iconName);
    if (close) {
      modal.close();
    }
  };

  const loadinitial = () => {
    container = document.getElementById("iconList");
    const dFrag = document.createDocumentFragment();
    icons.slice(0, 100).forEach((icon) => {
      const child = createChildElement(icon);
      dFrag.appendChild(child);
    });

    // @ts-ignore-next-line
    container.appendChild(dFrag);
  };

  function updateIconList(e) {
    console.log("updating");
    // @ts-ignore-next-line
    container.innerHTML = "";

    const searchText = e.target.value;

    if (searchText === "") {
      loadinitial();
      return;
    }

    const frag = document.createDocumentFragment();

    icons.forEach((iconClass) => {
      const iconName = iconClass
        .replace("fa-", "")
        .replace(/-/g, " ")
        .toUpperCase();
      if (iconName.includes(searchText.toUpperCase())) {
        console.log(iconClass);
        const child = createChildElement(iconClass);
        frag.appendChild(child);
      }
    });
    // @ts-ignore-next-line
    container.appendChild(frag);
  }

  modal.setTitle("Select Icon");
  modalContainer.innerHTML = modalContent;
  modal.setContent(modalContainer);
  modal.open();

  loadinitial();

  // @ts-ignore-next-line
  modalContainer
    .querySelector("#search")
    .addEventListener("keyup", updateIconList);
};

export default OpenIconsModal;
