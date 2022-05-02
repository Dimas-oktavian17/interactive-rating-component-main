// let allbtn = document.querySelectorAll(".btn-circle");
// allbtn.forEach((star, i) => {
//   star.onclick = function () {
//     console.log(star);
//     let current_star_level = i + 1;

//     allbtn.forEach((star, j) => {
//       if (current_star_level >= j + 1) {
//         star.innerHTML = "&#7c8798";
//       } else {
//         // star.innerHTML =
//       }
//     });
//   };
// });

// function tombol() {
//   let a = document.querySelectorAll("btn-circle");
//   let b = document.createAttribute("class");
//   b.value = "ch";
//   a.attributes.setNamedItem(b);
// }

// const ratingStars = [...document.getElementsByClassName("btn-circle")];

// function executeRating(stars) {
//   const starClassActive = "btn hover:bg-orange-500";
//   const starClassInactive = "btn far hover:bg-orange-500";
//   const starsLength = stars.length;
//   let i;
//   stars.map((star) => {
//     star.onclick = () => {
//       i = stars.indexOf(star);

//       if (star.className === starClassInactive) {
//         for (i; i >= 0; --i) stars[i].className = starClassActive;
//       } else {
//         for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//       }
//     };
//   });
// }
// executeRating(ratingStars);

const ratings = document.querySelectorAll(".btn-circle");

ratingSelected = false;
ratings.forEach((element) => {
  element.addEventListener("click", () => {
    for (let rate of ratings) {
      if (rate.classList.contains("ch")) {
        rate.classList.remove("ch");
      }
    }
    console.log(element);
    element.classList.add("ch");
    ratingSelected = true;
  });
});

document.getElementById("klik").addEventListener("click", function () {
  if (!ratingSelected) {
    alert("Please select a rating");
  } else {
    document.querySelector(".one").classList.add("hide-Ratings");
    document.querySelector(".two").classList.remove("hide-card");
  }
});
