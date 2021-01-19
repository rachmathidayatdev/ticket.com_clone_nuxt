<template>
	<div>
		<div v-if="isMobile">
			<!-- navbar -->
			<MobileNavbar :back-button="true" />
			<!-- body -->
			<ViewMobile />
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
	},
	computed: {
		...mapState({
			isMobile: (state) => state.general.device.isMobile,
		}),
	},
}
</script>
