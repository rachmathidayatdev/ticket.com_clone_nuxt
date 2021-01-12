/** constants */
import DEFAULT_STATES from '../constants/defaultStates'
import ACTION_TYPES from '../constants/actionTypes'

const modelName = 'GENERAL'
const defaultState = DEFAULT_STATES[modelName]
const { GET_DEVICE } = ACTION_TYPES[modelName]

export const state = () => ({
	...defaultState,
})

export const mutations = {
	updateState(newState = defaultState, { type, payload, error }) {
		switch (type) {
			case GET_DEVICE:
				newState.device = { isMobile: payload }
				break

			default:
				newState = defaultState
				break
		}
	},
}

export const getters = {
	storeGeneral(store) {
		return JSON.parse(JSON.stringify(store))
	},
}

export const actions = {
	getDevice({ commit }, params = {}) {
		return new Promise((resolve) => {
			try {
				commit('updateState', {
					type: GET_DEVICE,
					payload: params.payload,
				})
			} catch (err) {
				const result = {
					error: 'Error get device',
					detail: err,
				}

				resolve(result)
			}
		})
	},
}
