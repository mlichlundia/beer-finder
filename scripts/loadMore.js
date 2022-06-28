let loadCounter = 0;
let ableClickCount = 0;
const modal = document.querySelector('.modal');
const loadMore = document.querySelector('#more');

loadMore.addEventListener('click', showMore);

export function hideAll(list) {
	list.forEach((item) => {
		item.dataset.hide = true;
		item.style.display = 'none';
	});
}

function showMore() {
	const cardList = Array.from(document.querySelectorAll('[data-hide]')).splice(
		0,
		5
	);

	loadCounter++;
	ableClickCount = Math.ceil((cardList.length + 1) / 5);

	if (loadCounter > ableClickCount) {
		showWarn();
		return;
	}

	cardList.forEach((item) => {
		item.style.display = 'block';
		item.removeAttribute('data-hide');
	});
}

function showWarn() {
	modal.classList.add('open');
	setTimeout(() => modal.classList.remove('open'), 3000);
}

export function resetLoadCounter() {
	loadCounter = 0;
}
