let url = 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1';

const getPosts = async (url) => {
	try {
		const response = await fetch(url);
		const headers = new Map(response.headers);
		const data = await response.json();
		return {
			data,
			total: headers.get('x-total-count') || null,
		};
	} catch (error) {
		return null;
	}
};

const main = async () => {
	let currentPage = 1;
	let limit = 10;
	const dataPosts = await getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`);

	const displayCards = async () => {
		dataPosts.data.forEach((el) => {
			let div = document.querySelector('.content');
			console.log(div);
		});
	};

	const displayPagination = (dataPosts, limit) => {
		let countPages = Math.ceil(dataPosts.total / limit);
		let ul = document.querySelector('.pagination');
		for (let i = 1; i < countPages + 1; i++) {
			ul.append(createLink(i));
		}
	};

	const createLink = (page) => {
		let li = document.createElement('li');
		li.classList = 'page-item';
		let a = document.createElement('a');
		a.classList = 'page-link';
		a.textContent = page;
		li.append(a);
		if (currentPage === page) a.classList.add('active');
		li.addEventListener('click', (e) => {
			if (page !== currentPage) {
				currentPage = page;
				displayCards(page, 10);
				let active = document.querySelector('.active');
				active.classList.remove('active');
				e.target.classList.add('active');
			}
		});
		return li;
	};
	displayCards(dataPosts);
	displayPagination(dataPosts, limit);
};

main();
