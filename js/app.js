'use stric';
class Person {
	constructor(fName, lName, gender, salary) {
		this.fName = fName;
		this.lName = lName;
		this.gender = gender;
		this.salary = salary;
		this.hasJob = false;
	}

	fullName() {
		return `${this.fName} ${this.lName}`;
	}

	setFirstName(fName) {
		this.fName = fName;
	}
	setLastName(lName) {
		this.lName = lName;
	}
	setGender(gender) {
		this.gender = gender;
	}
	setSalary(salary) {
		this.salary = salary;
	}
}

class Employee extends Person {
	constructor(fName, lName, job, gender, salary) {
		super(fName, lName, gender, salary);
		this.job = job;
		this.hasJob = true;
	}
	setJob(job) {
		this.job = job;
	}
	setGender(gender) {
		this.gender = gender;
	}
	setSalary(salary) {
		this.salary = salary;
	}
}
let x,
	text = '';

const person = new Person('Sue', 'Emma', 'Female', 2001, 'false');

// displaying the Object in a Loop
for (x in person) {
	text += person[x] + ' ';
}

//Using Object.values
const employee = new Employee(
	'Smith',
	'Bento',
	'Software Engineer',
	'Male',
	2502
);
let myArray = Object.values(employee);

document.querySelector('#app').innerHTML = text;

//document.getElementById('app').innerHTML = myArray;

console.log(employee);
console.log(person);
