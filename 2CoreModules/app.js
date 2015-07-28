//var fs = require('fs');
//
//fs.writeFileSync("corn.txt", "Corn is good.");
//console.log(fs.readFileSync("corn.txt").toString());


var path = require('path');
var websiteHome = "Desktop/Marco//site/index.html";
var websiteAbout = "Desktop/Marco//site/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

console.log(__dirname);
console.log(__filename);