document.addEventListener('DOMContentLoaded', function() {

    console.log('in script')
    document.getElementById('swagform').addEventListener('submit', function(e) {
        console.log('in submit function')
        e.preventDefault();
      
        var total = 0;
      
        // Get all select elements
        var selects = this.querySelectorAll('select');
        for (var i = 0; i < selects.length; i++) {
            console.log("Adding ", selects[i].name, "  ", selects[i].value)
          total += parseInt(selects[i].value);
        }
      
        // Get all checked checkboxes
        var checkboxes = this.querySelectorAll('input[type="checkbox"]:checked');
        for (var i = 0; i < checkboxes.length; i++) {
          console.log("Adding checkbox ", checkboxes[i].name, " value ", checkboxes[i].value)
          total += 1; //parseInt(checkboxes[i].value);
        }
      
        console.log('Total value of form responses: ' + total);

        let result;
        if (total >= 21 && total <= 25) {
            result = "Blue Chip";
        } else if (total >= 19 && total <= 20) {
            result = "Certified Key";
        } else if (total >= 17 && total <= 18) {
            result = "Low Risk";
        } else if (total == 16) {
            result = "Some Risk";
        } else if (total == 15) {
            result = "Speculative";
        } else if (total >= 10 && total <= 14) {
            result = "Highly Speculative";
        } else if (total < 9) {
            result = "Not Investible";
        } else {
            result = "Value out of range";
        }
        console.log(" RESULT = ", result);

        let ratingBlock = document.getElementById('rating');
        ratingBlock.innerHTML = "Swag Rating: " + total + " - " + result;
        ratingBlock.style.display = "block";
      });

  });

/*
21-25 = Blue Chip
19-20 = Certified Key
17-18 = Low Risk
16 = Some Risk
15 = Speculative
10-14 = Highly Speculative
< 9 = Not Investible
*/
  


  