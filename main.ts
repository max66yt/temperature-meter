loops.everyInterval(1000, function () {
    let logging = 0
    if (logging) {
        datalogger.log(datalogger.createCV("temp", input.temperature()))
    }
})
basic.forever(function () {
	
})
