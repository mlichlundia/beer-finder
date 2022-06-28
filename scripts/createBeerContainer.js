import { Beer } from './beer.js';
import { savePrevSearch } from './search.js';

const container = document.querySelector('.beer__list');

function isEmpty(data) {
	return !data.length ? true : false;
}

export function createBeerContainer(data) {
	if (isEmpty(data)) {
		container.innerHTML =
			'<p class="error-message" >There were no properties found for the given location.</p>';
		return;
	} else {
		container.innerHTML = '';
	}

	savePrevSearch();

	data.forEach((item) => {
		new Beer(item, container);
	});

	moveToFirst();
}

function moveToFirst() {
	const firstElement = document.querySelector('.beer__card');

	firstElement.scrollIntoView();
}
