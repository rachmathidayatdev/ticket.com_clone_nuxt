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
			const classes = ['row']
			const { customClass, alignItems, justifyContent, background } = this

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

.row {
	display: flex;
	flex-direction: row;
	height: var(--height);
	width: var(--width);

	@include bg-color($colors);

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
