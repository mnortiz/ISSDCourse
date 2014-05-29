// Create an event call

var o = new eventCaller();

o.triggerWhenFinish(function (o) {
	console.log('Total process: ' + o.sum);
});

console.log('This will be shown before the result');