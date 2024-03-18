import { sectors } from "./customStyleOptions";

export default function customSectorPlugin(editor) {
  editor.on("load", () => {
    const styleManager = editor.StyleManager;

    for (const sector of sectors) {
      styleManager.addSector(sector.name?.toLocaleLowerCase(), sector);
    }
  });
}
