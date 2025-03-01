const name = "zubair"
const repocount = 50

//console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repocount is ${repocount} `);

const gamename = "zubair"

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt("5"));

console.log(gamename.indexOf("z"));

const newstring = gamename.substring(0,4)
console.log(newstring);


const anotherstring = gamename.slice(0,4)
console.log(anotherstring);

const newstring1 = "   zubair  "
console.log(newstring1);
console.log(newstring1.trim());

const url = "https://zubair.com/zubair%20choudhary"
console.log(url.replace("%20", "--"));

console.log(url.includes('zubair'));


console.log(url.split('-'));



//read methodes of string
