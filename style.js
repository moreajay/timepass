
// var a=20;  
// if(a>10){  
//    document.getElementById("demo").style.display = "block";
//   }
//   else{

//     document.getElementById("test").style.display= "block";
  
//   }



console.log("Hello, World!");

const time = new Date();
const day = time.toLocaleString("en-us", {weekday: "long"});
const morning = time.getHours() >=6 && time.getHours ()<=12;

let dayMessage;

if(day.toLocaleLowerCase()==="monday"){

    dayMessage = `Happy ${day}`;
}
else if (day.toLocaleLowerCase()==="tuesday"){

   dayMessage = `Happy ${day}, Four days tp go`;
   document.getElementById("tue").style.display ="block";

}
else if (day.toLocaleLowerCase()==="wednesday"){

   dayMessage = `Happy ${day}, Half way there`;
   document.getElementById("wed").style.display ="block";
}
else if (day.toLocaleLowerCase()==="thursday"){

   dayMessage = `Happy ${day}, Start planing for weekned`;
   document.getElementById("thus").style.display ="block";

}
else if (day.toLocaleLowerCase()==="friday"){

   dayMessage = `Happy ${day}, Cheers weekend is coming`;
   document.getElementById("fri").style.display ="block";

}
else if (day.toLocaleLowerCase()==="saturday"){

   dayMessage = `Happy ${day}, Hola its weekned`;
   document.getElementById("sat").style.display ="block";

}

console.log(dayMessage);
document.getElementById("myP").innerHTML = dayMessage;

