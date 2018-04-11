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



