/** constants */
const ROUTES = require('./constants/routes')

export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'ticket_vue',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Custom routes
	router: {
		middleware: ['userAgent'],
		extendRoutes(nuxtRoutes, resolve) {
			const routes = []
			const totalExistingRoutes = nuxtRoutes.length

			if (ROUTES) {
				for (const name in ROUTES) {
					if (ROUTES.hasOwnProperty(name)) {
						const route = ROUTES[name]
						const { route: path, href: component } = route
						if (path && component) {
							const chunkName = `pages${component}`
							routes.push({
								name,
								path,
								component: resolve(__dirname, `pages/${component}`),
								chunkName: chunkName.replace(/.vue/g, ''),
							})
						}
					}
				}

				nuxtRoutes.unshift(...routes)
				nuxtRoutes.length = nuxtRoutes.length - totalExistingRoutes
			}
		},
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}
