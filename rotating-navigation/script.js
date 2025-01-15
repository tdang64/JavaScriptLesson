const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
console.log(open);

// open.addEventListener("click", () => container.classList.add("is-open"));
open.addEventListener("click", () => {
  //   console.log(open);
  container.classList.add("is-open");
});

// close.addEventListener("click", () => container.classList.remove("is-open"));

close.addEventListener("click", () => {
  //   console.log("hi");
  container.classList.remove("is-open");
});
