function countChar(str, c) {
	let n = 0;
	for (let i = 0; i < str.length; i++ ) {
		if ( str[i] == c )
			n++;
	}

	return n;


}



/**
	Returns a character counter function	
**/
function getCharCounter(c) {
	return (str) => countChar(str,c);
}

let countBs = (s) => countChar(s,'B');



let altCountBs = getCharCounter('B');

console.log("Count of Bs in BBC: "+countBs("BBC"));
console.log("Count of Bs in BBC (alt): "+altCountBs("BBC"));
console.log("Count of ls in Hello: "+countChar("Hello",'l'));