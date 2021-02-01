import ICONS from '~/constants/icons'
import IMAGES from '~/constants/images'
import ROUTES from '~/constants/routes'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
		Carousel: () => import('~/views/ui/Carousel'),
		GridView: () => import('~/views/ui/GridView'),
	},
	data() {
		return {
			icons: {
				nextWhiteIcon: ICONS.NEXT_WHITE_ICON,
				prevWhiteIcon: ICONS.PREV_WHITE_ICON,
			},
			images: {
				ticketDesktopLogo: IMAGES.TICKET_DESKTOP_LOGO,
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
			infoList: [
				{
					id: 1,
					imageUrl: 'https://www.tiket.com/home-ms/assets/simple-profile.png',
					title: 'Simple Profile',
					description:
						'Pesan lebih cepat, isi data penumpang dengan sekali klik.',
				},
				{
					id: 2,
					imageUrl:
						'https://www.tiket.com/home-ms/assets/simple-reschedule.png',
					title: 'Simple Reschedule',
					description: 'Memudahkan kamu mengatur ulang penerbangan.',
				},
				{
					id: 3,
					imageUrl: 'https://www.tiket.com/home-ms/assets/easy-ticket.png',
					title: 'Simple Booking Process',
					description: 'Pemesanan tanpa ribet di mana pun dan kapan pun.',
				},
				{
					id: 4,
					imageUrl: 'https://www.tiket.com/home-ms/assets/simple-refund.png',
					title: 'Simple Refund',
					description: 'Refund tiket tanpa ribet dari aplikasi maupun website.',
				},
			],
			kemudahan: [
				{
					id: 1,
					imageUrl: 'https://www.tiket.com/home-ms/assets/easy-ticket.png',
					title: 'Mudahnya Pesan Tiket dan Hotel',
					description:
						'Pesan tiket sekaligus hotel dengan mudah dan cepat. Tidak perlu risau, hanya dengan satu sentuhan jari, tiket dan hotel yang kamu butuhkan bisa didapatkan dengan mudah.',
				},
				{
					id: 2,
					imageUrl: 'https://www.tiket.com/home-ms/assets/various-products.png',
					title: 'Banyak Pilihan Produk Terbaik',
					description:
						'Ada banyak pilihan maskapai dengan rute terlengkap ke seluruh dunia. Tersedia juga banyak pilihan hotel di Asia. Kamu juga bisa cari tiket kereta ke berbagai rute, sewa mobil, dan pesan tiket hiburan.',
				},
				{
					id: 3,
					imageUrl: 'https://www.tiket.com/home-ms/assets/payment-method.png',
					title: 'Banyak Pilihan Cara Pembayaran',
					description:
						'Saat transaksi di tiket.com, kamu bisa memilih cara pembayaran sesuai keinginan. Ada pilihan pembayaran via bank transfer, ATM transfer, Virtual Account (VA), kartu debit online, maupun kartu kredit. Bisa dicicil juga, lho. Prosesnya mudah dan simpel!',
				},
				{
					id: 4,
					imageUrl: 'https://www.tiket.com/home-ms/assets/promo-discount.png',
					title: 'Banyak Promo Spesial',
					description:
						'Banyak promo untuk tiket & hotel kesayanganmu. Dapatkan diskon harga terbaik agar bujet liburan kamu semakin hemat. Tidak ada alasan lagi untuk menunda liburan kamu.',
				},
				{
					id: 5,
					imageUrl: 'https://www.tiket.com/home-ms/assets/elite-rewards.png',
					title: 'Benefit tiket Elite Rewards',
					description:
						'Dapatkan benefit tiket Elite Rewards berupa tiket Points yang bisa kamu tukarkan dengan diskon. Juga berbagai benefit eksklusif sesuai produk yang kamu beli!',
				},
				{
					id: 6,
					imageUrl: 'https://www.tiket.com/home-ms/assets/customer-service.png',
					title: '24/7 Customer Care',
					description:
						'Melalui pelayanan 24/7 Customer Care, kami akan selalu ada buat kamu. Dapatkan bantuan untuk pemesanan hotel dan tiketmu dengan pelayanan 24/7 Customer Care dari tiket.com.',
				},
			],
		}
	},
	methods: {
		beforeChangeCarouselMain({ currentPosition, nextPosition }) {
			this.currentPositionCarouselMain = nextPosition
		},
		prevBanner(payload) {
			const data = JSON.parse(payload)
			if (data.index >= 0) {
				this.$refs.bannerList.$children[0].goTo(data.index)
			} else {
				this.$refs.bannerList.$children[0].goTo(this.bannerList.length - 1)
			}
		},
		nextBanner(payload) {
			const data = JSON.parse(payload)
			if (data.index < this.bannerList.length) {
				this.$refs.bannerList.$children[0].goTo(data.index)
			} else {
				this.$refs.bannerList.$children[0].goTo(0)
			}
		},
		goToSlider(index) {
			this.$refs.bannerList.$children[0].goTo(index)
		},
	},
}
