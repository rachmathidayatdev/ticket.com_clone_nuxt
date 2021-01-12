import { initApp } from '../helpers/general'

const init = (payload) => {
	return new Promise((resolve) => {
		initApp({ ...payload, resolve }, (_err, res) => {
			if (res) {
				resolve(res)
			} else {
				resolve(false)
			}
		})
	})
}

export const state = () => ({})

export const mutations = {}

export const actions = {
	async nuxtServerInit({ dispatch }, { req }) {
		if (process.server) {
			const userAgent = req && req.headers && req.headers['user-agent']
			await init({
				userAgent,
				dispatch,
			})
		}
	},
}
