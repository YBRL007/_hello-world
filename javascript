<!DOCTYPE html>
<html>
<body>

<h1>What Can JavaScript Do?</h1>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button"
onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">
Click Me!</button>

<img id="myImage" onclick="changeImage()" src="pic_bulboff.gif" width="100" height="180">

<p>Click the light bulb to turn on/off the light.</p>

<script>
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.src = "pic_bulbon.gif";
    }
}
</script>

<h1>What Can JavaScript Do?</h1>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px";           
    x.style.color = "red"; 
}
</script>

<h1>JavaScript Can Validate Input</h1>

<p>Please input a number between 1 and 10:</p>

<input id="numb">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>

<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

<body>

<h1>JavaScript in Head</h1>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<body>

<h1>JavaScript in Body</h1>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

<body>

<h1>External JavaScript</h1>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> myFunction is stored in an external file called "myScript.js".</p>

<script src="myScript.js"></script>

</body>

<body>

<h1>External JavaScript</h1>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> myFunction is stored in an external file called "myScript.js".</p>

<script src="myScript.js"></script>

</body>

<script>
window.alert(5 + 6);
</script>


<script>
document.write(5 + 6);
</script>


<button type="button" onclick="document.write(5 + 6)">Try it</button>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<p>
Activate debugging in your browser (Chrome, IE, Firefox) with F12, and select "Console" in the debugger menu.
</p>

<script>
console.log(5 + 6);
</script>

<h1>JavaScript Statements</h1>

<p>Statements are separated by semicolons.</p>

<p>The variables x, y, and z are assigned the values 5, 6, and 11:</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>JavaScript Numbers</h1>

<p>Number can be written with or without decimals.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 10.50;
</script>

<h1>JavaScript Strings</h1>

<p>Strings can be written with double or single quotes.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 'John Doe';
</script>

<h1>JavaScript Variables</h1>

<p>In this example, x is defined as a variable.
Then, x is assigned the value of 6:</p>

<p id="demo"></p>

<script>
var x;
x = 6;
document.getElementById("demo").innerHTML = x;
</script>

<h1>Assigning Values</h1>

<p>In JavaScript the = operator is used to assign values to variables.</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
document.getElementById("demo").innerHTML = x + y;
</script>

<h1>JavaScript Operators</h1>

<p>JavaScript uses arithmetic operators to compute values (just like algebra).</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = (5 + 6) * 10;
</script>

<h1>JavaScript Expressions</h1>

<p>Expressions compute to values.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 * 10;
</script>

<h1>JavaScript Expressions</h1>

<p>Expressions compute to values.</p>

<p id="demo"></p>

<script>
var x = 5;
document.getElementById("demo").innerHTML = x * 10;
</script>

<h1>JavaScript Expressions</h1>

<p>Expressions compute to values.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "John" + " "  + "Doe";
</script>

<h1>The var Keyword Creates a Variable</h1>

<p id="demo"></p>

<script>
var x = 5 + 6;
var y = x * 10;
document.getElementById("demo").innerHTML = y;
</script>

<h1>Comments are NOT Executed</h1>

<p id="demo"></p>

<script>
var x = 5;
// var x = 6; I will not be executed
document.getElementById("demo").innerHTML = x;
</script>

<p>Try change lastName to lastname.</p>

<p id="demo"></p>

<script>
var lastName = "Doe";
var lastname = "Peterson";
document.getElementById("demo").innerHTML = lastName;
</script>

<p>In HTML, JavaScript statements are "commands" to the browser.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello Dolly.";
</script>

<p>JavaScript code (or just JavaScript) is a list of JavaScript statements.</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

<p>JavaScript statements are separated by semicolon.</p>

<p id="demo1"></p>

<script>
a = 1;
b = 2;
c = a + b;
document.getElementById("demo1").innerHTML = c;
</script>

<p>Multiple statements on one line is allowed.</p>

<p id="demo1"></p>

<script>
a = 1; b = 2; c = a + b;
document.getElementById("demo1").innerHTML = c;
</script>

<h1>My Web Page</h1>

<p>
The best place to break a code line is after an operator or a comma.
</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"Hello Dolly.";
</script>

<h1>My Web Page</h1>

<p id="myPar">I am a paragraph.</p>
<div id="myDiv">I am a div.</div>

<p>
<button type="button" onclick="myFunction()">Try it</button>
</p>

<script>
function myFunction() {
    document.getElementById("myPar").innerHTML = "Hello Dolly.";
    document.getElementById("myDiv").innerHTML = "How are you?";
}
</script>

<p>When you click on "Try it", the two elements will change.</p>

<h1 id="myH"></h1>
<p id="myP"></p>

<script>
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";
// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

<p><strong>Note:</strong> The comments are not executed.</p>

<p id="demo"></p>

<script>
var x = 5;      // Declare x, give it the value of 5
var y = x + 2;  // Declare y, give it the value of x + 2 

document.getElementById("demo").innerHTML = y; // Write y to demo
</script>

<p><strong>Note:</strong> The comments are not executed.</p>

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

<h1 id="myH"></h1>

<p id="myP"></p>

<script>
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

<p><strong>Note:</strong> The comment is not executed.</p>

<h1 id="myH"></h1>

<p id="myP"></p>

<script>
/*
document.getElementById("myH").innerHTML = "Welcome to my Homepage";
document.getElementById("myP").innerHTML = "This is my first paragraph.";
*/
</script>

<p><strong>Note:</strong> The comment-block is not executed.</p>

<h1>JavaScript Variables</h1>

<p>In this example, x, y, and z are variables</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>JavaScript Variables</h1>

<p id="demo"></p>

<script>
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;
</script>

<h1>JavaScript Variables</h1>

<p>Strings are written with quotes.</p>
<p>Numbers are written without quotes.</p>
<p>Try to experiment with the // comments.</p>

<p id="demo"></p>

<script>
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';

//document.getElementById("demo").innerHTML = pi;
document.getElementById("demo").innerHTML = person;
//document.getElementById("demo").innerHTML = answer;
</script>

<h1>JavaScript Variables</h1>

<p>Create a variable, assign a value to it, and display it:</p>

<p id="demo"></p>

<script>
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>

<h1>JavaScript Variables</h1>

<p>You can declare many variables in one statement.</p>

<p id="demo"></p>

<script>
var person = "John Doe", carName = "Volvo", price = 200;
document.getElementById("demo").innerHTML = carName;
</script>

<h1>JavaScript Variables</h1>

<p>You can declare many variables in one statement.</p>

<p id="demo"></p>

<script>
var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo").innerHTML = carName;
</script>

<h1>JavaScript Variables</h1>

<p>A variable declared without a value will have the value undefined.</p>

<p id="demo"></p>

<script>
var carName;
document.getElementById("demo").innerHTML = carName;
</script>

<h1>JavaScript Variables</h1>

<p>If you re-declare a JavaScript variable, it will not lose its value.</p>

<p id="demo"></p>

<script>
var carName = "Volvo";
var carName;
document.getElementById("demo").innerHTML = carName;
</script>

<h1>JavaScript Variables</h1>

<p>Add 5 + 2 + 3, and display the result:</p>

<p id="demo"></p>

<script>
var x = 5 + 2 + 3;
document.getElementById("demo").innerHTML = x;
</script>

<h1>JavaScript Variables</h1>

<p>Add "John" + " " + "Doe":</p>

<p id="demo"></p>

<script>
var x = "John" + " " + "Doe";
document.getElementById("demo").innerHTML = x;
</script>

<h1>JavaScript Variables</h1>

<p>Add "5" + 2 + 3. and display the result:</p>

<p id="demo"></p>

<script>
var x = "5" + 2 + 3;
document.getElementById("demo").innerHTML = x;
</script>

<h1>JavaScript Operators</h1>

<p>x = 5, y = 2, calculate z = x + y, and display z:</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The + Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The * Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x * y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The = Operator</h1>

<p id="demo"></p>

<script>
var x = 10;
document.getElementById("demo").innerHTML = x;
</script>

<h1>The += Operator</h1>

<p id="demo"></p>

<script>
var x = 10;
x += 5;
document.getElementById("demo").innerHTML = x;
</script>

<h1>JavaScript Operators</h1>

<p>The + operator concatenates (adds) strings.</p>

<p id="demo"></p>

<script>
var txt1 = "John";
var txt2 = "Doe";
document.getElementById("demo").innerHTML = txt1 + " " + txt2;
</script>

<h1>JavaScript Operators</h1>

<p>The assignment operator += can concatenate strings.</p>

<p id="demo"></p>

<script>
txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("demo").innerHTML = txt1;
</script>

<h1>JavaScript Operators</h1>

<p>Adding a number and a string, returns a string.</p>

<p id="demo"></p>

<script>
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
document.getElementById("demo").innerHTML =
x + "<br>" + y + "<br>" + z;
</script>

<p>A typical arithmetic operation takes two numbers and produces a new number.</p>

<p id="demo"></p>

<script>
var x = 100 + 50;
document.getElementById("demo").innerHTML = x;
</script>

<p>A typical arithmetic operation takes two numbers (or variables) and produces a new number.</p>

<p id="demo"></p>

<script>
var a = 100;
var b = 50;
var x = a + b;
document.getElementById("demo").innerHTML = x;
</script>

<p>A typical arithmetic operation takes two numbers (or expressions) and produces a new number.</p>

<p id="demo"></p>

<script>
var a = 3;
var x = (100 + 50) * a;
document.getElementById("demo").innerHTML = x;
</script>


<h1>The + Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The - Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x - y;
document.getElementById("demo").innerHTML = z
</script>

<h1>The * Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x * y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The / Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x / y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The % Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
var y = 2;
var z = x % y;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The ++ Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
x++;
var z = x;
document.getElementById("demo").innerHTML = z;
</script>

<h1>The -- Operator</h1>

<p id="demo"></p>

<script>
var x = 5;
x--;
var z = x;
document.getElementById("demo").innerHTML = z;
</script>

<p>Multiplication has precedence over addition.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 100 + 50 * 3;
</script>

<p>Multiplication has precedence over addition.</p>
<p>But parenthesis has precedence over multiplication.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = (100 + 50) * 3;
</script>

<p>When many operations has the same precedence, they are computed from left to right.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 100 + 50 - 3;
</script>




</body>
</html>
