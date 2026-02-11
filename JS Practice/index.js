// // chap 01 Alert

// var num = 10;
// alert(num);
// alert("Hello World!");

// // chap 02 Variables for Strings

// var name = "Basit";
// console.log(name);

// name = "Abdul Basit";
// console.log(name);

// var age;
// age = 19;
// console.log(age);

// var thanks = "Thanks for your input!!";
// alert(thanks);

// // chap 03 Variables for Numbers

// var weight = 50;
// console.log(weight);
// weight = 75;
// console.log(weight);
// weight = weight + 25;
// console.log(weight);

// var num1 = 50;
// var num2 = 25;
// var sum = num1 + num2;
// console.log(sum);

// var str = "23 ";
// console.log(str);
// var newStr = str + 7;
// console.log(newStr);

// var nums = 125;
// console.log(nums);
// var newNum = nums + 25;
// console.log(newNum);

// // var 1stName = "Basit" // variable name is illegal
// var name1st = "Basit"; // variable name is legal

// alert(150);
// alert(nums);

// // chap 04 Variable Names Legal and Illegal

// // Illegal variable name

// // var user name  = "abdul_basit79247"   // spaces not allowed
// // var user-name = "abdul_basit79247"    // dash, hyphen not allowed
// // var 1user = "abdul_basit79247"        // start with number not allowed

// // var na me;
// // var 111 = 15
// // var @ = "basit"
// // var alert = "thanks for watching"
// // var const = "fixed"
// // var flower  = "rose";
// //console.log(Flower)        // ReferenceError: Flower is not defined,     JS is caseSensitive, So, flower ≠ Flower
// //console.log(@)              // SyntaxError: Invalid or unexpected token,  This special char not allowed
// //console.log(const);        // SyntaxError: Unexpected token 'const',     JS keyword not allowed,
// //console.log(alert);         // JS keyword not allowed

// // legal variable name

// var isLoggedIn = true; // camelCase Most recommended
// var UserProfile = "Basit"; // Allowed, but specific use for classes & constructors
// var user_name = "abdul_basit79247"; // Allowed, but not recommended, This mostly happens in databases or python.

// var camelCase = "perfect"; // camelCase is the best variable name
// var $ = "basit";
// var _ = "basit";
// console.log(111);
// console.log($);
// console.log(_);

// // chap 05, Math expressions: Familiar operators

// var num3 = 2 + 2;
// console.log(num3);
// alert(2 + 2);

// var num4 = 3 * 12;
// console.log(num4);

// var num4 = 12 - 24;
// console.log(num4);

// //  modulus operator , remainder deta ha
// var num6 = 10 % 3;
// console.log(num6);

// //  divide operator
// var num7 = 10 / 3;
// console.log(num7);

// //  add operator
// var num8 = 10 + 3;
// console.log(num8);

// // subtract operator
// var num9 = 10 - 3;
// console.log(num9);

// // multiply operator
// var num10 = 10 * 3;
// console.log(num10);

// //  chap 06 Math expressions: Unfamiliar operators

// // This is a long way
// var numb = 25;
// var newNumb = numb + 1;
// console.log(numb);
// console.log(newNumb);

// // This is a short way

// // first value use then incearse it
// var num11 = 1;
// console.log(num11);
// var num18 = num11++;
// console.log(num11);
// console.log(num18);

// // first value use then decearse it
// var num12 = 50;
// console.log(num12);
// var num15 = num12--;
// console.log(num15);
// console.log(num12);

// // first value decrease then use it
// var num13 = 50;
// console.log(num13);
// var num16 = --num13;
// console.log(num13);
// console.log(num16);

// // first value increase then use it
// var num14 = 0;
// console.log(num14);
// var num17 = ++num14;
// console.log(num14);
// console.log(num17);

// //  chap 07 Math expressions: Eliminating ambiguity

// // old different answer
// var totalCost = 1 + 3 * 4;

// // new easy rule
// var num19 = 4 * 8 + 5 * 9;
// console.log(num19);

// var num20 = (4 * 8 * 5) / (2 * 2);
// console.log(num20);

// //  chap 08 Concatenating text strings

// var stdName = "Abdul Basit";
// alert("Thanks " + stdName + "!");

// var msg = "Thanks, ";
// var banger = "!";
// alert(msg + stdName + banger);

// var customMsg = msg + stdName + banger;
// alert(customMsg);

// // In Concatenating,,, If you mix strings and numbers... JS automatically converts the numbers to strings...
// alert("2 plus 2 equals " + 2 + 2);

// //  chap 09 Prompts

// var userMsg = prompt("What is your school name?", "Al-Suffa Academy");
// console.log(userMsg);

// var ques = "What is name of your class teacher?";
// var ans = "Abdul Basit";
// var userInp = prompt(ques, ans);
// console.log(userInp);

// var cats = prompt("Number of Cats ?");
// var tooManyCats = cats + 1;
// console.log(cats);
// console.log(tooManyCats);

// // If the user enters nothing and clicks OK, the variable is assigned an empty string: ""
// // If the user clicks Cancel, the variable is assigned a special value, null

// // chap 10 if statements

// var city = prompt("Which city of Pakistan is called the city of lights?");

// if (city === "Karachi" || "karachi") {
//   alert("Correct!");
// } else {
//   alert("Wrong!");
// }

// var score = 0;
// var userIQ;
// var question = prompt("Which city is called the heart of Pakistan?");

// if (question === "lahore" || question === "Lahore") {
//   score++;
//   userIQ = "Genius";
//   alert(question + " is Correct!!!");
//   console.log(score);
// } else {
//   alert(question + " is Wrong!!!");
// }

// // chap 11 Comparison operators

// // 5 === 5         true
// // 5 === "5"       false
// // 5 == "5"        true
// // true == true    true
// // true == false   false
// // true === false  false

// // ==  value compare, type ignore
// // === value + type compare

// var cityQues = prompt("Which city of Pakistan is called the city of lights?");

// if (cityQues !== "Karachi" && cityQues !== "karachi") {
//   alert(cityQues + " is Wrong!");
// } else {
//   alert(cityQues + " is Correct!");
// }

// // all the conditions are true
// if (1 > 0) {
//   console.log("right");
// }
// if (0 < 1) {
//   console.log("right");
// }
// if (1 >= 0) {
//   console.log("right");
// }
// if (1 >= 1) {
//   console.log("right");
// }
// if (0 <= 1) {
//   console.log("right");
// }
// if (1 <= 1) {
//   console.log("right");
// }

// chap 12 if...else and else if statements

// var q = prompt("Who first found Pakistan?")

// if (q === "Qaid e Azam"){
//   alert("Correct!")
// }
// else if (q === "Allama Iqbal"){
//   alert("Incorrect but close")
// }
// else{
//   alert("Incorrect")
// }

//  chap 13 Testing sets of conditions

// var age = prompt("What is your age?");
// var weight = prompt("What is your weight?");
// var res = prompt("What is your reseidence?");

// if (
//   age <= 65 &&
//   age >= 18 &&
//   weight <= 300 &&
//   (res === "Karachi" || res === "karachi")
// ) {
//   alert("You are selected!");
// } else {
//   alert("You are not selected!");
// }

//  chap 14 if statements nested

// same condition , Simple logic

// if ((x === y || a === b) && c === d) {
//   g = h;
// } else {
//   e = f;
// }

// same condition , complex logic

// if (c === d) {
//   if (x === y) {
//     g = h;
//   } else if (a === b) {
//     g = h;
//   } else {
//     e = f;
//   }
// } else {
//   e = f;
// }



//  chap 15 Arrays

// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan", "Sukkur", "Larkana"]

// console.log(cities[2])
// console.log(cities[7])
// console.log(cities[5])
// console.log(cities[1])
// console.log(cities[0])

// alert("Welcome to " + cities[3])

// var mixedArr = [1, "Abdul Basit", "P", true]
// console.log(mixedArr[1])
// console.log(mixedArr[3])



//  chap 16 Arrays: Adding and removing elements

// var pets  = []

// pets[0] = "dog"
// pets[2] = "cat"
// pets[3] = "bird"

// console.log(pets)     // (4) ['dog', empty, 'cat', 'bird']
// console.log(pets[1])  // undefined

// pets[1] = "lizard"
// pets[4] = "snake"
// pets[5] = "horse"

// console.log(pets)      // (4) ['dog', 'lizard', 'cat', 'bird', 'snake', 'horse']
// console.log(pets[1])   // lizard
// console.log(pets[4])   // snake
// console.log(pets[5])   // horse


// Now replace array values
// console.log(pets[3])   // bird
// pets[3] = "fish"
// console.log(pets[3])   // fish

//  remove the last element of an array using pop method
// pets.pop()
// console.log(pets)     

// add one or more elements to the end of an array using push method
// pets.push("ferret", "elephant")
// console.log(pets)     



//  chap 17 Arrays: Removing, inserting, and extracting elements

// Removes the first element of an array
// console.log(pets[0])     
// pets.shift()
// console.log(pets)     
// console.log(pets[0])     

// Adds one or more elements to the beginning
// console.log(pets[0])   
// console.log(pets[1])  
// pets.unshift("lion", "zebra") 
// console.log(pets)     
// console.log(pets[0])   
// console.log(pets[1]) 

// Used to insert and/or remove elements anywhere in the array
// array.splice(startIndex, deleteCount, addItems...)

// add + delete
// console.log(pets)     
// pets.splice(3, 2, "markhor", "dolphin", "shark" )
// console.log(pets)  

//  only delete
// console.log(pets)     
// pets.splice(5, 3)
// console.log(pets)     

// only add
// console.log(pets)     
// pets.splice(3, 0, "goat", "duck", "bear", "monkey")
// console.log(pets)     

// Copies part of an array into a new array
// The second number is the index AFTER the last copied element
// Copies from index 4, Stops before index 8
// var newPets = pets.slice(4, 8)
// console.log(newPets)



// chap 18 for loops

// var checkCitySafe = prompt("Enter your city name to check safe/unsafe")
// var safeCity = ["Lahore", "Pindi","Islamabad", "Multan"]

// for(var i = 0 ; i <= 3 ; i++){
//     if(checkCitySafe === safeCity[i]){
//         alert(checkCitySafe + " is safe city...")
//     }
// }



// chap 19 for loops: Flags, Booleans, array length, and loopus interruptus

// Not Recommended for simple for loop condition:
// long, complex method: for loop

// var checkCitySafe = prompt("Enter your city name to check safe/unsafe")
// var safeCity = ["Lahore", "Pindi","Islamabad", "Multan"]
// var flag = false

// for(var i = 0 ; i < safeCity.length ; i++){
//     if(checkCitySafe === safeCity[i]){
//         flag = true
//         alert(checkCitySafe + " is safe city...")
//         break
//     }
// }
// if(!flag){
//    alert(checkCitySafe + " is unsafe city...")
// }



// Recommended:
// simple, easy, short, clean, industry level method: includes()

// var checkCitySafe = prompt("Enter your city name")
// var safeCity = ["Lahore", "Pindi", "Islamabad", "Multan"]

// if (safeCity.includes(checkCitySafe)) {
//     alert(checkCitySafe + " is safe city...")
// } else {
//     alert(checkCitySafe + " is unsafe city...")
// }