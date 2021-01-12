<template>
	<div :id="id" :class="classes">
		<VueSlickCarousel v-bind="settings">
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
}
</script>

<style lang="scss">
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';

.carousel {
}

.slick-list {
	padding: 0 20px 0 0 !important;
}
</style>
