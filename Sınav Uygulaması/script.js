var point = 0;
var arr = ["a","c","b","d","c","a","c","d","c","d"]; // doğru cevap dizisi
var pointArr = [0,0,0,0,0,0,0,0,0,0];

function control(qn,ans){
  //alert(qn + ". soruya cevap verildi: " + ans);
  var par_id = document.getElementById("qp" + qn);
  if (arr[qn-1] == ans){ // cevap doğru ise
    par_id.style.backgroundColor = "#5cfa91";
    if(pointArr[qn-1]==0){
      point += 10;
    }
    pointArr[qn-1] = 1;
  }
  else{ // cevap yanlış ise
    par_id.style.backgroundColor = "#FF0000";
    if(pointArr[qn-1]==1){
      point -= 10;
    }
    pointArr[qn-1] = 0;
  }
  document.getElementById("point").innerHTML = "Puan: " + point;
}

 ////////////
function control1(qn,ans){
  alert(qn + ". soruya cevap verildi: " + ans);
  var par_id = document.getElementById("qp" + qn);
  if (arr[qn-1] == ans){ // cevap doğru ise
    par_id.style.backgroundColor = "#5cfa91";
    if(pointArr[qn-1]==0){
      point += 10;
    }
    pointArr[qn-1] = 1;
  }
  else{ // cevap yanlış ise
    par_id.style.backgroundColor = "#FF0000";
    if(pointArr[qn-1]==1){
      point -= 10;
    }
    pointArr[qn-1] = 0;
  }
  document.getElementById("point").innerHTML = "Puan: " + point;
  let pp = document.getElementById("soruorn");
  pp.innerHTML = "105";
}


var time_id = document.getElementById("time");
var seconds = 600;
function intervalBaslat() {
  alert("Sınavınız Başlamıştır. Bol şanslar.")
t_int = setInterval(timer,1000);
}
  function intervalDurdur() {
  clearInterval(t_int);
}

function invertalbitir(){
  alert("Sınavınız Bitmiştir. Puanınız: " + point)
  clearTimeout(t_int);
  time_id.innerHTML = "Süre: 00:00";
}

function timer(){
  if(seconds <=0){
    time_id.innerHTML = "Süre: --:--";
  }
  else{
    var s = seconds;
  
    if(s<10){
      s = "0" + s;
    }
    time_id.innerHTML = "Süre: "+ s;
    seconds--;
  }

}