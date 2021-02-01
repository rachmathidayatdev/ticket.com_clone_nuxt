<template>
	<div :id="id" :class="classes">
		<VueSlickCarousel
			:ref="customRef"
			v-bind="settings"
			@init="init"
			@reInit="reInit"
			@lazyLoad="lazyLoad"
			@lazyLoadError="lazyLoadError"
			@beforeChange="beforeChange"
			@afterChange="afterChange"
			@edge="edge"
			@swipe="swipe"
		>
			<slot />
		</VueSlickCarousel>
	</div>
</template>

<script>
export default {
	components: {
		VueSlickCarousel: () => import('vue-slick-carousel'),
	},
	props: {
		customRef: { type: String, default: 'carousel' },
		id: { type: String, default: null },
		customClass: { type: String, default: null },
		settings: { type: Object, default: () => {} },
	},
	data() {
		return {}
	},
	computed: {
		classes() {
			const classes = ['carousel']
			const { customClass } = this

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
	},
	methods: {
		init() {},
		reInit() {},
		lazyLoad() {},
		lazyLoadError() {},
		beforeChange(currentPosition, nextPosition) {
			this.$emit('beforeChange', { currentPosition, nextPosition })
		},
		afterChange(currentPosition) {
			this.$emit('afterChange', currentPosition)
		},
		edge() {},
		swipe() {},
	},
}
</script>

<style lang="scss">
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';

.slick-list {
	padding: 0 20px 0 0 !important;
}
</style>
