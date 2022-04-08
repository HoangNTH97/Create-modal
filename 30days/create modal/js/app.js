const modalElement = document.querySelector(".modal");
const btnElementOpen = document.querySelector("button.modal__btn");
const btnElementClose = document.querySelector(".modal__footer button");
const iconElementClose = document.querySelector(".modal__header i");

function toggleModal() {
  modalElement.classList.toggle("hide");
}
btnElementOpen.addEventListener("click", toggleModal);
btnElementClose.addEventListener("click", toggleModal);
iconElementClose.addEventListener("click", toggleModal);
modalElement.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target === e.currentTarget) {
    toggleModal();
  }
});
// Tình trạng này xảy ra khi ta add event cho thằng cha và cả thằng con của nó bên khi set event cho thằng cha thì ta thêm điều kiện như vậy
