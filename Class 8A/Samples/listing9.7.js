document.getElementById("key").addEventListener("keydown",
						function (e) {
						    // get the raw key code
						    let keyPressed=e.key;
						    // convert to string
						    let character=String.fromCharCode(keyPressed);
						    alert("Key " + character + " was pressed");
						});
