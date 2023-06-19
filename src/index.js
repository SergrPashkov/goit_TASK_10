import {fetchBreeds} from './js/cat-api';
import {fetchCatByBreed} from './js/cat-api';
import {markup} from './js/markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const optionElem = document.querySelector('.breed-select');
const catInfoElem = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');

fetchBreeds().then(data => {
	data.map(({name, reference_image_id}) => {
		loaderEl.classList.add('hidden');
		optionElem.append(new Option(name, reference_image_id))
		}
	)
})
.catch(err => console.log(err))

optionElem.addEventListener('change', (even) => {
		loaderEl.classList.remove('hidden');
		catInfoElem.classList.add('hidden');
		let idCat = even.target.value;
	fetchCatByBreed(idCat).then(data => {
		loaderEl.classList.add('hidden');
		catInfoElem.classList.remove('hidden');
		catInfoElem.innerHTML = markup(data);
	})
		.catch(() => {
			Notify.warning('Oops! Something went wrong! Try reloading the page!');
		});
});







