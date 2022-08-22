const menuBtn = document.getElementById("btn");
const sidebar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const table = document.querySelector(".table");
let ulDOM = document.querySelector(".sidebar-list");

const addList = document.querySelector(".liste");
const input = document.getElementById("input");
const addListBtn = document.querySelector(".bx-upload");

//icon value
const editBtn = document.querySelector(".bxs-edit-alt");

//MENU BUTTON FUNCTİON
menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  menuBtn.classList.toggle("active");
  ulDOM.classList.toggle("active");
  logo.classList.toggle("active");
  header.classList.toggle("active");
  table.classList.toggle("active");
  input.classList.toggle("active");
});
//LİSTE EKLEME BÖLÜMÜNÜN GÖRÜNÜRLÜĞÜ
addList.classList.add("hidden");

input.addEventListener("click", function () {
  addList.classList.remove("hidden");
});
//YENİ LİSTE EKLEME
addListBtn.addEventListener("click", function () {
  let liDOM = document.createElement("a");
  // liDOM.innerHTML = addList.value;
  let elEditIcon = document.createElement("i");
  elEditIcon.classList.add("bx", "bxs-edit-alt");
  let elCircleIcon = document.createElement("i");
  elCircleIcon.classList.add("bx", "bxs-circle");
  let space = document.createElement("span");
  space.classList.add("links-name");
  let elDeleteIcon = document.createElement("i");
  elDeleteIcon.classList.add("bx", "bxs-x-circle");

  space.innerHTML = addList.value;
  liDOM.append(elEditIcon);
  liDOM.append(elCircleIcon);
  liDOM.append(space);
  liDOM.append(elDeleteIcon);
  ulDOM.append(liDOM);
});
