import { changeCardBox, makeInit, makeNav } from "./makePagefunc.js";
import { elements } from "./elements.js";
import { makeList } from "./makeMenu.js";

makeNav(0, 0);
makeList();
makeInit(elements[0].categoryName);
changeCardBox();

// window.addEventListener("resize", () => {
//   console.log(window.screen);
// });
