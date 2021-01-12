import MobileDetect from 'mobile-detect'

/** initiate app */
export function initApp({ userAgent, dispatch, resolve }, callback) {
	initMobileDevice({ userAgent, dispatch })
	resolve(true)
	callback(null, true)
}

/** check if device type is mobile */
export function initMobileDevice({ userAgent, dispatch }) {
	const isMobile = checkIsMobileDevice(userAgent)
	dispatch('general/getDevice', {
		payload: !!isMobile,
	})
}

/** check is mobile device */
export function checkIsMobileDevice(userAgent = '') {
	return (userAgent && !!new MobileDetect(userAgent).mobile()) || false
}
