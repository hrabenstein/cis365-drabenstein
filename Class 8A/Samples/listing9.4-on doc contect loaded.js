document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelectorAll("#menu li");
    for (let item of menu) {
	item.addEventListener("click", function () {
	    item.classList.toggle('shadow');
	});
    }
    const heading = document.querySelector("h3");
    heading.addEventListener('click', function() {
	heading.classList.toggle('shadow');
    });
});
