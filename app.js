// Chapter 1 to 67


// //chapter 1 : alert//

// //Q1
// alert("hello visiter");

// //Q2
// alert("Error! Please enter a valid password.");

// //Q3
// alert('Welcome to JS Land... \n Happy Coding!');

// //Q4
// alert("Welcome to JS land...");

// //Q5
// console.log(alert("Hello... I can run JS through my web browser's console"))

// //Q6
// //in htmlfile

// //Q7
// // C.

// //chapter 2 : Variable for strings

// //Q1
// var username;

// //Q2
// var myName = "Muhammad Hamza Dandia";

// //Q3
// var message = "hello World";
// alert(message);

// //Q4
// var student = "Jhone Doe";
// var studentAge = "16 years old"
// var certified = "certified Mobile Application Development"
// alert(student);
// alert(studentAge)
// alert(certified)

// //Q5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// //Q6
// var email = "hamzajawwad456@gmail.com";
// alert(email);

// //Q7
// var book = "A smarter way to learn JavaScript";
// alert(book);

// //Q8
// var htmlview = "Yah! I can write HTML content through Javascript";
// document.write(htmlview);

// //Q9
// var tag = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(tag);

// //chapter 3 : variable for numbers

// //Q1
// var Age = "I am " + 15 + " years old ";
// alert(Age);

// //Q2
// var track = "You have visited this site" + 14 + "times";
// alert(track);

// //Q3
// var birthyear = "<br>" + "<br>" + "My birth year is " +  2004 ;
// document.write(birthyear);

// //Q4
// var shop ="<br>" + "<br>" + "<b>" + "John Doe" + "</b>" + " ordered" + "<b>" +  5  + " T-shirt(s)" + "</b>" + " on XYZ Clothing store";
// document.write(shop);

           
// //chapter no 4 : Variable name :legal and illigal

// //Q1
// var hamza , jawwad , dandia;

// //Q2 : legal
// var hamza , hamzaJawwad , Hamza123  , hamza_556 , asdsa$_34;

// //Q2 : illegal
// // var 12adsdfgd , ddd& , hamza-jawwad , hamza jawwad , var;
// // commented because of error//

// //Q3a
// var stating = "<br>" + "<br>" + "<b>" + "Rules for naming JS variables" + "</b>";
// document.write(stating);


// //Q3b
// var names = "<br>" + "<br>" + "Variable names can only contain letters, numbers, underscores, or dollar signs. For example $my_1stVariable";
// document.write(names);

// //Q3c
// var namess = "<br>" + "<br>" + "Variable names must begin with a letter, an underscore (_) or a dollar sign ($). $hamza, _hamza or hamza";
// document.write(namess);

// //Q3d
// var namesss = "<br>" + "<br>" + "Variable names are case sensitive";
// document.write(namesss);


// //Q3e
// var namessss = "<br>" + "<br>" + "Variable names should not be JS keywords";
// document.write(namessss);

// //chapter no 5 : MATH EXPRESSIONS 


// //Q1
// var A = 3;
// var B = 5;
// var sum = A+B;
// document.write("<br>" + "<br>" + "Sum of 3 and 5 is " + sum);

// //Q2
// var A = 3;
// var B = 5;
// var sub = A-B;
// document.write("<br>" + "<br>" + "subtraction of 3 and 5 is " + sub);

// var A = 3;
// var B = 5;
// var mul = A*B;
// document.write("<br>" + "<br>" + "multiply of 3 and 5 is " + mul);

// var A = 3;
// var B = 5;
// var div = A/B;
// document.write("<br>" + "<br>" + "divide of 3 and 5 is " + div);

// var A = 3;
// var B = 5;
// var mod = A%B;
// document.write("<br>" + "<br>" + "modulus of 3 and 5 is " + mod);


// //Q3a,b
// var  Mathematic = "<br>" + "<br>" + "Value after variable declaration is:" + typeof Mathematic ;
// document.write(Mathematic);
// //Q3c,d
// var Mathematic1 ="<br>" + "<br>" + "initial value is:" + 5;
// document.write(Mathematic1)
// //Q3 e f
// var i = 5;
// var increment = ++i;
// document.write("<br>" + "<br>" + "value after increment is:" + increment);

// //Q3 g h
// var i = 5;
// var increment = ++i + 7;
// document.write("<br>" + "<br>" + "Value after addition is:" + increment);

// //Q3 i j
// var i = 5;
// var increment = --i + 8; 
// document.write("<br>" + "<br>" + "Value after decrement is:" + increment);

// //Q3 k l
// var i = 5;
// var increment = 12%3  ; 
// document.write("<br>" + "<br>" + "The remainder is :" + increment);



// //Q4
// var movie = 600;
// var multi = movie*5;
// document.write("<br>" + "<br>" +  "total cost to buy 5 tickets to movie is " + multi + "PKR");

// //Q5
// document.write("<br>" + "<br>" + "<b>" + "<h1>" + "Table of 4" + "</h1>" + "</b>");
// var table = 4;
// document.write("<br>");
// for (i = 1 ; i <= 10 ; i++){
// document.write(table + " x " + i + "= " + table*i + "<br>");
// }

// //Q6
// var Celsius = 25;




// //Q7
// var item1 = 650;
// var item2 =100;
// var orderQ1 = 3;
// var orderQ2 = 7;
// var shipping = 100;
// var total = (item1 * orderQ1) + (item2 * orderQ2) + shipping;
// document.write( "<br>" + "<b>" + "<h1>" + "SHOPPING CART" + "</h1>" + "</b>");
// document.write( "<br>" +  "Price of item 1 is " + item1 );
// document.write( "<br>" +  "Ordered quantity of item 1 is " + orderQ1 );
// document.write( "<br>" +  "Price of item 2 is " + item2 );
// document.write( "<br>" +  "Ordered quantity of item 2 is " + orderQ2 );
// document.write( "<br>" +  " Shipping charges is " + shipping );
// document.write( "<br>" + "<br>" + "  total cost of your order is " + total );


// //Q8
// var totalMarks = 980;
// var obtMarks = 804;
// var percentage = obtMarks/totalMarks * 100;
// document.write( "<br>" + "<b>" + "<h1>" + "MARKSHEET" + "</h1>" + "</b>");
// document.write( "<br>" + "total Marks" + totalMarks);
// document.write( "<br>" +  "Obtained Marks " + obtMarks);
// document.write( "<br>" +   "percentage " + percentage);


// //Q9
// var UsDollar = 10;
// var SaudiRiyals = 25;
// var us_pk = UsDollar*104.80;
// var sad_pk = SaudiRiyals*28;
// var tot_pk = us_pk + sad_pk;
// document.write( "<br>" + "<b>" + "<h1>" + "CURRENCY IN PKR" + "</h1>" + "</b>");
// document.write( " Total Currency in PKR: " + tot_pk);

// //Q10 
// var memory = (10 + 5 * 10 )/2;

// //Q11
// var current_year = 2020;
// var birth_year = 2004;
// var age_cal = current_year-birth_year;
// document.write( "<br>" + "<b>" + "<h1>" + "AGE CALCULATOR" + "</h1>" + "</b>");
// document.write("<br>" + " current year: " + current_year);
// document.write("<br>" + " Birth year: " + birth_year);
// document.write("<br>" + " your age is: " + age_cal);

// //Q12 
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * 20 * 20;
// document.write( "<br>" + "<b>" + "<h1>" + "The Geometrizer" + "</h1>" + "</b>");
// document.write("<br>" + " radius of a circle is " + radius);
// document.write("<br>" + " The circumference is " +  circumference);
// document.write("<br>" + " The area is " + area);


// // CHAPTER NO 21-25
// // Q1
// var user_First = prompt("Enter first name");
// var user_Second = prompt("Enter second name");
// var fullName = user_First + " " + user_Second;
// alert("Hello " + fullName);

// //Q2
// var fav_Mobile = prompt("Enter your favourite mobile phone");
// document.write( "<b>" + "My Favourite Phone is: " + "</b>" + fav_Mobile);
// document.write("<br>" + "<b>" + "length of string is " + "</b>" + fav_Mobile.length);

// //Q3
// var ind = "Pakistani";
// document.write("<b>" +"String: " + "</b>" + ind);
// document.write("<br>" +"<b>" +"Index of 'n':  " + "</b>" + ind.indexOf("n"));

// //Q4 
// var last_ind = "Hello World";
// document.write("<b>" +"String: " + "</b>" + last_ind);
// document.write("<br>" +"<b>" +"last Index of 'l':  " + "</b>" + last_ind.lastIndexOf("l"));

// //Q5
// var pak = "Pakistani";
// var pak_slice = pak.slice(3,4)
// document.write("<b>" +"String: " + "</b>" + pak);
// document.write("<br>" +"<b>" +"Character at index 3: " + "</b>" + pak_slice);


// //Q7
// var city = "Hyderabad";
// var city_replace = city.replace("Hyderabad" , "Islamabad");
// document.write("<b>" +"City: " + "</b>" + city);
// document.write("<br>" +"<b>" +"After replacment: " + "</b>" + city_replace);

// //Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g , "&"));

//Q9
// var string = "472";
// var change_num = parseInt(string);
// document.write("<b>" + "Value: " + string );
// document.write("<br>" +"<b>" + "Type: " + typeof string );
// document.write("<br>" +"<b>" + "Value: " +  change_num);
// document.write("<br>" +"<b>" + "Type: " + typeof change_num );

// //Q10
// var user_input = prompt("Enter some words");
// var upperCase = user_input.toUpperCase();
// alert(upperCase);

// //Q11
// var someWords = prompt("Enter some words");
// var first_copy = someWords.slice(0,1);
// var last = someWords.slice(1);
// console.log(last);
// var upper_First = first_copy.toUpperCase();
// var plus_both = upper_First+last;
// document.write("<b>" +"userinput: " + "</b>" + someWords);
// document.write("<br>" + "<b>" + "TitleCase: " + "</b>" + plus_both);

// //Q12
// var num = 35.36;
// var num_change = num.toString();
// var new_Num = num_change.split(".").join("");
// document.write("number: " + num);
// document.write("<br>" +"result: " + new_Num);


// //Q13 ESCAPE
// var user_Name = prompt("Enter username");
// var not_allowed = String.fromCharCode(33, 44, 46, 64);


// //Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcom to ABC bakery what do you want to order sir/ma'am ")
// var lower_case = search.toLowerCase();
// if(A.indexOf(lower_case) !== -1){
//     alert("Yes! " + search + " is " + "available " + "in " + "Index No " + A.indexOf(search) + " in our bakery ")
// }else{
//     alert("Sorry! " + search + " is not " + "available " + "in "  +  "our bakery ")
// }


//Q15
// escape

// //Q16
// var university = "University of Karachi";
// var split = university.split("");
// for( i = 0 ; i < university.length ; i++){
//     document.write( split[i] + "<br>")
// }

// //Q17
// var User_Input = prompt("Enter your country name");
// var char = User_Input.charAt(User_Input.length-1);
// document.write("User input: " + User_Input);
// document.write("<br>" +"last character of a input: " + char);

// // //Q18
// var text = 'The quick brown fox jumps over the lazy dog';
// document.write("Text: " + text);

// document.write("<br>" + "There are " + text.match(/t/gi).length + " occurrence(s) of word 'the' ");


// //CHAPTER NO 26-30
// //Q1
// var  positive_integer = +prompt("Enter a value");
// var round_off = Math.round(positive_integer);
// var floor = Math.floor(positive_integer);
// var ceil = Math.ceil(positive_integer);
// document.write("Number: " + positive_integer);
// document.write("<br>" +"Round Off: " + round_off);
// document.write("<br>" +"floor Value: " + floor);
// document.write("<br>" +"ceil value: " + ceil);

// //Q2
// var  negative_integer = +prompt("Enter a value");
// var round_off = Math.round(negative_integer);
// var floor = Math.floor(negative_integer);
// var ceil = Math.ceil(negative_integer);
// document.write("Number: " + negative_integer);
// document.write("<br>" +"Round Off: " + round_off);
// document.write("<br>" +"floor Value: " + floor);
// document.write("<br>" +"ceil value: " + ceil);

// //Q3
// var pos_num = prompt("Enter a value");
// var abs = Math.abs(pos_num);
// document.write("<b>" +"The absolute value of " + pos_num + " is " + abs + "</b>");

// //Q4
// var random = Math.random() * 7;
// var short_float = Math.floor(random);
// if(short_float === 1){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 2){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 3){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 4){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 5){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 6){
//     alert("Random dice value: " + short_float)
// }
// else{
//     alert("Random dice value: " + 1)
// }

// //Q5
// var head_Tail = prompt("Enter head's coin name");
// var Tail_head = prompt("Enter tail's coin name");
// var random = Math.random() * 2;
// var short_float = Math.floor(random);
// console.log(short_float)
// if(short_float == 0){
//     alert(head_Tail + " won the toss")
// }
// else if(short_float == 1){
//     alert(Tail_head + " won the toss")
// }

// //Q6
// var random = Math.random() * 101;
// var short_float = Math.floor(random);
// document.write("<b>" +" Random number between 1 and 100: " + "</b>" + short_float);

// //Q8
// var value_input = +prompt("Enter a value under 0 to 10");
// var ran_Dom = Math.random() * 11 ;
// var short_float = Math.floor(ran_Dom);
// if(value_input == short_float){
//     alert("congratulation! You won");
// }
// else{
//     alert("Sorry!");
// }

//CHAPTER NO 31-34

// //Q1
// var date = new Date();
// document.write(date);

// //Q2
// var month = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "Npvember" , "December"];
// var date = new Date();
// var Num_month = date.getMonth();
// var name_month = month[Num_month];
// document.write("<b>" + "Current Month: " + "</b>" +name_month);

// //Q3
// var day = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var date = new Date();
// var Num_day = date.getDay();
// var name_day = day[Num_day];
// document.write("<b>" + "Today is " + "</b>" +name_day);

// //Q4
// var day = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var date = new Date();
// var Num_day = date.getDay();
// var name_day = day[Num_day];
// if(Num_day === 0 || Num_day === 6){
//     alert("It's Fun Day!");
// }else{
//     alert("It's Normal Day");
// }

// //Q5
// var date = new Date();
// var Num_month = date.getDate();
// if(Num_month <= 15){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// //Q6
// var date = new Date();
// var milli = date.getTime();
// var diff = milli / (1000*60*60);
// document.write("<b>" + "Current Date: " + "</b>" + date);
// document.write("<br>" +"<b>" + "Ellapsed miliseconds since January 1, 1970:  " + "</b>" + milli);
// document.write("<br>" +"<b>" + "Ellapsed minutes since January 1, 1970:  " + "</b>" + diff);

// //Q7
// var date = new Date();
// var hour = date.getHours();
// if(hour <= 11){
//  alert("It's AM")
// }else{
//     alert("It's PM")
// }


// //Q8
// var laterDate = new Date();
// var year = laterDate.setFullYear(2020);
// var month = laterDate.setMonth(11);
// var date_31 = laterDate.setDate(31);
// var hour = laterDate.setHours(0)
// var min = laterDate.setMinutes(0)
// var Sec = laterDate.setSeconds(0)
// document.write(laterDate);

// //Q9
// var date = new Date();
// var year = date.setFullYear(2015);
// var month = date.setMonth(5);
// var date_31 = date.setDate(18);
// var Current_date = new Date();
// var date_milli = date.getTime();
// var current_milli = Current_date.getTime();
// var dif = current_milli-date_milli;
// var diff = dif/(1000*60*60*24);
// document.write(diff + " Days have passed since 1st Ramadan, 2015");

// //Q10
// var date = new Date();
// var year = date.setFullYear(2015);
// var month = date.setMonth(11);
// var date_31 = date.setDate(5);
// var hour = date.setHours(22);
// var Min = date.setMinutes(50);
// var Sec = date.setSeconds(16);
// var Current_date = new Date();
// var date_milli = date.getTime();
// var current_milli = Current_date.getTime();
// var dif = current_milli-date_milli;
// var diff = dif/(1000);
// document.write("<b>" + "On Reference Date: " + "</b>" + date);
// document.write("<br>" +"<b>" + diff +  "</b>" + " seconds had passed since beginning of 2015");

// //Q11
// var date = new Date();
// var current_date = new Date();
// var hour = date.setHours(14);
// document.write("<b>" + "Current Date: " + "</b>" + current_date);
// document.write("<br>" +"<b>" + " 1 hour ago, it was " + "</b>" + date);

// //Q12
// var date = new Date();
// var current_date = new Date();
// var hour = date.setFullYear(1920);
// document.write("<b>" + "Current Date: " + "</b>" + current_date);
// document.write("<br>" +"<b>" + " 100 year ago, it was " + "</b>" + date);

// //Q13
// var input_date = new Date(prompt("Enter your Birth Date" , "Month Date Year"));
// var year = input_date.getFullYear()
// var current_date = new Date();
// var date_milli = input_date.getTime();
// var current_milli = current_date.getTime();
// var dif = current_milli-date_milli;
// var diff = dif/(1000*60*60*24*30*12);
// var floar = Math.floor(diff)
// document.write("<b>" +"Your Age is: " + "</b>" +floar);
// document.write("<br>" + "<b>" +"Your Birth Year is: " + "</b>" +year + "<br>" + input_date);

// //Q14
// var month = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "Npvember" , "December"];
// var Customer_name = prompt("Enter Your Name");
// var date = new Date();
// var Current_month = date.getMonth();
// var array = month[Current_month];
// var units = 410;
// var charge_perunit = 16;
// var with_dueDate = units*charge_perunit;
// var late_pay = 350
// var after_dueDate = with_dueDate + late_pay; 
// document.write("<h1>" +"<b>" + " K-Electric Bill " + "</b>" + "</h1>");
// document.write("<b>" + "Customer Name: " + "</b>" + Customer_name);
// document.write("<br>" +"<b>" + "Month: " + "</b>" + array);
// document.write("<br>" +"<b>" + "Number Of Units: " + "</b>" + units);
// document.write("<br>" +"<b>" + "Charges per unit: " + "</b>" + charge_perunit);
// document.write("<br>" + "<br>" +"<b>" + " Net Amount Payable (within Due Date):  " + "</b>" + with_dueDate);
// document.write("<br>" + "<b>" + " Late Payment Surcharge: " + "</b>" + late_pay);
// document.write("<br>" + "<b>" + " Gross Amount Payable (after Due Date): " + "</b>" + after_dueDate);


//CHAPTER 35-38
// //Q1
// function date(){
//     document.write(new Date());
// }
// date();

// //Q2
// function greet(){
//   var first_input = prompt("Enter your first name");
//   var last_input = prompt("Enter last name");
//   var gret = "Hello! " + first_input+ " " +last_input;
//   alert(gret);
// }
// greet();

// //Q3
// function add(){
//     var first = +prompt("Enter first Value");
//     var second = +prompt("Enter second Value");
//     var ad = first+second;
//     alert(ad)
//     return ad;
// }
// add();

// //Q4
// function calculator(num1,num2){
//     return num1+num2;
// }
// document.write(calculator(5,5));

// //Q5
// function exp(num1){
//  return num1 ** 2
// }
// document.write(exp(2));

// //Q6
// function factorial(n){
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
  
//   alert( factorial(4) );

// //Q7
// function counting(){
//     var first = +prompt("Enter first value");
//     var end = +prompt("Enter End value");
//     for(i = first ; i <= end ; i++){
//         document.write(i + "<br>")
//     }
// }
// counting();

// //Q8
// function calculateHypotenuse(){
//         alert("Hello! this is a rigth triangle formula please give values for process the formula \n Hypotenuse2 = Base2 + Perpendicular2");
//         var inpur_forbase = +prompt("Enter Base value");
//         var inpur_forperp = +prompt("Enter perp value");
//         var square_base = inpur_forbase ** 2;
//         var square_perp = inpur_forperp ** 2;
//         var hyp_plus = square_base + square_perp;
//         var hyp_square = Math.sqrt(hyp_plus);
//         alert("Hypotenuse = " + hyp_square);
        
//     }
// calculateHypotenuse();

// //Q9 part: 1 
// function calcrectangle(Width , height){
//     return Width * height;
// }
// alert(calcrectangle(2,3));

// // //Q9 part: 2
// function calcrectangle2(width , height){
//     var pro = width * height;
//     alert(pro);
// } 
// calcrectangle2(5,5);

// //Q10
// function pelindrom(){
//     var word = prompt("Enter palindrome word");
//     var check = word.split("").reverse().join("");
//     if(word === check){
//         alert(word + " is palindrome word");
//     }else{
//         alert(word + " is not palindrome word");
//     }
// }
// pelindrom();

// //Q11
// function ocuur(){
//     var text = "JSResourceS.com";
// document.write("Text: " + text);
// document.write("<br>" + "There are " + text.match(/o/gi).length + " occurrence(s) of word 'o' ");
// }
// ocuur();

// //Q14 Part: 1
// function calcCircumference(num1 , num2 , num3){
//     alert("Hello! enter value of radius for this formula \n Circumference of circle = 2πr")
//    var num1 = 2;
//    var num2 = 3.14;
//    var num3 = +prompt("Enter radius value");
//    var tot = num1*num2*num3;
//    alert("Circumference of circle " + tot);
// }
// calcCircumference();

// //Q14 Part: 2
// function calcArea(numb1 , numb2){
//     alert("Hello! enter value of radius for this formula \n Area of circle = πr2")
//     var numb1 = 3.14;
//     var radius = +prompt("Enter radius value");
//     var numb2 = radius ** 2;
//     var total = numb1*numb2;
//     alert("Area of circle " +total);
// }
// calcArea();



// Chapter 38-44

// // Q1
// function power(a,b){
//     alert(a+b);
// }
// power(10,10);

// // Q2
// function leapyear(){
//     var user_leap = +prompt("Enter leap Year");
//   var leap = (user_leap % 100 === 0) ? (user_leap % 400 === 0) : (user_leap % 4 === 0);
//   if(leap == true){
//       alert(user_leap + " is a leap year")
//   }else{
//       alert(user_leap + " is not a leap year")
//   }
// }
// leapyear();

// // Q3
// function triangleSides(a,b,c){
//   var sides = (a+b+c)/2;
//   alert(sides)
// }
// triangleSides(1,1,1);

// function areacalc(a,b,c){
//     var sides = (a+b+c)/2;
//     var area = sides*(sides-a)*(sides-b)*(sides-c);
//     alert(area);
// }
// areacalc(1,1,1);

// // Q4
// var firstSubject = +prompt("enter English Marks");
// var secondSubject = +prompt("enter Urdu Marks");
// var thirdSubject = +prompt("enter Maths Marks");
// var obt = firstSubject+secondSubject+thirdSubject;
// var maxMarks = 100;
// var tot = 300;
// function average(){
//     var average1 = (obt)/3;
//     document.write( "<br>"+"average: " + average1 );
// }
// function percentage(){
//  var per = (obt*100)/tot;
//  document.write( "<br>"+"Total percentage: " + per + "%");
// }
// function mainFunction(){
//   document.write("Total Obtained Marks: " + obt);
//   document.write("<br>"+"Each Subject Marks: " + maxMarks);
//   document.write( "<br>"+"Total Max Marks: " +tot);
//   average();
//   percentage();
// }
// mainFunction();

// Q5
// escape

// // Q6
// var string = prompt("enter sentence");
// string = string.replace( /[aeiou]/g, '' );
// alert(string);


// // Q7
// function findOccurrences() {
//     var text = "Pleases read this application and give me gratuity";
//     var matchValue = text.match(/[aeiou]{2}/g);
//     return matchValue ? matchValue.slice(0) : 0;
//   }
//   var found = findOccurrences();
//   document.write("Such occurrences are " + found);

// // Q8
// var kiloprom = +prompt("enter distance between two cities in (km)");
// document.write("Kilometer = " + kiloprom)
// function meterconv(){
//     var meter = kiloprom * 1000;
//     document.write("<br>" + kiloprom + " kilometer converts to meter = " + meter);
// }
// function feetconv(){
//     var feet = kiloprom * 3280.8398950131;
//     Math.round(feet);
//     document.write("<br>" + kiloprom + " kilometer converts to feet/foot = " + feet);
// }
// function inchconv(){
//     var inches = kiloprom * 39370.078740157;
//     Math.round(inches);
//     document.write("<br>" + kiloprom + " kilometer converts to inches = " + inches);
// }
// function centimeterconv(){
//     var centi = kiloprom * 100000;
//     document.write("<br>" + kiloprom + " kilometer converts to centimeter = " + centi);
// }
// meterconv();feetconv();inchconv();centimeterconv();

// // Q9
// var employees = 1;

// while(employees<=5){
//     var workinghour = +prompt("Enter the working hours of employee" + employees);
//     if(workinghour>40){
//         var overtime = workinghour-40;
//         var pay = overtime*12;
//         document.write( "<br>"+"employee no " + employees + " overtime pay is " + "Rs " + pay)
//     }else{
//         document.write( "<br>"+"You have to work for more than 40 hours to get over time pay")
//     }
//     employees++;
// }

// // Q10
// var cashWithdraw = +prompt("Enter amount to withdraw");
// var ca100 =  cashWithdraw/100;
// var cas50 = (cashWithdraw % 100)/50;
// var cas10 = (((cashWithdraw % 100)% 50)/10);
// var casre = (((cashWithdraw % 100)% 50)%10);
// var mathCon100 =  Math.floor(ca100)
// var mathCon50  =  Math.floor(cas50);
// var mathCon10  =  Math.floor(cas10);
// var mathConre  =  Math.floor(casre);

// document.write("You will have " + mathCon100 + " Hundred Notes " + mathCon50 + 
// " fifty notes " + mathCon10 + " ten notes and remaining rupees are " + mathConre + " paisa" )


// Chapter No 43-48
// // Q1
// function firstQ(){
//     alert("hello World!")
// }

// // Q2
// function mobile(){
//     alert("Thanks for purchasing a phone from us")
// }

// // Q3
// function del(){
//     var row1 = document.getElementById("delete1");
//      row1.innerHTML = " ";
// }
// function dell(){
//     var row2 = document.getElementById("delete2");
//      row2.innerHTML = " ";
// }
// function delll(){
//     var row1 = document.getElementById("delete3");
//      row1.innerHTML = " ";
// }
// function de(){
//     var row1 = document.getElementById("delete4");
//      row1.innerHTML = " ";
// }

// // Q4
// function changeImage(){
//     var chn = document.getElementById("change");
//     chn.src = "img2.jpg"
// }
// function firstImage(){
//     var chn = document.getElementById("change");
//     chn.src = "download.jpg"
// }

// // Q5
// var clicks = 0;
// function increase() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }
// function decrease() {
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }


// chapter no 49-52
// // Q1
// function submi(){
//     var firstNam = document.getElementById("firstName").value;
// var lastName = document.getElementById("lastName").value;
// var birthD = document.getElementById("birth").value;
// var email = document.getElementById("email").value;
// var num = document.getElementById("number").value;
// var pass = document.getElementById("password").value;
//     var first = "First name: " + firstNam + "<br>" + "last Name: " + lastName + "<br>" + "Birth Date: " + birthD + "<br>" + "email: " + email + "<br>" + "number: " + num + "<br>" + "password: " + pass;
//    document.write(first)
// }

// // Q2
// function readMore(){
//     var text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae explicabo cum molestiae optio, exercitationem voluptatum? Cumque, error minima unde deserunt quis asperiores voluptas debitis laudantium suscipit? Obcaecati ea corrupti maxime rerum. Enim possimus eaque voluptates rerum iure quisquam, officiis fugiat blanditiis dolorem quod esse sint ab quibusdam, nisi, adipisci dolores?";
//     var textdisplay = document.getElementById("text");
//     textdisplay.innerHTML = text;
//     var button = document.getElementById("butt").style.display = 'none';
//     var button = document.getElementById("but").style.display = 'inline';
// }
// function lessMore(){
//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, deserunt!";
//     var textdisplay = document.getElementById("text");
//     textdisplay.innerHTML = text;
//     var button = document.getElementById("butt").style.display = 'inline';
//     var button = document.getElementById("but").style.display = 'none';
// }

// // Q3
// function del(){
//     var row1 = document.getElementById("delete1");
//      row1.innerHTML = " ";
// }
// function dell(){
//     var row2 = document.getElementById("delete2");
//      row2.innerHTML = " ";
// }
// function delll(){
//     var row1 = document.getElementById("delete3");
//      row1.innerHTML = " ";
// }
// function de(){
//     var row1 = document.getElementById("delete4");
//      row1.innerHTML = " ";
// }
// function edd(){
//     var row1 = document.getElementById("delete1");
//      row1.innerHTML = "<tr id='delete1'><td>0</td><td>hamza</td><td>11</td><td><button onclick='del()'>delete</button></td></tr>";
// }
// function eddd(){
//     var row1 = document.getElementById("delete2");
//      row1.innerHTML = "<tr id='delete2'><td>1</td><td>ubaid</td><td>9</td><td><button onclick='dell()'>delete</button></td></tr>";
// }
// function edddd(){
//     var row1 = document.getElementById("delete3");
//      row1.innerHTML = "<tr id='delete3'><td>2</td><td>abdul hadi</td><td>10</td><td><button onclick='delll()'>delete</button></td></tr>";
// }
// function ed(){
//     var row1 = document.getElementById("delete4");
//      row1.innerHTML = "<tr id='delete4'><td>3</td><td>mark</td><td>8</td><td><button onclick='de()'>delete</button></td></tr>";
// }



// Chp no 53-57
// Q1
// Q1 in index page with bootstrap model line no: 179

// // Q2
// html of Q2 line no: 236
// function zoomin(){
//     var per = document.getElementById("para");
//     per.style.fontSize = '30px';
// }
// function zoomout(){
//     var per = document.getElementById("para");
//     per.style.fontSize = '20px';
// }



// Chap no 58-67
// // Q1 i
// var first = document.getElementById("main-content").childNodes;

// // Q1 ii
// console.log(first[1]);
// console.log(first[2]);
// console.log(first[3]);
// console.log(first[4]);
// console.log(first[5]);

// // Q1 iii
// var first = document.getElementById("main-content").childNodes;
// console.log(first[1]);
// console.log(first[2]);
// console.log(first[3]);
// console.log(first[4]);
// console.log(first[5]);

// // Q1 iv
// var placeHolder = document.getElementById("first-name");
// placeHolder.value = "Hamza";

// // Q1 v
// var placeHolder = document.getElementById("last-name");
// placeHolder.value = "Jawwad";
// var placeHolder = document.getElementById("email");
// placeHolder.value = "hamzajawwad456@gmail.com";


// // Q2 i
// var type = document.getElementById("form-content").nodeType;
// console.log(type);

// // Q2 ii
// var type = document.getElementById("last-name").nodeType;
// var typ = document.getElementById("last-name").childNodes;
// console.log(type);
// console.log(typ[0]);

// // Q2 iv
// var main_first = document.getElementById("main-content").firstChild;
// console.log(main_first)
// var main_last = document.getElementById("main-content").lastChild;
// console.log(main_last)
