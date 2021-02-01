var priceinfo = initMenu();

function werty(){
      var queryStr = new URLSearchParams(location.search);
     document.querySelector(".telephone").value= queryStr.get("phoneno");
     document.querySelector(".pickdate").value= queryStr.get("pickupdate");
     if (queryStr.get("method")=="Delivery"){
       document.querySelector("#Delivery").checked = true;
     }else if (queryStr.get("method")=="Pick-Up")
        document.querySelector("#pick-up").checked = true;
}
window.onload = werty;


var totalcost=0;
var thisprice=0;
var cakeprice=0;
var totalqnt=0;
function obtainprice(){
  var arraylen = localStorage.getItem("length");
  for(k=0; k<arraylen; k++){
    cak = localStorage.getItem(k);
    k++;
    qnt= localStorage.getItem(k);
    tb = document.querySelector("tbody");
    tr = tb.insertRow();
    cell0 = tr.insertCell(0);
    cell1 = tr.insertCell(1);
    cell2 = tr.insertCell(2);
    for(m=0; m<priceinfo.length; m++){
      if (priceinfo[m].description==cak){
        cakeprice = priceinfo[m].price;
        thisprice = Number(qnt)*cakeprice;
        cell0.innerHTML=cak;
        cell1.innerHTML=Number(qnt);
        cell2.innerHTML=thisprice;
        totalcost = totalcost+ thisprice;
        totalqnt = totalqnt+ Number(qnt);

      }
    }
  }
  document.querySelector(".totalqnt").innerHTML=totalqnt;
  document.querySelector(".totalcost").innerHTML=totalcost;


}
obtainprice();

function clear(){
  localStorage.clear();

}
