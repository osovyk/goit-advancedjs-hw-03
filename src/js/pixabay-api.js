import { handleError } from './handle-error.js';

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = "49367639-b33ebacd3c1171708280ede99"
const BASE_URL = 'https://pixabay.com/api/';


const PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

function fetchImages(query) {
  const loader = document.getElementById('loader');

  loader.style.display = 'flex';

  const urlParams = new URLSearchParams({
    ...PARAMS,
    q: query,
  });

  const url = `${BASE_URL}?${urlParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        handleError('Failed to fetch images');
        return;
      }
      return response.json();
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}

export { fetchImages };