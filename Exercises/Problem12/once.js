// Create an object that execute 
// a function once

var o = new executor(function() { return 10; });
o.execute();

// Next time, will not work.
o.execute();