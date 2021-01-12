<template>
	<div>
		<div v-if="isMobile">
			<!-- navbar -->
			<MobileNavbar />
			<!-- body -->
			<ViewMobile />
			<!-- bottom navbar -->
			<MobileBottomNavbar />
		</div>
		<ViewDesktop v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	components: {
		ViewDesktop: () => import('./desktop'),
		ViewMobile: () => import('./mobile'),
		MobileNavbar: () => import('~/views/components/Mobile/MobileNavbar'),
		MobileBottomNavbar: () =>
			import('~/views/components/Mobile/MobileBottomNavbar'),
	},
	computed: {
		...mapState({
			isMobile: (state) => state.general.device.isMobile,
		}),
	},
}
</script>
