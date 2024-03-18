import OpenIconsModal from "./IconModal/modal";
import { components } from "./components";
import {
  initGoogleMapType,
  initIconButtonType,
  initIconType,
  initInputTypes,
  initRatingType,
  initShareButtonsType,
  initSliderType,
  initAccordionType,
  initBreadcrumbType,
  initCodSnippetType,
  initTabType,
  initFormType,
  initTestimonialType,
} from "./customTypes";
import {
  isAtom,
  isComponent,
  isLayout,
  isSection,
} from "./customTypes/helpers";

export const GroupBasicBlocks = (editor) => {
  const blocks = editor.BlockManager.getAll();
  blocks.map((block) => {
    console.log(block.id);
    if (!isAtom(block) && !isComponent(block) && !isSection(block)) {
      block.attributes.category = {
        label: "Basic",
        order: 0,
        open: false,
      };
    }
  });

  blocks.map((block) => {
    if (isLayout(block)) {
      block.attributes.category = {
        label: "Layouts",
        order: 0,
        open: false,
      };
    }
  });
};

const initCustomTypes = (editor) => {
  const domc = editor.DomComponents;
  const cm = editor.Commands;

  cm.add("icon", {
    run(editor) {
      OpenIconsModal(editor);
    },
  });

  const customTypes = [
    initInputTypes,
    initSliderType,
    initIconType,
    initShareButtonsType,
    initGoogleMapType,
    initIconButtonType,
    initRatingType,
    initAccordionType,
    initBreadcrumbType,
    initCodSnippetType,
    initTabType,
    initFormType,
    initTestimonialType,
  ];

  for (const initType of customTypes) {
    initType(domc, editor);
  }
};

export const AddCustomComponents = (editor) => {
  initCustomTypes(editor);

  let bm = editor.BlockManager;

  for (const component of components) {
    bm.add(component.id, component.data);
  }

  editor.Blocks.get("map").set({
    media: `<svg xmlns="http://www.w3.org/2000/svg" style="padding:0 1rem" viewBox="0 0 41 32" xml:space="preserve"><g fill="currentColor"><path d="M9.239 31.927c.009.006.021.003.03.009A.51.51 0 0 0 9.5 32a.5.5 0 0 0 .132-.018L20.5 29.016l10.868 2.966A.5.5 0 0 0 31.5 32a.492.492 0 0 0 .23-.065c.01-.005.021-.003.03-.009l9-5.5a.501.501 0 0 0 .22-.563l-4.984-17.5a.499.499 0 0 0-.726-.3l-4.962 2.784a.501.501 0 0 0 .491.872l4.409-2.475 4.707 16.526-8.015 4.899-1.904-15.231a.5.5 0 0 0-.993.124l1.907 15.259L21 28.116v-2.73a.5.5 0 0 0-1 0v2.73l-9.911 2.705 1.907-15.259a.5.5 0 1 0-.993-.124L9.1 30.669l-8.015-4.898L5.792 9.246l4.409 2.475a.501.501 0 0 0 .491-.872L5.729 8.064a.496.496 0 0 0-.725.3L.02 25.864a.498.498 0 0 0 .22.563l8.999 5.5z"/><path d="M20.161 23.368a.5.5 0 0 0 .675.003C21.169 23.068 29 15.882 29 8.5 29 3.733 25.267 0 20.5 0S12 3.733 12 8.5c0 7.254 7.828 14.56 8.161 14.868zM20.5 1C24.775 1 28 4.224 28 8.5c0 6.097-5.993 12.337-7.497 13.807C19.002 20.82 13 14.498 13 8.5 13 4.224 16.225 1 20.5 1z"/><path d="M25 8.5C25 6.019 22.981 4 20.5 4S16 6.019 16 8.5s2.019 4.5 4.5 4.5S25 10.981 25 8.5zM20.5 12c-1.93 0-3.5-1.57-3.5-3.5S18.57 5 20.5 5 24 6.57 24 8.5 22.43 12 20.5 12z"/></g></svg>`,
    category: "Components",
  });

  editor.on("component:clone", (model) => {
    if (model.attributes.type === "swiper-slide") {
      let wrapper = editor.getSelected().parent();
      let cmp = wrapper.parent().parent();
      let attributes = cmp.getAttributes();

      console.log(attributes);
      cmp.setAttributes({
        ...attributes,
        sliderId: `slider-${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
      let slidesLength = wrapper.components().models.length + 1;
      cmp
        .getTrait("slidesPerView")
        .set("max", slidesLength > 10 ? 10 : slidesLength);
    }

    if (model.attributes.type === "tab-item") {
      let selected = editor.getSelected();
      let content = selected.parent().parent().getLastChild();
      let [newPane] = content.append({
        type: "tab-pane",
      });
      let [btn] = model.findType("tab-button");

      btn.setAttributes({
        ...btn.getAttributes(),
        "data-bs-target": `#${newPane.ccid}`,
        class: "nav-link",
      });
    }
  });
};
