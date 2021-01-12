<template>
	<div :id="id" :class="classes" :style="customValueStyle">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		id: { type: String, default: null },
		customClass: { type: String, default: null },
		cols: { type: [String, Number], default: 1 },
		gridRowGap: { type: String, default: null },
		gridColGap: { type: String, default: null },
	},
	computed: {
		classes() {
			const classes = ['grid-view']
			const { customClass, cols } = this

			if (cols) {
				classes.push(`col-${cols}`)
			}

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
		customValueStyle() {
			const { gridRowGap, gridColGap } = this

			return {
				'--grid-row-gap': gridRowGap,
				'--grid-column-gap': gridColGap,
			}
		},
	},
}
</script>

<style lang="scss">
.grid-view {
	display: grid;
	grid-row-gap: var(--grid-row-gap);
	grid-column-gap: var(--grid-column-gap);

	$cols: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	@each $i in $cols {
		&.col-#{$i} {
			grid-template-columns: repeat(#{$i}, 1fr);
		}
	}
}
</style>
