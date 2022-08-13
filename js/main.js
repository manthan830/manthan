/*  * WEB222 – Final Assessment 
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Manthan Hasmukhlal Barot
 *      Student ID: 133247213
 *      Date:       12/08/2022
 */

function validateForm() {
    var postalCode = document.getElementById("postalCode").value;
    console.log(postalCode);
    if (/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(postalCode)) {
        var fields = ["name", "address", "postalCode", "email", "city", "option"];
        if (document.getElementById("hiringRate").style.display === "block") {
            var fields = ["name", "address", "postalCode", "email", "city", "option", "rate"];
        }

        var i, l = fields.length;
        var fieldname;
        for (i = 0; i < l; i++) {
            fieldname = fields[i];
            if (document.forms["contactForm"][fieldname].value === "") {
                alert(fieldname + " is empty");
                return false;
            }
        }
        return true;        
    }else{
        alert("Please Enter Valid Data");
        return false;
    }
        
}

document.getElementById("hiring").onclick = function () {
    document.getElementById("hiringRate").style.display = "block";
}
document.getElementById("question").onclick = function () {
    document.getElementById("hiringRate").style.display = "none";
}
document.getElementById("comment").onclick = function () {
    document.getElementById("hiringRate").style.display = "none";
}    