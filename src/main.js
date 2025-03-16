import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const refs = {
  searchForm: document.getElementById('searchForm'),
  searchInput: document.getElementById('searchInput'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = refs.searchInput.value.trim();

  if (!query) {
    return;
  }

  fetchImages(query)
    .then(renderImages)
    .catch(error => console.error(error))
    .finally(() => {
      refs.searchInput.value = '';
      refs.searchInput.blur();
    });
});
