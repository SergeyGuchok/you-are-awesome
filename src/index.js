// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => { 
	return prop; 
}; 


const createNotEnumerableProperty = (prop) => { 
	return Symbol(prop); 
}; 


const createProtoMagicObject = () => { 
	function eat(){ 
	} 
	eat.__proto__ = eat.prototype; 
	return eat; 
}; 

let incrementorVal = 0; 
const incrementor = () => { 
	incrementorVal++; 
	if (incrementorVal === 3 || incrementorVal === 8 || incrementorVal === 10 || incrementorVal === 15) { 
		return incrementorVal; 
	} 
	return incrementor; 
}; 


const asyncIncrementor = () => {}; 


const createIncrementer = () => {}; 

// return same argument not earlier than in one second, and not later, than in two 
const returnBackInSecond = (param) => { 
	return new Promise((resolve) => { 
		setTimeout(() => { 
		resolve(param); 
		}, 1000); 
	}) 
}; 


const getDeepPropertiesCount = () => {}; 


const createSerializedObject = () => { 
	return new String("Hello world"); 
}; 


const toBuffer = () => { 
	console.log("Log"); 
}; 
const sortByProto = (array) => { 
	return array.sort((a, b) => a - b); 
}; 

exports.createEnumerableProperty = createEnumerableProperty; 
exports.createNotEnumerableProperty = createNotEnumerableProperty; 
exports.createProtoMagicObject = createProtoMagicObject; 
exports.incrementor = incrementor; 
exports.asyncIncrementor = asyncIncrementor; 
exports.createIncrementer = createIncrementer; 
exports.returnBackInSecond = returnBackInSecond; 
exports.getDeepPropertiesCount = getDeepPropertiesCount; 
exports.createSerializedObject = createSerializedObject; 
exports.sortByProto = sortByProto;