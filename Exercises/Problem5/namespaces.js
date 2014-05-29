// Make the following works

function document() {
	this.writeLine = function(text) {
		console.log(text);
	};
}

var d = new document();
d.writeLine("Hello");