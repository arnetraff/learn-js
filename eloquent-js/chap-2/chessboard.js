


let size = 8;

for ( let y = 0; y < size; y++ ) {
	let out = "";
	for ( let x = 0; x < size; x++ ) {
		if ( (x + y) % 2 == 0 ) out += "#"
			else
				out += " ";

	}
	console.log(out);
}