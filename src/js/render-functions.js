import { handleError } from './handle-error.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

function renderImages({ total, hits }) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';


  if (total === 0) {
    handleError('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  hits.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }, index) => {
    const stats = [
      { title: 'Likes', value: likes },
      { title: 'Views', value: views },
      { title: 'Comments', value: comments },
      { title: 'Downloads', value: downloads },
    ];

    const infoHTML = stats
      .map(({ title, value }) => `
        <div class="info-block">
          <span class="info-title">${title}</span>
          <span class="info-value">${value}</span>
        </div>
      `)
      .join('');

    const item = document.createElement('div');
    item.classList.add('gallery-item');

    item.innerHTML = `
      <a href="${largeImageURL}" class="gallery-link">
        <div class="image-wrapper">
          <img
            src="${webformatURL.replace('_640', '_360')}"
            alt="${tags}"
            class="gallery-image hidden"
          />
        </div>
      </a>
      <div class="gallery-info">
        ${infoHTML}
      </div>
    `;

    const img = item.querySelector('.gallery-image');

    img.onload = () => {
      img.classList.remove('hidden');
    };

    gallery.appendChild(item);

    setTimeout(() => {
      item.classList.add('fade-in');
    }, index * 100);
  });

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.8,
    });
  } else {
    lightbox.refresh();
  }
}

export { renderImages };
