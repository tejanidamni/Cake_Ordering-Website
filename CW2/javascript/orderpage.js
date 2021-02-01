function getdata(){

  document.querySelector(".TelNo").value = localStorage.getItem("TelNo");
  document.querySelector(".Date").value = localStorage.getItem("Date");

  if (localStorage.getItem("whichoption")=="Delivery"){
    document.querySelector("#Delivery").checked = true;

  }
  else  if (localStorage.getItem("whichoption")=="Pick Up"){
      document.querySelector("#pick-up").checked = true;
  }

  document.querySelector("#OrderNo").innerHTML = document.querySelector(".TelNo").value

}
getdata();


var getsrc = initMenu();
var count = 0;
function putimages(){
  var x="" ;

  for (count=0;count<getsrc.length;count++){

    x+="<img src ='" +getsrc[count].imagefile+"' title='"+ getsrc[count].description+"' onclick='chooseimg(\""+getsrc[count].description+"\")'>";
  }
  document.querySelector("#mycakes").innerHTML= x;
}
putimages();


var totaling = 0;
var keyvalue = 0;
function chooseimg(mychoice){

  var amount = prompt("How many cakes?","1");
  var table = document.querySelector("#order-details");
  var addrow = table.insertRow(1);
  var cell1 = addrow.insertCell(0);
  cell1.innerHTML = mychoice;
  var cell2 = addrow.insertCell(1);
  cell2.innerHTML = amount;
  localStorage.setItem(keyvalue, mychoice);
  keyvalue++;
  localStorage.setItem(keyvalue, amount);
  keyvalue++;

  totaling = totaling + Number(amount);
  document.querySelector("#total").innerHTML= totaling;

}

function changeNo(){
  var mynum = document.querySelector(".TelNo").value;
  document.querySelector("#OrderNo").innerHTML = mynum;
}

document.querySelector(".my-form").addEventListener('submit',errormsg);

function errormsg(e){
   var error="";
   var z;
   var y;
   var noofspaces=0;
   var noofspaces1=0;

   var mynum = document.querySelector(".TelNo").value;

   if (mynum.length == 0){
      error += "please enter your telephone number<br>";
   } else if (!Number(mynum)){
      error += "your telephone Number is invalid<br>";
   }

   var mydate = document.querySelector(".Date").value;

   if (mydate.length==0){
     error+="please enter your Pickup date <br>";
   }else{
     for (z=0; z < mydate.length; z++){
       if (mydate.charAt(z) == " "){
         noofspaces1 = noofspaces1 + 1;
       }
     }

     if (noofspaces1 == mydate.length){
       error += "your pickUp date is invalid<br>";
     }
   }

   if (error != ""){
     document.querySelector("#errorblock").innerHTML=error;
     document.querySelector("#errorblock").style.display = "block";
     document.querySelector("#mybody").style.opacity = "0.7";

     e.preventDefault();
   } else {
       localStorage.setItem("length", keyvalue-1);
   }

}


function comeback(){
  document.querySelector("#errorblock").style.display = "none";
  document.querySelector("#mybody").style.opacity = "1";

}
