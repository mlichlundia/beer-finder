import { Beer } from './beer.js';
import { hideAll } from './loadMore.js';
import { MainBeer } from './mainBeer.js';
import { savePrevSearch } from './search.js';

const container = document.querySelector('.beer__list');
const loadMore = document.querySelector('#more');

function isEmpty(data) {
	return !data.length ? true : false;
}

export function createBeerContainer(data) {
	const modals = document.querySelectorAll('.beer-modal');

	if (isEmpty(data)) {
		container.innerHTML =
			'<p class="error-message" >There were no properties found for the given location.</p>';
		return;
	} else {
		container.innerHTML = '';
	}

	modals.forEach((item) => item.remove());

	savePrevSearch();

	data.forEach((item) => {
		new MainBeer(item, container);
	});

	moveToFirst();
	loadMore.style.display = 'block';
	hideAll(Array.from(document.querySelectorAll('.beer__card')).splice(5));
}

export function moveToFirst() {
	const firstElement = document.querySelector('.beer__card');

	firstElement.scrollIntoView();
}
