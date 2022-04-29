// // OOP of JavaScript;
// // let we discuss about OOP of JavaScript;
// // Function constructor;
// // How to make a function constructor;
// // Why are we gonna make a function constructor?
// // Just example like, i need describe to a person how can i do by programming;
// // Obiously i need make a object; but if i need more than 10 person it would be
// // Large to describe all of person;
// // We can do it by using function constructor;
// // Here my object like

// const person = {

//     name :"Ahsanul Huq",
//     age : 21,
//     job : 'Student',
//     printAll : function(){

//         console.log(`My name is ${this.name} and my age is ${this.age} and my job is ${this.job}`)
//     }
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.job);
// person.printAll()
// // In this we can describe to a person;
// // But there are somewhat condition to be a constructor like
// // 1. it will be an empty object;
// // 2. this keyword will donate the constructor function
// // 3. constructor will have link with prototype;
// // 4. it will return automatically

// function Person(name, age, job){

//     this.name = name;
//     this.age = age;
//     this.job = job;

 

// }
// Person.prototype.printAll = function(){

//     console.log(`My name is ${this.name} and my age is ${this.age} and my job is a ${this.job}`)
// }

// const person1 = new Person('Ahsanul Huq', 21, 'Student');
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.job);
// person1.printAll()
// // In this way we may create lots of object by using constructor function;

// const person2 = new Person('Shibu', 21, 'Student');

// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.job);


// console.log(person2.printAll())

// console.log(person1.printAll())



// console.log(Person.prototype);
// console.log(person1.__proto__)
// console.log(Person.prototype === person1.__proto__);
// console.log(person1.hasOwnProperty("name"))


// // Problem solving of house rant by using functional constructor

// const HouseRant = function(amount){

//      this.amount = amount;
    
// }

// HouseRant.prototype.houseRentIncr = function(){

//     this.amount += 1000;
//     console.log(`My house rent will be ${this.amount}`);
    
// }

// HouseRant.prototype.houseRentDec = function(){

//     this.amount -= 1000;
//     console.log(`My house rent will be ${this.amount}`);
    
// }

// const presentAmount = new HouseRant(10000);


// console.log(presentAmount.amount);
// presentAmount.houseRentIncr();
// presentAmount.houseRentIncr();
// presentAmount.houseRentIncr();
// presentAmount.houseRentDec();
// presentAmount.houseRentDec();
// presentAmount.houseRentDec();


// // class constructor
// // What is class constructor well constructor is a one kind of blow print 
// // Like functional constructor.
// // So what's the deference between class constructor and functional constructor;
// // Let me explain
// // whenever i keep a method in functional constructor in this case we heave to
// // keep it prototype;
// // but on the other hand class constructor has default prototype;
// // let's go to code and see
// // Before going in code i should make sure that there are two ways to define to class
// // like class expression another thing is like class declaration;

// // class expression
// // const myCls = class {




// // }

// // class declarations like
// class Computer {

//     constructor(name, model, amount){

//         this.name = name;
//         this.model = model;
//         this.amount = amount
//     }

//     aboutComputer(){

//         console.log(`The name of the my computer is ${this.name} and model of computer is ${this.model}`)
//     }

  

// }

// const dell = new Computer('Dell', 'ytr25');
// dell.aboutComputer();
// console.dir(dell);


// // So let's solve a problem by using class constructor

// class HouseRent {

//     constructor(amount){

//         this.amount = amount;
//     }

//     increment(){

//        this.amount += 1000;
//        console.log(`My next house rent will be ${this.amount}`);
//     };
//     decrement(){

//         this.amount -= 1000;
//         console.log(`My nest house rent will be ${this.amount}`);
//     };
// }

// const firstYear = new HouseRent(10000);
// console.log(firstYear.amount);
// firstYear.increment();
// firstYear.increment();
// firstYear.increment();
// firstYear.increment();
// const secondYear = new HouseRent(10000);
// console.log(secondYear.amount);
// secondYear.decrement();
// secondYear.decrement();
// secondYear.decrement();
// secondYear.decrement();

// // So let's move in static mode
// // And getter and setter
// // So let's began 

// const MyStatic = function(name, age){

//     this.name = name;
//     this.age = age;
// }

// MyStatic.printName = function(){

//     console.log('This is Ahsanul Huq')
// }

// const person4 = new MyStatic('Ahsanul Huq', 21);
// console.log(person4.name);
// console.log(person4.age);
// console.log(person4)
// MyStatic.printName()

// class Computer1 {

//     constructor(name, model){

//         this.name = name;
//         this.model = model
//     }

//     aboutComputer(){

//         console.log(`The name of the my computer is ${this.name} and model of computer is ${this.model}`)

//     }

//     static printName(){

//         console.log(`This is my computer ${this.name}`)
        
//     }

//     get computerName(){

//         return this.name
//     }

//     set computerName(value){

//         this.name = value
//     }
// }

// const hp = new Computer1('Hp', 'hltp3');
// console.log(hp.name);
// console.log(hp.model);
// console.log(hp)
// console.log(Computer1.prototype);
// Computer1.printName()
// const newHp = hp.computerName;
// console.log(newHp)
// hp.computerName = 'Dell';
// console.log(hp.name)

// // Let's move in Object.create();

// const myObj = {

//     name : '',
//     model : '',
//     aboutComputer(){

//         console.log(`My computer name is ${this.name} and model is ${this.model}`)
//     }
// }

// const samsung = Object.create(myObj);
// samsung.name = 'Samsung';
// samsung.model = '2500m';
// console.log(samsung)
// samsung.aboutComputer();

// const nokia = Object.create(myObj);
// nokia.name = 'Nokia',
// nokia.model = 1200,
// console.log(nokia)
// nokia.aboutComputer()

// Inheritance of JavaScript;
// How to make inheritance it;
// Let's began;


class Computer{

    constructor(name, model){

        this.name = name;
        this.model = model
    }

    aboutComputer(){

        console.log(`My computer name is ${this.name} and model is ${this.model}`) 
    }
}

class Hp extends Computer{

    constructor(name, model, warranty){

        super(name, model)
        this.warranty = warranty;
    }
 

    aboutWarranty(){

        console.log(`My computer will gets ${this.warranty}`)
    }
}

const newHp = new Hp('Hp', '20kg', 3);
console.log(newHp.name);
console.log(newHp.model);
console.log(newHp.warranty);
newHp.aboutComputer();
newHp.aboutWarranty()

console.log(newHp)
console.log(Hp.prototype)
