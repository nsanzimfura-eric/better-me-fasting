export function getUpdatedHtml(data) {
  const parser = new DOMParser();

  const updatedhtmlData = parser.parseFromString(data, "text/html");
  const imageElements = updatedhtmlData.body.getElementsByClassName(
    "common-builder-image"
  );

  [...imageElements].forEach(function (item) {
    if (item.hasAttribute("src")) {
      const id = item.id;
      const src = item.getAttribute("src");
      const title = item.getAttribute("title");
      const classes = item.getAttribute("class");
      const styles = item.getAttribute("style");
      const innerHTML = item.innerHTML;
      const newEl = document.createElement("img");
      newEl.setAttribute("id", id);
      newEl.setAttribute("src", src);
      newEl.setAttribute("title", title);
      newEl.setAttribute("class", classes);
      styles ? newEl.setAttribute("style", styles) : null;
      newEl.innerHTML = innerHTML;
      const oldEl = updatedhtmlData.getElementById(id);
      oldEl.replaceWith(newEl);
    }
  });
//   console.log("data: ", updatedhtmlData.body.outerHTML);
  return updatedhtmlData.body.outerHTML;
}
