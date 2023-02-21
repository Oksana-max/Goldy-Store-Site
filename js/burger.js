function burgerMenu() {
  let iconMenu = document.querySelector(".icon-menu");

  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      const menuBody = document.querySelector(".menu__body");
      let body = document.querySelector("body");
      const top = document.body.style.top;
      menuBody.classList.toggle("_active");
      document.documentElement.classList.toggle("menu-open");

      if (menuBody.classList.contains("_active")) {
        body.style.position = "fixed";
        body.style.top = `-${window.scrollY}px`;
      } else {
        body.style.position = "";
        body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    });
  }
}
burgerMenu();
