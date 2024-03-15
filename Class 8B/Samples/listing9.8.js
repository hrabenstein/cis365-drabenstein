document.querySelector("#loginForm").addEventListener("submit",
						      function(e) {
							  let pass = document.querySelector("#pw").value;
							  if (pass=="") {
							      alert ("enter a password");
							      e.preventDefault();
							  }
						      });
