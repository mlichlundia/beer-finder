import { moveToFirst } from './createBeerContainer.js';

const upButton = document.querySelector('#up');

upButton.addEventListener('click', moveToFirst);
document.addEventListener('scroll', toggleUpButton);

function toggleUpButton() {
	upButton.style.display = isVisible() ? 'none' : 'block';
}

function isVisible() {
	const firstCard = document.querySelector('.beer__card');
	const { top, bottom } = firstCard.getBoundingClientRect();
	const vHeight =
		window.innerHeight || document.documentfirstCardment.clientHeight;

	return (top > 0 || bottom > 0) && top < vHeight;
}
