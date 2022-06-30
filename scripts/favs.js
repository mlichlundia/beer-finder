function fillFavs() {
	const favCount = document.querySelector('#fav-count');
	const storedFavs = JSON.parse(localStorage.getItem('favs'));

	enableFavButton();

	favCount.innerText = storedFavs?.length || 0;
}

export function enableFavButton() {
	const favButton = document.querySelector('.favs button');
	const storedFavs = JSON.parse(localStorage.getItem('favs'));

	storedFavs
		? favButton.removeAttribute('disabled')
		: favButton.setAttribute('disabled', true);
}

fillFavs();
