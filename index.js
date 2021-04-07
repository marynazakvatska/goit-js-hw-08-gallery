import images from "./gallery-items.js";
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

imgList.addEventListener("click", onImgListClick);
function onImgListClick(evt) {
  console.log(evt.currentTarget);
  const isImgListSwach = evt.target.classList.contains("gallery__image");
  if (!isImgListSwach) {
    return;
  }

  removeIsOpen();
  addIsOpen();
  setOriginalImg();

  const lightboxImage = document.querySelector("img.lightbox__image");
  console.log(lightboxImage);

  lightboxImage.src = `${evt.target.dataset.source}`;
  lightboxImage.alt = `${evt.target.alt}`;
}

function removeIsOpen() {
  const currentImage = document.querySelector(".js-lightbox.is-open");
  if (currentImage) {
    currentImage.classList.remove("is-open");
  }
}

function addIsOpen() {
  const lightbox = document.querySelector(".js-lightbox");
  console.log(lightbox);
  lightbox.classList.add("is-open");
}
function setOriginalImg(evt) {
  console.log(evt.target.dataset.source);
}

//Закрытие модального окна по
//клику на кнопку button[data - action= "close-lightbox"].
