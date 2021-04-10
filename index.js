import images from "./gallery-items.js";
const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");

const lightboxCloseBtn = document.querySelector(
  `button[data-action="close-lightbox"]`
);
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
  if (e.target.localName !== "img") {
    return;
  }
  addOpenLightboxClass();
  addAttributes(e);
}
function addOpenLightboxClass() {
  lightbox.classList.add("is-open");
}
function addAttributes(evt) {
  lightBoxImage.src = evt.target.dataset.source;
  lightBoxImage.alt = evt.target.alt;
}
buttonEl.addEventListener("click", onCloseBtn);
function onCloseBtn(e) {
  const onOverlayCloseBtn = e.target === lightboxCloseBtn;
  /* console.log(e.currentTarget); */
  if (onOverlayCloseBtn) {
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
