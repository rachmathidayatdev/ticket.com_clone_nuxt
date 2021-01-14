<template>
	<GridView
		custom-class="bottom-navbar"
		cols="4"
		grid-row-gap="10px"
		grid-col-gap="20px"
	>
		<Column
			v-for="(item, index) in menu"
			:key="index"
			align-items="center"
			class="navbar-item"
		>
			<img :src="item.icon" height="20" width="20" />
			<TextView custom-class="font-10" text-alignment="center">{{
				item.label
			}}</TextView>
		</Column>
	</GridView>
</template>

<script>
import ICONS from '~/constants/icons'

export default {
	components: {
		GridView: () => import('~/views/ui/GridView'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			menu: [
				{
					icon: ICONS.HOME_ICON,
					label: 'Home',
				},
				{
					icon: ICONS.ORDER_ICON,
					label: 'My Order',
				},
				{
					icon: ICONS.REWARD_ICON,
					label: 'Elite Rewards',
				},
				{
					icon: ICONS.AKUN_ICON,
					label: 'Account',
				},
			],
		}
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.bottom-navbar {
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: map-get($colors, white);
	box-shadow: 0px -4px 3px map-get($colors, box-shadow);
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	padding: 0.5rem 0.75rem 0.5rem 0.75rem;
}
</style>
