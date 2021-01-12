<template>
	<div :id="id" :class="classes">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		id: { type: String, default: null },
		customClass: { type: String, default: null },
		fontColor: { type: String, default: 'black' },
		fontWeight: { type: String, default: 'normal' },
		textAlignment: { type: String, default: 'left' },
	},
	computed: {
		classes() {
			const classes = ['text']
			const { customClass, fontColor, fontWeight, textAlignment } = this

			if (fontColor) {
				classes.push(`font-color-${fontColor}`)
			}

			if (fontWeight) {
				classes.push(`font-weight-${fontWeight}`)
			}

			if (textAlignment) {
				classes.push(`text-alignment-${textAlignment}`)
			}

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.text {
	@include text-color($colors);

	$fontWeight: '100', '200', '300', '400', '500', '600', '700', '800', '900',
		'normal', 'lighter', 'bold', 'bolder';
	@each $i in $fontWeight {
		&.font-weight-#{$i} {
			font-weight: #{$i};
		}
	}

	$textAlignment: 'left', 'center', 'right';
	@each $i in $textAlignment {
		&.text-alignment-#{$i} {
			text-align: #{$i};
		}
	}
}
</style>
