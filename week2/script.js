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

// let vehicles = ["car", "bike", "bus"]
// vehicles.push("train");
// vehicles.pop();
// console.log(vehicles);

// <----------Function Returning Sum------------>

// function add(a, b){
//     return a + b ;
// }
// console.log(add(5, 3));

// <------using if-else Condition------>

// let age = 18;

// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }

// <------Check if a Number is Even or Odd using if-else---->

// let num = 9;
// if(num % 2 === 0){
//     console.log("Even Number");
// }else{
//     console.log("odd Number");
    
// }
// <-------Function to Check Positive or Negative Number------>

// function checkNumber(onenumber) {
//     if(onenumber >= 0){
//         console.log("Positive Number");
//     }else{
//         console.log("Negative Number");
        
//     }
// }
// checkNumber(8)

// <-------Find the Largest of Two Numbers using if-else---------->

// let num1 = 10;
// let num2 = 20;

// if(num1 > num2){
//     console.log("Num1 is Larger");
    
// }else{
//     console.log("Num2 is Larger");
    
// }
// <------ Check if a Number is Positive, Negative, or Zero------->

// let number = 4;

// if(number > 0){
//     console.log("Postive Number");
// }else if(number < 0){
//     console.log("Negative Number");   
// }else{
//     console.log("zero");    
// }
// <-------- Switch Statement for Days------>

// let day = 4;

// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     default:
//         console.log("invalid day");
// }

// <-----------Loop Through an Array of Names-------->
// let names= ["Adhithya","Nikhil","Nirajan","Dennies","Edwin"];
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);  
// }
// <-------16: Use Array Methods (push and pop)----->
// let names = ["Amal"];
// names.push("adhithya");
// names.pop();
// console.log(names);
// <-----Create a Function That Returns the Sum of Two Numbers--->

// function sum(x, y){
//     return x + y ;
// }
// console.log(sum(5,4));

// <---------- Print Even Numbers from an Array using Loop and if-else--->

// let num =["1","2","3","4","5","6","7","8","9","10"]
// for(let i=0;i<num.length;i++){
//     if(num[i] % 2 === 0){
//         console.log(num[i] + "is Even Number");
//     }else{
//         console.log(num[i] + " is Odd Number");
        
//     }
// }

// <----------Function that Loops Through an Array--->

// function checkEvenOdd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 === 0){
//         console.log(arr[i] + "Even");
        
//        }else{
//         console.log(arr[i] + "odd");
        
//        }    
//     }
    
// }
// let num=[1,2,3,4,5,6,7];
// checkEvenOdd(num); 

// <-----------Return Only Even Numbers in a New Array----->

// function getEvenNumber(arr) {
//     let evenArr = [];
//     for(let i = 0; i< arr.length; i++){
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i]);         
//         }
//     }
//     return evenArr;
// }
// let numbers = [1,2,3,4,5,6];
// console.log(getEvenNumber(numbers));

// <------Find the Maximum Number in an Array using Function------------->

// function findMax(arr) {
//     let max = arr[0];
//     for(let i=1; i < arr.length;i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }

//     }
//     return max;
// }
// let number = [3,5,2,3,6,8];
// console.log(findMax(number));

// <------Find Minimum Number in an Array--->

// function findMin(arr) {
//     let min = arr[0];
//     for(let i = 1 ;i < arr.length; i++){
//         if(arr[i] < min){
//             min =arr[i];
//         }
//     }
//     return min;
// }

// let number = [3,5,2,9,8];
// console.log(findMin(number));;

// <------  Practice Slice and Splice----->

// let numbers = ["1","2","3","4","5"]
// let slicedNumbers = numbers.slice(1,3);

// console.log(slicedNumbers);
// console.log(numbers);

// <------------Learn splice() Method------>

// let numbers = ["1","2","3","4","5"];
// numbers.splice(1,2,"10","20");
// console.log(numbers);

// <------(Choose: Functions, Loops, or Array Methods like map, filter?)------->

// <-----------Practice map() Method---------->
// let numbers = ["1","2","3","4","5"];

// let doubled = numbers.map(function(num) {
//     return num * 2;

// })
// console.log(doubled);
// console.log(numbers);

// <----------Use map() to Multiply Each Number by 3---------->

// let numbers = [1,2,3,4,5];
// let tripled = numbers.map(function(num) {
//     return num * 3
// });

// console.log(tripled);

// <-------- 25: Use filter() to Get Even Numbers------->

// let numbers = [1,2,3,4,5];

// let greaterThan = numbers.filter(function(num){
//     return num >3
// });
// console.log(greaterThan);

// <-----------Use map() and filter() Together----->

// let numbers = [ 1,2,3,4,5];
// let members = numbers.map(function(num){
//     return num * 2;
// });
// let peoples = members.filter(function(num){
//     return num > 5;
// });
// console.log(members);
// console.log(peoples);

// let numbers = [ 1,2,3,4,5];
// let results = numbers
// .map(function(num){
//     return num * 2;
// })
// .filter(function(num){
//     return num > 5;
// });
// console.log(results);

// <-------Arrow Functions (Simple Modern Syntax)?----------->
// <--------: Arrow Functions in JavaScript-------------->


// let numbers = [1,2,3,4,5];
// let tribled = numbers.map(num => num * 3);
// console.log(tribled);

// <----------- Practice Arrow Function with filter()------------->
// let number = [1,2,3,4,5,6]
// let doubled= number.filter(num => num % 2===0);
// console.log(doubled);

// <-------Chain map() and filter() using Arrow Functions----->

// let numbers = [1,2,3,4,5];
// let result= numbers
// .map(num => num * 2)
// .filter(num => num > 5);
// console.log(result);

// <------- Functions that Return Values — no printing, just returning---->

// function multiply(a , b){
//     return a * b;
// }
// let result = multiply(4, 6);
// console.log(result);

// <------What is an Object in JavaScript?-->

// let car = {
//     brand: "BMW",
//     model: "hlock",
//     year: 2022
// };

// console.log(car.brand);
// console.log(car.year);
// console.log(car.model);

// <----------map(), filter(), reduce() Chaining Practice----->

// let prices = [ 50, 120, 80, 200, 30];

// let finalTotal = prices

// .map(price => price * 1.10)
// .filter(price => price > 100)
// .reduce((sum, price) => sum + price);

// console.log(finalTotal);

// <---------------Add a Method to an Object------>

// let calculator = {
//     a: 5,
//     b: 3,
//     add:function() {
//         return this.a + this.b;
//     }
// };
// console.log(calculator.add());

// <--------Loop Through Object Properties----->

// let book  = {
//     title: "half a day",
//     author: "Noufan faz",
//     year: 2012
// };
// for(let key in book) {
//     console.log(`${key}: ${book[key]}`);
    
// }
// <-------Using this Inside a Method-->

// let user={
//     firstName: "noufan",
//     lastName: "faz",
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(user.getFullName());

// <-----Array of Objects-->

// let books =[
//     {titile:"Banana Tree", Author: "Ruskin Bond", Year: 2003},
//     {titile:"The Alchemist", Author: "Paulo Coelho", Year: 1988},
//     {titile:"Rich Dad Poor Dad", Author: "Robert Kiyosaki", Year: 1997}
// ];
// for (let amal of books) {
//     console.log(`Title: ${amal.titile}, Author: ${amal.Author}, Year: ${amal.Year}`);
    
// }

// <-------Add a Method to Each Object in an Array----->

// let  books = [
//     {
//         title: "Banana Tree",
//         author: "Ruskin Bond",
//         year: 2003,
//         getSummary:function() {
//             console.log(`${this.title} by ${this.author} was published in ${this.year}`);
//         }
//     },
//     {
//         title: "The Alchemist",
//         author:"Paulo Coelho",
//         year: 1988,
//         getSummary:function() {
//             console.log(`${this.title} by ${this.author} was published in ${this.year}`);
//         }
//     },
//     {
//         title: "Rich Dad Poor Dad",
//         author:"Robert Kiyosaki",
//         year:1997,
//         getSummary:function() {
//             console.log(`${this.title} by ${this.author} was published in ${this.year}`);
//         }
//     }
// ];
// for (let book of books) {
//     book.getSummary();
// }

// <-------Factory Function------->


// <---math function--->

// let numbers = [1,2,3,4,5];

// let greater=Math.max(...numbers)
// console.log(greater);

// let num=4
// console.log(Math.pow(num,2))

// console.log(Math.sqrt(num,2))

// let greater1=Math.min(...numbers)
// console.log(greater1);

// console.log(Math.PI)

// let num1=4.3

// console.log(Math.floor(num1))
// console.log(Math.ceil(num1))
// console.log(Math.round(num1))

// console.log(Math.floor(Math.random()*6)+1)




// if(2>3){
//     console.log("greater")
  
// }
// else if(6>){

// }
// else{
//     console.log("not greter")
//    console.log("amal")
// }

// 4>3 ? console.log("greater"):  console.log("not greter")

// <--------------Constructor Function-------------->

// function book(title, author, year){
//     this.title = title;
//     this.author =author;
//     this.year = year;
//     this.getSummary = function(){
//         return `${this.title} by ${this.author}was published in ${this.year}`
//     };
// }
// let book1 = new book("half of a day","Noufan faz", 2012);
// let book2 = new book("The Alchemist","paulo coelho",1988);

// console.log(book2.getSummary());

// <-----------Create a Constructor and Use Prototype----->

// function Movie(title, director, releaseYear){
//     this.title =title;
//     this.director=director;
//     this.releaseYear=releaseYear;
//     this.getinfo= function(){
//         return `${this.title} was directed by ${this.director} in ${this.releaseYear}`
//     };
// }
// let movie1 = new Movie("minnal Murali", "basil joseph", 2022);
// let movie2 = new Movie("lucifer", "prithiraj", 2020) 

// console.log(movie1.getinfo());
