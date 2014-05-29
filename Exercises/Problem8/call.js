function additionalFunctions(out) {
	out.calculateOther = function (f) {
		f(30);
	};
}

var o = {
	p: 10,
	sum: function (value) {
		this.calculateOther(function(v) {
			console.log(this.p + value + v);
		});
	}
};

additionalFunctions(o);
o.sum(10);