$(".slider_1").slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true
});

$(".slider_2").slick({
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: false, // default
  live: true // default
}).init();
$(document).ready(function() {
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#Video_youtube").attr("src");

  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#exampleModalCenter").on("hide.bs.modal", function() {
    $("#Video_youtube").attr("src", "");
  });

  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#exampleModalCenter").on("show.bs.modal", function() {
    $("#Video_youtube").attr("src", url);
  });
});
var height = $(window).height();
height;
function scrollBanner() {
  var scrollPos;
  console.log(scrollPos);
  var headerText = document.querySelector(".left_block_wrap");
  var bb = document.querySelector(".first_view__right");

  scrollPos = window.scrollY;

  if (scrollPos <= height) {
    headerText.style.transform = "translateY(" + scrollPos / 2 + "px" + ")";
    bb.style.transform = "translateY(" + scrollPos / 2 + "px" + ")";
  }
}
window.addEventListener("scroll", scrollBanner);

$(".menu_btn").click(function() {
  $(".menu").addClass("active_mobile_menu");
  $("body").css("overflow-y", "hidden");
});
$(".close_menu").click(function() {
  $("body").css("overflow-y", "unset");
  $(".menu").removeClass("active_mobile_menu");
});
$(".phone").mask("+380(00)000-00-00");
