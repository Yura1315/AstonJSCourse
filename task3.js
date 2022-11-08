function getFibonacci() {
	let currentNum = 1;
	let nextNum = 0;
	let start = 0;
	return {
		next: () => {
			if (start === 0) {
				start++;
				return { value: nextNum, done: false };
			}
			[currentNum, nextNum] = [nextNum, nextNum + currentNum];
			return { value: nextNum, done: false };
		},
	};
}
