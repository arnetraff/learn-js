
for (let i = 1; i <= 100; i++) {

	if (i % 3 == 0 && i % 5 == 0)
		console.log("FizzBuzz");
	else
		if (i % 5 == 0) console.log("Buzz");
	else
		if (i % 3 == 0) console.log("Fizz");
	else console.log(i);
}



// Clever solution from author

for (let i = 1; i <= 100; i++) {
	
	let out = "";

	if (i % 3 == 0) out += 'Fuzz';
	if (i % 5 == 0) out += 'Buzz';

	console.log(out || i);
}