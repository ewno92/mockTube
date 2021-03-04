console.log("test");
const btn = document.querySelector(".titleAndButton  .btn");
const title = document.querySelector(".info .title ");
const likeBtn = document.querySelector(".info li button");
const likeBlue = document.querySelector(".info li button ");

btn.addEventListener("click", () => {
  btn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
likeBtn.addEventListener("click", () => {
  console.log("clicked");
  likeBlue.classList.toggle("clicked");
});
