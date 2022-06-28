export function convert(value) {
	const convertedValue = value.toString().split(' ').join('_');

	return convertedValue;
}
