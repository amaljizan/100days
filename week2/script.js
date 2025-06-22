// <------------------callback function---------------------

// console.log('One');

// const a = [2,3,7,6,4,5];

// a.forEach(function (arg) {
//     console.log(arg);
    
// });

// console.log('Two');

// <--------------- Arrow => Function --------------------------->



// const values = [1,2,3,4,5,6,7 ];
// myFunction(100);

// function myFunction (val) {
//     console.log("Hello Me", val);
    
// }

// const fn = function (val)  {
//     console.log("Hello World =", val);
// }
// fn(200)

// const fn = function (val) {
//     console.log("Hello world =", val);
//     return 19;
// }

// const fn2 = (val)=> {
//     console.log("Hello Njan =", val);
//     return 19;
// }
// fn(1);
// fn2(2);

// <------------------this keyword----------------

// const my0bj = {
//     a: 1,
//     b:2,
//     c: function() {
//         console.log(this);    
//     }
// };
// var obj = new MyClass();
// var a = obj.myFunction.bind(obj);
// a(obj);

// <---------call by value & call by reference--------

// function one() {
//     var a  = 100; 
//     two(a);
//     console.log('one',a);
    
// }

// function two(a) {
//     a = a +1;
//     console.log('one' ,a);
     
// }
// one();
// // --------------->closures<------------------------

// function increment(){
//     let count = 0;
//     count++;
//     console.log(`Count increased to 4{count}`);   
// }
// increment();
// increment();
// increment();
// increment();
// increment();
// -----------------------


// var objs = [
//     {
//         name: 'One',
//         msg: 'Hello Iam One'
//     },
//     {
//         name: 'Two',
//         msg: 'Hello Iam Two'
//     },
//     {
//         name: 'Three',
//         msg: 'Hello Iam Three'
//     },
    
// ];

// function main() {
//     objs.forEach((item) => {
//         const bt = document.createElement('button');
//         bt.innerHTML = item.name;
//         bt.onclick = getCallback(item.msg);
//         document.body.appendChild(bt);
//     });
// }
// function getCallback(arg) {
//     return function() {
//         alert(arg);
//     }
// }
// main();

// <--------------Spread,...Operator-------->

// var obj = {
//     a: 1,
//     b: 2,
//     c: 'Hello'
// }
// var obj2 = {
//     ...obj
// }


// console.log(obj);
// console.log(obj2);

// var a = [1,2,3,4]
//  var b = [...a];

// console.log(a);
// console.log(b);


// var objA = {
//     a: 1,
//     b: 2,
//     c: 'Hello'
// }
// var objB = {
//     a: 1,
//     b: 2,
//     c: 'Hello 2'
// }

// var obj2 = {
//     ...objA,
//     ...objB,
//     z: 32
// };

// console.log(obj2);

// var obj1 = {
//     a: 1,
//     b: 2, 
//     c: {
//         name: 'raman',
//         age: 45
//     }
// }

// var obj2 = {...obj1};
// obj1.d = 44;
// obj1.c.name ='krishnan';

// console.log(obj1,obj2);

// <------------{de, Structuring}----------------->

// const obj1 = {
//     name: 'Code Malayalam',
//     place: 'Kerala',
//     rank: 1000
// };

// const marks = [1,4,6,7,12];

// function myFunction() {
//     const [ a, ,b, ...others] = marks;
//     console.log( a, b, others);
    
//     // const {
//     //     name,
//     //     ...others
//     // } = obj1;

//     // console.log(name, others);
// }
// myFunction();


// // <----------Array function-------------------->

// const aee = [
//     {
//         name: 'Alice',
//         mark: 35,
//         place: 'kannur'
//     },
//     {
//         name: 'Bob',
//         mark: 28,
//         place: 'Palakkad'
//     },
//     {
//         name: 'Catherine',
//         mark: 44,
//         place: 'Trissur'
//     },
//     {
//         name: 'Daniel',
//         mark: 23,
//         place: 'kollam'
//     }
// ];

// // arr.forEach((item) => {
// //    sum = sum + item.mark;
// // });

// // console.log(sum);
// var found = Array.filter((item) => {
//     return index < 2;
// });

// console.log(found);

// // <----------- Nested {de, Structuring}--------->

// var obj =  



// let a = (value = 20)
// let b = (value = 10)

// function add (a,b){
//     return(a.value+b.value)
// }

// console.log();
// function obj  add()

// <------------ class------------>

// class Student {
//     name;
//     yob;

//     constructor(name, yob) {
//         this.name = name;
//         this.yob = yob;
//     }
//     getAge() {
//         return new Date().getFullYear() - this.yob;
//     }
//     getName() {
//         return this.name;
//     };
// }

// var student1 = {
//     name: 'Alen',
//     yob: 1990,
//     getAge: function() {
//         return new Date().getFullYear() -this.yob;
//     },
//     getName: function() {
//         return this.name;
//     };
// }

// var student2 = {
//     name: 'Bob',
//     yob: 1995,
//     getAge: function() {
//         return new Date().getFullYear() -this.yob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };

// var student3 = {
//     name: 'Cook',
//     yob: 1980,
//     getAge: function() {
//         return new Date().getFullYear() -this.yob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };


//  var student1 = new Student('Alen', 1990);

//  var student2 = new Student('Bob', 1995);

//  var student3 = new Student('Cook', 1980);

// console.log(student1.getName(), student1.getAge());
// console.log(student2.getName(), student2.getAge());
// console.log(student3.getName(), student3.getAge());

// <------------Setters & Getters------------->

// class Button {
//     constructor(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }

//     set width(width){
//         this.button.style.width = width + 'px';
//     }
//     set height(height){
//         this.button.style.height = height + 'px';
//     }
//     get width(){
//         return parseInt(this.button.style.width, 10);
//     }
//     get height(){
//         return parseInt(this.button.style.height, 10);
//     }
// }

// var b1 = {

//     init(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);

//     },

//     set width(width){
//         this.button.style.width = width + 'px';
//     },
//     set height(height){
//         this.button.style.height = height + 'px';
//     },
//     get width(){
//         return parseInt(this.button.style.width, 10);
//     },
//     get height(){
//         return parseInt(this.button.style.height, 10);
//     },
// }


// b1,init('click');
// b1.width = 100;
// b1.height = 100;

// var b1 = new Button('Click Me!');
// b1.width = 100;
// b1.height =100;
// console.log(b1.width, b1.height);


// b1.setWidth(100);
// b1.setHeight(100);

// <--------------Inheritance-------->

// class Button {
//     constructor(name) {
//         console.log('constructor');
        
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }

//     // 
//     // 

//     onClick(fn) {
//         this.button.onclick = fn;
//     }
// }
// // var b1 = new Button('My Button 1');
// // b1.onClick(function() {
// //     console.log('Clicked');
// // });

// class GreenButton extends Button{

//     constructor() {
//         super(name);
//     }

//     onClick(fn) {

//         this.button.onclick = function() {
//             this.button.style.background ='green';
//             fn();
//         }.bind(this);
//     }
// }

// var b1 = new GreenButton('My GButton 1');
// b1.onClick(function() {
//     console.log('Clicked');
// });

// <------------prototype-------------------->

// class Button {
//     constructor(name) {
//         console.log('constructor');
        
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }

//     // 
//     // 

//     onClick(fn) {
//         this.button.onclick = fn;
//     }
// }    

// var b1 = new Button('Hello');
// console.log(b1);



// function MyButton(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;
//     document.body.appendChild(this.button);
    
// }

// MyButton.prototype.onClick = function (fn) {
//     this.button.onclick = fn;
// }



// function MyGreenButton(name) {
//     MyButton.call(this, name);
// }

// console.log(Object.create(MyButton.prototype));
// MyGreenButton.prototype = Object.create(MyButton,prototype);
// MyGreenButton.prototype= function(fn) {
//     MyButton.prototype.onClick.call(this, () => {
        
//     })
// }
// MyGreenButton.prototype.printme = () => {
//     console.log('hello');
// }

// var b2 = new MyButton('Yo!')
// b2.onClick(function(){
//     console.log('clicked');
// });

// console.dir(MyGreenButton);
// console.dir(b2);
// b2.printme();

// <---------Asymchronous callback--------------->

// var button = document.getElementById('mybutton');
// button.onclick = () => {
//    console.log('started click event');
//    $.ajax({
//        url: 'https://jsonplanceholder.typicode.com/todos/1',
//        success: (data) => {
//             console.log(data);
           
//         },
//         async: false
//    });
   
//    console.log('ended click event');
   
   
// }
// callback-----

// hello(wait());


// function hello(callback){

//         console.log("Hello!");
//         callback();
// }

// function wait(){
//     console.log("Wait!");
    
// }

// function leave(){
//     console.log("Leave");
    

// }

// function goodbye(){
//     console.log("Goodbye!");
    
// }


// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result)
    
// }

// function displayConsole(result){
//     console
// }
// const text = document.getElementById("myH1")
// sum(displaypage, 1, 2);

// function sum(callback,  x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
    
// }
// function displaypage(result){
//     text.innerText = result;
// }
//   -------------------callback-----------------
// sum(displaypage, 1, 2)
// sum(displayConsole, 1, 2)

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
    
// }
// function displaypage(result){
//     document.getElementById("myH1").textContent = result;
// }

// ----------------Promise--------------------

// console.log('started');


// $.ajax({
//     type: 'GET',
//     url: 'https://jsonplanceholder.typicode.com/todos/1',
//     success: (msg) => {
//         console.log(msg);
//     },
//     error: (xhr, statusText) => {
//         console.log(statusText);
//     },
// });


// function walkDog(){
    
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {

//             const dogwalked = true;
            
//             if(dogwalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("")
//             }
//         }, 1500);
//     });
// }

// function cleanKtchen(){

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resole("you clean the kitchen ");
//             callback();
//         }, 2500);
//     });
// }

// function takeOutTrash(){
  
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resole("you take out the trash");
//         }, 500);
//     });
// }
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores!")});
         
// console.log('Requesting 1');
// const pr = fetch('https://jsonplanceholder.typicode.com/todos/1');

// pr.then((data) => {
//     console.log(data);
// pr.then((data) => {
//         console.log(data);
        
//     });
// });
// const pr = fetch('https://jsonplanceholder.typicode.com/todos/2');

// <---------------------try catch---,finally---------------->

// console.log('started');

// let a, b, result;

// try{
//     console.log('on try');
//     a = getVal1();
//     b = getval2();
//     result = processValues(a, b);
// } catch(e) {
//     console.log('on catch');
//     result = 0;

// } finally {
//     console.log('in finally');
    
// }


// console.log(result);

// console.log('ended');

// // ========

 


// function getVal1() {
//     return 12;
// }
// function getval2() {
//     console.log('inside getVal2');
//     return 22;
// }
// function processValues(a, b) {
    
//     return a + b;
// }

// <----------------async await------------------>

// async function myFunction() {
//     var a = await getJson();
// }

// async function getValue() {
//     await
//     // return Promise.resolve(12);
// }

// const result = getValue();
// result.then((data) => {
//     console.log(data);
    
// })
// console.log('Started');
// getValue();
// console.log('Ended');

// async function getValue() {
//     fetch('https://jsonplanceholder.typicode.com/todos/1')
//     .then((data) => {
//         console.log(data);
//     });

//     const data = await fetch('https://jsonplanceholder.typicode.com/todos/1');
//     console.log(data);
    
//     return data;
// }

// <-----------Self-Invoking Function------------->

// (function() {
//     var button = document.getElementById('hello')
//     button.style.background ='green';
//     button.onclick = () => {
//         console.log(button.innerHTML);
//     }
// })();

// <--------------import, export------------------>

// console.log('Script1');

// function addArray(arr) {
//     return arr.reduce((total, item) => total + item, 0);
// }

// const value = addArray([3, 5, 5]);
// console.log(value);


// <-------Variables & Data Types----------->

// let name = "Amal";
// let age = 25;
// let isStudent = true;

// console.log(name, age, isStudent)

// <---------Basic operators---------->

// let x = 10;
// let y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// <--------Arrays + Methods------->

// let fruits = ["apple", "banana", "mango"]
// fruits.push("orange");
// fruits.pop();
// console.log(fruits);

// <--------Functions------------>

// function add(a,b) {
//     return a+ b;

// }
// console.log(add(5,3));

// <------------Loops----------->

// for (let i =0; i<=20; i++){
//     console.log(i);
    
// }


// <-------- Looping Through an Array ----------->

// let vehicles= ["car","bike", "bus"];
// for(let i = 0;i<vehicles.length;i++){
//     console.log(vehicles[i]);
// }
// <-------------push() and pop()--------->

let vehicles = ["car", "bike", "bus"]
vehicles.push("train");
vehicles.pop();
console.log(vehicles);
