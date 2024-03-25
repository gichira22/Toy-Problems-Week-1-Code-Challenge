function Submit() {
    let speed = document.getElementById("speed").value; // Removed # from getElementById
    let speedLimit = 70;
    let demeritPoints = 0;
    
    if (speed <= speedLimit) {
        document.getElementById("speed").innerHTML = "Ok"; // Changed .speed to #result
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        document.getElementById("submit").innerHTML = "Demerit points: " + demeritPoints;
    }
    if (speed<=70){
        document.getElementById("speed").innerHTML = "OK"; // Changed .speed to #result
    }else {
        document.getElementById("submit").innerHTML = "Demerit points: " + demeritPoints;
    }
}
