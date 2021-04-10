import images from "./gallery-items.js";

const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector("img.lightbox__image");
const currentImage = document.querySelector(`.js-lightbox.is-open`);

console.log(images);
const makeImgListMarkup = (image) => {
  // console.log(image)
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
};
console.log(makeImgListMarkup);
const imgList = document.querySelector(".js-gallery");
console.log(imgList);
const makeImgListRows = images.map(makeImgListMarkup).join("");
console.log(makeImgListRows);
imgList.insertAdjacentHTML("afterbegin", makeImgListRows);

/* Реализация делегирования на галерее ul.js - gallery и получение url большого изображения. */
imgList.addEventListener("click", onImgListClick);
function onImgListClick(evt) {
  /* evt.preventDefault; */
  console.log(evt.currentTarget);
  const isImgListSwach = evt.target.classList.contains("gallery__link");
  if (!isImgListSwach) {
    return;
  }
  /* /* Открытие модального окна по клику на элементе галереи.
   */
  addIsOpen();
  setOriginalImg(evt);

  /*  Подмена значения атрибута src элемента img.lightbox__image.
   */
  replaceAttributes();
}

function addIsOpen() {
  console.log(lightbox);
  lightbox.classList.add("is-open");
}
function setOriginalImg(evt) {
  console.log(evt.target.dataset.source);
}
function replaceAttributes() {
  console.log(lightboxImage);

  lightboxImage.src = `${evt.target.dataset.source}`;
  lightboxImage.alt = `${evt.target.alt}`;
}

/* /* Закрытие модального окна по
клику на кнопку button[data - action= "close-lightbox"]. */

const closeBtn = document.querySelector(`button[data-action]`);
closeBtn.addEventListener("click", onCloseBtn);

function onCloseBtn({ target }) {
  if (target.nodeName === "BUTTON" && target.dataset.action) {
    removeIsOpen();
    removeAtributes();
  }
}
function removeIsOpen() {
  currentImage.classList.remove(`.is-open`);
}

/*  Очистка значения атрибута src элемента img.lightbox__image. */
function removeAtributes() {
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

/* Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
 чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее. */
/* 
function onModalCloseBtn(e) {
  const onOverlayCloseBtn = e.target === lightboxCloseBtn;
  console.log(e.currentTarget);
  if (onOverlayCloseBtn) {
    removeLightboxClass();
    removeImageAtributes();
  }
}
// очищає атрибути src i alt
function removeImageAtributes() {
  lightboxImage.src = "";
  lightboxImage.alt = "";
}
// видаляє клас модалці
function removeLightboxClass() {
  lightbox.classList.remove("is-open");
} */
