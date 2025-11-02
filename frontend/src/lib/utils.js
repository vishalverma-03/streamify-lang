export const capitialize = (str) => {
	// Safely handle undefined / null / non-string values
	if (typeof str !== 'string' || str.length === 0) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
};