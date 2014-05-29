// Make the following test pass

var w = new Worker();
w.AddToStack(function () { return 10; });
w.AddToStack(function (val) { return val; });
w.AddToStack(function (val) { return val - 10; });

var counter = 20;

while (w.canUnstack()) {	
	var result = w.DoTask(counter);
	counter = result;
	
	if (result !== 10) {
		throw "Test Fail";
	}
}