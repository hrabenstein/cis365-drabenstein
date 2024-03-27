String.prototype.countChars = function (c) {
    let count=0;
    for (let i=0;i<this.length;i++) {
	if (this.charAt(i) == c)
	    count++;
    }
    return count;
}
