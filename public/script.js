const imgs = document.querySelector(".js-fun");
console.log(imgs);
var imgArr = [
  "i1.png",
  "i2.png",
  "i3.png",
  "i4.png",
  "i5.png",
  "i6.png",
  "i7.png",
  "i8.png",
  "i9.png",
  "i10.png",
  "i11.png",
  "i2.png",
  "i3.png",
  "i4.png",
  "i5.png",
];

window.addEventListener("load", () => {
  setInterval(function () {
    var num = Math.floor(Math.random() * imgArr.length);
    imgs.src = "img/" + imgArr[num];
  }, 1000);
});
