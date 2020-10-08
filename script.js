function expandHamburger() {
  var x = document.getElementById("menu");
  if (x.style.top === "-150px") {
    x.style.top = "0px";
  } else {
    x.style.top = "-150px";
  }
}