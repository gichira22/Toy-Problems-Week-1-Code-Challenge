// function Submit() {
//     let speed = document.getElementById("#speed").value; // Removed # from getElementById
//     let speedLimit = 70;
//     let demeritPoints = 0;
    
//     if (speed <= speedLimit) {
//         document.getElementById("result").innerHTML = "Ok"; // Changed .speed to #result
//     }
//      else {
//         demeritPoints = Math.floor((speed - speedLimit) / 5);
//         document.getElementById("result").innerHTML = "Demerit points: " + demeritPoints;
//     }
//     if(demeritPoints>12){
//         document.getElementById("result").innerHTML = "Licence Suspended!; 

//     }else {
//         document.getElementById("result").innerHTML = "Demerit points: " + demeritPoints;
//     }
// }

function Submit(){
        let speed = document.getElementById("speed").value;
        let demerit_points = 0;
        if (speed < 70) {        
            document.getElementById("result").innerHTML = "Ok";
        }
         else {
            demerit_points = Math.floor((speed - 70) / 5);
            if (demerit_points > 12) {
                document.getElementById("result").innerHTML = "Points: " + demerit_points + " " + "Licence suspended!";
            } else {
                document.getElementById("result").innerHTML = "Points: " + demerit_points;
            }
         }
        }   