

let prenoms = ["Christopher","Christian","Raphael","Ryan", "Amaury"];

let result = prenoms.sort((a, b) => {
  if (a[0] === "R") return -1;
  if (b[0] === "R") return 1;
  return 0;
});

console.log(result);


const list = document.getElementById("list");
const input = document.getElementById("input");
const addBeginningBtn = document.getElementById("add-beginning");
const addEndBtn = document.getElementById("add-end");

prenoms.forEach((prenom) => {
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = prenom;
  list.appendChild(item);
});

addBeginningBtn.addEventListener("click", () => {
  prenoms.unshift(input.value);
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = input.value;
  list.insertBefore(item, list.firstChild);
  input.value = "";
});

addEndBtn.addEventListener("click", () => {
  prenoms.push(input.value);
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = input.value;
  list.appendChild(item);
  input.value = "";
});
