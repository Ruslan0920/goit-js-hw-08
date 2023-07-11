// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
// console.log(SimpleLightbox);

import "simplelightbox/dist/simple-lightbox.min.css";

const fullGallery = document.querySelector('.gallery');

const createFullGallery = galleryItems.map(({ preview, original, description }) =>
    `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image"
        src="${preview}"
        alt="${description}">
    </a>
    </li>`
);

fullGallery.insertAdjacentHTML('beforeend', createFullGallery.join(" "));

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function(){});

// { captionPosition: "bottom", captionsData:"alt", captionDelay: 250}

