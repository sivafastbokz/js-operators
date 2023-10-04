//arithmetic operator
var a = 5+5
console.log(a)
var b = 5-2
console.log(b)
var c = 5*5
console.log(c)
var d = 25/5
console.log(d)
var e = 35 % 2 //modules means the reminder
console.log(e)
var f = 10
f++
console.log(f)
var g = 10
g--
console.log(g)

//comparison operator
function checkEqualityWithDoubleEqualTo(a,b){
 return a == b
}
console.log(checkEqualityWithDoubleEqualTo(1,1))  // the == operator checks the values that are equal if equal returns true if not retutns false

function checkEqualityWithTripleEqualTo(a,b){
 return a === b
}
console.log(checkEqualityWithTripleEqualTo(1,'1')) // the === operator not only checks the equality but also checks the value is a type

function inEquality(a,b){
 return a != b              
}
console.log(inEquality(1,1))
console.log(inEquality(1,2)) //The inequality (!=) operator checks whether its two operands are not equal

function strictInequality(a,b){
 return a !== b
}
console.log(strictInequality(1,1))
console.log(strictInequality(1,'1'))
//The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result. 
//Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.

function greaterThan(a,b){
    return a > b
}
console.log(greaterThan(20,10))

function greaterThanAndEqualTo(){
    return a >= b
}
console.log(greaterThanAndEqualTo(20,10))

function lesserThan(a,b){
    return a < b
}
console.log(lesserThan(5,10))

function lesserThanAndEqualTo(){
    return a <= b
}
console.log(lesserThanAndEqualTo(5,10))

//bitwise operator

// var z = 10 == 10 & 10 == 11
// var x = 10 == 11 & 10 == 12
// console.log(z,x)

//logical operator

var z = 10 == 10 && 10 == 10
var x = 10 == 11 && 10 == 12 
//The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
console.log(z,x)

var z = 10 == 10 || 10 == 11
var x = 10 == 11 || 10 == 12
console.log(z,x)

var a = true
//The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa
console.log(!a)

//assignment operators
console.log(10+10)

var a = 10
a += 10
console.log(a)

var b = 20
b-= 10
console.log(b)

var c = 10 
c *= 5
console.log(c)

var d = 20
d /= 5
console.log(d)

var e = 210
e%= 5
console.log(e)

//special operators
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}
console.log(getFee(true));
// Expected output: "$2.00"
console.log(getFee(false));
// Expected output: "$10.00"
console.log(getFee(null));
// Expected output: "$10.00"

const Employee = {
    firstname: 'John',
    lastname: 'Doe',
 };
console.log(Employee.firstname);
// Expected output: "John"
delete Employee.firstname;
console.log(Employee.firstname);
// Expected output: undefined

const userDetails = {
    userName:'bob',
    userAge:21
}

function findProperty(obj){
    if('userName' in obj){
        return obj.userName
    }else{
        return 'username not found'
    }
}
console.log(findProperty(userDetails))

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);
  // Expected output: "Eagle"