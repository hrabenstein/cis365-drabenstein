const sortedPaintingsByYear = paintings.sort( function(a,b) {
    if (a.year < b.year)
	return -1;
    else if (a.year > b.year)
	return 1;
    else
	return 0;
} );
// more concise version using ternary operator and arrow syntax
const sorted2 = paintings.sort( (a,b) => a.year < b.year? -1: 1 );
