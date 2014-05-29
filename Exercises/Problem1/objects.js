// Wrap up the following code into an object
// expose only the sum function.

function sum(val1, val2) {
	if (isNumber(val1) && isNumber(val2)) {
		return val1 + val2;
	}
	
	return "Error";
}

function isNumber(val) {
	return !isNaN(val);
}

console.log(sum(10, 20));
console.log(sum("10", "A"));