// Make the following works

var a = [10,20,10,20];

var result = myArray.where(function(item) { 
				return item > 11; 
			}).sum(function(item) { 
				return item;
			});
				
console.log(result);