const btns = document.querySelectorAll(".plus");
for (let b of btns) {
    b.addEventListener("click", function (e) {
	e.stopPropagation();
	incrementCount(e);
    });
}
const items = document.querySelectorAll(".item");
for (let it of items) {
    it.addEventListener("click", function (e) {
	e.stopPropagation();
	removeItemFromCart(e);
    });
}
const aside = document.querySelector("aside#cart");
aside.addEventListener("click", function () {
    minimizeCart();
});
