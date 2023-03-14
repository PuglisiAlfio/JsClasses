class Person {
  // ...
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (typeof(age) == 'number'){
      this.age = age;
    } else {
      this.age = Number(age);
    }
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(newFirstName){
    this._firstName = newFirstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(newLastName){
    this._lastName = newLastName;
  }
  
  get age() {
    return this._age;
  }

  set age(newAge){
    if (newAge < 1) {
      this._age = 1
    } else if (newAge > 100) {
      this._age = 100
    } else {
      this._age = newAge;
    }    
  }

  get fullName() {
    return  this.firstName +' '+ this.lastName;
  }


}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);