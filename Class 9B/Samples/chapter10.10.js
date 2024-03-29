// promisified version of the transfer task
function transferToCloud(filename) {
    return new Promise( (resolve, reject) => {
	// just have a made-up AWS url for now
	let cloudURL =
	    "http://bucket.s3-aws-region.amazonaws.com/makebelieve.jpg";
	// if passed filename exists then upload ...
	if ( existsOnServer(filename) ) {
	    performTransfer(filename, cloudURL);
	    resolve(cloudURL);
	} else {
	    reject( new Error('filename does not exist'));
	}
    });
}
// use this function
transferToCloud(file)
    .then( url => extractTags(url) )
    .then( url => compressImage(url) )
    .catch( err => logThisError(err) );
