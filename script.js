let video = document.getElementById("video");
let btn = document.getElementById("button");

btn.addEventListener("change", function () {
  if (this.checked) {
    video.play();
  } else {
    video.pause();
  }
});
