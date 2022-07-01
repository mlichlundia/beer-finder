import { Beer } from './beer.js';
import { BeerModal } from './beerModal.js';

export class MainBeer extends Beer {
	setHandlers() {
		super.setHandlers();
		this.title.addEventListener('click', this.openModal.bind(this));
	}

	openModal() {
		const modal = new BeerModal(this.data, document.querySelector('main'));

		modal.openModal();
	}
}
