// Task#26-30
Q:1
var a = prompt("Enter a positive integer");
var b = Number(a);
var c = Math.round(a);
var d = Math.floor(a);
var e = Math.ceil(a);
document.write("number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e);

Q:2
var a = prompt("Enter a negative floating point number");
var b = Number(a);
var c = Math.round(a);
var d = Math.floor(a);
var e = Math.ceil(a);
document.write("number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e + "<br><br>");

Q:3
var absolute = Math.abs(-4);
var y = Math.abs(5);
document.write("The absolute value of -4 is " + absolute + "<br>The absolute value of 5 is " + y + "<br><br>");

Q:4
var value5 = Math.random()*5;
var floor5 = Math.floor(value5);
document.write("random dice value: " + floor5 + "<br>");
var value7 = Math.random()*7;
var floor7 = Math.floor(value7);
document.write("random dice value: " + floor7 + "<br><br>");

Q:5
var value = Math.floor( Math.random() * 2 ) +1;
document.write("<br><br>Random dice Value : " + value);
if(value === 2){
    document.write("<br>Random coin Value : Heads")
} else{
    document.write("<br>Random coin Value : Tails")
}


Q:6
var random = Math.floor( Math.random() * 100 ) +1;
document.write("<br><br>Random Dice Value : " + random);

Q:7
var input = prompt("Enter your weight in kilograms");
var p = parseInt(input);
document.write("The weight of user is " + input  + " kilograms");

Q:8
var sceret = Math.floor(Math.random() * 10) +1;
var guess = +prompt('Enter a Number Between 1 to 10 ');
if(sceret === guess){
    alert('You Win!');
} else{
    alert('Try Again!');
}
