function customSelect1() {
  $(".custom-select__header").each(function () {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select__header-trigger1">' + $(this).attr("placeholder") + "</span>";
    template += '<div class="custom-options">';
    $(this)
      .find("option")
      .each(function () {
        template += '<span class="custom-option' + '"data-value="' + $(this).attr("value") + '">' + $(this).html() + "</span>";
      });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select__header-wrapper"></div>');
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
  $(".custom-select__header-trigger1").on("click", function () {
    $("html").one("click", function () {
      $(".custom-select__header").removeClass("opened");
    });
    $(this).parents(".custom-select__header").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
    $(this).parents(".custom-select__header-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select__header").removeClass("opened");
    $(this).parents(".custom-select__header").find(".custom-select__header-trigger1").text($(this).text());
  });
}
customSelect1();
