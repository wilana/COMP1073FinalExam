// JavaScript Document

// A person class is created to easily store information in a standardized way
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

	// The person class has a greeting method to customize a greeting for the person
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

	// The person class has a bye method to customize a goodbye for the person
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}


// Two people are instantiated
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// A teacher class is created using the Person class
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
	  //These are added for information specific to a Person who is a teacher
    this.subject = subject;
    this.grade = grade;
  }
}

let krabappel = new Teacher('Edna Krabappel', 40, 'female', ['teaching', 'Ned'], 'Science', 'Fourth');
