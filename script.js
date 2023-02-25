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
const mainFirstList = document.getElementById("main-10");
const mainSecondList = document.getElementById("main-11");

//icon value
const editBtn = document.querySelector(".bxs-edit-alt");
const addListBtn = document.querySelector(".bx-upload");
const mainAddListBtn = document.querySelector(".bx-upload#main");

//side-bar List
const lists = [firstList, secondList, thirdList];
const listName = ["Today", "Important", "Notes"];

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
mainFirstList.classList.add("hidden");
mainSecondList.classList.add("hidden");
//input2.classList.add("hidden");

let i = 3;
//SIDEBAR-LİSTEYE EKLEME
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

  //EKLENEN LİSTE SİLME
  for (let i = 3; i < lists.length; i++) {
    const deleteListBtn = document
      .getElementById(i)
      .getElementsByClassName("bxs-x-circle")[0];
    deleteListBtn.addEventListener("click", function () {
      lists[i].style.display = "none";
      listName[i] = "";
      console.log(listName);
    });
  }

  //EKLENEN LİSTE BAŞLIĞI
  for (let i = 3; i < lists.length; i++) {
    lists[i].addEventListener("click", function () {
      title.innerHTML = listName[i];
    });
  }
});

// DEFAULT LİSTE SİLME
for (let i = 0; i < lists.length; i++) {
  const deleteListBtn = document
    .getElementById(i)
    .getElementsByClassName("bxs-x-circle")[0];
  deleteListBtn.addEventListener("click", function () {
    lists[i].style.display = "none";
    listName[i] = "";
    console.log(lists);
  });
}

const twoD = new Array(lists.length);
for (i = 0; i < twoD.length; i++) {
  twoD[i] = new Array(0);
}

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function () {
    //BAŞLIK DEĞİŞTİRME
    title.innerHTML = listName[i];
  });
}

const mainList = new Array(lists.length);
for (i = 0; i < twoD.length; i++) {
  mainList[i] = new Array(0);
}
const mainListId = new Array(lists.length);
for (i = 0; i < lists.length; i++) {
  mainListId[i] = new Array(0);
}

console.log(mainList[0].length);

/////////////////////////MAIN SECTION//////////////////////////////////////
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

  for (i = 0; i < lists.length; i++) {
    if (title.innerHTML == listName[i]) {
      const idName = "main-" + i;
      mainLiDOM.setAttribute("id", idName);
      console.log(listName[i]);
      mainList[i].push(mainLiDOM);
      mainListId[i].push(idName);
      console.log(mainList);
    }
  }
});
/////////////DEFAULT MADDELER İÇİN GÖREVLERİ SPESİFİK GÖSTERME//////////////////////////

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function () {
    for (let j = 0; j < lists.length; j++) {
      if (i != j && mainList[j].length != 0) {
        for (let k = 0; k < mainList[j].length; k++) {
          mainList[j][k].style.display = "none";
        }
      }
      if (i == j) {
        for (let k = 0; k < mainList[j].length; k++) {
          mainList[j][k].style.display = "flex";
        }
      }
    }
  });
}
