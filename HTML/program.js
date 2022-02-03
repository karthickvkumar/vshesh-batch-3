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