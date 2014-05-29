// Make the following works

function calculator() {

	this.sum = function (val1, val2) {
		if (isNumber(val1) && isNumber(val2)) {
			return val1 + val2;
		}
		
		throw { message: "Bad Data" };
	};
	
	this.isNumber = function (val) {
		return !isNaN(val);
	};

}

var c = new calculator();
c.sum("a", 10);