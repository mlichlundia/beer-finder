import { CONSTANTS } from './constants.js';
import { convert } from './convertInputValue.js';
import { fetchBeers } from './getBeers.js';
import { isValid } from './isValid.js';
import { resetLoadCounter } from './loadMore.js';

const searchInput = document.querySelector('#search');
const form = document.querySelector('.search__container form');
const prevSearchContainer = document.querySelector('.prev-serches__container');

searchInput.addEventListener('keyup', (e) => {
	isValid(searchInput);
	getInputValue(e);
});

form.addEventListener('submit', (e) => onSubmit(e));

function getInputValue(e) {
	if (e.keyCode === CONSTANTS.ENTER && searchInput.checkValidity()) {
		onSubmit();
	}
}

function onSubmit(e) {
	e.preventDefault();
	searchInput.blur();
	fetchBeers(convert(searchInput.value));
	resetLoadCounter();
}

export function savePrevSearch() {
	const prevSearch = JSON.parse(localStorage.getItem('prev-search'));

	prevSearch
		? localStorage.setItem(
				'prev-search',
				JSON.stringify(Array.from(new Set([...prevSearch, searchInput.value])))
		  )
		: JSON.stringify(
				localStorage.setItem('prev-search', JSON.stringify([searchInput.value]))
		  );

	showPrevSearch();
}

function showPrevSearch() {
	const prevSearch = JSON.parse(localStorage.getItem('prev-search'));

	prevSearchContainer.innerHTML = '';
	prevSearch.forEach(
		(item) =>
			(prevSearchContainer.innerHTML += `<button class='prev-search'>${item}</button>`)
	);
}
showPrevSearch();
