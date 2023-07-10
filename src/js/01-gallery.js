// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const fullGallery = document.querySelector('.gallery');

const createFullGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}">
    </a>
    </li>`
);

fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));
fullGallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const newTarget = event.target;

    if (!newTarget.classList.contains('gallery__image')) {
        return;
    }
}