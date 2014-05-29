// Clone the following object

var jsonObject = {
	value: 10
};

// Clone 1
clone1.value = 1;
console.log(clone1.value);

// Clone 2
clone2.value = 10;
console.log(clone2.value);

// Original
jsonObject.value = 1;
console.log(jsonObject.value);
