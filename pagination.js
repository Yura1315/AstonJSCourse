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
	let ul = document.querySelector('.pagination');
	for (let i = 1; i < countPages + 1; i++) {
		ul.append(createLink(i));
	}
};

const createLink = (page) => {
	let li = document.createElement('li');
	let a = document.createElement('a');
	li.classList = 'page-item';
	a.classList = 'page-link';
	li.style.cursor = 'pointer';
	a.textContent = page;
	li.append(a);
	if (store.currentPage === page) a.classList.add('active');
	li.addEventListener('click', (e) => {
		if (page !== store.currentPage) {
			store.currentPage = page;
			saveStore(10, page);
			setTimeout(() => {
				displayCards(store.data, 10);
			}, 1000);
			let active = document.querySelector('.active');
			active.classList.remove('active');
			e.target.classList.add('active');
		}
	});
	return li;
};

const displayCards = (cards) => {
	let container = document.querySelector('.content');
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

		imageCrard.style.width = '100%';
		imageCrard.style.height = '225px';
		rect.style.width = '100%';
		rect.style.height = '100%';
		imageCrard.style.backgroundColor = '#55595c';
		title.textContent = 'placeholder';
		text.style.color = 'white';
		card.style.height = '450px';
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
		console.log(store.data);
		displayPagination(store, store.limit);
		displayCards(store.data);
	}, 1000);
};

saveStore(10, 1);
displayContent();
