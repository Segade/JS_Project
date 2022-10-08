let total = 0;
let coverCost = 0;
let fuelCost = 0;
let claimsCost = 0
let caruseCost = 0;
let genderCost = 0;
let securityCost = 0;
let carvalueCost = 0;
let ageCost = 0;
let carageCost = 0;
let milesCost = 0;

let subButton = document.getElementById("submit");
 
const make = ["Audi", "Citroen", "Fiat", "Ford", "Seat", "Toyota"];
const audi= ["A1", "A3", "A4", "A5", "A6", "A7", "A8"];
const citroen = ["C1", "C2", "C3", "C4", "C5", "Picasso", "Berlingo"];
const fiat = ["500", "Cronos", "Movi", "Panda", "Tipo", "Strada"];
const ford = ["Fiesta", "Focus", "Ka", "Kuga", "Mondeo", "Mustan", "Puma"];
const seat = ["Altea", "Arona", "Ibiza", "Leon", "Ateca", "Tarraco"];
const toyota = ["Aigo", "C-HR", "Camri", "Corolla", "Highlander", "Hilux", "Mirai"];


let myCountDown;
let countDown = 240;


 
let validation =  function (e) 
{
let inputs = document.getElementById("f1").elements;
let x = 0;
let texto = "";

/*
inputs.forEach( function(i) {
i.style.backgroundColor = "white";
});
*/
clearBackground(inputs);

while (x< inputs.length && texto == "")
{
 switch (inputs[x].id)
{
case "txtname": let txtname = inputs[x].value;
let name = txtname.trim();
if( name == "" || name.length < 2 )
texto = "A proper name must be entered";

break;

case "txtage":  
if (!isAge(inputs[x].value))
texto = "A proper age must be entered";

break;

case "txtphone": let txtphone = inputs[x].value;
if (!isPhone(txtphone.trim()))
texto = "A proper phone must be entered";

break;

case "txtcarage": let txtcarage = inputs[x].value;
let carage = txtcarage.trim();
 
if (!isCarAge(carage) || carage == ""  )
texto = "A proper car age must be entered";

break;

case "rdmale": 
let g = document.querySelector('[name="gender"]:checked');    
 
if ( g == null)
  texto = "A gender must be chosen";
 
break;

	case "txtmiles" : let txtmiles = inputs[x].value;
let miles = txtmiles.trim();
if (!isMile(miles) || miles == "")
texto = "A proper milage must be entered";

break;
 
case "txtcarvalue": let txtcarvalue = inputs[x].value;
let carvalue = txtcarvalue.trim();
if (!isCarValue(carvalue) || carvalue == "")
texto = "A proper car value must be entered";

 break;

case "txtstartday" : let myDate = document.getElementById("txtstartday").value;
 let pass = false;

if ( validarFormatoFecha(myDate))
if ( existeFecha(myDate))
if (!validarFechaMenorActual(myDate) )
pass = true;

if (!pass)
texto = "A valid date in future must be entered";
break;

case "cbocover":
if (inputs[x].value == "0")
texto = "A type of cover must be eselected";
break;

case "cbomake":
if (inputs[x].value == "0")
texto ="A make must be selected";
break;

case "cbomodel":
if (inputs[x].value == "0")
texto = "A model must be selected";
break;

case "cbofuel" :
if (inputs[x].value == "0")
texto = "A type of fuel must be selected";
break;

case "cboclaims" :
if (inputs[x].value == "0")
texto = "A claims free for must be selected";
break;

case "cbocaruse":
if (inputs[x].value == "0")
texto = "A type of the use of the car must be selected";
break;

case  "rdnone" :
let s = document.querySelector('[name="security"]:checked');    
 
if ( s == null )
texto = "A security option must be selected";

break;

} // end switch 

x++;
} // end while x

if (texto != "")
{
alert (texto);
 
inputs[x-1].style.backgroundColor = "red";

if (x == 3)
inputs[x].style.backgroundColor = "red";

if ( x == 15)
{
inputs[x].style.backgroundColor = "red";
inputs[x+1].style.backgroundColor = "red";
inputs[x+2].style.backgroundColor = "red";
inputs[x+3].style.backgroundColor = "red";
} // end if x = 15



inputs[x-1].focus();

e.preventDefault();
} else {
recordData();
document.getElementById("f1").submit();
} // end if texto empty 

} ;
 

	subButton.addEventListener("click", validation , false);
 

// end sub button listener 

// validation methods 
 
 
function isAge(value) 
{
let pass = false;

if (!isNaN(value))
{
value = Number(value);
if (Number.isInteger(value) && (value > 17 && value < 90) )
pass = true;
}

return pass;
} // end is age

function isPhone(value) {
let pass = false;

if (!isNaN(value) && value.length == 10) 
{
let num = Number(value);
 
 if (Number.isInteger(num) && (value.substring(0,2) == "08" || value.substring(0,2) == "06") )
pass = true;

} // end if nan length 10
return pass;
} // end is phone 

function isCarAge(value)
{
let pass = false;
 
if (!isNaN(value))
{
value = Number(value);
if (Number.isInteger(value) && (value >= 0 && value < 25) )
pass = true;
}

return pass;
} // end is car age 

function isMile(value)
{
let pass = false;

if (!isNaN(value))
{
let num = Number(value);

if (Number.isInteger(num) && num < 500000)
 pass = true;
 

return pass; 
}
} // end is mile 

function isCarValue(value)
{
let pass = false;

if (!isNaN(value))
{
let carvalue = Number(value);

if (Number.isInteger(carvalue)  )
{
 
pass = true;
}
else {
let num = value.split(".");
let dec = Number(num[1]); 
if (dec < 100)
pass = true;
} // end if is integer 

} // end is nan 

return pass;
} // end is car value 

// date validation. got it from a spanish web page, but you won't have problems to understand the structure 
// https://blog.reaccionestudio.com/funciones-para-validar-fechas-con-javascript/

 
function validarFormatoFecha(campo) {
      let RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
            return true;
      } else {
            return false;
      }
}

function existeFecha(fecha){
      let fechaf = fecha.split("/");
      let day = fechaf[0];
      let month = fechaf[1];
      let year = fechaf[2];
      let date = new Date(year,month,'0');
      if((day-0)>(date.getDate()-0)){
            return false;
      }
      return true;
}
 
function existeFecha2 (fecha) {
        let fechaf = fecha.split("/");
        let d = fechaf[0];
        let m = fechaf[1];
        let y = fechaf[2];
        return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
}

function validarFechaMenorActual(date){
      let x=new Date();
      let fecha = date.split("/");
      x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      let today = new Date();

let futuro = new Date()
futuro.setFullYear(futuro.getFullYear()+2);

 
      if (x > today && x < futuro)
        return false;
      else
        return true;
}

// end date validation 





// end validation  methods 


// utilities  
function clearBackground(i)
{
for (x=0;x<i.length - 1;x++)
i[x].style.backgroundColor = "white";
} // end clear background  

function loadMake()
{
let m = document.getElementById("cbomake");

for (x=0 ; x< make.length ; x++)
{
let opt = document.createElement("option");
opt.text = make[x];
opt.value = make[x];
m.appendChild(opt);
} // end for 
 
} // end load make  






// tooltip 
let namett = document.getElementById("namett");
namett.addEventListener("mouseover", function () { 
 let para = document.getElementById("para");
para.innerHTML = "enter your name";
}, false);
 
namett.addEventListener("mouseout", function () { 
 let para = document.getElementById("para");
para.innerHTML = "";
}, false);
 
 let milestt = document.getElementById("milestt");
milestt.addEventListener("mouseover", function () { 
 let para = document.getElementById("para");
para.innerHTML = "enter the estimation of miles per year";
}, false);
 
milestt.addEventListener("mouseout", function () { 
 let para = document.getElementById("para");
para.innerHTML = "";
}, false);
 
 let startdaytt = document.getElementById("startdaytt");
startdaytt.addEventListener("mouseover", function () { 
 let para = document.getElementById("para");
para.innerHTML = "The date has to be in futuro, with the format: DD/MM/YYYY"
}, false);
 
startdaytt.addEventListener("mouseout", function () { 
 let para = document.getElementById("para");
para.innerHTML = "";
}, false);

// calculations 

let myCover = document.getElementById("cbocover");
 myCover.addEventListener("change", function () {
total -= coverCost;

coverCost = Number(myCover.value);
total += coverCost;
document.getElementById("txttotal").value = total;
}, false);

let myFuel = document.getElementById("cbofuel");
myFuel.addEventListener("change", function() {
total -= fuelCost;

fuelCost = Number(myFuel.value);
total += fuelCost;
document.getElementById("txttotal").value = total;
}, false);

let myClaims = document.getElementById("cboclaims");
myClaims.addEventListener("change", function() {
total -= claimsCost;

claimsCost = Number(myClaims.value);
total += claimsCost;
document.getElementById("txttotal").value = total;
}, false);

let myCaruse = document.getElementById("cbocaruse");
myCaruse.addEventListener("change", function () {
total -= caruseCost;

caruseCost = Number(myCaruse.value);
total += caruseCost;
document.getElementById("txttotal").value = total;
}, false);
 
let male = document.getElementById("rdmale");
male.addEventListener("click", function () { 
total -= genderCost;
genderCost = Number(document.getElementById("rdmale").value);
total += genderCost;
document.getElementById("txttotal").value = total;
}, false);

let female = document.getElementById("rdfemale");
female.addEventListener("click", function () { 
total -= genderCost;
genderCost = Number(document.getElementById("rdfemale").value);
total += genderCost;
document.getElementById("txttotal").value = total;
}, false);

let none = document.getElementById("rdnone");
none.addEventListener("click", function () { 
total -= securityCost;
securityCost = Number(document.getElementById("rdnone").value);
total += securityCost;
document.getElementById("txttotal").value = total;
}, false);

let alarm = document.getElementById("rdalarm");
alarm.addEventListener("click", function () { 
total -= securityCost;
securityCost = Number(document.getElementById("rdalarm").value);
total += securityCost;
document.getElementById("txttotal").value = total;
}, false);


let inmo = document.getElementById("rdimmobiliser");
inmo.addEventListener("click", function () { 
total -= securityCost;
securityCost = Number(document.getElementById("rdimmobiliser").value);
total += securityCost;
document.getElementById("txttotal").value = total;
}, false);

 

let alin = document.getElementById("rdalarmimmobi");
alin.addEventListener("click", function () { 
total -= securityCost;
securityCost = Number(document.getElementById("rdalarmimmobi").value);
total += securityCost;
document.getElementById("txttotal").value = total;
}, false);



let trac = document.getElementById("rdtracking");
trac.addEventListener("click", function () { 
total -= securityCost;
securityCost = Number(document.getElementById("rdtracking").value);
total += securityCost;
document.getElementById("txttotal").value = total;
}, false);


let carvalueLis = document.getElementById("txtcarvalue");
carvalueLis.addEventListener("change", function () { 
total -= carvalueCost;

 if (isCarValue(document.getElementById("txtcarvalue").value))
{
let num = Number(document.getElementById("txtcarvalue").value);
carvalueCost = parseInt(num /10);
carvalueLis.style.backgroundColor = "white"; 
total += carvalueCost;
} else {
carvalueLis.style.backgroundColor = "red";
carvalueLis.value= "";
carvalueCost = 0;
} // end if 
document.getElementById("txttotal").value = total;

}, false);

let age = document.getElementById("txtage");
age.addEventListener("change", function () {
total -= ageCost;

if (isAge(age.value))
{
let num = Number(age.value);
if (num < 25)
ageCost = 500;
else if ( num >= 25 && num <= 35)
ageCost = 350;
else if ( num > 30 && num < 65)
ageCost = 200;
else 
ageCost = 500;

total += ageCost;
age.style.backgroundColor = "white";

} else {
age.style.backgroundColor = "red";
age.value= "";
ageCost = 0;
} // end if 

document.getElementById("txttotal").value = total;
}, false);

let carageLis = document.getElementById("txtcarage");
carageLis.addEventListener("change",  function () { 
total -= carageCost;
let cv = carageLis.value;
 
if (isCarAge(cv)  && cv.trim() != "" )
{
let num = Number(carageLis.value);

if ( num <= 3 )
carageCost = 100;
else if ( num > 3 && num <= 6 )
carageCost = 70;
else if ( num > 6 && num <= 10)
carageCost = 50;
else 
carageCost = 20;
 
total += carageCost;
carageLis.style.backgroundColor = "white";

} else {
carageLis.style.backgroundColor = "red";
carageLis.value= "";
carageCost =0;
} // end if 

document.getElementById("txttotal").value = total;
}, false);


let milesLis = document.getElementById("txtmiles");
milesLis.addEventListener("change", function () {
total -= milesCost;

if (isMile(milesLis.value))
{
let num = Number(milesLis.value);

if ( num < 15000 )
milesCost = 30;
else if ( num >= 15000 && num <= 25000 )
milesCost = 40;
else  
milesCost = 50;

total += milesCost;

}else {
milesLis.style.backgroundColor = "red";
milesLis.value= "";
milesCost =0;
} // end if 

document.getElementById("txttotal").value = total;
}, false);



// make and models 
 
let myMake = document.getElementById("cbomake");
myMake.addEventListener("change", function () { 
let m = myMake.value;
if (document.getElementById("cbomodel").length > 0)
emptyModels(); 

switch (m) 
{
case "Audi" : 
loadModels(audi);
break;

case "Citroen":  
loadModels(citroen);
break;

case "Fiat":
loadModels(fiat);
break;

case "Ford":
loadModels(ford);
break;

case "Toyota":
loadModels(toyota);
break;

case "Seat":
loadModels(seat);
break;

} // end switch 
}, false); // end myMake listener 

function loadModels(arrayModel) 
{
let models = document.getElementById("cbomodel");

arrayModel.forEach( function (value) {
let opt = document.createElement("option");
opt.text = value;
opt.value = value;
models.appendChild(opt);
});

} // end load models


function emptyModels()
{
let model = document.getElementById("cbomodel");
let texto =""; 
 for (x=model.length-1;x>0;x--)
{
 model.remove(x);

}
model.selectedIndex = 0;
} // end empty models 



// timer 

function timeLeft()
{
myCountDown = setInterval("startCountDown()", 1000);
} // end time left 

function startCountDown()
{
countDown--;

document.getElementById("txttimeleft").value = countDown;

if (countDown == 0)
{
countDown = 0;
clearTimeout(myCountDown);
 window.open("timesup.html", "time");
 self.close();
 return false;
} // end if 

} // end start count down 

// record data in local storage 

//let rec = document.getElementById("save");
//rec.addEventListener("click", function () { recordData(); }, false);

function recordData() 
{
let item;
let texto = "";
let r;

sessionStorage.setItem("name", document.getElementById("txtname").value);
sessionStorage.setItem("age", document.getElementById("txtage").value);

r = document.querySelector('[name="gender"]:checked');    
sessionStorage.setItem("gender", r.value);
sessionStorage.setItem("phone", document.getElementById("txtphone").value);
sessionStorage.setItem("startday", document.getElementById("txtstartday").value);

item = document.getElementById("cbocover");
texto = item.options[item.selectedIndex].text;
sessionStorage.setItem("cover", texto);

item = document.getElementById("cbomake");
texto = item.options[item.selectedIndex].text;
sessionStorage.setItem("make", texto);

item = document.getElementById("cbomodel");
texto = item.options[item.selectedIndex].text;
sessionStorage.setItem("model", texto);

item = document.getElementById("cbofuel");
texto = item.options[item.selectedIndex].text;
sessionStorage.setItem("fuel", texto);

sessionStorage.setItem("carage", document.getElementById("txtcarage").value);

item = document.getElementById("cboclaims");
texto = item.options[item.selectedIndex].text;
sessionStorage.setItem("claims", texto);

sessionStorage.setItem("miles", document.getElementById("txtmiles").value);
sessionStorage.setItem("carvalue", document.getElementById("txtcarvalue").value);

r = document.querySelector('[name="security"]:checked');    
sessionStorage.setItem("security", r.value);

item = document.getElementById("cbocaruse");
texto = item.options[item.selectedIndex].text;
sessionStorage.setItem("caruse", texto);

sessionStorage.setItem("total", document.getElementById("txttotal").value);

} // end record data 
// end record data 

