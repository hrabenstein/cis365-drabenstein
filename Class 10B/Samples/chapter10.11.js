async function processImage(file) {
    try {
	const url = await transferToCloud(file);
	const tagProm = extractTags(url);
	const thumbProm = compressImage(url);
	/* uses array destructuring to put each returned item into
	   its own variable */
	[ tags, thumbURL ] = await Promise.all([tagProm, thumbProm]);
	/* do something with the returned data (in this case simply
	   output it) */
	console.warn(tags, thumbURL);
    } catch (err) {
	console.error(err);
    }
}
// also notice you call async function in same way as any function
processImage('cats.jpg');
