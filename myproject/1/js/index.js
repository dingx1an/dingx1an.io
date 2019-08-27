window.onload = function () {
  var lis = document.querySelectorAll("li");
  for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseenter", function () {
      this.style.transform = "translateX(8px)";
    })
    lis[i].addEventListener("mouseout", function () {
      this.style.transform = "translateX(0px)";
    })
  }

  var goback = document.querySelector(".goback");
  goback.addEventListener("click", function () {
    history.back();
  })
}
