// Get rid of the conditionals

var o = {
	_active: 0,
	setActive: function (val) {
		this._active = val;
	},
	
	func1: function () {
		console.log("Seeing");
	},
	
	func2: function () {
		console.log("Coming");
	},
	
	func3: function () {
		console.log("Wining");
	},
	
	run: function () {
		setInterval(function () {
			if (this._active === 0) {
				this.func1();
			} else if (this._active === 1) {
				this.func2();
			} else {
				this.func3();
			}
		}, 1000);
	}
};

o.run();
o.setActive = 1;