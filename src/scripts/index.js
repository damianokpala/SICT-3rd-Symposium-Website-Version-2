const popOpenBtn = document.getElementById("popupOpen");
const popOpenBtn2 = document.getElementById("popupOpen2");
const popCloseBtn = document.getElementById("closeBtn");

const popupSection = document.getElementById("popupSection");

popCloseBtn.addEventListener("click", function () {
  popupSection.classList.toggle("hidden");
});

popOpenBtn.addEventListener("click", function () {
  popupSection.classList.toggle("hidden");
});

popOpenBtn2.addEventListener("click", function () {
  popupSection.classList.toggle("hidden");
});
