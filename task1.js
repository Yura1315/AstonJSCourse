const deepCopyObject = (obj) => {
	const cloneObject = {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (Array.isArray(obj[key])) {
				cloneObject[key] = [];
				obj[key].forEach((el, i) => {
					cloneObject[key].push(deepCopyObject(el));
				});
			} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
				cloneObject[key] = deepCopyObject(obj[key]);
			} else {
				cloneObject[key] = obj[key];
			}
		}
	}
	return cloneObject;
};
