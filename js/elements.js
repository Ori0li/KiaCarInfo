const ev = document.querySelector("#EV");
const rv = document.querySelector("#RV");
const sd = document.querySelector("#SD");
const cargo = document.querySelector("#CARGO");

export const elements = [
  { name: ev, categoryName: "EV" },
  { name: rv, categoryName: "RV" },
  { name: sd, categoryName: "SD" },
  { name: cargo, categoryName: "CARGO" },
];

export const pages = {
  infoPage: document.querySelector("#infoPage"),
  backgroundBox: document.querySelector("#backgroundImg"),
  visualInfoBox: document.querySelector("#visualInfoBox"),
  mainList: document.querySelector(".main_list"),
};

export const languageBtn = {
  kr: document.querySelector("#kr_menu_set"),
  kr_bar: document.querySelector(".menu_bar"),
  menuImg: document.querySelector("#menuImg"),
  barList: document.querySelector("#barList"),
  barList2: document.querySelector("#barList2"),
  barList3: document.querySelector("#barList3"),
};
