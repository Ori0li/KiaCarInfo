import { config, data, logoImgData } from "./data.js";
import { elements, pages } from "./elements.js";
import {
  makeBackground,
  makeInfoCard,
  makeCard,
  navbar,
} from "./infoPagefunc.js";

// 차량에 맞는 데이터 찾기
const findData = (x) => data.filter((v) => v.carCategory == x);

// 카드 마우스 호버링
const mouseInAndOutEvent = (x, target) => {
  x.onmouseover = () => {
    x.querySelector("img").src = target.mainPage_imgType2;
    x.querySelector(".view_btn").style.setProperty("display", "flex");
  };
  x.onmouseout = () => {
    x.querySelector("img").src = target.mainPage_imgType1;
    x.querySelector(".view_btn").style.setProperty("display", "none");
  };
};

// 언어 메뉴 호버링

const languageBtn = () => {
  const menuBar = document.querySelector(".menu_bar");
  menuBar.style.display = menuBar.style.display == "none" ? "block" : "none";
};

// 메인 카드 페이지
const changeImageWithHover = (className, cartegoryName) => {
  const allCard = document.querySelectorAll(className);
  allCard.forEach((x, i) => mouseInAndOutEvent(x, findData(cartegoryName)[i]));
};

// 초기 메인 페이지 EV 차량 선택 및 나오게
export const makeInit = (cartegoryName) => {
  const cardBox = document.querySelector(".car_card_box");
  findData(cartegoryName).forEach((v) => {
    cardBox.insertAdjacentHTML(
      "beforeend",
      makeCard(v.id, v.mainPage_imgType1, v.carName, v.mainPage_Price)
    );
  });
  changeImageWithHover(".car_card", cartegoryName);
};

// 메뉴 선택시 메뉴 아래 언더라인 생성
const changeCategoryBox = (btnName, cartegoryName) => {
  const cardBox = document.querySelector(".car_card_box");
  btnName.onclick = () => {
    cardBox.innerHTML = "";
    findData(cartegoryName).forEach((v) => {
      cardBox.insertAdjacentHTML(
        "beforeend",
        makeCard(v.id, v.mainPage_imgType1, v.carName, v.mainPage_Price)
      );
    });
    changeImageWithHover(".car_card", cartegoryName);
  };
};

// 메뉴 선택시에 차종에 맞는 카드 생성
export const changeCardBox = () =>
  elements.forEach((v) => changeCategoryBox(v.name, v.categoryName));

// 자세히 보기 페이지
export const makePage = () => {
  const { search } = location;
  const [_, value] = search.split("=");
  pages.infoPage.insertAdjacentHTML(
    "beforeend",
    data
      .filter((x) => value == x.id)
      .map((v) => {
        pages.visualInfoBox.insertAdjacentHTML(
          "beforeend",
          makeInfoCard(
            v.infoPage_title,
            v.infoPage_subtitle,
            v.infoPage_price,
            v.infoPage_priceText,
            v.infoPage_boxText,
            v.carType,
            v.rightImgNo
          )
        );
        pages.backgroundBox.insertAdjacentHTML(
          "beforeend",
          makeBackground(v.infoPage_img)
        );
      })
  );
};

// 네브바 생성
export const makeNav = (v) => {
  pages.mainList.insertAdjacentHTML(
    "beforeend",
    navbar(config.mainSrc[v], logoImgData.imgSrc[v])
  );
  document.querySelector("#kr_menu_set").addEventListener("click", languageBtn);
};
