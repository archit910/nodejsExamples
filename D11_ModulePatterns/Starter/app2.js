var util = require('util')

// function Person(){
//     this.firstname = 'John';
//     this.lastname = 'Doe';
// }
// util.inherits(Policeman, Person);

// Person.prototype.greet = function() {
//     console.log('Hello ' + this.firstname + ' ' + 
//     this.lastname);
// }

// function Policeman(){
//     // Super Constructor
//     Person.call(this)
//     this.badgenumber = '1234';
// }

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log('Name is ' + this.firstname + ' '
        + this.lastname);
    }
}

class Policeman extends Person{
    constructor(firstname, lastname, badgeNumber) {
        super(firstname,lastname)
        this.badgeNumber = badgeNumber;
    }

}

Policeman.prototype.printBadge = function(){
    console.log('This is ' + this.firstname + ' Badge ' + this.badgeNumber)
}

var officer = new Policeman('Rishabh', 'Jain', '1001');
officer.greet()
officer.printBadge()
