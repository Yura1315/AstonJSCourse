class Staff {
	#wage;
	#specialty;
	#workDays;
	#experience;
	constructor(name, surname, wage, specialty, workDays, experience) {
		this.name = name || 'Unknown Name';
		this.surname = surname || 'Unknown Surname';
		this.#wage = wage || 850;
		this.#specialty = specialty || 'worker';
		this.#workDays = workDays || 30;
		this.#experience = experience || 0;
	}

	checkIsString(value) {
		if (typeof value !== 'string' || !value) {
			throw Error('Невалидные параметр');
		}
	}
	checkIsNumber(value) {
		if (typeof value !== 'number' || !value) {
			throw Error('Невалидные параметр');
		}
	}

	get name() {
		return this._name;
	}
	set name(value) {
		this.checkIsString(value);
		this._name = value;
	}
	get surname() {
		return this._surname;
	}
	set surname(value) {
		this.checkIsString(value);
		this._surname = value;
	}

	get wage() {
		return this.#wage;
	}

	set wage(value) {
		this.checkIsNumber(value);
		this.#wage = value;
	}

	get specialty() {
		return this.#specialty;
	}

	set specialty(value) {
		this.checkIsString(value);
		this.#specialty = value;
	}

	get experience() {
		return this.#experience;
	}
	set experience(value) {
		this.checkIsNumber(value);
		this.#experience = value;
	}

	get workDays() {
		return this.#workDays;
	}
	set workDays(value) {
		this.checkIsNumber(value);
		this.#workDays = value;
	}
	get info() {
		return {
			fullName: `${this.name} ${this.surname}`,
			experience: this.#experience,
			specialty: this.#specialty,
			salary: this.#workDays * this.#wage,
		};
	}
}

class Developer extends Staff {
	constructor(name, surname, specialtyValue, experience) {
		super(name, surname);
		this.specialty = 'developer';
		this.wage = 1200;
		this.workDays = 30;
		this.experience = experience || 0;
		this.specialtyValue = specialtyValue || 'developer';
	}
	get info() {
		const info = super.info;
		let gradeValue;
		let k = 0;
		if (this.experience <= 0.5) {
			k = 0.05;
			gradeValue = 'trainee';
		} else if (this.experience > 0.5 && this.experience <= 1) {
			k = 0.1;
			gradeValue = 'junior';
		} else if (this.experience > 1 && this.experience <= 3) {
			k = 0.2;
			gradeValue = 'middle';
		} else if (this.experience > 3) {
			k = 0.4;
			gradeValue = 'senior';
		}

		return {
			fullName: info.fullName,
			experience: this.experience,
			specialty: `${gradeValue} ${this.specialtyValue}`,
			salary: this.wage * this.workDays + this.wage * this.workDays * k,
		};
	}
}
