import { enableFavButton } from './favs.js';

export class Beer {
	container;
	addButton;
	removeButton;
	img;
	title;
	description;

	constructor(data, parent) {
		this.data = data;
		this.parent = parent;
		this.initComponent();
	}

	initComponent() {
		this.init();
		this.createElement();
		this.setAttributes();
		this.setClasses();
		this.setHandlers();
		this.checkIfFav();
	}

	init() {
		this.container = document.createElement('div');
		this.addButton = document.createElement('button');
		this.removeButton = document.createElement('button');
		this.img = document.createElement('img');
		this.title = document.createElement('h2');
		this.description = document.createElement('p');
	}

	createElement() {
		this.title.innerText = this.data.name;
		this.description.innerText = this.data.description;
		this.addButton.innerText = 'add';
		this.removeButton.innerText = 'remove';

		this.container.append(this.img);
		this.container.append(this.title);
		this.container.append(this.description);
		this.container.append(this.addButton);
		this.container.append(this.removeButton);

		this.parent.append(this.container);
	}

	setAttributes() {
		this.img.setAttribute('src', this.data.image_url);
	}

	setClasses() {
		this.container.classList.add('beer__card');
		this.removeButton.classList.add('remove');
		this.removeButton.classList.add('hide');
	}

	setHandlers() {
		this.addButton.addEventListener('click', this.addToFav.bind(this));
	}

	addToFav() {
		const favCount = document.querySelector('#fav-count');
		const storedFavs = JSON.parse(localStorage.getItem('favs'));
		const newFavs = storedFavs?.length
			? storedFavs.concat(+this.data.id)
			: [+this.data.id];

		this.toggleButtons();

		favCount.innerText = +favCount.innerText + 1;
		localStorage.setItem('favs', JSON.stringify(newFavs));

		enableFavButton();
	}

	toggleButtons() {
		this.removeButton.classList.toggle('hide');
		this.addButton.classList.toggle('hide');
	}

	checkIfFav() {
		const storedFavs = JSON.parse(localStorage.getItem('favs'));
		const hasStoredFavs = storedFavs?.includes(this.data.id);

		if (hasStoredFavs) {
			this.toggleButtons();
		}
	}
}
