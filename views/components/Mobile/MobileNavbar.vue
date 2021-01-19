<template>
	<Row
		justify-content="space-between"
		align-items="center"
		class="navbar"
		background="mariner"
		width="100%"
	>
		<Row v-if="backButton" align-items="center">
			<img
				:src="icons.backWhiteIcon"
				width="15"
				height="15"
				@click="prevPage"
			/>
			<TextView
				custom-class="font-14 pl-10"
				font-color="white"
				font-weight="700"
				>Pesawat</TextView
			>
		</Row>
		<img v-else :src="images.ticketLogo" width="100" height="30" />
		<TextView custom-class="font-12" font-color="white">Rp 1.700</TextView>
	</Row>
</template>

<script>
import IMAGES from '~/constants/images'
import ICONS from '~/constants/icons'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		TextView: () => import('~/views/ui/TextView'),
	},
	props: {
		backButton: { type: Boolean, default: false },
	},
	data() {
		return {
			icons: {
				backWhiteIcon: ICONS.BACK_WHITE_ICON,
			},
			images: {
				ticketLogo: IMAGES.TICKET_LOGO,
			},
		}
	},
	methods: {
		prevPage() {
			this.$router.back()
		},
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
