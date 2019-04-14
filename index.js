const server = require("http").createServer()

const uniquePort = function(server, port=3000, step=100){
	let errors = validateArgs(server, port, step)

	// TODO proper library error throwing
	if(errors.length > 0){
		console.log(errors.join("\n"))
		return false
	}

	server.listen(port)
}


uniquePort(server)

















function validateArgs(server, port, step){
	let errors = []

	errors = errors.concat(validateServer(server))
	errors = errors.concat(validatePort(port))
	errors = errors.concat(validateStep(step))

	return errors

	function validateServer(server){
		let errors = []
		if(!server)
			errors.push("No server object")
		if(!server || !server.listen || typeof server.listen != "function")
			errors.push("Server does not have a listen function")
		return errors
	}

	// function validatePort(port){
	// 	let errors = []
	// 	if(isNaN(+port))
	// 		errors.push("Expected port to be a number")
	// 	return errors
	// }

	// function validateStep(step){
	// 	let errors = []
	// 	if(isNaN(+step))
	// 		errors.push("Expected step to be a number")
	// 	return errors
	// }
}