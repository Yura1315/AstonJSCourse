const getNumberRadix = (number, radix) => {
	if (!Number.isInteger(+number) || !Number.isInteger(+radix) || radix > 16 || radix < 2) {
		throw Error('Функция getNumberRadix была вызвана с некорректными параметрами');
	}
	return (+number).toString(+radix);
};
