import ICONS from '~/constants/icons'

export default {
	components: {
		Column: () => import('~/views/ui/Column'),
		Row: () => import('~/views/ui/Row'),
		TextView: () => import('~/views/ui/TextView'),
		TextInput: () => import('~/views/ui/TextInput'),
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
				roundedCloseIcon: ICONS.ROUNDED_CLOSE_ICON,
			},
			isBottomSheetOriginShow: false,
			isBottomSheetDestinationShow: false,
			form: {
				origin: '',
				destination: '',
			},
			keywoard: {
				origin: '',
				destination: '',
			},
			locations: [
				{
					name: 'Bali',
					country: 'Indonesia',
					property: 9000,
				},
				{
					name: 'Jakarta',
					country: 'Indonesia',
					property: 9000,
				},
				{
					name: 'Bandung',
					country: 'Jawa Barat, Indonesia',
					property: 9000,
				},
				{
					name: 'Surabaya',
					country: 'Jawa Timur, Indonesia',
					property: 9000,
				},
			],
		}
	},
	computed: {
		locationFilter() {
			return this.locations.filter(
				(item) =>
					item.name
						.toLowerCase()
						.includes(this.keywoard.origin.toLowerCase()) ||
					item.name
						.toLowerCase()
						.includes(this.keywoard.destination.toLowerCase()),
			)
		},
	},
	methods: {
		openBottomSheetOrigin() {
			this.isBottomSheetOriginShow = true
		},
		closeBottomSheetOrigin() {
			this.isBottomSheetOriginShow = false
		},
		openBottomSheetDestination() {
			this.isBottomSheetDestinationShow = true
		},
		closeBottomSheetDestination() {
			this.isBottomSheetDestinationShow = false
		},
		onChange({ field, value }) {
			this.keywoard[field] = value
		},
		clearValue({ field, defaultValue }) {
			this.keywoard[field] = defaultValue
		},
		setValue(payload) {
			const data = JSON.parse(payload)
			const { field, value } = data

			this.form[field] = value
			this.keywoard[field] = ''
			this.closeBottomSheetOrigin()
			this.closeBottomSheetDestination()
		},
	},
}
