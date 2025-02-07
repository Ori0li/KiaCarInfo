const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const makeUpBox = (
  infoPage_title,
  infoPage_subtitle
) => `<div class="upbox_info">
          <span class="upbox_title">${infoPage_title}</span>
          <span class="upbox_content">${infoPage_subtitle}</span>
        </div>`;

const makeImage = (rightImgNo, infoPage_boxText) =>
  `          
    <li class="rightbox_content">
      <img src="${rightImgNo}"onerror="this.style.display='none'" alt="">
      <p>${infoPage_boxText}</p>
    </li>`;

const makeInfo = (infoPage_price, infoPage_priceText) =>
  `
   <li class="downbox_pricebox">
     <div class="pricebox_set">
      <h5>${numberWithCommas(infoPage_price)}</h5>
        <span>원부터</span>
      </div>
      <button>견적내기</button>
    </li>
    <li class="downbox_info">${infoPage_priceText}</li>
`;

export const makeCard = (id, mainPage_imgType1, carName, mainPage_Price) =>
  `
  <a href="../KiaCarInfo/html/carInfo.html?name=${id}">
    <div class="car_card">
      <img id="cardImg" class="firstImg" src="${mainPage_imgType1}" alt="" />
      <h4 class="car_name">${carName}</h4>
      <p class="car_price">${numberWithCommas(mainPage_Price)} 만원 ~</p>
      <article class="view_btn">
        <button class="btn_text">자세히 보기
          <div class="arrow_icon"></div>
        </button>
      <button class="btn_text">견적 내기
        <div class="arrow_icon"></div>
          </button>
      </article>
    </div>
  </a>
  `;

export const makeInfoCard = (
  infoPage_title,
  infoPage_subtitle,
  infoPage_price,
  infoPage_priceText,
  infoPage_boxText,
  carType,
  rightImgNo
) => {
  return `
      ${makeUpBox(infoPage_title, infoPage_subtitle)}
      <div class ="divbox">
        <ul class="downbox">
        ${makeInfo(infoPage_price, infoPage_priceText)}
        </ul>
        <ul class="rightBox">
        ${rightImgNo
          .map((v, i) => makeImage(rightImgNo[i], infoPage_boxText[i]))
          .join(" ")}
        <img src = "https://www.kia.com/content/dam/kwp/descriptive/icon_Chat-Active.svg">
        </ul>
      </div>
      <div class ="final">${carType} 유의사항 
      <img class ="final_img" src="https://www.kia.com/content/dam/kwp/kr/ko/common/icon/icon_info.svg" alt="">
      </div>
      `;
};

export const makeBackground = (infoPage_img) =>
  `
    <img class="imgSet" src=${infoPage_img} alt="" />
    `;

export const navbar = (mainSrc, imgSrc) =>
  `    <ul class="first_list">
        <li>차량</li>
        <li>구매</li>
        <li>체험</li>
        <li>이벤트</li>
        <li>고객 지원</li>
        <li>Discover Kia</li>
      </ul>
      <a href="${mainSrc}">
        <img
          class="logoSet"
          src="${imgSrc}"
          alt=""
        />
      </a>
      <ul class="second_list">
        <li class="hight-light">PBV</li>
          <li id="KR_menu" >
            <div id="kr_menu_set" class="languageMenu">
              <span>KR</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <ul class="menu_bar">
              <li>KR</li>
              <li>EN</li>
              <li>CN</li>
            </ul>
          </li>
        </li>
        <li>통합검색</li>
        <li>로그인</li>
        </ul>
        <ul class="hidden_icon">
          <i class="fa-solid fa-earth-americas"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-bars"></i>
        </ul>
    `;
