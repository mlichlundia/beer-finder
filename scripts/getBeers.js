import { CONSTANTS } from './constants.js';
import { createBeerContainer } from './createBeerContainer.js';

export function fetchBeers(beer) {
	const url = `${CONSTANTS.BASE_API}?beer_name=${beer}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			createBeerContainer(data);
		});
}
