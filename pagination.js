let pagination = document.querySelector('.pagination');
let container = document.querySelector('.content');

const store = {
	data: [],
	total: '',
	limit: 10,
	currentPage: 1,
};

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

const saveStore = async (limit, page) => {
	if (store.data.length) {
		store.data = [];
	}
	let dataPosts = await getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
	dataPosts.data.forEach((el) => {
		store.data.push(el);
	});
	store.total = dataPosts.total;
	return store;
};

const displayPagination = (countPosts, limit) => {
	let countPages = Math.ceil(countPosts.total / limit);
	for (let i = 1; i < countPages + 1; i++) {
		pagination.append(createLink(i));
	}
	createArrowLink();
};

const createLink = (page) => {
	let li = document.createElement('li');
	let a = document.createElement('a');
	li.classList = 'page-item';
	a.classList = 'page-link';
	a.textContent = page;
	li.append(a);
	if (store.currentPage === page) a.classList.add('active');
	li.addEventListener('click', (e) => {
		pagination.style.pointerEvents = 'none';
		if (page !== store.currentPage) {
			store.currentPage = page;
			saveStore(store.limit, page);
			setTimeout(() => {
				displayCards(store.data, store.limit);
				pagination.style.pointerEvents = 'all';
			}, 1000);
			let active = document.querySelector('.active');
			active.classList.remove('active');
			e.target.classList.add('active');
		}
	});
	return li;
};

const createArrowLink = () => {
	let liNext = document.createElement('li');
	let aNext = document.createElement('a');
	liNext.classList.add('page-item');
	liNext.classList.add('next');
	aNext.classList.add('page-link');
	aNext.textContent = 'next';
	let liPrev = document.createElement('li');
	let aPrev = document.createElement('a');
	liPrev.classList.add('page-item');
	aPrev.classList.add('page-link');
	liPrev.classList.add('prev');
	aPrev.textContent = 'prev';
	liNext.append(aNext);
	liPrev.append(aPrev);
	pagination.append(liNext);
	pagination.prepend(liPrev);
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	let activeLink = document.querySelectorAll('.page-link');

	next.addEventListener('click', () => {
		pagination.style.pointerEvents = 'none';
		if (store.currentPage <= 9) {
			activeLink[store.currentPage].classList.remove('active');
			store.currentPage += 1;
			saveStore(store.limit, store.currentPage);
			setTimeout(() => {
				displayCards(store.data, store.limit);
				pagination.style.pointerEvents = 'all';
			}, 1000);
			activeLink[store.currentPage].classList.add('active');
		}
	});

	prev.addEventListener('click', () => {
		pagination.style.pointerEvents = 'none';
		if (store.currentPage >= 2) {
			activeLink[store.currentPage].classList.remove('active');
			store.currentPage = store.currentPage - 1;
			saveStore(store.limit, store.currentPage);
			setTimeout(() => {
				displayCards(store.data, store.limit);
				pagination.style.pointerEvents = 'all';
			}, 1000);
			activeLink[store.currentPage].classList.add('active');
		}
	});
};

const displayCards = (cards) => {
	let card = document.querySelectorAll('.col');
	card.forEach((e) => {
		e.remove();
	});
	cards.forEach((el) => {
		let divWrap = document.createElement('div');
		let card = document.createElement('div');
		let cardBody = document.createElement('div');
		let imageCrard = document.createElement('svg');
		let title = document.createElement('title');
		let text = document.createElement('text');
		let rect = document.createElement('rect');
		let cardText = document.createElement('p');
		cardText.classList.add('card-text');
		cardBody.classList.add('card-body');
		imageCrard.classList.add('bd-placeholder-img');
		imageCrard.classList.add('card-img-top');
		card.classList.add('shadow-sm');
		card.classList.add('card');
		divWrap.classList.add('col');
		text.textContent = `id: ${el.id} - title: ${el.title}`;
		cardText.textContent = `${el.body}`;

		imageCrard.append(title);
		imageCrard.append(rect);
		imageCrard.append(text);
		divWrap.append(card);
		card.append(imageCrard);
		card.append(cardBody);
		cardBody.append(cardText);
		container.append(divWrap);
	});
};

const displayContent = () => {
	setTimeout(() => {
		displayPagination(store, store.limit);
		displayCards(store.data);
	}, 1000);
};

saveStore(store.limit, store.currentPage);
displayContent();
