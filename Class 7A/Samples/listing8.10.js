// define a function with no return value
function outputLink(url, label) {
    document.write(`<a href="${url}">${label}</a>`);
}
// invoke the function
outputLink('http://www.mozilla.com', 'Mozilla');
