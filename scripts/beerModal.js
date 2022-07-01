import { Beer } from './beer.js';
import { CONSTANTS } from './constants.js';

export class BeerModal {
	modal;
	modalContent;
	beerContainer;
	close;

	constructor(data, parent) {
		this.data = data;
		this.parent = parent;
		this.initComponent();
	}

	initComponent() {
		this.init();
		this.createDOM();
		this.setClasses();
		this.setHandlers();
		new Beer(this.data, this.beerContainer);
	}

	init() {
		this.modal = document.createElement('div');
		this.modalContent = document.createElement('div');
		this.beerContainer = document.createElement('div');
		this.close = document.createElement('button');
	}

	createDOM() {
		this.close.innerText = '×';

		this.modal.append(this.modalContent);
		this.modalContent.append(this.beerContainer);
		this.modalContent.append(this.close);
		this.parent.append(this.modal);
	}

	setClasses() {
		this.modal.classList.add('modal');
		this.modal.classList.add('beer-modal');
		this.modalContent.classList.add('modal__content');
		this.close.classList.add('close');
	}

	setHandlers() {
		this.modal.addEventListener('click', (e) => this.closeModal(e));
		window.addEventListener('keyup', (e) => this.closeModal(e));
		this.modalContent.addEventListener('click', (e) => e.stopPropagation());
		this.close.addEventListener('click', (e) => {
			e.preventDefault();
			this.closeModal(e);
		});
	}

	openModal() {
		this.modal.classList.add('open');
	}

	closeModal(e) {
		const isEsc = e?.keyCode === CONSTANTS.ESC;
		const isClick = e?.type === 'click';

		if (!isEsc && !isClick) {
			return;
		}

		this.modal.remove();
	}
}
