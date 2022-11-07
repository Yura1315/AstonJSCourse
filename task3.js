const l = console.log;

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

const fib = getFibonacci();
l(fib.next().value); // 0
l(fib.next().value); // 1
l(fib.next().value); // 1
l(fib.next().value); // 2
l(fib.next().value); // 3
l(fib.next().value); // 5
