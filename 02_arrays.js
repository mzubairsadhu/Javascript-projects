const marvel_heroes = ['thro', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

//marvel_heroes.push(dc_heros)
             //push the value in to array as index not as array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes=marvel_heroes.concat(dc_heros)
// console.log(allheroes);
             //concatinate the array or merge the arrays


const allnewheroes = [...marvel_heroes, ...dc_heros]
console.log(allnewheroes);


const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realanotherarray = [anotherarray.flat(Infinity)]
console.log(realanotherarray);
             //make the one simple array 


console.log(Array.isArray('zubair'));
            // check that this is array or not give ans in true and false
console.log(Array.from('zubair'));
             // change the zubair into array with the indexes


console.log(Array.from({name: "zubair"})); // interseting fact

let score = 100
let score1 = 200
let score3 = 300
console.log(Array.of(score, score1, score3));
             //converte the all variables in to the array

