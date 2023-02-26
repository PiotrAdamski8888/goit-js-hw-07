import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    (img) => 
    `<a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>`
  )
  .join("");
  
list.insertAdjacentHTML("afterbegin", markup);
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });