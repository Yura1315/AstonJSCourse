Array.prototype.filterArray = function (cb, thisArg) {
	let context = this;
	let arrLength = this.length;
	if (thisArg) {
		context = thisArg;
	}
	let result = [];
	for (let i = 0; i < arrLength; i++) {
		let current = this[i];
		if (cb.call(context, current, i, this)) {
			result.push(current);
		}
	}
	return result;
};
