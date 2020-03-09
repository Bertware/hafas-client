'use strict'

const formatLinesReq = (ctx, query) => {
	const {profile, opt} = ctx

	return {
		meth: 'LineMatch',
		req: {
			input: query,
		}
	}
}

module.exports = formatLinesReq
