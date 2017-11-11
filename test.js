// function getHit(){
// 	tdy = new Date();
// 	var bigN = tdy.getSeconds() * tdy.getTime();
// 	bigN *= Math.sqrt(tdy.getMinutes());
// 	console.log(Math.ceil((bigN % 3) + 1));
// }

// setInterval(function(){ 
// 	getHit();
// 	},1000);


// var str = "Hello";
// str = str.substring(0,1);
// console.log(str);


// function test(a, b){
// 	console.log(a+b);
// }

// test.call(this, [2 ,3]);


// var methods = {
// 	init
// }


// function Parent(newName, newAge, newStatus) {
//     var age = newAge;
//     var status = newStatus;
//     this.name = newName;
//     this.getAge = function() { return age; };
// }
// Parent.prototype.getStatus = function () { return this.status; };
// Parent.prototype.getName = function () { return this.name; };
// Parent.prototype.sayHello = function () {
//     console.log("My name is " + this.getName());
//     console.log("My age is " + this.getAge());
//     console.log("I am " + this.getStatus());
// };

// var p1 = new Parent("Sam", 23, "single");
// p1.age = 24;
// p1.name = "Peter";
// p1.sayHello();


// function Player(){
//     this.name;
//     this.hitpoints = 100;
//     this.attack = function attack(opponent){
//     	opponent.hitpoints -= 10;
// 		console.log(this.name + " just hit " + opponent.name);
//     }
// }


// var p1 = new Player();
// var p2 = new Player();

// p1.name = "Conan";
// p2.name = "Hercules";

// p1.attack(p2);

// Player.prototype.heal = function heal(targetPlayer){
//    targetPlayer.hitpoints += 5;
// };


// p1.heal(p2);

// console.log(p2.name + " has  " + p2.hitpoints + " hit points left");
// console.log(p1.name + " has  " + p1.hitpoints + " hit points left");

// Player.prototype.energy = 200;

// console.log(p1.energy);




// function ParentClass(){
// 	this.parent_property1 = "hola";
// 	this.parentmethod1 = function parentmethod1(arg){
// 		return arg + " Parent method 1 return data ...";
// 	}
// }

// function Childclass(){
// 	this.child_property1 = "Adios";
// 	this.childmethod1 = function childmethod1(arg){
// 		return arg + " child method 1 return data ...";
// 	}
// }

// Childclass.prototype = new ParentClass();
// var instance1 = new Childclass();

// // console.log(instance1 instanceof ParentClass);
// // console.log(instance1 instanceof Childclass);


// console.log( instance1.parentmethod1("RESULT") );

// console.log( instance1.childmethod1("RESULT") );

// Childclass.prototype.parentmethod1 = function parentmethod1(arg){
// 	return arg + "I have overridden parent method 1";
// }

// let dragon = 
//    name =>
//     	size => 
//     	    element => 
//     	         name + "is a " + 
//     	         size + " dragon that breathes " + 
//     	         element + "!"





// map, filter, and reject



// var orders = [
//     { amount : 250 },
// 	{ amount : 400 },
// 	{ amount : 100 },
// 	{ amount : 325 }
// ]

// // var totalAmount = 0;
// // for(var i =0; i < orders.length; i++){
// // 	totalAmount += orders[i].amount;
// // }


// var totalAmount = orders.reduce(function(sum, order){
//     console.log(`Hello ${sum}`);
//     return sum + order.amount

// }, 0);

// console.log(totalAmount);




(function(){
  let str = "testing";
})()
console.log(str);




