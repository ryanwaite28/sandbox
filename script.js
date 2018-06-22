const Person = function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = 'homosapien'


let ryan = new Person('Ryan', 21);

console.log(ryan);
