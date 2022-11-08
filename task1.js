const deepCopyObject = (obj) => {
	let newObj = {};
	for (key in obj) {
		if (obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
			deepCopyObject(obj[key]);
		} else if (Array.isArray(obj[key])) {
			let arr = obj[key].map((el, i) => {
				el = deepCopyObject(el[i]);
			});
			newObj[key] = [...arr];
		}
		newObj[key] = obj[key];
	}
	return newObj;
};
