'use strict'
const products = require('./products')

const transformReqBody = (ctx, body) => {
	body.client = {"id":"SAMTRAFIKEN","type":"WEB","name":"webapp","l":"vs_resrobot"}
	body.ext = 'HVV.1'
	body.ver = '1.21'
	body.auth = {"type":"AID","aid":"h5o3n7f4t2m8l9x1"}
	return body
}

const resRobotProfile = {
	locale: 'sv-SE',
	timezone: 'Europe/Stockholm',
	endpoint: 'https://reseplanerare.resrobot.se/bin/mgate.exe',
	transformReqBody,
	products,
	trip: true,
	refreshJourney: true,
	radar: false,
}

module.exports = resRobotProfile
