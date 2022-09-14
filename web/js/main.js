// Toggle active en menu crud
const callToActionBtns = document.querySelectorAll(".btn_crud_menu");
callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle("active");
  });
});