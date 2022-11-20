class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	appendNode(value) {
		const newNode = new Node(value);
		if (!this.tail || !this.head) {
			this.tail = newNode;
			this.head = newNode;
			this.length++;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prependNode(value) {
		const newNode = new Node(value, this.head);
		this.head = newNode;
		this.length++;
		if (!this.tail) {
			this.tail = newNode;
			this.length++;
		}
	}

	delNode(value) {
		if (!this.head) {
			return null;
		}
		let deleteNode = null;
		while (this.head && this.head.value === value) {
			deleteNode = this.head;
			this.head = this.head.next;
		}
		let currentNode = this.head;
		if (currentNode !== null) {
			while (currentNode.next) {
				if (currentNode.next.value === value) {
					deleteNode = currentNode.next;
					currentNode.next = currentNode.next.next;
					this.length--;
				} else {
					currentNode = currentNode.next;
				}
			}
		}
		if (this.tail?.value === value) {
			this.tail = currentNode;
		}
	}

	insertNodeAfter(value, prevNode) {
		if (!prevNode || typeof prevNode !== 'string') {
			throw Error('Введите корректные данные');
		}
		const newNode = new Node(value);
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === prevNode) {
				newNode.next = currentNode.next;
				currentNode.next = newNode;
				this.length++;
			}
			currentNode = currentNode.next;
		}
		if (newNode.next === null) {
			this.tail = newNode;
		}
	}

	delLastNode() {
		if (!this.head) {
			return null;
		}
		let currentNode = this.head;
		while (currentNode.next.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = null;

		this.length--;
	}

	delFirstNode() {
		if (!this.head) {
			return null;
		}
		this.head = this.head.next;
		this.length--;
	}

	printLinkedList() {
		console.log(JSON.stringify(this.head));
	}
}
