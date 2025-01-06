// const cards = document.getElementsByClassName("card");
const cards = document.querySelectorAll(".card");

// console.log(cards);

cards.forEach((card) => {
  card.addEventListener("click", function () {
    // console.log(card);
    removeActiveClasses();
    card.classList.add("active");
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
