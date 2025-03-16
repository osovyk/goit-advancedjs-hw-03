import { handleError } from './handle-error.js';
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
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

  return axios
    .get(BASE_URL, {
      params: { ...PARAMS, q: query },
    })
    .then(response => response.data)
    .catch(() => handleError('Failed to fetch images'))
    .finally(() => {
      loader.style.display = 'none';
    });
}

export { fetchImages };