// Add a function to validate the numbers

function validator() {

	var self = this;

	this.validate = function (howMany) {
		var params = [];
		var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for (; howMany > 0; params.push(chars.charAt(parseInt(Math.random() * chars.length - 1))), howMany--);
		areValid(params);		
	};
	
	function areValid() {
		// Validate all the values and throw
		// an exception with the list of the failed one
	};

}

var v = new validator();
v.validate(20);