const favButton = document.querySelector('.favs button');

favButton.addEventListener('click', openModal);

function openModal() {
	const modal = document.querySelector('.fav-modal');
	modal.classList.add('open');
}

function fillFavs() {
	const favCount = document.querySelector('#fav-count');
	const storedFavs = JSON.parse(localStorage.getItem('favs'));

	enableFavButton();

	favCount.innerText = storedFavs?.length || 0;
}

export function enableFavButton() {
	const favButton = document.querySelector('.favs button');
	const storedFavs = JSON.parse(localStorage.getItem('favs'));

	storedFavs?.length
		? favButton.removeAttribute('disabled')
		: favButton.setAttribute('disabled', true);
}

fillFavs();
