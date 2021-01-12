<template>
	<Row
		justify-content="space-between"
		align-items="center"
		class="navbar"
		background="mariner"
		width="100%"
	>
		<img :src="images.ticketLogo" width="100" height="30" />
		<TextView custom-class="font-12" font-color="white">Rp 1.700</TextView>
	</Row>
</template>

<script>
import IMAGES from '~/constants/images'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			images: {
				ticketLogo: IMAGES.TICKET_LOGO,
			},
		}
	},
}
</script>

<style lang="scss">
.navbar {
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 0.5rem 0.75rem 0.5rem 0.75rem;
}
</style>
