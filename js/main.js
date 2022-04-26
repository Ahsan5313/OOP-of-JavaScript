// OOP of JavaScript;
// let we discuss about OOP of JavaScript;
// Function constructor;
// How to make a function constructor;
// Why are we gonna make a function constructor?
// Just example like, i need describe to a person how can i do by programming;
// Obiously i need make a object; but if i need more than 10 person it would be
// Large to describe all of person;
// We can do it by using function constructor;
// Here my object like

const person = {

    name :"Ahsanul Huq",
    age : 21,
    job : 'Student',
    printAll : function(){

        console.log(`My name is ${this.name} and my age is ${this.age} and my job is ${this.job}`)
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.job);
person.printAll()
// In this we can describe to a person;
// But there are somewhat condition to be a constructor like
// 1. it will be an empty object;
// 2. this keyword will donate the constructor function
// 3. constructor will have link with prototype;
// 4. it will return automatically

function Person(name, age, job){

    this.name = name;
    this.age = age;
    this.job = job;

 

}
Person.prototype.printAll = function(){

    console.log(`My name is ${this.name} and my age is ${this.age} and my job is a ${this.job}`)
}

const person1 = new Person('Ahsanul Huq', 21, 'Student');
console.log(person1.name);
console.log(person1.age);
console.log(person1.job);
person1.printAll()
// In this way we may create lots of object by using constructor function;

const person2 = new Person('Shibu', 21, 'Student');

console.log(person2.name);
console.log(person2.age);
console.log(person2.job);


console.log(person2.printAll())

