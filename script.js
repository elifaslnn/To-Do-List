const menuBtn = document.getElementById("btn");
const sidebar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const title = document.getElementById("title");
const table = document.querySelector(".table");
let ulDOM = document.querySelector(".sidebar-list");
const addList = document.querySelector(".liste");
const input = document.getElementById("input");
const inputMain = document.getElementById("list-duty");
const firstList = document.getElementById("0");
const secondList = document.getElementById("1");
const thirdList = document.getElementById("2");
let mainUlDOM = document.querySelector(".duty");
const mainFirstList = document.getElementById("main-0");
//mainFirstList.classList.add("box");
const mainSecondList = document.getElementById("main-1");
//mainSecondList.classList.add("box");

//icon value
const editBtn = document.querySelector(".bxs-edit-alt");
const addListBtn = document.querySelector(".bx-upload");
const mainAddListBtn = document.querySelector(".bx-upload#main");

//side-bar List
const lists = [firstList, secondList, thirdList];
const listName = ["Today", "Important", "Notes"];

// //main section list
const mainList = [mainFirstList, mainSecondList];
const mainListName = ["Important", "Notes"];

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

//LİSTEYE EKLEME
addListBtn.addEventListener("click", function () {
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
  ulDOM.append(liDOM);
  liDOM.setAttribute("id", lists.length);
  lists.push(liDOM);
  console.log(lists);

  listName.push(addList.value);

  //LİSTE SİLME
  for (let i = 3; i < lists.length; i++) {
    const deleteListBtn = document
      .getElementById(i)
      .getElementsByClassName("bxs-x-circle")[0];
    deleteListBtn.addEventListener("click", function () {
      lists[i].style.display = "none";
      //lists.slice(i, 1);
      console.log(lists);
    });
  }

  //LİSTE BAŞLIĞI
  for (let i = 3; i < lists.length; i++) {
    lists[i].addEventListener("click", function () {
      // console.log("heelo");
      // console.log(typeof listName[i]);
      title.innerHTML = listName[i];
    });
  }
});

//LİSTE SİLME
for (let i = 0; i < lists.length; i++) {
  const deleteListBtn = document
    .getElementById(i)
    .getElementsByClassName("bxs-x-circle")[0];
  deleteListBtn.addEventListener("click", function () {
    lists[i].style.display = "none";
    // lists.slice(i, 1);
    console.log(lists);
  });
}

/////////////////////////////////////////////MAIN SECTİON////////////////////////////////////////////////////////////////////////////

//LİSTE BAŞLIĞI
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function () {
    // console.log("heelo");
    // console.log(typeof listName[i]);
    title.innerHTML = listName[i];
  });
}
console.log(typeof inputMain.value);
//MAIN KISMINA GÖREV EKLEME
mainAddListBtn.addEventListener("click", function () {
  const mainLiDOM = document.createElement("li");
  mainLiDOM.classList.add("box");
  const editBtn = document.createElement("i");
  editBtn.classList.add("bx", "bxs-edit-alt");
  const plusBtn = document.createElement("i");
  plusBtn.classList.add("bx", "bxs-x-circle");
  plusBtn.setAttribute("id", "main");
  const elText = document.createElement("div");
  elText.classList.add("mainText");
  elText.innerHTML = inputMain.value;
  mainLiDOM.append(editBtn);
  mainLiDOM.append(plusBtn);
  mainLiDOM.append(elText);
  mainUlDOM.append(mainLiDOM);
  const idName = "main-" + mainList.length;
  mainLiDOM.setAttribute("id", idName);
  mainList.push(mainLiDOM);

  //listeden silme
  for (let i = 2; i < mainList.length; i++) {
    const idName2 = "main-" + i;
    const deleteListBtn = document
      .getElementById(idName2)
      .getElementsByClassName("bxs-x-circle")[0];
    deleteListBtn.addEventListener("click", function () {
      mainList[i].style.display = "none";
      mainList.slice(i, 1);
      console.log(mainList);
    });
  }
});

//MAIN SECTİON İLK İKİ LİSTEYİ SİLME

for (let i = 0; i < 2; i++) {
  const idName2 = "main-" + i;
  const deleteListBtn = document
    .getElementById(idName2)
    .getElementsByClassName("bxs-x-circle")[0];
  deleteListBtn.addEventListener("click", function () {
    mainList[i].style.display = "none";
    console.log(mainList);
  });
}
