//==== Chapter 1 ====/

// 01
alert("Javascript Alert!");

// 02
alert("Error! Please Enter a valid Password");

// 03
alert("Welcome to JS Land... \n Happy Coding.");

// 04
alert("Welcome to JS Land");
alert("Happy Coding!");

// 05
console.log("Hello... I can run JS through my web browser console");

//06
alert("My Name Is Ahsan");

//07
alert("Body (after your page’s HTML)");

//==== Chapter 2 ====//

// 01
var username="my first variable";
alert(username);

// 02
var myName="My Name Is Ahsan Jamil";
alert(myName);

// 03
var jsVariable="Hello World";
alert(jsVariable);

// 04
var userName="Ahsan Jamil";
var age="23";
var course="Web and Mobile Application";

alert(userName);
alert(age);
alert(course);

// 05
var foodName="Pizza \n Pizz \n Piz \n Pi \n P";
alert(foodName);

// 06
var email="My email address is ahsanjamil@live.com";
alert(email);

// 07
var book="I an rying to learn from the book A smarter way to learn JavaScript";
alert(book);

// 08
document.write("Yah! i can write HTML content through JAVASCRIPT");

// 09
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");


//==== Chapter 3 ====//

// 01
var myAge="Iam 23 Year old";
alert(myAge);

// 02
var visit="You have visited this site 10 times";
alert(visit);

// 03
var birthYear=1997;
document.write("My Birth year is" + birthYear + "<br> Data type of my declair variable is number");

// 04
document.write("Ahsan Jamil ordered 5 T-shirt(s) on Ebay Clothing store.");


//==== Chapter 4 ====//

// 01
var title= "<b>Rules for naming JS variables</b>";
var ques1= "Variable names can only contain number, $ and_ . For Example: $my_1stVariable";
var ques2= "Variables must begin with a $name, _name or name. For example $name, _name or name";
var ques3= "Variable names are case sencetive";
var ques4= "Variable names should not be JS Key word";

document.write(title + "<br>" + ques1 + "<br>" + ques2 + "<br>" + ques3 + "<br>" + ques4);


//==== Chapter 5 ====//

// 01
var a=44;
var b=20;
var sumof=a+b;
document.write("sum of 44 and 20 is equal to: "+ sumof);

// 02
var a=44;
var b=20;
var sum=a+b;
var subtract=a-b;
var multiply= a*b;
var divide= a/b;
var moduls=44%20;
document.write("sum of 44 and 20 is : "+ sum +"<br>");
document.write("subtract of 44 and 20 is : "+ subtract +"<br>");
document.write("multiply of 44 and 20 is : "+ multiply +"<br>");
document.write("divide of 44 and 20 is : "+ divide +"<br>");
document.write("moduls of 44 and 20 is : "+ moduls +"<br>");

// 03
var a=5;
document.write("Initial Value "+a+"<br>"); //5
var b= ++a;
document.write("Value after incerement is "+b+"<br>"); //6
var c=b+a+1
document.write("Value after addition is "+c+"<br>"); //13
var d=c-1;
document.write("Value after decrement is "+d+"<br>"); //12
var e=d-12;
document.write("The remander is "+e); //0

// 04
var costMovie=600;
var totCost=costMovie*5;
document.write("Total cost to buy 5 tickets to a movie is "+totCost+"PKR");

// 05
//table of 4
document.write("Table of 4"+"<br>")
var tab=4;
document.write(tab+"*"+"1"+"="+tab*1+"<br>");
document.write(tab+"*"+"2"+"="+tab*2+"<br>");
document.write(tab+"*"+"3"+"="+tab*3+"<br>");
document.write(tab+"*"+"4"+"="+tab*4+"<br>");
document.write(tab+"*"+"5"+"="+tab*5+"<br>");
document.write(tab+"*"+"6"+"="+tab*6+"<br>");
document.write(tab+"*"+"71"+"="+tab*7+"<br>");
document.write(tab+"*"+"8"+"="+tab*8+"<br>");
document.write(tab+"*"+"9"+"="+tab*9+"<br>");
document.write(tab+"*"+"10"+"="+tab*10+"<br>");

// 06

var cel_Temp=25;
var fer_Temp=70;

document.write("70 F is "+(fer_Temp-32)*5/9+" C");
document.write("<br>");
document.write("25 C is "+(cel_Temp*9/5)+32+" F");

// 07
document.write("<h3>Shopping Cart</h3>"+"<br>");

var itema=650;
var itemb=100;
var shp=100;
document.write("price of item 1 is "+itema+"<br>"); 
document.write("Quantity of item 1 is 3"+"<br>");
document.write("price of item 2 is "+itemb+"<br>");
document.write("Quantity of item 2 is 7"+"<br>");
document.write("Shipping Charges"+shp+"<br>");

document.write("Total cost of your order is "+(itema*3+itemb*7+shp));

// 08
var obt_mks=658;
var tot_mks=800;

var per_mks=obt_mks*100/800;
document.write("<h3>Marks Sheet</h3>")
document.write("Total marks: "+tot_mks+"<br>");
document.write("Marks obtain: "+obt_mks+"<br>");
document.write("Percentage: "+per_mks+"%");

// 09 
var us_dollar=10;
var sud_riyal=25;


document.write("Total Currency in  PKR: "+(us_dollar*104.80+sud_riyal*28));

// 10
var add=5;
var mul=10;
var div=2;
document.write(64+add*mul/div);

// 11
var curt_year=2020;
var brth_year=1997;

document.write("<h3>Age Calculator</h3>");
document.write("Current Year: " + curt_year+ "<br>");
document.write("Birth Year: " + brth_year+ "<br>");
document.write("Year Age is: " + (curt_year-brth_year));

// 12
document.write("<h3>The Geometrizer</h3>");
var radius=20;
var pie=3.142;

document.write("Radius of a circle:"+ radius+"<br>");
document.write("The circumference is:" + 2*pie*radius+"<br>");
document.write("The area is:" + pie*radius*radius);

// 13
var fvrt_snk="chocklate chip";
var cunt_age=15;
var mx_age=65;
var amnt_snk=3;
document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("Favourite Snack: " + fvrt_snk +"<br>");
document.write("Current age: " + cunt_age +"<br>");
document.write("Estimated Maximum Age : " + mx_age+"<br>");
document.write("Amount of snacks per day: " + amnt_snk +"<br>");

document.write("You will need "  +(mx_age-cunt_age)*amnt_snk+" to last you until the ripe old age of " + mx_age);


//==== Chapter 6-9 ====//

// 01
document.write("Result:"+"<br>");
document.write("The value of a is: 10"+ "<br><br><br>");

var a=10;
var fis= ++a;
document.write("The value of ++a is: "+fis+"<br>")
document.write("Now the value of a is: "+fis+"<br><br>");
var sec= a++ + 1;
document.write("The value of a++ is: "+fis+"<br>")
document.write("Now the value of a is: "+sec+"<br><br>");
var thr= --a;
document.write("The value of --a is: "+fis+"<br>")
document.write("Now the value of a is: "+thr+"<br><br>");
var four= a-- - 1;
document.write("The value of a-- is: "+fis+"<br>")
document.write("Now the value of a is: "+four+"<br>");

// 02
var a=2;
var b=1;

var result= --a - --b + ++b + b--;

document.write("a is : "+a+"<br>");
document.write("b is : "+b+"<br>");
document.write("result is : "+result+"<br>");

// 03
var userName=prompt("Enter Your Name");
document.write("<h5>"+userName+"</h5>");

// 04
// Not available in assignment paper

// 05
var a=prompt("Enter Value");

if(a==""){
document.write("Table of 5"+"<br>")
var tab=5;
document.write(tab+"*"+"1"+"="+tab*1+"<br>");
document.write(tab+"*"+"2"+"="+tab*2+"<br>");
document.write(tab+"*"+"3"+"="+tab*3+"<br>");
document.write(tab+"*"+"4"+"="+tab*4+"<br>");
document.write(tab+"*"+"5"+"="+tab*5+"<br>");
document.write(tab+"*"+"6"+"="+tab*6+"<br>");
document.write(tab+"*"+"71"+"="+tab*7+"<br>");
document.write(tab+"*"+"8"+"="+tab*8+"<br>");
document.write(tab+"*"+"9"+"="+tab*9+"<br>");
document.write(tab+"*"+"10"+"="+tab*10+"<br>");
}else{
document.write(a+"*"+"1"+"="+a*1+"<br>");
document.write(a+"*"+"2"+"="+a*2+"<br>");
document.write(a+"*"+"3"+"="+a*3+"<br>");
document.write(a+"*"+"4"+"="+a*4+"<br>");
document.write(a+"*"+"5"+"="+a*5+"<br>");
document.write(a+"*"+"6"+"="+a*6+"<br>");
document.write(a+"*"+"71"+"="+a*7+"<br>");
document.write(a+"*"+"8"+"="+a*8+"<br>");
document.write(a+"*"+"9"+"="+a*9+"<br>");
document.write(a+"*"+"10"+"="+a*10+"<br>");
}

// 06
document.write("<h4>Subject &nbsp; Total Marks &nbsp; Obtained Marks &nbsp; Percentage </h4>");

var sub1= prompt("Enter First Subject Name");
var sub2= prompt("Enter Second Subject Name");
var sub3= prompt("Enter Third Subject Name");

var sub_mks1= prompt("Enter First Subject Marks");
var sub_mks2= prompt("Enter Second Subject Marks");
var sub_mks3= prompt("Enter Third Subject Marks");

var sum3 = (+sub_mks1)+(+sub_mks2)+(+sub_mks3);

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sub_mks1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+(sub_mks1*100/100+"%")+""+"<br>");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sub_mks1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+(sub_mks2*100/100+"%")+""+"<br>");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sub_mks1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+(sub_mks3*100/100+"%")+""+"<br>");



document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 300 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sum3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+sum3*100/300+"%"+" ");


//==== Chapter 9-11 ====//

// 01
var userCity= prompt("Enter City Name");
if(userCity == "karachi"){
	document.write("Welcome To The City Of Lights");
}else{
	document.write("Your city is not Karachi");
}

// 02
var userGender= prompt("Enter Your Gender");
if(userGender == "male"){
	document.write("Good Morning Sir");
}else
	if(userGender == "female"){
	document.write("Good Morning Ma’am");
}

// 03
var col1=prompt("Enter First Color");
var col2=prompt("Enter Second Color");
var col3=prompt("Enter Third Color");

if(col1 == "red"){
	var msg="Must Stop";
}else
	if(col1 == "yellow"){
		var msg="Ready to move";
	}else
		if(col1 == "green"){
			var msg="Move now";
		}
if(col2 == "red"){
	var msg1="Must Stop";
}else
	if(col2 == "yellow"){
		var msg1="Ready to move";
	}else
		if(col2 == "green"){
			var msg1="Move now";
		}
if(col3 == "red"){
	var msg2="Must Stop";
}else
	if(col3 == "yellow"){
		var msg2="Ready to move";
	}else
		if(col3 == "green"){
			var msg2="Move now";
		}
document.write("Signal Color"+"&nbsp;&nbsp;&nbsp;&nbsp;"+"Message"+"<br>");
document.write("&nbsp;&nbsp;&nbsp;"+col1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+msg+"<br>");
document.write("&nbsp;&nbsp;&nbsp;"+col2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+msg1+"<br>");
document.write("&nbsp;&nbsp;&nbsp;"+col3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+msg2+"<br>");

// 04
var fuel=prompt("Enter Fuel Value");
if(fuel < 0.25){
	document.write("Please refill the fuel in your car");
}else{
	document.write("Your Fuel amount fine");
}

// 05
var a=4;
if(++a === 5){
	alert("given condition for variable a is true");
}else{
	alert("No Output");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// 06
var sub1= prompt("Emter First Subject Marks");
var sub2= prompt("Emter Second Subject Marks");
var sub3= prompt("Emter Third Subject Marks");

var t_mks1= prompt("Emter First Subject Total Marks");
var t_mks2= prompt("Emter Second Subject Total Marks");
var t_mks3= prompt("Emter Third Subject Total Marks");
//obtain marks
var tot_obt= (+sub1)+(+sub2)+(+sub3);
//total marks
var tot_mks= (+t_mks1)+(+t_mks2)+(+t_mks3);
//percentage
var mks_per= tot_obt*100/tot_mks;

//Grade
if(mks_per > 80){
	var grd="A-one";
	var rmk="Excellent";
}else
	if(mks_per >= 70){
	var grd="A";
		var rmk="Good";
}else
	if(mks_per >= 60){
	var grd="B";
		var rmk="You need to improve";
}else
	if(mks_per < 60){
		var grd="Fail";
		var rmk="sorry";
	}

document.write("<h3>Marks Sheet</h3>");

document.write("Total marks: "+tot_mks+"<br>");
document.write("Marks obtained: "+tot_obt+"<br>");
document.write("Percentage: "+mks_per+"%"+"<br>");
document.write("Grade: "+grd+"<br>");
document.write("Remarks: "+rmk+"<br>");

// 07
var userNo = prompt("Enter Number Range 1-10");
if (userNo == 4) {
  document.write("Bingo! Correct answer");
} else
if (userNo == 4 + 1) {
  document.write("Close enough to the correct answer");
} else {
  document.write("No not Correct");
}

// 08
var userNo=prompt("Enter Number");
var noCheck=userNo%3;
if(noCheck == 0){
	document.write("the number is divisible by 3");
}else{
	document.write("the number is not divisible by 3")
}

// 09
var userNo=prompt("Enter Number");
var noCheck=userNo%2;
if(noCheck == 0){
	document.write("even number");
}else{
	document.write("odd number");
}

// 10
var userTemp=prompt("Enter Temperature Value");
if(userTemp > 40){
	document.write("It is too hot outside");
}else
	if(userTemp > 30){
	document.write("The Weather today is Normal");
}else
	if(userTemp > 20){
	document.write("Today’s Weather is cool");
}else
	if(userTemp > 10){
	document.write("OMG! Today’s weather is so Cool");
}

// 11
var fisVal = prompt("Enter First Value");
var secVal = prompt("Enter Second Value");
var cal = prompt("Enter Operator");

if (cal == "+") {
  var cal_reslt = (+fisVal) + (+secVal);
} else
if (cal == "-") {
  var cal_reslt = fisVal - secVal;
} else
if (cal == "*") {
  var cal_reslt = fisVal * secVal;
} else
if (cal == "/") {
  var cal_reslt = fisVal / secVal;
}
document.write("<h2>"+cal_reslt+"</h2>");


//==== Chapter 12-13 ====//

// 01
var userCode=prompt("Enter Number");

if(userCode>=65 && userCode<=90){
	document.write("uppercase letter");
}else 
if(userCode>=97 && userCode<=122){
	document.write("lower case letter");
}else{
	document.write("Incorrect Input");
}

// 02
var userNumber1=prompt("Enter First Number");
var userNumber2=prompt("Enter Second Number");

if(userNumber1==userNumber2){
	document.write("Both Value are equal");
}else if(userNumber1>userNumber2){
	document.write("First Number are Greater");
}else if(userNumber2>userNumber1){
	document.write("Second Number are Greater");
}

// 03
var userInput=prompt("Enter Number");
if(userInput=="0"){
	document.write("Zero");
}else if(userInput>0){
	document.write("Positive Number");
}else if(userInput<0){
	document.write("Negatine Number");
}

// 04 
var userInput=prompt("Enter Character");
if(userInput=="a" || userInput=="e" || userInput=="i" || userInput=="o" || userInput=="u"){
	document.write("true");
}else{
	document.write("false");
}

// 05
var corectPass="ahsan";

var userPass=prompt("Enter Password");

if(userPass==""){
	document.write("Please enter your password");
}else if(userPass==corectPass){
	document.write("Correct! The password you entered matches the original password");
}else{
	document.write("Incorrect password");
}

// 06
var hour = prompt("Enter Hour");
if (hour < 18) {
var greeting = "Good day";}
else{
var greeting = "Good evening";
}
document.write(greeting);

// 07
var userTime=prompt("Enter Time Value");
if(userTime>=0000 && userTime<1200){
	document.write("Good Morning");
}else if(userTime>=1200 && userTime<1700){
	document.write("Good Afternoon");
}else if(userTime>=1700 && userTime<2100){
	document.write("Good Evening");
}else if(userTime>=2100 && userTime<2350){
	document.write("Good Night");
}


//==== Chapter 13-15 ====//

// 01
var uName=[];
uName[0]="Ahsan";
uName[1]="Jamil";
document.write(uName);

// 02
var userData = [
	{name:"Ahsan" , RollNo: "1234" , Degree: "Engineering"}
];
document.write(userData[0].name+"&nbsp;"+userData[0].RollNo+"&nbsp;"+userData[0].Degree);

// 03
var strData=["ahsan","ahmad","isfahan"];
document.write(strData[0]);
document.write(strData[1]);
document.write(strData[2]);

// 04
var strData=["1264","6464","9595"];
document.write(strData[0]);
document.write(strData[1]);
document.write(strData[2]);

// 05
var bolArray=[0,1,"empty","boolean"]

document.write(Boolean(bolArray[0])+"<br>");
	document.write(Boolean(bolArray[1])+"<br>");
document.write(Boolean(bolArray[2])+"<br>");

// 06
var mixArray=[0,1,"ahsan","bilal",95,64]

document.write(mixArray[0]+"<br>");
document.write(mixArray[1]+"<br>");
document.write(mixArray[2]+"<br>");
document.write(mixArray[3]+"<br>");
document.write(mixArray[4]+"<br>");
document.write(mixArray[5]+"<br>");

// 07
var qul=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write(qul[0]+"<br>");
document.write(qul[1]+"<br>");
document.write(qul[2]+"<br>");
document.write(qul[3]+"<br>");
document.write(qul[4]+"<br>");
document.write(qul[5]+"<br>");
document.write(qul[6]+"<br>");
document.write(qul[7]+"<br>");

// 08
var stdMks=[320,230,480];
document.write("Score of Michael is "+stdMks[0]+" Percentage "+(stdMks[0]*100)/500+"%"+"<br>");
document.write("Score of John is "+stdMks[1]+" Percentage "+(stdMks[1]*100)/500+"%"+"<br>");
document.write("Score of Tony is "+stdMks[2]+" Percentage "+(stdMks[2]*100)/500+"%");

// 09
//9.a
var color=["red","green","blue"];
document.write(color+"<br>");
//9.b
color.push("yellow");
document.write(color+"<br>");
//9.c
color.unshift("pink","grey");
document.write(color+"<br>");
//9.d
color.shift();
document.write(color+"<br>");
//9.e
color.pop();
document.write(color+"<br>");
//9.f
color.splice(2,0,"sky");
document.write(color+"<br>");
//9.e
color.splice(2,1,"meganta");
document.write(color+"<br>");


// 10
var stdScore=[320,230,480,120];

document.write("Score of student: "+stdScore+"<br>");
document.write("Ordered Score of student: "+stdScore.sort());

// 11
var cityName=["karachi","lahore","islamabad","quetta","peshawar"];
document.write("Cities list: "+"<br>");
document.write(cityName+"<br>");
document.write("Selected Cities list: "+"<br>");
 document.write(cityName.slice(2,4)+"<br>");

// 12
var  arr = ["This","is","my","cat"];
document.write("Array"+"<br>");
document.write(arr+"<br>");
document.write("String"+"<br>");
document.write(arr.join());

// 13
 var device=["keyboard","mouse","printer","monitor"];
var a=0;
for(a=0; a<device.length; a++){
	document.write("Out: "+"<br>"+device[a]+"<br>");
}

// 14
var device=["keyboard","mouse","printer","monitor"];
document.write("Out: "+"<br>"+device.reverse()); 

// 15
var phone=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select>");
for(var i=0; i<phone.length; i++){
document.write("<option>"+phone[i]+"</option>"+"<br>");
 
}
document.write("</select>");

//==== Chapter 17-20 ====//

// 01
var mulArray=[
	["Ahsan","isfahan","ahmad"],
	["engineering","business","engineering"]
]
document.write(mulArray[0]+"<br>");
document.write(mulArray[1]);

// 02
var mulArray=[
	[0,1,2,3],
	[1,0,1,2],
	[2,1,0,1],
]
document.write(mulArray[0]+"<br>");
document.write(mulArray[1]+"<br>");
document.write(mulArray[2]);

// 03
for(var i=1; i<11; i++){
	document.write(i+"<br>");
}

// 04
var tab=prompt("Enter Table No");
var tabLgt=prompt("Enter table length");

for(var i=1; i<tabLgt; i++){ 
	
	document.write(tab+"*"+i+"="+tab*i+"<br>");
}

// 05
var fruits=["apple","banana","mango","orange","strawberry"];

for(var i=0; i<fruits.length; i++){
	document.write(fruits[i]+"<br>");
}

// 06
// 6.a
for(var i=1; i<16; i++){
	document.write(i+",");
}

//6.b

for(var i=10; i>0; i--){
	document.write(i+",");
}
 
//6.c
for(var i=0; i<21; i++){
	var j=i%2;
	if(j==0){
		document.write(i+"<br>");
			
	}
}

//6.d
for(var i=0; i<21; i++){
	var j=i%2;
	if(j!=0){
		document.write(i+"<br>");
			
	}
}	
 
//6.e
for(var i=1; i<21; i++){
	var j=i%2;
	if(j==0){
		document.write(i+"k","<br>");
			
	}
}	

// 07
var userCok=prompt("Enter Cookies Name");
var cokkies=["cake","apple pie","cookies","chips","parries"];
cokkies.sort();
for(var i=0; i<cokkies.length; i++){
   if(cokkies[i]===userCok){
	   alert("cookies is avaiable");
   }else{
	alert("We are sorry cookies is not avaiable");
   }
}

// 08
var lgNumber=[24,53,78,91,12];
document.write(Math.max(...lgNumber));

// 09
var lgNumber=[24,53,78,91,12];
document.write(Math.min(...lgNumber));

// 10

for(var i=1; i<101; i++){
	var j=i%5;
	if(j==0){
		document.write(i+"<br>");
			
	}
}

/*=============
		   THE END
		   =============*/




		//    second assignmrnt


		// JavaScript Document
/* Chapter 21 - 25 */

// 01

var userfisName = prompt("Enter Your First Name");
var userlasName = prompt("Enter Your Last Name");
var userFullname=userfisName+userlasName;
document.write(userFullname);


// 02

var mobileModel= prompt("Enter Favrouite Mobile Phone");
document.write(mobileModel+"<br>");
document.write("Length of user Input is: "+mobileModel.length);

// 03

var countName = "pakistani";
var userInput = prompt("Enter Name");
document.write("String: " +countName+"<br>");

document.write("index of "+ userInput+": " +countName.search(userInput));

// 04

var msgName = "hello world";
document.write("String: " +msgName+"<br>");

document.write("Last index of : " +msgName.lastIndexOf() ); 

// 05

var countName = "pakistani";
var userInput = prompt("Enter Name");
document.write("String: " +countName+"<br>");

document.write("index of "+ userInput+": " +countName.charAt(userInput));

// 06

var userfisName = prompt("Enter Your First Name");
var userlasName = prompt("Enter Your Last Name");
var userFullname=userfisName.concat(userlasName);
document.write(userFullname);

// 07

var cityName = "Hyderabad";
var newCity = cityName.replace("Hyder","islam");
document.write(newCity);

//08

var para = "Ali and Sami are best friends. They play cricket and football together";
var chr = /and/gi;
var newPara = para.replace(chr,"&");
document.write(newPara);


// 09

var num = 472;
document.write("Value: "+num+"<br>");
document.write("Type: "+ typeof 472+"<br>");
var newNum = num.toString();
document.write("Value: "+num+"<br>");
document.write("Type: "+ typeof newNum); 

// 10 

var usInput = "peanuts";
var newInput = usInput.toUpperCase();
document.write("User Input: "+ usInput+"<br>");
document.write("Uppercase: "+newInput);

// 11 

var usInput = "javascript";
var newInput = usInput.charAt(0).toUpperCase() + usInput.slice(1)
document.write("User Input: "+ usInput+"<br>");
document.write("Uppercase: "+newInput);

// 12

var userNum = 35.36;
document.write("Number: "+ userNum+"<br>");
var numstr = userNum.toString();
var newNum = Math.trunc(numstr);
document.write("Result: "+ newNum+"<br>");

// 13

var userInput = prompt("User NAme");
 var restric = /[!@,.]/;
        var isValid = restric.test(userInput);
        if (isValid) {
            alert("Enter Valid User Name.");
        } else {
            alert("User Name is: "+ userInput);
        }
    

// 14

var food = ["cake", "apple pie", "cookie", "chips"," patties"]
var userFood = prompt("Enter Food name");

if(food.indexOf(userFood) != -1){
    document.write("Yes available in "+ food.indexOf(userFood));
}else{
     document.write("No available");
}

// 15

var userInput = prompt("User Password");
 var restric = /[A-Za-z0-9]/;
        var isValid = restric.test(userInput);
        if (!isValid) {
            alert("Enter Valid Password.");
        } else {
            alert("User Name is: "+ userInput);
        }

// 16

var uniName = "University of Karachi";

var newUni = uniName.split("");
    
for( var i=0; i<newUni.length; i++){
    
    document.write(newUni[i]+"<br>");
    
}


// 17
var userInput = "pakistan";
document.write(userInput.charAt(userInput.length - 1));


// 18

var para = "The quick brown fox jumps over the lazy dog";
var findWord = para.match(/the/g).length;
document.write("The quick brown fox jumps over the lazy dog There are "+findWord+" occurence of word the");

// Chapter 25 - 30 

 //01

var num = 3.45214;
document.write("Number: "+(num)+"<br>");
document.write("Round of value: "+Math.round(num)+"<br>");
document.write("Floor value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num));


// 02

var num = -2.673;
document.write("Number: "+(num)+"<br>");
document.write("Round of value: "+Math.round(num)+"<br>");
document.write("Floor value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num));


// 03

var num = -4;
document.write("The absolute value of "+num+" is: "+Math.abs(num)+"<br>");


// 04

var rndNum=Math.random();
var rndNum1=Math.random();
document.write("Random dise value: "+Math.random(rndNum)+"<br>");
document.write("Random dise value: "+Math.random(rndNum1)+"<br>");

// 05

var userOne = prompt("Head User");
var userTwo = prompt("Tail User");

var toss = Math.random * 2;
var floor = Math.floor(toss);

if(floor===0){
    document.write("Head "+userOne+ " win the toss");
}else{
    document.write("Tail "+userTwo+ " win the toss");
}



// 06

var num = Math.random() * (100 - 1) + 1;
document.write(Math.round(num))

// 07

var userWeight = prompt("Enter Your Weight");

if(userWeight === "50" || userWeight === "50kgs" || userWeight === "50.2kgs" || userWeight === "50.2kilograms"){
    document.write("The weight of user is " + userWeight);
}else{
    document.write("The weight not exist");
}

// 08

var userInput = prompt("Enter Value Range 1-10");
var num = Math.random() * (10 - 1) + 1;
document.write(Math.round(num))
document.write(userInput)
if(userInput === num){
    document.write("congratulate win the toss");
}else{
    document.write("Try Again");
}
//  javascript third assignment




// Chapter 38-42

//01
function sum(a,b){
    alert(a+b);
}

sum(3,3);

//02
var userYear = prompt("Enter Year");
if(userYear%4==0){
      document.write(userYear+ "is Leap Year")
}else{
      document.write(userYear+ "is No Leap Year")
}

//03
function areaCal(a,b,c){
      var s = (a+b+c)/2;
      var area =Math.sqrt( s*((s-a)*(s-b)*(s-c)));
      alert(area);
 

}
areaCal(56,54,76);

//04
var sub1 = prompt("Enter 1st Subject Marks");
var sub2 = prompt("Enter 2nd Subject Marks");
var sub3 = prompt("Enter 3rd Subject Marks");

function avg(){
      var tAvg=((+sub1)+(+sub2)+(+sub3))/3;
      return tAvg;
}

function per(){
      var tPer=(((+sub1)+(+sub2)+(+sub3))*100)/300;
      return tPer;
}

function main(tAvg,tPer){
      var gAvg= tAvg;
      document.write("Average is"+gAvg+"<br>");
      var gPer= tPer;
      document.write("Percentage is"+gPer);

}
main(sub1,sub2,sub3);


//05
var food = ["cake", "apple pie", "cookie", "chips"," patties"]
var userFood = prompt("Enter Food name");

function ffood(food){
if(food.indexOf(userFood) != -1){
    document.write("Yes available in "+ food.indexOf(userFood));
}else{
     document.write("No available");
}
}
ffood(userFood)


//06
var userPg="Your look awesome";

function remVol(){
     var userPg1 =  userPg.split("");
     var vol = /[aeiou]/ig;
     var volrem = userPg.match(vol);
    var newpgr=[] 
     for(var i=0;i<userPg1.length;i++){
           if(volrem.indexOf(userPg1[i])===-1){

            newpgr.push(userPg1[i])
            

           }
     }
     document.write(newpgr.join(""));
     
}

remVol(userPg);

//07
//pending

//08
var distns = prompt("Enter Distance in KM");

function kmTmet(){
      var rkmTmet=distns*1000;
      document.write("Meter is: "+rkmTmet+"<br>");
}
kmTmet(distns)

function kmTft(){
var rkmTft=distns*3280.84;
document.write("Foot is: "+rkmTft+"<br>")
}
kmTft(distns);

function kmTinc(){
var rkmTinc = distns*39370.1;
document.write("Inches is: "+rkmTinc+"<br>")
}
kmTinc(distns)

function kmTcm(){
var rkmTcm=distns*100000;
document.write("Centimeter is: "+rkmTcm+"<br>")
}
kmTcm(distns)


//09
var userHour=prompt("Enter Working Hour");
document.write("Over Time Apply If Working Hour above 40. Rs:20/h<br>")
function workHourcheck(){
if(userHour>=40){
      var ock1=40/userHour;
      //document.write(Math.floor(ock1))
      var ock2=userHour%40;
      document.write("Over Time Hour:"+ock2+" Over Time Cash is: "+ock2*20)
}else{
      document.write("Over Time is less 40hour")
}
}
workHourcheck(userHour)

//10
document.write("<h3>Note Range Rs:5 to Rs:100</h3>"+"<br>")
var userCash=prompt("Enter Amount");
function noteCheck(){
var a=userCash/100;
    ab=userCash%100;
    document.write("100 Notes Quantity: "+Math.floor(a)+"<br>");
var b=ab/50;
    ba=ab%50;
    document.write("50 Notes Quantity: "+Math.floor(b)+"<br>");
var c=ba/20;
    cb=ba%20;
    document.write("20 Notes Quantity: "+Math.floor(c)+"<br>");
var d=cb/10;
    dc=cb%10;
    document.write("10 Notes Quantity: "+Math.floor(d)+"<br>");
var e=dc/5;
    ed=dc%5;
    document.write("5 Notes Quantity: "+Math.floor(e)+"<br>");
}
noteCheck(userCash);

// Chapter 43-48

//01
function alertbtn(){
      alert("Alert Button Successfully Work")
}

//02
function imgmsg(){
      alert("Thanks for Purchasing Phone from us");
}

//03
function delRow1(){
var getRow1 = document.getElementById("row1");
getRow1.style.display="none";

}
function delRow2(){
      var getRow1 = document.getElementById("row2");
      getRow1.style.display="none";
      
      }
      function delRow3(){
            var getRow1 = document.getElementById("row3");
            getRow1.style.display="none";
            
            }

//04

// task in html file

//05
function inc(){
    var getDis = document.getElementById("display").innerHTML;
    getDis++;
    document.getElementById("display").innerHTML = getDis;
}
function dec(){
      var getDis = document.getElementById("display").innerHTML;
      getDis--;
      document.getElementById("display").innerHTML = getDis;
  }


  // Chapter 49-52

  //01
   
  function getvalue(){
    var uname = document.getElementById('uname');
    var email = document.getElementById('email');
    var password = document.getElementById('pass');
    document.write("User Name: "+uname.value+"<br>");
document.write("Email: "+email.value+"<br>");
document.write("Password: "+password.value+"<br>");
    
}
  

//02


function getvalue(){
    var pgf =document.getElementById('pgf1');
    var pgf2 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto consequatur quod error id nostrum excepturi ea debitis ab sunt delectus voluptatum, blanditiis fugiat perspiciatis laudantium alias nam iusto ducimus nesciunt!"
    
    pgf1.innerHTML=pgf2;
