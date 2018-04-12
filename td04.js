/* TD04 - Leet

Le but de cet exercice est de faire un traducteur leet speak.

t => 7
i => 1
s => 5
e => 3
g => 6
o => 0
b => 8
a => 4

*/

/* TD Part */

const dictionnary = {
	t : 7,
	i : 1,
	s : 5,
	e : 3,
	g : 6,
	o : 0,
	b : 8,
	a : 4
}

function leet(input) {
	var leeted;

	leeted = "";

	for(var char of input) {
		leeted += typeof dictionnary[char] !== 'undefined' ? dictionnary[char] : char
	}

	return leeted.trim()
}

/* Testing Part */

var str1 = ' this is the 42 string'
var str2 = 'this is the string containing foo bar '

if (leet(str1) === '7h15 15 7h3 42 57r1n6' &&
    leet(str2) === '7h15 15 7h3 57r1n6 c0n741n1n6 f00 84r') {
    console.log('TD04 :: Success')
} else {
    console.log('TD04 :: Failed')
}
