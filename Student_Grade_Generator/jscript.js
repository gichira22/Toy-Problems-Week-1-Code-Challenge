// Creates a form validation function //
function validateFormGrader() {
  let ht = parseInt(document.getElementById("ht").value);
  let css = parseInt(document.getElementById("css").value);
  let js = parseInt(document.getElementById("js").value);
  let py = parseInt(document.getElementById("py").value);
  let sq = parseInt(document.getElementById("sq").value);

  // Checks if the input fields are empty //


  if (ht === "" ||  css=== "" || js === "" || py === "" || sq === "") {
    document.getElementById("error").innerText = "Input values required.";
    return false;
  }
  // Checks if the values are within range //
  if (
  ht < 0 || ht > 100 || css < 0 || css > 100 || js < 0 || js > 100 || py < 0 || py > 100 || sq < 0 || sq > 100) {
  document.getElementById("error").innerText = "Values must be within 0 and 100.";
  return false;
  }
  // Clears any errors when all checks pass //
  document.getElementById("error").innerText = "";
  Generate_Results();
  return false;
}
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