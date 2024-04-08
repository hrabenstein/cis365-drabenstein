window.addEventListener("load", async () => {
    const url = 'https://www.randyconnolly.com/funwebdev/3rd/api/
stocks/sample-portfolio.json';
    try {
	let data = await fetch(url)
	    .then(async response => await response.json() );
	generateChart( transformDataForCharting(data) );
    }
    catch (err) { console.error(err) }
    /* transform data received from service into format needed for
       charting */
    function transformDataForCharting(data) {
	const portfolioData = [];
	data.forEach((s) => {
	    let trace = {};
	    trace.x = [];
	    trace.y = [];
	    trace.type = 'bar';
	    trace.name = s.year;
	    for (let p of s.portfolio) {
		trace.x.push(p.symbol);
		trace.y.push(p.owned);
	    }
	    portfolioData.push(trace);
	});
	return portfolioData;
    }
    /* generate the chart */
    function generateChart(portfolioData) {
	const layout = {
	    title: 'Portfolio Changes',
	    barmode: 'group'
	};
	const options = {
	    responsive: true
	};
	Plotly.newPlot("chartDiv", portfolioData, layout, options);
    }
});
