
  /* let car={
        carname:"honda",
        carcolor:"black",
        carprice:800000
    }
    for(let x in car){
        document.write(car[x])
    }
   var x="SHARAN"
   document.write(x);
   var a=4
   var b=3
   document.write(a+b)*/

//var s="htnkjavascriptcss"
/*document.write(s.length)
var newstr=s.slice(2,8)
document.write(newstr)
var x='a'
var y='b'
var a=new Array();*/

/*a[0]=99
var b=["lion","tiger","dog"]

//function
function run(){
    var s={sname:"SHARAN",
          age:20,
          department:"IT"
    }
    document.write(s.department)
}
run()
document.write(a+" ")
document.write(b[0])
document.write(" "+x+" "+y)*/

const pen={pname:"Stylish" , price:10 , store:"Sahara"}
console.log("My pen is "+pen.pname+" It's price is "+pen.price+" Bought in the store "+pen.store)
console.log(`My pen is ${pen.pname} It's price is ${pen.price} bought is the store ${pen.store}`)  //String

let name1="Sharan"
let name2="Sivabharathi"

name1==name2 ? console.log("yes"):console.log("No")

// Guessing the number using prompt
let random=10
let guess_no=prompt("Enter the number from 1 to 10")
while(guess_no!=random){
    console.log("Try again...")
    guess_no=prompt("Enter the number")
}
if(guess_no==random){
    alert("Congratulations YOU WON !!!")
}

