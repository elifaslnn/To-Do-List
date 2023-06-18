const menuBtn = document.getElementById("btn");
const sidebar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const title = document.getElementById("title");
const table = document.querySelector(".table");
let ulDOM = document.querySelector(".sidebar-list");
const addList = document.querySelector(".liste");
const input = document.getElementById("input");
const input2 = document.getElementById("input-2");
const inputMain = document.getElementById("list-duty");
const firstList = document.getElementById("0");
const secondList = document.getElementById("1");
const thirdList = document.getElementById("2");
let mainUlDOM = document.querySelector(".duty");
const mainFirstList = document.getElementById("main-1000");
const mainSecondList = document.getElementById("main-1001");

//icon value
const editBtn = document.querySelector(".bxs-edit-alt");
const addListBtn = document.querySelector(".bx-upload");
const mainAddListBtn = document.querySelector(".bx-upload#main");

//side-bar List
sidebar.classList.toggle("active");
menuBtn.classList.toggle("active");
ulDOM.classList.toggle("active");
logo.classList.toggle("active");
header.classList.toggle("active");
table.classList.toggle("active");
input.classList.toggle("active");

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

// //MAIN SECTION GÖRÜNÜRLÜGÜ
input2.style.visibility = "hidden";

let i = 3;
//SIDEBAR-LİSTEYE EKLEME
addListBtn.addEventListener("click", function () {
  let count = 0;
  for (let i = 0; i < ulDOM.childNodes.length; i++) {
    if (ulDOM.childNodes[i].tagName === "LI") {
      console.log(ulDOM.childNodes[i]);
      count++;
    }
  }
  let liDOM = document.createElement("li");
  let elEdit = document.createElement("i");
  elEdit.classList.add("bx", "bxs-edit-alt");
  let elCircle = document.createElement("i");
  elCircle.classList.add("bx", "bxs-circle");
  let elDelete = document.createElement("i");
  elDelete.classList.add("bx", "bxs-x-circle");
  let elText = document.createElement("span");
  elText.classList.add("links-name");
  elText.innerHTML = addList.value;
  console.log(typeof addList.value);

  liDOM.append(elCircle);
  liDOM.append(elDelete);
  liDOM.append(elEdit);
  liDOM.append(elText);
  ulDOM.appendChild(liDOM);
  liDOM.setAttribute("id", count);
  console.log(liDOM.id);
  addList.value = "";
  console.log(addList.value);
});

ulDOM.addEventListener("click", function (e) {
  console.log(e.target.parentElement);
  //liste silme
  if (e.target.className == "bx bxs-x-circle") {
    console.log(e.target.className);
    const parentId = e.target.parentElement.id;
    e.target.parentElement.remove();
    //o listeye bağlı main listeleri silme
    for (let i = 0; i < mainUlDOM.childNodes.length; i++) {
      if (mainUlDOM.childNodes[i].tagName === "LI") {
        if ("m-" + parentId === mainUlDOM.childNodes[i].id) {
          mainUlDOM.childNodes[i].remove();
          i = 0;
        }
      }
    }
  }
  //başlık değiştirme
  //span ise id parent üzerinden, li ise id kendisi üzerinden
  else if (e.target.tagName === "SPAN" || e.target.tagName === "LI") {
    title.innerHTML = e.target.innerText;
    if (e.target.tagName === "SPAN")
      mainUlDOM.setAttribute("id", e.target.parentElement.id);
    if (e.target.tagName === "LI") mainUlDOM.setAttribute("id", e.target.id);
    console.log(mainUlDOM.id);

    input2.style.visibility = "visible";
    for (let i = 0; i < mainUlDOM.childNodes.length; i++) {
      if (
        mainUlDOM.childNodes[i].tagName === "LI" &&
        mainUlDOM.childNodes[i].id === "m-" + mainUlDOM.id
      ) {
        mainUlDOM.childNodes[i].style.display = "block";
      } else if (
        mainUlDOM.childNodes[i].tagName === "LI" &&
        mainUlDOM.childNodes[i].id != "m-" + mainUlDOM.id
      ) {
        mainUlDOM.childNodes[i].style.display = "none";
      }
    }
  }
});

/////////////////////////MAIN SECTION//////////////////////////////////////
mainAddListBtn.addEventListener("click", function () {
  console.log(mainUlDOM.id);
  const mainLiDOM = document.createElement("li");
  mainLiDOM.classList.add("box");
  const editBtn = document.createElement("i");
  editBtn.classList.add("bx", "bxs-edit-alt");
  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("bx", "bxs-x-circle");
  deleteBtn.setAttribute("id", "main");
  const elText = document.createElement("div");
  elText.classList.add("mainText");
  elText.innerHTML = inputMain.value;
  mainLiDOM.setAttribute("id", "m-" + mainUlDOM.id);
  mainLiDOM.append(editBtn);
  mainLiDOM.append(deleteBtn);
  mainLiDOM.append(elText);
  mainUlDOM.append(mainLiDOM);
  ///////////////////////////////
  inputMain.value = "";
});

//main section görev silme
mainUlDOM.addEventListener("click", function (e) {
  if (e.target.className === "bx bxs-x-circle") {
    e.target.parentElement.remove();
  }
});
