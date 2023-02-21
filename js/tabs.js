// let tabs = document.querySelectorAll(".tabs");
// for (let index = 0; index < tabs.length; index++) {
//   let tab = tabs[index];
//   let tabs_items = tab.querySelectorAll(".tabs__item");
//   let tabs_blocks = tab.querySelectorAll(".mainSlider");

//   for (let index = 0; index < tabs_items.length; index++) {
//     let tabs_item = tabs_items[index];
//     tabs_item.addEventListener("click", function (e) {
//       for (let index = 0; index < tabs_items.length; index++) {
//         let tabs_item = tabs_items[index];
//         tabs_item.classList.remove("_active");
//         tabs_blocks[index].classList.remove("_active");
//       }
//       tabs_item.classList.add("_active");
//       tabs_blocks[index].classList.add("_active");
//       e.preventDefault();
//     });
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tabs__item").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.getAttribute("href").replace("#", "");
      document.querySelectorAll(".tabs__item").forEach((item) => {
        item.classList.remove("_active");
      });
      document.querySelectorAll(".mainSlider").forEach((slider) => {
        slider.classList.remove("_active");
      });

      el.classList.add("_active");
      document.getElementById(id).classList.add("_active");
    });
  });
});
document.querySelector(".tabs__item").click;
