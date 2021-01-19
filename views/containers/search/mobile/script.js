import ICONS from '~/constants/icons'

export default {
	components: {
		Column: () => import('~/views/ui/Column'),
		Row: () => import('~/views/ui/Row'),
		TextView: () => import('~/views/ui/TextView'),
		BottomSheet: () => import('~/views/ui/BottomSheet'),
	},
	data() {
		return {
			icons: {
				airplaneIcon: ICONS.AIRPLANE_ICON,
				calendarIcon: ICONS.CALENDAR_ICON,
				seatIcon: ICONS.SEAT_ICON,
				swapIcon: ICONS.SWAP_ICON,
				userIcon: ICONS.USER_ICON,
			},
			isBottomSheetShow: false,
		}
	},
	methods: {
		openBottomSheet() {
			this.isBottomSheetShow = true
		},
		closeBottomSheet() {
			this.isBottomSheetShow = false
		},
	},
}
