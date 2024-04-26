const popOpenBtn = document.getElementById("popupOpen");
const popOpenBtn2 = document.getElementById("popupOpen2");
const popCloseBtn = document.getElementById("closeBtn");
const form = document.getElementById("form");

const popupSection = document.getElementById("popupSection");

popCloseBtn.addEventListener("click", function () {
  popupSection.classList.toggle("hidden");
});

popOpenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popupSection.classList.toggle("hidden");
});

popOpenBtn2.addEventListener("click", function (e) {
  e.preventDefault();

  const targetSection = document.querySelector("body");

  targetSection.scrollIntoView({
    behavior: "smooth",
  });
  popupSection.classList.toggle("hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = new FormData(this);

  // Send a POST request to submit.php
  fetch("../backend/submit.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("successMessage").style.display = "block";
      console.log(data); // Output the response from submit.php

      setTimeout(() => {
        popupSection.classList.toggle("hidden");
        document.getElementById("successMessage").style.display = "none";

        form.reset();
      }, 2000);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //
});

// Scroll to section when clicking on a navigation link
document.querySelectorAll(".header-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Remove the '#' from the href
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
