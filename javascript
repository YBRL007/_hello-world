JavaScript is one of the 3 languages all web developers must learn:

   1. HTML to define the content of web pages

   2. CSS to specify the layout of web pages

   3. JavaScript to program the behavior of web pages
-----------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 
--------------------------------------------------------------------
One of many JavaScript HTML methods is getElementById().

This example uses the method to "find" an HTML element (with id="demo") and changes the element content (innerHTML) to "Hello JavaScript":

--------------------------------------- SINGLE':
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">Click Me!</button>

</body>
</html>

JavaScript accepts both double and single quotes:


-----------------------------------------------------DOUBLE: 
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>

JavaScript accepts both double and single quotes:


--------------------------------------------------------------------------

This example changes an HTML image by changing the src (source) attribute of an <img> tag:

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attributes.</p>

<p>In this case JavaScript changes the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>
-------------------------------------------------------------------------------------------------------

Changing the style of an HTML element, is a variant of changing an HTML attribute:

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>


</body>
</html> 
------------------------------------------------------------------------------------------------------------------

Hiding HTML elements can be done by changing the display style:

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>


</body>
</html> 
---------------------------------------------------------------------------------------------------------------------
Showing hidden HTML elements can also be done by changing the display style:

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can show hidden HTML elements.</p>

<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>

</body>
</html> 

------------------------------------------------------------------------------------------------------------------

In HTML, JavaScript code must be inserted between <script> and </script> tags.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

</body>
</html> 
--------------------------------------------------------------------------------------------------------------

JavaScript in <head> or <body>
You can place any number of scripts in an HTML document.

Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

-----------------

JavaScript in <head>
In this example, a JavaScript function is placed in the <head> section of an HTML page.

The function is invoked (called) when a button is clicked:
---------------------

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

<body>

<h2>JavaScript in Head</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

</body>
</html> 

-------------------------------------------------------------------------------------------
JavaScript in <body>
In this example, a JavaScript function is placed in the <body> section of an HTML page.

The function is invoked (called) when a button is clicked:

-----------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html> 

-------------------------------------------------------------------------------------

**// Placing scripts at the bottom of the <body> element improves the display speed, because script compilation slows down the display.//**

----------------------------------------------------------------------------------------------------------------------------------



Scripts can also be placed in external files:

function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
----------------------------------------------------------------------------------------------------------------------------------

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:


<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="myScript.js"></script>

</body>
</html>

---------------------------------------------------------------------------------------------------------------------

You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.

External scripts cannot contain <script> tags.
----------------
External JavaScript Advantages
Placing scripts in external files has some advantages:

It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads

To add several script files to one page  - use several script tags:

<script src="myScript1.js"></script>
<script src="myScript2.js"></script>

------------------------------------------------

External References
External scripts can be referenced with a full URL or with a path relative to the current web page.

This example uses a full URL to link to a script:

<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="https://www.w3schools.com/js/myScript.js"></script>

</body>
</html>
--------------------
This example uses a script located in a specified folder on the current web site:

<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="/js/myScript.js"></script>

</body>
</html>
------------------------------------

This example links to a script located in the same folder as the current page:

<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="myScript.js"></script>

</body>
</html>
-----------------------------------------------------------------------------------------------

JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
Using innerHTML
To access an HTML element, JavaScript can use the document.getElementById(id) method.

The id attribute defines the HTML element. The innerHTML property defines the HTML content:

<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 

----------------------------------------------------------------------------------------------------------------

Changing the innerHTML property of an HTML element is a common way to display data in HTML.

---------------------------------------------------------------------------------------------------------------

Using document.write()
For testing purposes, it is convenient to use document.write():

<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html> 

--------------------------------------------------------------------------------------------------------
Using document.write() after an HTML document is fully loaded, will delete all existing HTML:

<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html> 

--------------------------------------------------------------------------------------------------------------------

Using window.alert()
You can use an alert box to display data:

<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html> 

----------------------------------------------------------------------------------------------------------------------

Using console.log()
For debugging purposes, you can use the console.log() method to display data.

You will learn more about debugging in a later chapter.

<!DOCTYPE html>
<html>
<body>

<h2>Activate debugging with F12</h2>

<p>Select "Console" in the debugger menu. Then click Run again.</p>

<script>
console.log(5 + 6);
</script>

</body>
</html> 

---------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>

<p id="demo"></p>

<script>

var x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";  

</script>

</body>
</html>

--------------------------------------------------------------------------------------------------------------------------

JavaScript Programs
A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

A JavaScript program is a list of programming statements.



In HTML, JavaScript programs are executed by the web browser.

JavaScript Statements
JavaScript statements are composed of:

Values, Operators, Expressions, Keywords, and Comments.

This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>In HTML, JavaScript statements are executed by the browser.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello Dolly.";
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------

Most JavaScript programs contain many JavaScript statements.

The statements are executed, one by one, in the same order as they are written.

JavaScript programs (and JavaScript statements) are often called JavaScript code.
------------------------------------------

Semicolons ;
Semicolons separate JavaScript statements.

Add a semicolon at the end of each executable statement:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>JavaScript statements are separated by semicolons.</p>

<p id="demo1"></p>

<script>
var a, b, c;
a = 1;
b = 2;
c = a + b;
document.getElementById("demo1").innerHTML = c;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------

When separated by semicolons, multiple statements on one line are allowed:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>Multiple statements on one line is allowed.</p>

<p id="demo1"></p>

<script>
var a, b, c;
a = 1; b = 2; c = a + b;
document.getElementById("demo1").innerHTML = c;
</script>

</body>
</html>

On the web, you might see examples without semicolons. 
Ending statements with semicolon is not required, but highly recommended.


--------------------------------------------------------------------------------------------------------------------

JavaScript White Space
JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

The following lines are equivalent:

var person = "Hege";
var person="Hege";

A good practice is to put spaces around operators ( = + - * / ):

var x = y + z;

-----------------------------------------------------------------------------------------------------------------------

JavaScript Line Length and Line Breaks
For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it, is after an operator:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>
The best place to break a code line is after an operator or a comma.
</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"Hello Dolly!";
</script>

</body>
</html>
----------------------------------------------------------------------------------------------------------

JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>JavaScript code blocks are written between { and }</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo1"></p>
<p id="demo2"></p>

<script>
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------

In this tutorial we use 4 spaces of indentation for code blocks.
You will learn more about functions later in this tutorial.

JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	Description
break -----	Terminates a switch or a loop
continue ----	Jumps out of a loop and starts at the top
debugger ----	Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while ----	Executes a block of statements, and repeats the block, while a condition is true
for ----	Marks a block of statements to be executed, as long as a condition is true
function ----	Declares a function
if ... else ----	Marks a block of statements to be executed, depending on a condition
return -----	Exits a function
switch -----	Marks a block of statements to be executed, depending on different cases
try ... catch ----	Implements error handling to a block of statements
var -----	Declares a variable

JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

-------------------------------------------------------------------------------------------------------------------------

JavaScript syntax is the set of rules, how JavaScript programs are constructed:

var x, y;          // How to declare variables
x = 5; y = 6;      // How to assign values
z = x + y;         // How to compute values
JavaScript Values
The JavaScript syntax defines two types of values: Fixed values and variable values.

Fixed values are called literals. Variable values are called variables.

JavaScript Literals
The most important rules for writing fixed values are:

Numbers are written with or without decimals:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Number can be written with or without decimals.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 10.50;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------

Strings are text, written within double or single quotes:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>Strings can be written with double or single quotes.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 'John Doe';
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------

JavaScript Variables
In a programming language, variables are used to store data values.

JavaScript uses the var keyword to declare variables.

An equal sign is used to assign values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>In this example, x is defined as a variable.
Then, x is assigned the value of 6:</p>

<p id="demo"></p>

<script>
var x;
x = 6;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

---------------------------------------------------------------------------------------------------------------------

JavaScript Operators
JavaScript uses arithmetic operators ( + - *  / ) to compute values:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>

<p>JavaScript uses arithmetic operators to compute values (just like algebra).</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = (5 + 6) * 10;
</script>

</body>
</html>

---------------------------------------------------------------------------------------------------------------------------

JavaScript uses an assignment operator ( = ) to assign values to variables:

<!DOCTYPE html>
<html>
<body>

<h2>Assigning JavaScript Values</h2>

<p>In JavaScript the = operator is used to assign values to variables.</p>

<p id="demo"></p>

<script>
var x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------

JavaScript Expressions
An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

For example, 5 * 10 evaluates to 50:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Expressions</h2>

<p>Expressions compute to values.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 * 10;
</script>

</body>
</html>

--------------------------------------------------------------------------------------------------------------------------

Expressions can also contain variable values:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Expressions</h2>

<p>Expressions compute to values.</p>

<p id="demo"></p>

<script>
var x;
x = 5;
document.getElementById("demo").innerHTML = x * 10;
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------------

The values can be of various types, such as numbers and strings.

For example, "John" + " " + "Doe", evaluates to "John Doe":

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Expressions</h2>

<p>Expressions compute to values.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "John" + " "  + "Doe";
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------------

JavaScript Keywords
JavaScript keywords are used to identify actions to be performed.

The var keyword tells the browser to create variables:

<!DOCTYPE html>
<html>
<body>

<h2>The var Keyword Creates Variables</h2>

<p id="demo"></p>

<script>
var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("demo").innerHTML = y;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------

JavaScript Comments
Not all JavaScript statements are "executed".

Code after double slashes // or between /* and */ is treated as a comment.

Comments are ignored, and will not be executed:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comments are NOT Executed</h2>

<p id="demo"></p>

<script>
var x;
x = 5;
// x = 6; I will not be executed
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------

JavaScript Identifiers
Identifiers are names.

In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).

The rules for legal names are much the same in most programming languages.

In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).

Subsequent characters may be letters, digits, underscores, or dollar signs.



Numbers are not allowed as the first character.
This way JavaScript can easily distinguish identifiers from numbers.

JavaScript is Case Sensitive
All JavaScript identifiers are case sensitive. 

The variables lastName and lastname, are two different variables.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript is Case Sensitive</h2>

<p>Try change lastName to lastname.</p>

<p id="demo"></p>

<script>
var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
document.getElementById("demo").innerHTML = lastName;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------

JavaScript and Camel Case
Historically, programmers have used different ways of joining multiple words into one variable name:

Hyphens:

first-name, last-name, master-card, inter-city.

Hyphens are not allowed in JavaScript. They are reserved for subtractions.


Underscore:

first_name, last_name, master_card, inter_city.

Upper Camel Case (Pascal Case):

FirstName, LastName, MasterCard, InterCity.


Lower Camel Case:

JavaScript programmers tend to use camel case that starts with a lowercase letter:

firstName, lastName, masterCard, interCity.

JavaScript Character Set
JavaScript uses the Unicode character set.

Unicode covers (almost) all the characters, punctuations, and symbols in the world.

----------------------------------------------------------------------------------------------------------------------------------

JavaScript comments can be used to explain JavaScript code, and to make it more readable.

JavaScript comments can also be used to prevent execution, when testing alternative code.

Single Line Comments
Single line comments start with //.

Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

This example uses a single-line comment before each code line:

<!DOCTYPE html>
<html>
<body>

<h1 id="myH"></h1>
<p id="myP"></p>

<script>
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

<p><strong>Note:</strong> The comments are not executed.</p>

</body>
</html>
------------------------------------------------------------------------------------------------------------------------

This example uses a single line comment at the end of each line to explain the code:

<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var x = 5;      // Declare x, give it the value of 5
var y = x + 2;  // Declare y, give it the value of x + 2 

document.getElementById("demo").innerHTML = y; // Write y to demo
</script>

<p><strong>Note:</strong> The comments are not executed.</p>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------

Multi-line Comments
Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored by JavaScript.

This example uses a multi-line comment (a comment block) to explain the code:

<!DOCTYPE html>
<html>
<body>

<h1 id="myH"></h1>
<p id="myP"></p>

<script>
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myp"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

<p><strong>Note:</strong> The comment block is not executed.</p>

</body>
</html>
--------------------------------------------------------------------------------------------
It is most common to use single line comments.
Block comments are often used for formal documentation.
--------------------------------------------------------------------------------------------------------------------------------

Using Comments to Prevent Execution
Using comments to prevent execution of code is suitable for code testing.

Adding // in front of a code line changes the code lines from an executable line to a comment.

This example uses // to prevent execution of one of the code lines:

<!DOCTYPE html>
<html>
<body>

<h1 id="myH"></h1>

<p id="myP"></p>

<script>
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

<p><strong>Note:</strong> The comment is not executed.</p>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------

This example uses a comment block to prevent execution of multiple lines:

<!DOCTYPE html>
<html>
<body>

<h1 id="myH"></h1>

<p id="myP"></p>

<script>
/*
document.getElementById("myH").innerHTML = "Welcome to my Homepage";
document.getElementById("myP").innerHTML = "This is my first paragraph.";
*/
</script>

<p><strong>Note:</strong> The comment-block is not executed.</p>

</body>
</html>

----------------------------------------------------------------------------------------------------------------------------

JavaScript variables are containers for storing data values.

In this example, x, y, and z, are variables:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>In this example, x, y, and z are variables.</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
</script>

</body>
</html>

From the example above, you can expect:

x stores the value 5
y stores the value 6
z stores the value 11

--------------------------------------------------------------------------------------------------------------------------------------

In this example, price1, price2, and total, are variables:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p id="demo"></p>

<script>
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;
</script>

</body>
</html>
---------------------------------------------------------------------------------------------------------------------

In programming, just like in algebra, we use variables (like price1) to hold values.

In programming, just like in algebra, we use variables in expressions (total = price1 + price2).

From the example above, you can calculate the total to be 11.

JavaScript variables are containers for storing data values.

-------------------------------------------------------------------------------------------------------------------------

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names

JavaScript identifiers are case-sensitive.

--------------------------

The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

This is different from algebra. The following does not make sense in algebra:

x = x + 5

In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

The "equal to" operator is written like == in JavaScript.

JavaScript Data Types
JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>Strings are written with quotes.</p>
<p>Numbers are written without quotes.</p>

<p id="demo"></p>

<script>
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';

document.getElementById("demo").innerHTML =
pi + "<br>" + person + "<br>" + answer;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------
Declaring (Creating) JavaScript Variables
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var keyword:

var carName;
After the declaration, the variable has no value. (Technically it has the value of undefined)

To assign a value to the variable, use the equal sign:

carName = "Volvo";
You can also assign a value to the variable when you declare it:

var carName = "Volvo";
In the example below, we create a variable called carName and assign the value "Volvo" to it.

Then we "output" the value inside an HTML paragraph with id="demo":

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>Create a variable, assign a value to it, and display it:</p>

<p id="demo"></p>

<script>
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>

</body>
</html>
-------------------------------------------------------------------------------------------------------------------------

It's a good programming practice to declare all variables at the beginning of a script.

--------------------------------------------------------------------------------------------------------------------------

One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with var and separate the variables by comma:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>You can declare many variables in one statement.</p>

<p id="demo"></p>

<script>
var person = "John Doe", carName = "Volvo", price = 200;
document.getElementById("demo").innerHTML = carName;
</script>

</body>
</html>

----------------------------------------------------------------------------------------------------------------------------

A declaration can span multiple lines:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>You can declare many variables in one statement.</p>

<p id="demo"></p>

<script>
var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo").innerHTML = carName;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------

Value = undefined
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>A variable declared without a value will have the value undefined.</p>

<p id="demo"></p>

<script>
var carName;
document.getElementById("demo").innerHTML = carName;
</script>

</body>
</html>

---------------------------------------------------------------------------------------------------------------------------

Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>If you re-declare a JavaScript variable, it will not lose its value.</p>

<p id="demo"></p>

<script>
var carName = "Volvo";
var carName;
document.getElementById("demo").innerHTML = carName;
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------

JavaScript Arithmetic
As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>The result of adding 5 + 2 + 3:</p>

<p id="demo"></p>

<script>
var x = 5 + 2 + 3;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
-----------------------------------------------------------------------------------------------------------------------------

You can also add strings, but strings will be concatenated:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>The result of adding "John" + " " + "Doe":</p>

<p id="demo"></p>

<script>
var x = "John" + " " + "Doe";
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
--------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>The result of adding "5" + 2 + 3:</p>

<p id="demo"></p>

<script>
x = "5" + 2 + 3;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
-------------------------------------------------------------------------------------------------------------------------------------------

If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
-------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>The result of adding 2 + 3 + "5":</p>

<p id="demo"></p>

<script>
var x = 2 + 3 + "5"
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
-----------------------------------------------------------------------------------------------------------------------------------

Assign values to variables and add them together:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>

<p>x = 5, y = 2, calculate z = x + y, and display z:</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------

The assignment operator (=) assigns a value to a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The = Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------

The addition operator (+) adds numbers:

<!DOCTYPE html>
<html>
<body>

<h2>The + Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------

The multiplication operator (*) multiplies numbers.

<!DOCTYPE html>
<html>
<body>

<h2>The * Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x * y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------------------

JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers:

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
Arithmetic operators are fully described in the JS Arithmetic chapter.

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
The addition assignment operator (+=) adds a value to a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The += Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x += 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

--------------------------------------------------------------------------------------------------------------------------

JavaScript String Operators
The + operator can also be used to add (concatenate) strings.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>

<p>The + operator concatenates (adds) strings.</p>

<p id="demo"></p>

<script>
var txt1 = "John";
var txt2 = "Doe";
document.getElementById("demo").innerHTML = txt1 + " " + txt2;
</script>

</body>
</html>
------------------------------------------------------------------------------------------------------------------------

The += assignment operator can also be used to add (concatenate) strings:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>

<p>The assignment operator += can concatenate strings.</p>

<p id="demo"></p>

<script>
txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("demo").innerHTML = txt1;
</script>

</body>
</html>
---------------------------------------------------------------------------------------------------------------------------------

When used on strings, the + operator is called the concatenation operator.
---------------------------------------------------------------------------------------------------------------------

Adding Strings and Numbers
Adding two numbers, will return the sum, but adding a number and a string will return a string:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>

<p>Adding a number and a string, returns a string.</p>

<p id="demo"></p>

<script>
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
document.getElementById("demo").innerHTML =
x + "<br>" + y + "<br>" + z;
</script>

</body>
</html>
----------------------------------------------------------------------------------------------------------------------------------

If you add a number and a string, the result will be a string!
---------------------------------------------------------------------------------------------------------------------------

JavaScript Comparison Operators
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
Comparison operators are fully described in the JS Comparisons chapter.

JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not
Logical operators are fully described in the JS Comparisons chapter.

JavaScript Type Operators
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
Type operators are fully described in the JS Type Conversion chapter.

JavaScript Bitwise Operators
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	Zero fill left shift	5 << 1	0101 << 1	1010	 10
>>	Signed right shift	5 >> 1	0101 >> 1	0010	  2
>>>	Zero fill right shift	5 >>> 1	0101 >>> 1	0010	  2
The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010

Bitwise operators are fully described in the JS Bitwise chapter.

-----------------------------------------------------------------------------------------------------------------------------

JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
Arithmetic Operations
A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

<!DOCTYPE html>
<html>
<body>

<p>A typical arithmetic operation takes two numbers and produces a new number.</p>

<p id="demo"></p>

<script>
var x = 100 + 50;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------

or variables:

<!DOCTYPE html>
<html>
<body>

<p>A typical arithmetic operation takes two numbers (or variables) and produces a new number.</p>

<p id="demo"></p>

<script>
var a = 100;
var b = 50;
var x = a + b;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
-----------------------------------------------------------------------------------------------------------------------------
or expressions:

<!DOCTYPE html>
<html>
<body>

<p>A typical arithmetic operation takes two numbers (or expressions) and produces a new number.</p>

<p id="demo"></p>

<script>
var a = 3;
var x = (100 + 50) * a;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

----------------------------------------------------------------------------------------------------------------------------------

Operators and Operands
The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

Operand	Operator	Operand
100	+	50
The addition operator (+) adds numbers:

<!DOCTYPE html>
<html>
<body>

<h2>The + Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>
--------------------------------------------------------------------------------------------------------------------------------

The subtraction operator (-) subtracts numbers.

<!DOCTYPE html>
<html>
<body>

<h2>The - Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x - y;
document.getElementById("demo").innerHTML = z
</script>

</body>
</html>

--------------------------------------------------------------------------------------------------------------------------------

The multiplication operator (*) multiplies numbers.

<!DOCTYPE html>
<html>
<body>

<h2>The * Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x * y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>
----------------------------------------------------------------------------------------------------------------------------------

The division operator (/) divides numbers.

<!DOCTYPE html>
<html>
<body>

<h2>The / Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x / y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>

--------------------------------------------------------------------------------------------------------------------------------------------

The modular operator (%) returns the division remainder.

<!DOCTYPE html>
<html>
<body>

<h2>The % Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x % y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------

The increment operator (++) increments numbers.

<!DOCTYPE html>
<html>
<body>

<h2>The ++ Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
x++;
var z = x;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>
--------------------------------------------------------------------------------------------------------------------------------

The decrement operator (--) decrements numbers.

<!DOCTYPE html>
<html>
<body>

<h2>The -- Operator</h2>

<p id="demo"></p>

<script>
var x = 5;
x--;
var z = x;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>

----------------------------------------------------------------------------------------------------------------------------

Operator Precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.

<!DOCTYPE html>
<html>
<body>

<p>Multiplication has precedence over addition.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 100 + 50 * 3;
</script>

</body>
</html>
-------------------------------------------------------------------------------------------------------------------------------

Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

Is the addition or the multiplication done first?

As in traditional school mathematics, the multiplication is done first.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses:

<!DOCTYPE html>
<html>
<body>

<p>Multiplication has precedence over addition.</p>
<p>But parenthesis has precedence over multiplication.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = (100 + 50) * 3;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------

When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right:

<!DOCTYPE html>
<html>
<body>

<p>When many operations has the same precedence, they are computed from left to right.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 100 + 50 - 3;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------

JavaScript Operator Precedence Values
Value	Operator	Description	Example
20	( )	Expression grouping	(3 + 4)
 	 	 	 
19	.	Member	person.name
19	[]	Member	person["name"]
19	()	Function call	myFunction()
19	new	Create	new Date()
 	 	 	 
17	++	Postfix Increment	i++
17	--	Postfix Decrement	i--
 	 	 	 
16	++	Prefix Increment	++i
16	--	Prefix Decrement	--i
16	!	Logical not	!(x==y)
 	 	 	 
15	typeof	Type	typeof x
15	**	Exponentiation	10 ** 2
 	 	 	 
14	*	Multiplication	10 * 5
14	/	Division	10 / 5
14	%	Modulo division	10 % 5
 	 	 	 
13	+	Addition	10 + 5
13	-	Subtraction	10 - 5
 	 	 	 
12	<<	Shift left	x << 2
12	>>	Shift right	x >> 2
12	>>>	Shift right (unsigned)	x >>> 2
 	 	 	 
11	<	Less than	x < y 
11	<=	Less than or equal	x <= y
11	>	Greater than	x > y
11	>=	Greater than or equal	x >= y
 	 	 	 
10	==	Equal	x == y
10	===	Strict equal	x === y
10	!=	Unequal	x != y
10	!==	Strict unequal	x !== y
 	 	 	 
6	&&	Logical and	x && y
5	||	Logical or	x || y
 	 	 	 
3	=	Assignment	x = y
3	+=	Assignment	x += y
3	-=	Assignment	x -= y
3	*=	Assignment	x *= y
3	%=	Assignment	x %= y
3	<<=	Assignment	x <<= y
3	>>=	Assignment	x >>= y
3	>>>=	Assignment	x >>>= y
3	&=	Assignment	x &= y
3	^=	Assignment	x ^= y
3	|=	Assignment	x |= y

Expressions in parentheses are fully computed before the value is used in the rest of the expression.
---------------------------------------------------------------------------------------------------------------------------------------------------

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
**=	x **= y	x = x ** y
The **= operator is an experimental part of the ECMAScript 2016 proposal (ES7). It is not stable across browsers. Do not use it.

------------------------------------------------------------------------------------------------------------------------------

Assignment Examples
The = assignment operator assigns a value to a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The = Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------

The += assignment operator adds a value to a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The += Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x += 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
------------------------------------------------------------------------------------------------------------------------------------------
The -= assignment operator subtracts a value from a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The -= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x -= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------
The *= assignment operator multiplies a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The *= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x *= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
------------------------------------------------------------------------------------
The /= assignment divides a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The /= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x /= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------

The %= assignment operator assigns a remainder to a variable.

<!DOCTYPE html>
<html>
<body>

<h2>The %= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x %= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
---------------------------------------------------------------------------------------------------------------------------------

JavaScript Data Types

JavaScript variables can hold many data types: numbers, strings, objects and more:

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
The Concept of Data Types
In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

var x = 16 + "Volvo";
Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

var x = "16" + "Volvo";
When adding a number and a string, JavaScript will treat the number as a string.

---------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>When adding a number and a string, JavaScript will treat the number as a string.</p>

<p id="demo"></p>

<script>
var x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
--------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>When adding a string and a number, JavaScript will treat the number as a string.</p>

<p id="demo"></p>

<script>
var x = "Volvo" + 16;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
-------------------------------------------------------------------------------------------------------------------------------------

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>JavaScript evaluates expressions from left to right. Different sequences can produce different results:</p>

<p id="demo"></p>

<script>
var x = 16 + 4 + "Volvo";
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>JavaScript evaluates expressions from left to right. Different sequences can produce different results:</p>

<p id="demo"></p>

<script>
var x = "Volvo" + 16 + 4;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------

In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.

JavaScript Types are Dynamic.
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>

<p>JavaScript has dynamic types. This means that the same variable can be used to hold different data types:</p>

<p id="demo"></p>

<script>
var x;               // Now x is undefined
x = 5;               // Now x is a Number
x = "John";          // Now x is a String

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

----------------------------------------------------------------------------------------------------------------------------------

JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>Strings are written with quotes. You can use single or double quotes:</p>

<p id="demo"></p>

<script>
var carName1 = "Volvo XC60";
var carName2 = 'Volvo XC60';

document.getElementById("demo").innerHTML =
carName1 + "<br>" + 
carName2; 
</script>

</body>
</html>

----------------------------------------------------------------------------------------------------------------------------------------

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</p>

<p id="demo"></p>

<script>
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

document.getElementById("demo").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;
</script>

</body>
</html>
--------------------------------------------------------------------------------------------------------------------------------------

You will learn more about strings later in this tutorial.

JavaScript Numbers
JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Numbers can be written with, or without decimals:</p>

<p id="demo"></p>

<script>
var x1 = 34.00;
var x2 = 34;
var x3 = 3.14;

document.getElementById("demo").innerHTML =
x1 + "<br>" + x2 + "<br>" + x3;
</script>

</body>

----------------------------------------------------------------------------------------------------------------------------------

Extra large or extra small numbers can be written with scientific (exponential) notation:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Extra large or extra small numbers can be written with scientific (exponential) notation:</p>

<p id="demo"></p>

<script>
var y = 123e5;
var z = 123e-5;

document.getElementById("demo").innerHTML =
y + "<br>" + z;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------

You will learn more about numbers later in this tutorial.

JavaScript Booleans
Booleans can only have two values: true or false.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Booleans</h2>

<p>Booleans can have two values: true or false:</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 5;
var z = 6;
document.getElementById("demo").innerHTML =
(x == y) + "<br>" + (x == z);
</script>

</body>
</html>

---------------------------------------------------------------------------------------------------------------------------
Booleans are often used in conditional testing.

You will learn more about conditional testing later in this tutorial.

JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>Array indexes are zero-based, which means the first item is [0].</p>

<p id="demo"></p>

<script>
var cars = ["Saab","Volvo","BMW"];

document.getElementById("demo").innerHTML = cars[0];
</script>

</body>
</html>
---------------------------------------------------------------------------------------------------------------------------

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

You will learn more about arrays later in this tutorial.

JavaScript Objects
JavaScript objects are written with curly braces.

Object properties are written as name:value pairs, separated by commas.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>

<p id="demo"></p>

<script>
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

</body>
</html>
-------------------------------------------------------------------------------------------------------------------------------

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

You will learn more about objects later in this tutorial.

The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
typeof "" + "<br>" +
typeof "John" + "<br>" + 
typeof "John Doe";
</script>
</body>
</html>
-----------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);
</script>

</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------

Undefined
In JavaScript, a variable without a value, has the value undefined. The typeof is also undefined.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>The value (and the data type) of a variable with no value is <b>undefined</b>.</p>

<p id="demo"></p>

<script>
var car;
document.getElementById("demo").innerHTML =
car + "<br>" + typeof car;
</script>

</body>
</html> 
----------------------------------------------------------------------------------------------------------------------------------

Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>Variables can be emptied if you set the value to <b>undefined</b>.</p>

<p id="demo"></p>

<script>
var car = "Volvo";
car = undefined;
document.getElementById("demo").innerHTML =
car + "<br>" + typeof car;
</script>

</body>
</html> 

---------------------------------------------------------------------------------------------------------------------------------

Empty Values
An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>An empty string has both a legal value and a type:</p>

<p id="demo"></p>

<script>
var car = "";
document.getElementById("demo").innerHTML =
"The value is: " +
car + "<br>" +
"The type is: " + typeof car;
</script>

</body>
</html>
-----------------------------------------------------------------------------------------------------------------------------------

Null
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object.

You can consider it a bug in JavaScript that typeof null is an object. It should be null.

You can empty an object by setting it to null:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>Objects can be emptied by setting the value to <b>null</b>.</p>

<p id="demo"></p>

<script>
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;
document.getElementById("demo").innerHTML = typeof person;
</script>

</body>
</html> 
-----------------------------------------------------------------------------------------------------------------------------------------

You can also empty an object by setting it to undefined:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>Objects can be emptied by setting the value to <b>undefined</b>.</p>

<p id="demo"></p>

<script>
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;
document.getElementById("demo").innerHTML = person;
</script>

</body>
</html> 
--------------------------------------------------------------------------------------------------------------------------
Difference Between Undefined and Null
Undefined and null are equal in value but different in type:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>Undefined and null are equal in value but different in type:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
typeof undefined + "<br>" +
typeof null + "<br><br>" +
(null === undefined) + "<br>" +
(null == undefined);
</script>

</body>
</html> 

-----------------------------------------------------------------------------------------------------------------------------------

Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
typeof "john" + "<br>" + 
typeof 3.14 + "<br>" +
typeof true + "<br>" +
typeof false + "<br>" +
typeof x;
</script>

</body>
</html>

------------------------------------------------------------------------------------------------------------------------------

Complex Data
The typeof operator can return one of two complex types:

function
object
The typeof operator returns object for both objects, arrays, and null.

The typeof operator does not return object for functions.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>The typeof operator returns object for both objects, arrays, and null.</p>
<p>The typeof operator does not return object for functions.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
typeof {name:'john', age:34} + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof null + "<br>" +
typeof function myFunc(){};
</script>

</body>
</html>

-------------------------------------------------------------------------------------------------------------------------

The typeof operator returns "object" for arrays because in JavaScript arrays are objects.

-----------------------------------------------------------------------------------------------------------------------------


