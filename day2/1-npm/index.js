const slugify = require("slugify");

const text = "Fenerbahçe Yine Kaybetti";

const mySlug = slugify(text, "_");

console.log(text);
console.log(mySlug.toLowerCase());
