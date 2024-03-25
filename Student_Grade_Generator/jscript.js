function Generate_Results(){
let ht = document.querySelector("#ht").value;
let css = document.querySelector("#css").value;
let js = document.querySelector("#js").value;
let py = document.querySelector("#py").value;
let sq = document.querySelector("#sq").value;

let ttl = parseFloat(ht) + parseFloat(css) + parseFloat(js) + parseFloat(py) + parseFloat(sq);

let per =(ttl*100)/500;
if(per >79){
  document.querySelector(".grd").innerHTML="A";
}else if(per>=60){
  document.querySelector(".grd").innerHTML="B";
}else if(per>49){
  document.querySelector(".grd").innerHTML="C";
}else if(per>=40){
  document.querySelector(".grd").innerHTML="D";
}else{
  document.querySelector(".grd").innerHTML="E";
}

document.querySelector(".ttl").innerHTML = ttl;
document.querySelector(".per").innerHTML = per;

if(per >=40){
  document.querySelector(".result h2").innerHTML = "CONGRATULATIONS!";
}else{
  document.querySelector(".result h2").innerHTML = "YOU FAILED!";
}
}