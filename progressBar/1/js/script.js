var hexaDecimalNode = document.querySelector("#hexadecimal-clock")
var timeNode = document.querySelector("#regular-clock")
var overLayNode = document.querySelector("#overlay")
var backgroundNode = document.querySelector("#background")
var barNode = document.querySelector("#bar")

var time = function() {

	var today = new Date()
	var hrs = today.getHours()
	var mins = today.getMinutes()
	var secs = today.getSeconds()


	var addZero = function (number) {
		if (number < 10) {
			number = '0' + number
		}
		return number
	}

	// update clock readout
	
	hrs = addZero(hrs)
	mins = addZero(mins)
	secs = addZero(secs)

	timeNode.textContent = hrs + ":" + mins + ":" + secs

	//update hex readout
	
	var hexClock = function (number) {
		var newHex = number.toString(16)
		if(newHex.length < 2) {
			newHex = '0' + newHex

		}
		return newHex

	}	

	var hexHrs = hexClock(hrs)
	var hexMins = hexClock(mins) 
	var hexSecs = hexClock(secs) 


	hexaDecimalNode.textContent = hexHrs + ":" + hexMins + ":" + hexSecs
	
	// update background
	
	var changeBackgroundColor = function (hrs, mins, secs) {

		var color1 = (Math.floor(hrs/23 * 255)).toString(16)
		var color2 = (Math.floor(mins/59 * 255)).toString(16)
		var color3 = (Math.floor(secs/59 * 255)).toString(16)	

		overLayNode.style.background = "#" + color1 + color2 + color3

	}
	
	changeBackgroundColor(hrs, mins, secs)

	// update expanding bar
	
	barNode.style.width = secs + "%"


}

setInterval(time, 1000)