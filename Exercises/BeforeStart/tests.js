// Make this code test compliant

function areEquals(val1, val2) {
	return val1 == val2;
}

function getObject() {
	return 
	{
		ok: true
	};
}

function getMessage(val1, val2) {
	if (val1 = val2) {
		return "Are equals";
	} else {
		return "Are not equals";
	}
}