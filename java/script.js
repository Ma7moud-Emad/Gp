// start first page
let startBotton = document.querySelector(".start");
startBotton.onclick = function () {
  document.querySelector(".start a").click();
};

let aboutBotton = document.querySelector(".about");
aboutBotton.onclick = function () {
  document.querySelector(".about a").click();
};

let endBotton = document.querySelector(".end");
endBotton.onclick = function () {
  document.querySelector(".end a").click();
};
// end first page
// start model page
let sequenceInput = document.getElementById("sequence");
sequenceInput.oninput = function () {
  if (sequenceInput.value.length > 9) {
    document.querySelector(".model p").style.opacity = "0";
  } else if (sequenceInput.value.length <= 9) {
    document.querySelector(".model p").style.opacity = "1";
  }
};
// end model page
