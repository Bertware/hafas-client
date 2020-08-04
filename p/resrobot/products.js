'use strict'

//https://www.trafiklab.se/api/resrobot-stolptidtabeller-2/dokumentation/avgaende-trafik
module.exports = [ // todo: 2, 8, 32, 128
	{
		id: 'high-speed-train',
		mode: 'train',
		bitmasks: [2],
		name: 'Snabbtåg',
		short: 'Snabbtåg',
		default: true
	},
	{
		id: 'regional-train',
		mode: 'train',
		bitmasks: [4],
		name: 'Regionaltåg',
		short: 'Regionaltåg',
		default: true
	},
	{
		id: 'express-bus',
		mode: 'bus',
		bitmasks: [8],
		name: 'Expressbuss',
		short: 'Expressbuss',
		default: true
	},
	{
		id: 'local-train',
		mode: 'train',
		bitmasks: [16],
		name: 'Lokaltåg',
		short: 'Tåg',
		default: true
	},
	{
		id: 'metro',
		mode: 'train',
		bitmasks: [32],
		name: 'Tunnelbana',
		short: 'T-bana',
		default: true
	},
	{
		id: 'tram',
		mode: 'train',
		bitmasks: [64],
		name: 'spårvagn',
		short: 'spårvagn',
		default: true
	},
	{
		id: 'bus',
		mode: 'bus',
		bitmasks: [128],
		name: 'buss',
		short: 'buss',
		default: true
	},
	{
		id: 'ferry',
		mode: 'boat',
		bitmasks: [256],
		name: 'färja',
		short: 'färja',
		default: true
	},
	{
		id: 'taxi',
		mode: 'train',
		bitmasks: [512],
		name: 'spårvagn',
		short: 'spårvagn',
		default: true
	}
]
