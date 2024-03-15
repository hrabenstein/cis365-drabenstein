const multi = document.querySelector("#listbox");
// using the options technique is more work but supported everywhere
// it loops through each option and check if it is selected
for (let i=0; i < multi.options.length; i++) {
    if (multi.options[i].selected) {
	// this option was selected, do something with it ...
	console.log(multi.options[i].textContent);
    }
}
// the selectedOptions technique is simpler ...
// it only loops through the selected options
for (let i=0; i < multi.selectedOptions.length; i++) {
    console.log(multi.selectedOptions[i].textContent);
}
