// $(document).ready(function () {
//   var nbP = $(".tooltip-container p").length;
//   var w = parseInt($(".tooltip-container p").css("width"));
//   var max = (nbP - 1) * w;
//   $("ul li[data-num='1']").addClass("active");
//   $(".step span").html("Step 1");

//   $("body").on("click", ".btn", function () {
//     var margL = parseInt($(".slider-turn").css("margin-left"));
//     var modulo = margL % w;
//     if (-margL < max && modulo == 0) {
//       margL -= w;

//       $(".slider-turn").animate(
//         {
//           "margin-left": margL,
//         },
//         300
//       );
//       $("ul li.active").addClass("true").removeClass("active");
//       var x = -margL / w + 1;
//       $('ul li[data-num="' + x + '"]').addClass("active");
//       $(".step span").html("Step " + x);
//     } else {
//     }
//   });

$("body").on("click", ".close", function () {
  $(".tooltip-container").animate(
    {
      opacity: 0,
    },
    600
  );
  $(".tooltip-container").animate(
    {
      display: none,
    },
    {
      duration: 2300,
      queue: false,
    }
  );
  $(".open").animate({
    top: "50%",
  });
});

$("body").on("click", ".open", function () {
  $(".open").animate({
    top: -1000,
  });
  $(".tooltip-container").animate(
    {
      opacity: 1,
    },
    400
  );
  $(".tooltip-container").animate(
    {
      display: block,
    },
    {
      duration: 800,
      queue: false,
    }
  );
});
