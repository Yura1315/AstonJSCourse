function createPerson(name, skills = []) {
	this.name = name;
	this.skills = skills;
	return {
		name: this.name,
		skills: this.skills,
		setName: function (newName) {
			this.name = newName;
		},
		addSkill: function (newSkill) {
			if (!this.skills.includes(newSkill)) {
				this.skills.push(newSkill);
			}
		},
		removeSkill: function (skill) {
			let newSkills = [];
			this.skills.forEach((el) => {
				if (skill !== el) {
					newSkills.push(el);
				}
				this.skills = newSkills;
			});
		},
	};
}
