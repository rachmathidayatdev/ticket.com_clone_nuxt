module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'eslint:recommended',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		quotes: ['error', 'single'],
		semi: [2, 'never'],
		// indent: ['error', 2],
		'no-multi-spaces': ['error'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
			},
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
	},
}
