export class Beer {
	container;
	addButton;
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
	}

	init() {
		this.container = document.createElement('div');
		this.addButton = document.createElement('button');
		this.img = document.createElement('img');
		this.title = document.createElement('h2');
		this.description = document.createElement('p');
	}

	createElement() {
		this.title.innerText = this.data.name;
		this.description.innerText = this.data.description;
		this.addButton.innerText = 'add';

		this.container.append(this.img);
		this.container.append(this.title);
		this.container.append(this.description);
		this.container.append(this.addButton);

		this.parent.append(this.container);
	}

	setAttributes() {
		this.img.setAttribute('src', this.data.image_url);
	}

	setClasses() {
		this.container.classList.add('beer__card');
	}
}
