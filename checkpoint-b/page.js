
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("entry");
    li.textContent = `${item.name} (${item.category})`;
    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#filter-button");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

