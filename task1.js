Array.prototype.filterArray = function (cb, thisArg) {
	let context = this;
	let arrLength = this.length;
	if (thisArg && Array.isArray(thisArg)) {
		context = thisArg;
	}
	let result = [];
	for (let i = 0; i < arrLength; i++) {
		let current = this[i];
		if (cb.call(context, current, i, this)) {
			res.push(current);
		}
	}
	return result;
};
