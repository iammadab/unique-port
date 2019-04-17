const uniquePort = function(server, port=3000, step=1){
	return new Promise(function(resolve, reject){
		let errors = validateArgs(server, port, step)

		if(errors.length > 0){
			console.log(errors.join("\n"))
			return false
		}

		process.on("uncaughtException", function(err){
			if(err.code == "EADDRINUSE"){
				port = updatePort(port, step)
				startServer(server, port, resolve)
			}
		})

		startServer(server, port, resolve)
	})
}


module.exports = uniquePort







function startServer(server, port, resolver){
	const application = server.listen(port, function(){
		if(application.address()){
			alertUser(application.address().port)
			resolver(application.address().port)
		}
	})
}

function alertUser(port){
	if(!alertUser.done){
		console.log("Application running at port " + port)
		alertUser.done = true
	}
}

function updatePort(port, step){
	return port + step
}

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

	function validatePort(port){
		let errors = []
		if(isNaN(+port))
			errors.push("Expected port to be a number")
		return errors
	}

	function validateStep(step){
		let errors = []
		if(isNaN(+step))
			errors.push("Expected step to be a number")
		return errors
	}
}