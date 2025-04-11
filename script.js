//your JS code here. If required.
function allMethods() {
  //write your code here
	const methods = Object.getOwnPropertyNames(Math);
	const functionMethods = methods.filter(method => typeof method === 'function')
	return functionMethods.join(', ');
}

// alert(allMethods());
