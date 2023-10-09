const cardSale = document.querySelectorAll(".item");

cardSale.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.className === "item__arrow") {
      e.target.parentNode.querySelector(".item__select-wrapper").classList.toggle("openCard");
    }
  });
});
