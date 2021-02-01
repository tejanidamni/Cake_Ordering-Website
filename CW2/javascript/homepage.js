//code for slide-show

var results = initMenu();

window.onload = rotate;
var thisAd = 0;

function rotate() {
      if (thisAd == results.length) {
          thisAd = 0;
      }
      document.getElementById("changeimg").src = results[thisAd].imagefile;
      document.querySelector(".cakename").innerHTML = results[thisAd].description;
      document.querySelector(".Carbohydrate").innerHTML = results[thisAd].nutrition[0].percentage;
      document.querySelector(".Protein").innerHTML = results[thisAd].nutrition[1].percentage;
      document.querySelector(".Fat").innerHTML = results[thisAd].nutrition[2].percentage;
      document.querySelector(".Cholesterol").innerHTML = results[thisAd].nutrition[3].percentage;

      var total;
      total = results[thisAd].nutrition[0].percentage + results[thisAd].nutrition[1].percentage + results[thisAd].nutrition[2].percentage + results[thisAd].nutrition[3].percentage;
      document.querySelector(".total").innerHTML = total;

      thisAd++;
      setTimeout(rotate, 3000);

}

// code for video change

var thisvalue=0;
function video_change() {
    var videos = document.getElementsByClassName("myvideo");
    videos[0].style.display="none";
    videos[1].style.display="none";

    if(thisvalue==0){
      videos[thisvalue].style.display="block";
      videos[thisvalue].play();
      thisvalue=1;
      setInterval(video_change, 25000);
    }else if (thisvalue==1){
        videos[thisvalue].style.display="block";
        videos[thisvalue].play();
        thisvalue=0;
        setInterval(video_change, 35000);
    }
}

video_change();


// code for form info


document.querySelector("#Orderinfo").addEventListener("submit",senddata);
function senddata(e){
  localStorage.setItem("TelNo", document.querySelector(".TelNo").value);
  localStorage.setItem("Date", document.querySelector(".Date").value);
  if (document.querySelector("#Delivery").checked==true){
    localStorage.setItem("whichoption", document.querySelector("#Delivery").value);
    }
  else if (document.querySelector("#Pickup").checked==true ){
    localStorage.setItem("whichoption", document.querySelector("#Pickup").value);
  }


}
