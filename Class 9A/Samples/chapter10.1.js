const paintings = [
    {title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665},
    {title: "Artist Holding a Thistle", artist: "Durer", year: 1493},
    {title: "Wheatfield with Crows", artist: "Van Gogh", year: 1890},
    {title: "Burial at Ornans", artist: "Courbet", year: 1849},
    {title: "Sunflowers", artist: "Van Gogh", year: 1889}
];
// version 1
for (let i=0; i<paintings.length; i++) {
    console.log(paintings[i].title + ' by ' + paintings[i].artist);
}
// version 2
for (let p of paintings) {
    console.log(p.title + ' by ' + p.artist);
}
// version 3a
paintings.forEach(function (p) {
    console.log(p.title + ' by ' + p.artist)
});
// version 3b – same as version 3a, but uses arrow syntax
paintings.forEach( (p) => {
    console.log(p.title + ' by ' + p.artist)
});
