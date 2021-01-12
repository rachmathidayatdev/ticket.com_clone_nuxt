import IMAGES from '~/constants/images'
import ICONS from '~/constants/icons'
import ROUTES from '~/constants/routes'

export default {
	transition: 'slide-left',
	components: {
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		GridView: () => import('~/views/ui/GridView'),
		TextView: () => import('~/views/ui/TextView'),
		Carousel: () => import('~/views/ui/Carousel'),
	},
	data() {
		return {
			images: {
				ticketLogo: IMAGES.TICKET_LOGO,
				banner:
					'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/12/31/27e201f4-60ee-4200-a4bd-df6088b9c201-1609424742697-b87bae37b2de2a3fceb887001c98fb19.jpg',
			},
			icons: {
				homeIcon: ICONS.HOME_ICON,
				pesawatIcon: ICONS.PESAWAT_ICON,
			},
			feature: [
				{
					icon: ICONS.PESAWAT_ICON,
					label: 'Pesawat',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.HOTEL_ICON,
					label: 'Hotel',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.TODO_ICON,
					label: 'To Do',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.KERETA_ICON,
					label: 'Kereta Api',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.SEWA_MOBIL_ICON,
					label: 'Sewa Mobil',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.EVENT_ICON,
					label: 'Event',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.AIRPORT_TRANSPORT_ICON,
					label: 'Airport Transport',
					link: ROUTES.SEARCH.url,
				},
				{
					icon: ICONS.EVENT_ICON,
					label: 'PayLater',
					link: ROUTES.SEARCH.url,
				},
			],
			bannerList: [
				{
					id: 1,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/12/31/27e201f4-60ee-4200-a4bd-df6088b9c201-1609424742697-b87bae37b2de2a3fceb887001c98fb19.jpg',
				},
				{
					id: 2,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/12/31/27e201f4-60ee-4200-a4bd-df6088b9c201-1609424742697-b87bae37b2de2a3fceb887001c98fb19.jpg',
				},
				{
					id: 3,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/12/31/27e201f4-60ee-4200-a4bd-df6088b9c201-1609424742697-b87bae37b2de2a3fceb887001c98fb19.jpg',
				},
				{
					id: 4,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/12/31/27e201f4-60ee-4200-a4bd-df6088b9c201-1609424742697-b87bae37b2de2a3fceb887001c98fb19.jpg',
				},
				{
					id: 5,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/12/31/27e201f4-60ee-4200-a4bd-df6088b9c201-1609424742697-b87bae37b2de2a3fceb887001c98fb19.jpg',
				},
			],
			sliderSettings: {
				dots: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				arrows: false,
				swipe: true,
			},
		}
	},
}
