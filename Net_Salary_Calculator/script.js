$(window).resize(function () {
    var windowHeight = $( window ).height();
    
    var newHeaderHeight = windowHeight * 0.3;
    $('#header').height(newHeaderHeight);
    
    var newContentHeight = windowHeight * 0.7;
    var newContentHeightMargin = (windowHeight * 0.3);
    $('#content').height(newContentHeight);
  });
  
  
  function calcIncomeTax() {
    var preFormattedIncome = document.getElementById("income").value;
    var income = preFormattedIncome.replace(/[^\d.-]/g, '');
    
    if (income < 0) {
      // You didn't make money
      // Also handles errors for negative numbers
      document.getElementById("total").innerHTML = (0.00).toFixed(2);
    } else if (income >= 0 && income < 27050) {
        var incomeTax = income * 0.15;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 27050 && income < 65550){
        var incomeTax = 4057.50 + ((income - 27050) * 0.275);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 65550 && income < 136750) {
        var incomeTax = 14654 + ((income - 65550) * 0.305);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 136750 && income < 297350) {
        var incomeTax = 36361 + ((income - 136750) * 0.355);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else {
        //Income >= 297350
        var incomeTax = 93374 + ((income - 297350) * 0.391);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
  }