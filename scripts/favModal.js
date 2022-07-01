import { Beer } from './beer.js';

export class FavModal {
	modal;
	modalContent;
	modalTitle;
	beerList;
	close;

	constructor(parent) {
		this.parent = parent;
		this.initComponent();
	}

	initComponent() {
		this.init();
		this.createDOM();
		this.setClasses();
		this.setHandlers();
		this.fillBeerList();
	}

	init() {
		this.modal = document.createElement('div');
		this.modalContent = document.createElement('div');
		this.modalTitle = document.createElement('h2');
		this.beerList = document.createElement('div');
		this.close = document.createElement('button');
	}

	createDOM() {
		this.modalTitle.innerText = 'Favourite Beer';
		this.close.innerText = '×';

		this.modal.append(this.modalContent);
		this.modalContent.append(this.modalTitle);
		this.modalContent.append(this.beerList);
		this.modalContent.append(this.close);

		this.parent.append(this.modal);
	}

	setClasses() {
		this.modal.classList.add('modal');
		this.modal.classList.add('fav-modal');
		this.modalContent.classList.add('modal__content');
		this.close.classList.add('close');
	}

	setHandlers() {
		this.modal.addEventListener('click', this.toggle.bind(this));
		this.modalContent.addEventListener('click', (e) => e.stopPropagation());
		this.close.addEventListener('click', (e) => {
			e.preventDefault();
			this.toggle();
		});
	}

	toggle() {
		this.modal.classList.toggle('open');
	}

	fillBeerList() {
		JSON.parse(localStorage.getItem('favs'))?.forEach((item) => {
			new Beer(item, this.beerList);
		});
	}

	static updateListAdd(data) {
		const beers = document.querySelectorAll('.fav-modal .beer__card');

		beers.forEach((item) => {
			item.removeAttribute('data-hide');
			item.removeAttribute('style');
		});

		new Beer(data, document.querySelector('.fav-modal .modal__content>div'));
	}

	static updateListRemove(beer) {
		const beers = document.querySelectorAll('.fav-modal .beer__card');
		const mainBeers = document.querySelectorAll('.beer__list .beer__card');

		beers.forEach((item) => {
			const isDeleted =
				item.querySelector('h2').innerText.toLowerCase() ===
				beer.data.name.toLowerCase();

			item.removeAttribute('data-hide');
			item.removeAttribute('style');

			if (isDeleted) {
				item.remove();
			}
		});

		mainBeers.forEach((item) => {
			const isDeleted =
				item.querySelector('h2').innerText.toLowerCase() ===
				beer.data.name.toLowerCase();

			if (isDeleted) {
				item.querySelector('.remove').classList.add('hide');
				item.querySelector('button').classList.remove('hide');
			}
		});
		console.log(beer, beer);
	}
}
