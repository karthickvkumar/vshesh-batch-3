// Number -> Any numerical value from Positive, Negative, Fractional, Decimal

// Syntax To create a Variable (Temp Storage)

// var variable_name = value;
// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var score = 400;
console.log(score);

// String -> Any text value which is typed inside '' or ""

var email_id = "karthick@gmail.com";
console.log(email_id);

// Boolean -> Either true or false

var result_status = true;
console.log(result_status);

var future_value;
console.log(future_value)

// Object -> It is collection of Key and Values

// var variable_name = {
//   key1 : value,
//   key2 : value
// }

// key -> Similar to variable_name -> it should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

var first_name = "karthick";
var last_name = "kumar";
var roll_number = 47859;
var grade = "A+";
var _location = "Chennai";

var studentDetails = {
  first_name : "karthick",
  last_name : "kumar",
  roll_number : 47859,
  grade : "A+",
  location : "Chennai"
}
console.log(studentDetails);

// Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value. 

// To Read a Value -> object_variable_name.key;
console.log(studentDetails.first_name);
console.log(studentDetails.grade);

// To Insert a new Value -> object_variable_name.newKey = value;
studentDetails.blood_group = "O positive";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;
studentDetails.location = "Mumbai";

// To delete a existing Record -> delete object_variable_name.key
delete studentDetails.location;

// Array -> It is a collection of List data (List of Data)
// Syntax of creating an Array

// var variable_name = [ value_1, value_2, ... , Value_n ];
// value -> Number, String, Boolean, Object, Array, Function

var list_of_mark = [70, 85, 57, 78, 35];

var name_list = ["asdfsadf", "reer", "dfbdf", "rtyrh"];

var studentList = [
  { name : "Karthick", age : 24},
  { name : "Ak", age : 20},
  { name : "Yuvi", age : 25}
];

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

// Insert a new value into Array

// push() -> Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);

studentList.push({name: "Kumar", age: 28}, {name: "YK", age: 27});

// unshift() -> Insert a new value at the start of array record
// array_variable_name.unshift(value_1, value_2, ... , value_n);

studentList.unshift({name : "Zyan", age : 29});

// To Read value from Array
// array_variable_name[index]

console.log(studentList[2].name);

// To edit a existing value from Array
// array_variable_name[index] = value;

studentList[2].name = "Dinesh";

// To delete an value
// array_variable_name.splice(index, deleteCount);

studentList.splice(2, 1);

// Function -> Block of Code 

// Syntax for Creating a Function (Function Definition)

// function function_name(){
//   // Define all our code
// }

// function_name -> It should be a Proper text value -> a-z, A-Z, 0-9, $, _


// Syntax for Executing/Running the Function (Function Invocation)

// function_name();

function onLogin(){
  var result = "You have loggin to the application";
  console.log(result);
}

// Operators
// 1. Arithmetic Operator -> +, -, *, /, %, ++, --
// 2. Assignment Operator -> =
// 3. Comparision Operator -> <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator -> &&, ||, !

// && - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! - NOT
// ! true -> false
// ! false -> true

//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem Statement
1. We need to provide age(Number - Data type) as input for a program 
2. If the given age is greater than or equal to 18 -> Output - The user is eligible for Vote
3. If the given age is less then 18 -> Output - The user is not eligible for vote
*/

function check_voiting_status(){
  var age = prompt("Enter your User Age");
  if(age >= 18){
    console.log("The user is eligible for Vote");
  }
  else{
    console.log("The user is not eligible for vote");
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
1. To give person age as input -> Number
2. idenfity -> less then 18 -> The person is Minor
2. idenfity -> greater then or equal to 18 and less than 60 -> The person is Major
3. idenfity -> greater then or equal to 60 -> The person is Super Citizen
*/

function check_person_category(){
  var age = prompt("Enter your User Age");
  if(age < 18){
    console.log("The person is Minor");
  }
  else if(age >= 18 && age < 60){
    console.log("The person is Major");
  }
  else{
    console.log("The person is Super Citizen");
  }
}