function customSelect2() {
  $(".custom-select__item").each(function () {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select__item-trigger2">' + $(this).attr("placeholder") + "</span>";
    template += '<div class="custom-options">';
    $(this)
      .find("option")
      .each(function () {
        template += '<span class="custom-option' + '"data-value="' + $(this).attr("value") + '">' + $(this).html() + "</span>";
      });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select__item-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(
    function () {
      $(this).parents(".custom-options").addClass("option-hover");
    },
    function () {
      $(this).parents(".custom-options").removeClass("option-hover");
    },
  );
  $(".custom-select__item-trigger2").on("click", function () {
    $("html").one("click", function () {
      $(".custom-select__item").removeClass("opened");
    });
    $(this).parents(".custom-select__item").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
    $(this).parents(".custom-select__item-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select__item").removeClass("opened");
    $(this).parents(".custom-select__item").find(".custom-select__item-trigger2").text($(this).text());
  });
}
customSelect2();
