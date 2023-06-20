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
const themeBtn = document.querySelector("#themeBtn");
const theme = document.querySelector("#theme");
const selectTheme = document.querySelectorAll(".t");
const pomodoro = document.querySelector("#pomodoro");
const pomodoroBtn = document.querySelector("#pomodoroBtn");
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

theme.style.visibility = "hidden";
themeBtn.addEventListener("click", function () {
  console.log("basildi");
  if (theme.style.visibility == "hidden") {
    theme.style.visibility = "visible";
    pomodoroBtn.style.display = "none";
  } else {
    theme.style.visibility = "hidden";
    pomodoroBtn.style.display = "flex";
  }
  theme.classList.toggle("active");
  themeBtn.classList.toggle("active");
  for (let i = 0; i < selectTheme.length; i++) {
    selectTheme[i].classList.toggle("active");
  }
});
pomodoro.style.visibility = "hidden";
pomodoroBtn.addEventListener("click", function () {
  pomodoro.classList.toggle("active");
  pomodoroBtn.classList.toggle("active");
  // themeBtn.style.display = "none";
  if (themeBtn.style.display == "none") {
    themeBtn.style.display = "flex";
    pomodoro.style.visibility = "hidden";
  } else {
    themeBtn.style.display = "none";
    pomodoro.style.visibility = "visible";
  }
});

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

// //MAIN SECTION GÖRÜNÜRLÜGÜ
input2.style.visibility = "hidden";
//SIDEBAR-LİSTEYE EKLEME
const addSidebarList = function () {
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
};
//butona basıldığında ekleme
addListBtn.addEventListener("click", function () {
  addSidebarList();
});

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addSidebarList();
  }
});

let editCheck = true;

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
    //o listeye ait listelerin görünmesi
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
  //listeyi düzenleme
  console.log(e.target.className);
  if (e.target.className === "bx bxs-edit-alt") {
    const editBtnS = e.target;
    const input = document.createElement("input");
    input.type = "text";
    input.className = "liste2";
    e.target.parentElement.appendChild(input);
    const parent = e.target.parentElement;
    e.target.style.display = "none";
    let span;
    for (let i = 0; i < parent.childNodes.length; i++) {
      if (parent.childNodes[i].tagName === "SPAN") {
        parent.childNodes[i].style.display = "none";
        span = parent.childNodes[i];
        editCheck = false;
      }
    }
    parent.addEventListener("keypress", function (e) {
      console.log("event.key:" + e.key.type + "  event.code:" + e.code);
      if (e.key == "Enter") {
        console.log("selam");
        span.style.display = "block";
        editBtnS.style.display = "block";
        span.innerHTML = input.value;
        input.remove();
        title.innerHTML = input.value;
      }
    });
  }
});

/////////////////////////MAIN SECTION//////////////////////////////////////
const addMainList = function () {
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
};
//butona basıldığında
mainAddListBtn.addEventListener("click", function () {
  addMainList();
});
//enter basıldığında
input2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addMainList();
  }
});

//main section görev silme
mainUlDOM.addEventListener("click", function (e) {
  if (e.target.className === "bx bxs-x-circle") {
    e.target.parentElement.remove();
  }
});
