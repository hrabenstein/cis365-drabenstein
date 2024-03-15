const phone = document.querySelector("#phone").value;
const parts = phone.split("."); // split on "."
if (parts.length !=3){
    parts = phone.split("-"); // split on "-"
}
if (parts.length == 3) {
    let valid=true; // use a flag to track validity
    for (let i=0; i < parts.length; i++) {
	// check that each component is a number
	if Number.IsInteger(parts[i])) {
	alert( "you have a non-numeric component");
	valid=false;
    } else {
	// for some make sure it's in range
	if (i<2) {
	    if (parts[i]<100 || parts[i]>999) {
		valid=false;
	    }
	} else {
	    if (parts[i]<1000 || parts[i]>9999) {
		valid=false;
	    }
	}
    } // end if isNumeric
} // end for loop
if (valid) {
    alert(phone + "is a valid phone number");
}
} else {
    alert ("not a valid phone number");
}
