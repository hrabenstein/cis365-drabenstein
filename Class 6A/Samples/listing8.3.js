let hourOfDay; // variable to hold hour of day, set it later ...
let greeting; // variable to hold the greeting message
if (hourOfDay > 4 && hourOfDay < 12) {
    greeting = "Good Morning";
}
else if (hourOfDay >= 12 && hourOfDay < 18) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Evening";
}
