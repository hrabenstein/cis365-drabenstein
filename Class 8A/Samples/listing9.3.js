const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("used an anonymous function");
});
document.querySelector("#btn").addEventListener("click", function ()
						{
						    alert("a different approach but same result");
						});
document.querySelector("#btn").addEventListener("click", () => {
    alert("arrow syntax but same result");
});
