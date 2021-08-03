const modalObject = {
  ringTitle: "Мы перезвоним в течении 30 минут",
  consultTitle: "Наш медицинский координатор свяжется с вами в течении 30 минут"
};
const ringBtn = document.querySelector(".nav-btn");
const consultBtn = document.querySelector(".block-btn");
const closeBtn = document.querySelector(".modal-close-btn");
const submitBtn = document.querySelector(".modal-submit-btn");
const modal = document.querySelector(".modal");
const confirmPopup = document.querySelector(".confirm-popup");
const overlay = document.querySelector(".overlay");
const numberInput = document.querySelector(".number");
const nameInput = document.querySelector(".name");
const modalSubtitle = document.querySelector(".modal-subtitle");

function openPopup() {
  if (
    overlay.classList.contains("object--unactive") &&
    modal.classList.contains("object--unactive")
  ) {
    overlay.classList.toggle("object--unactive");
    modal.classList.toggle("object--unactive");
  }
}

function clearValues() {
    nameInput.value = numberInput.value = "";
}

function closePopup() {
  if (
    !overlay.classList.contains("object--unactive") &&
    !modal.classList.contains("object--unactive")
  ) {
    overlay.classList.toggle("object--unactive");
    modal.classList.toggle("object--unactive");
  }
}

function submit() {
  if (!numberInput.value || !nameInput.value) {
    alert("Заполните поля данными");
    return;
  }
  if (
    !overlay.classList.contains("object--unactive") &&
    !modal.classList.contains("object--unactive")
  ) {
    modal.classList.toggle("object--unactive");
    showConfirmPopup();
    clearValues();
  }
}

function showConfirmPopup() {
  if (confirmPopup.classList.contains("object--unactive")) {
    confirmPopup.classList.toggle("object--unactive");
    setTimeout(() => {
      if (
        !confirmPopup.classList.contains("object--unactive") &&
        !overlay.classList.contains("object--unactive")
      ) {
        confirmPopup.classList.toggle("object--unactive");
        overlay.classList.toggle("object--unactive");
      }
    }, 2000);
  }
}

ringBtn.addEventListener("click", () => {
  modalSubtitle.innerHTML = modalObject.ringTitle;
  openPopup();
});
consultBtn.addEventListener("click", () => {
  modalSubtitle.innerHTML = modalObject.consultTitle;
  openPopup();
});
closeBtn.addEventListener("click", closePopup);
submitBtn.addEventListener("click", submit);
overlay.addEventListener('click', () => {
    if(!modal.classList.contains('object--unactive') && !overlay.classList.contains('object--unactive')) {
        modal.classList.toggle('object--unactive');
        overlay.classList.toggle('object--unactive');
    }
})
