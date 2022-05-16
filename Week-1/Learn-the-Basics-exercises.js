/* The HYF homeworks for week-1 :

The exercises from the website : https://www.learn-js.org/. */

// Exercises-1 : Hello, World!

console.log ( "Hello," + " " + "World!"); // or :
console.log ( "Hello, World!");


// Exercises-2 : Variables and Types :

/* Exercise
You must define the following variables:

A number called myNumber which contains the number 4;
A string called myString which contains the sentence Variables are great.;
A boolean called myBoolean which contains the value false; */

let myNumber = 4;
let myString = "Variables are great";
let myBoolean = false;

// Exercises-3 : Arrays :

/* Exercise
You must define an array with the following three variables:

A string which has the value of "What is the meaning of life?"
A number which has a value of 42
A boolean which has a value of true */

let myArray = [ "What is the meaning of life?", 42 , true ];

// Exercises-4 : Manipulating Array:

/* In this tutorial, you must manipulate the array called myArray and do the following:

Push the number 42 to the end of the array
Shift a variable from the beginning of the array */

let myArray2 = [ 1, 2 , 3 , 4 , 5 , 6];
myArray2.push ( 42 );
myArray2.shift ();

console.log (myArray2);

// Exercises-5 : Manipulating Array:

/* In this exercise, you do the following:

Connect the firstName and lastName to construct the variable fullName, but with a space (" ") in between the first and last name.
Multiply the variable myNumber by 2 and put the result in meaningOfLife. */

let firstName = "Amer";
let lastName = "Mohammad";

let fullName = firstName + " " + lastName;

let myNumber1 = 5;
let meaningOfLife = myNumber1 * 2 ;

console.log ( myNumber1);
console.log ( meaningOfLife);

// Exercises-6 : Conditions:

/* In this exercise, you must construct an if inside the checkNumber function
 statement that checks if the number myNumber is equal to 42.
  If that is the case, the function must print out using console.
  log the word correct. If myNumber is not equal to 42,
   the function must print out using console.log the word incorrect.
    You can name the argument passed to a function by supplying the name
     inside the parentheses. For example, function myFunction(myArgument).*/

function comparing ( number ) {

    if ( number == 42) {
        console.log ( "Correct");
    }
    else {
        console.log ( "Incorrect" );
    }
}

comparing ( 50 );

// Exercises-7 : Loops:

/*In this exercise, you must write a for loop that iterates on the
 myArray variable and prints out all of its members.*/

let myarray3 = [ "a","b","c"];

for (i=0; i < myarray3.length; i++)
{
    console.log ( "The array index is "+ i + " and the array memeber is " + myarray3[i]);
}

// Exercises-8 : Objects:

/* You must define an object called person with the following members:

The member firstName of the person is "Jack"
The member lastName of the person is "Smith"
The member age of the person is 19
The member employed of the person is true */

let person = { firstName:"Jack" , lastName:"Smith" , age:19 , employed:true };

// Exercises-9 : Functions:

// Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

function multiplyFive(number)
{
    return number*5;
}
console.log (multiplyFive(10));

// Exercises-10 : Pop-up Boxes:

/* Make a variable test set it equal to a prompt box, and type "Hi!" in it (without the quotes)
 when it pops up. Note: your pop-up blocker must not be enabled. */

// let test = prompt("hi");


// Exercises-11 : Callback:

// Define a function called callback which receives an argument and prints it out.

let callback = function ( number) {
    console.log ( "The number is: "+number);
}

callback(5);

// Exercises-12 : Arrow Functions:

// Define an arrow function divideByTwo which accepts a number and returns that number divided by 2.

let divideByTwo = (number) => { return number/2;}

console.log ( divideByTwo(6));