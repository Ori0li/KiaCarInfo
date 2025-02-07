const carMenuList = ["#EV", "#RV", "#SD", "#CARGO"];

export const makeList = () => {
  carMenuList.forEach((x) => {
    const target = document.querySelector(x);
    target.addEventListener("click", () => {
      carMenuList.forEach((v) => {
        const li = document.querySelector(v);
        li.style.color = "#5f6563";
        li.style.textDecoration = "none";
      });
      target.style.color = "black";
      target.style.textDecoration = "underline";
      target.style.textUnderlineOffset = "9px";
      target.style.textDecorationThickness = "3px";
    });
  });
};
