'use strict'

const createClient = require('../..')
const resRobotProfile = require('.')

const client = createClient(resRobotProfile, 'hafas-client-example')

const stockholmCentral = '740000001'
const fridhemsplan = '740021661'
const malmo = '740000003'
const stockholmCentralplan = {
	type: 'location',
	address: 'Stockholm, Centralplan 3',
	latitude: 59.3297188, longitude: 18.0592557,
}

client.journeys(stockholmCentral, malmo, {stopovers: true, remarks: true})
// .then(({journeys}) => {
// 	const leg = journeys[0].legs[0]
// 	return client.trip(leg.tripId, leg.line.name, {polyline: true})
// })
// .then(({journeys}) => {
// 	return client.refreshJourney(journeys[0].refreshToken, {remarks: true})
// })

// client.departures(gentStPieters)
// client.arrivals(gentStPieters, {duration: 10, linesOfStops: true})
// client.locations('gent')
// client.stop(gentStPieters, {linesOfStops: true})
// client.nearby(gentPaddenhoek)
// client.radar({
// 	north: 51.065,
// 	west: 3.688,
// 	south: 51.04,
// 	east: 3.748
// }, {results: 10})
// client.reachableFrom(gentPaddenhoek)

.then((data) => {
	console.log(require('util').inspect(data, {depth: null, colors: true}))
})
.catch(console.error)
