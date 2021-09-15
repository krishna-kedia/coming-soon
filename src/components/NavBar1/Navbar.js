$(".hambergur").on("click", () => {
    $(".fullscreen").toggleClass("active").removeClass("reverse_anim");
  });
  
  $(".close").on("click", () => {
    $(".fullscreen").toggleClass("reverse_anim");
  });