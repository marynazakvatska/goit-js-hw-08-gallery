/* 
   
    Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
    Открытие модального окна по клику на элементе галереи.
    Подмена значения атрибута src элемента img.lightbox__image.
    Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
    Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

 */
import images from "./gallery-items.js";
const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const buttonEl = document.querySelector(`button[data-action="close-lightbox"]`);
const lightBoxImage = document.querySelector("img.lightbox__image");

/* Создание и рендер разметки по массиву данных и предоставленному шаблону. */
const makeImgListMarkup = (image) => {
  return ` <li class="gallery__item">
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
    </li> `;
};
console.log(makeImgListMarkup);
const makeImgRawMarkup = images.map(makeImgListMarkup).join("");
console.log(makeImgRawMarkup);
gallery.insertAdjacentHTML("afterbegin", makeImgRawMarkup);
gallery.addEventListener("click", onImageGalleryList);
lightbox.addEventListener("click", onCloseBtn);
function onImageGalleryList(e) {
  e.preventDefault();
  const isImgListSwach = e.target.classList.contains("gallery__link");
  if (!isImgListSwach) {
    return;
  }
  addOpenLightboxClass();
  addAttributes(evt);
}

function addOpenLightboxClass() {
  lightbox.classList.add(".is-open");
}

function addAttributes(evt) {
  lightBoxImage.src = `${evt.target.dataset.source}`;
  lightBoxImage.alt = `${evt.target.alt}`;
}

buttonEl.addEventListener("click", onCloseBtn);

function onCloseBtn(e) {
  const onOverlayCloseBtn = e.target.nodeName === "BUTTON";
  /* console.log(e.currentTarget); */
  if (onOverlayCloseBtn) {
    /* 
  if (target.nodeName === "BUTTON" && target.dataset.action) { */
    removeLightboxIsOpen();
    removeAtributes();
  }
}
function removeLightboxIsOpen() {
  lightbox.classList.remove("is-open");
}

/*  Очистка значения атрибута src элемента img.lightbox__image. */
function removeAtributes() {
  lightBoxImage.src = "";
  lightBoxImage.alt = "";
}
