// 'use strict';
// Class Based Objects  ( Syntactic Sugar )
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;

//     }
//     greet() {
//         console.log('Hello ' + this.firstname)
//     }
// };

Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    
    this.greet = function(){
        console.log('Hello ' + this.firstname)
    }
};

Person.prototype.greeter = function(girlfriend){
    console.log(this.firstname + ' has ' + girlfriend);
}
var archit = new Person('Archit', 'Chauhan');
console.log(archit)
console.log(archit.__proto__)
// archit.greet()
// archit.greeter('Shruti')