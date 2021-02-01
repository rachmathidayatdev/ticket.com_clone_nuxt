import IMAGES from '~/constants/images'
import ICONS from '~/constants/icons'
import ROUTES from '~/constants/routes'

export default {
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
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2021/01/24/b89c6cbb-4ea7-4452-b0c1-74be69aba1a1-1611490255579-1a35269a64b7f3318685fb4a8ce22dd3.jpg',
				},
				{
					id: 2,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2021/01/20/bc14a29d-3987-4004-976a-f973ad0ca02a-1611127696540-735b4ca1c0288580135b87c273404533.jpg',
				},
				{
					id: 3,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2020/11/12/17b03409-78fe-4471-87cb-9b68446c65e5-1605158794471-91c3f4408dbcf69ce9237a636423dd5b.jpg',
				},
				{
					id: 4,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2021/01/22/3d8fea8b-d8bd-408b-88ee-2853b9ba93a1-1611319244880-f6793ca85de97c7eebcbbe611233d53f.jpg',
				},
				{
					id: 5,
					imageUrl:
						'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/banner/2021/01/24/6d67ce11-ad16-4b02-90a2-8f198d7b1e45-1611489632376-24e819a58f0dee5adcbb41cf17e6310d.jpg',
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
			currentPositionCarouselMain: 0,
		}
	},
	methods: {
		beforeChangeCarouselMain({ currentPosition, nextPosition }) {
			this.currentPositionCarouselMain = nextPosition
		},
	},
}
