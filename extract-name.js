

var extract = function(input) {
	var obj = JSON.parse(input)
	return obj.name
}

module.exports = extract