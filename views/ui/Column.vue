<template>
	<div
		:id="id"
		:class="classes"
		:style="styleCustom"
		@click="onClick(payloadCustom)"
	>
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		id: { type: String, default: null },
		customClass: { type: String, default: null },
		col: { type: [String, Number], default: 12 },
		alignItems: { type: String, default: 'normal' },
		justifyContent: { type: String, default: 'normal' },
		background: { type: String, default: null },
		width: { type: String, default: 'auto' },
		height: { type: String, default: 'auto' },
		onClick: { type: Function, default: () => {} },
		payloadCustom: { type: String, default: null },
	},
	computed: {
		classes() {
			const classes = ['column']
			const { customClass, col, alignItems, justifyContent, background } = this

			if (col) {
				classes.push(`col-${col}`)
			}

			if (alignItems) {
				classes.push(`align-items-${alignItems}`)
			}

			if (justifyContent) {
				classes.push(`justify-content-${justifyContent}`)
			}

			if (background) {
				classes.push(`bg-color-${background}`)
			}

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
		styleCustom() {
			const { height, width } = this

			return {
				'--height': height,
				'--width': width,
			}
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.column {
	display: flex;
	flex-direction: column;
	height: var(--height);
	width: var(--width);

	@include bg-color($colors);

	$col: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	@each $i in $col {
		&.col-#{$i} {
			@if $i == 1 {
				width: 8.33%;
			} @else if $i == 2 {
				width: 16.66%;
			} @else if $i == 3 {
				width: 25%;
			} @else if $i == 4 {
				width: 33.33%;
			} @else if $i == 5 {
				width: 41.66%;
			} @else if $i == 6 {
				width: 50%;
			} @else if $i == 7 {
				width: 58.33%;
			} @else if $i == 8 {
				width: 66.66%;
			} @else if $i == 9 {
				width: 75%;
			} @else if $i == 10 {
				width: 83.33%;
			} @else if $i == 11 {
				width: 91.66%;
			} @else {
				width: 100%;
			}
		}
	}

	$alignItems: 'normal', 'center', 'flex-start', 'flex-end', 'start', 'end',
		'revert';
	@each $i in $alignItems {
		&.align-items-#{$i} {
			align-items: #{$i};
		}
	}

	$justifyContent: 'normal', 'center', 'flex-start', 'flex-end', 'start', 'end',
		'left', 'right', 'space-around', 'space-evenly', 'space-between', 'revert';
	@each $i in $justifyContent {
		&.justify-content-#{$i} {
			justify-content: #{$i};
		}
	}
}
</style>
