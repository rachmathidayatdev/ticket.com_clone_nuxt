<template>
	<div class="home">
		<Column>
			<!-- navbar -->
			<Row custom-class="px-200" height="85px" align-items="center">
				<Column col="2">
					<img :src="images.ticketDesktopLogo" width="182" height="40" />
				</Column>
				<Column col="6">
					<ul>
						<li>
							<TextView custom-class="font-14"> Tiket Pesawat </TextView>
						</li>
						<li>
							<TextView custom-class="font-14"> Hotel </TextView>
						</li>
						<li>
							<TextView custom-class="font-14"> To Do </TextView>
						</li>
						<li>
							<TextView custom-class="font-14"> Tiket Kereta Api </TextView>
						</li>
						<li>
							<TextView custom-class="font-14"> Sewa Mobil </TextView>
						</li>
						<li>
							<TextView custom-class="font-14"> Event </TextView>
						</li>
					</ul>
				</Column>
				<Column col="4">
					<ul>
						<li>
							<TextView custom-class="font-14" font-weight="500">
								Elite Rewards
							</TextView>
						</li>
						<li>
							<TextView custom-class="font-14" font-weight="500">
								Cek Order
							</TextView>
						</li>
						<li>
							<TextView custom-class="font-14" font-weight="500">
								Login
							</TextView>
						</li>
						<li>
							<TextView custom-class="font-14" font-weight="500">
								Daftar
							</TextView>
						</li>
					</ul>
				</Column>
			</Row>

			<!-- banner -->
			<Column>
				<Column custom-class="banner px-27-rem" background="scienceBlue">
					<Carousel
						ref="bannerList"
						:settings="{
							...sliderSettings,
							autoplay: true,
						}"
						@beforeChange="beforeChangeCarouselMain"
					>
						<div v-for="(item, index) in bannerList" :key="index">
							<img :src="item.imageUrl" class="banner-item" />
						</div>
					</Carousel>

					<Row
						custom-class="prev-icon"
						:on-click="prevBanner"
						:payload-custom="
							JSON.stringify({ index: currentPositionCarouselMain - 1 })
						"
					>
						<img :src="icons.prevWhiteIcon" width="50" height="50" />
					</Row>
					<Row
						custom-class="next-icon"
						:on-click="nextBanner"
						:payload-custom="
							JSON.stringify({ index: currentPositionCarouselMain + 1 })
						"
					>
						<img :src="icons.nextWhiteIcon" width="50" height="50" />
					</Row>
					<ul class="slick-dots">
						<li
							v-for="(_, index) in bannerList"
							:key="index"
							@click="goToSlider(index)"
						>
							<div
								:class="`dots-item ${
									index === currentPositionCarouselMain && 'active'
								}`"
							></div>
						</li>
					</ul>
				</Column>
			</Column>

			<!-- feature -->
			<Row custom-class="feature-container">
				<Column custom-class="feature">
					<Row custom-class="px-40 py-20" background="zircon">
						<Column col="5">
							<TextView custom-class="font-18" font-weight="300">
								Hey, kamu
							</TextView>
							<TextView custom-class="font-28" font-weight="600">
								Mau ke mana?
							</TextView>
						</Column>
						<Column col="7">
							<GridView cols="6" grid-row-gap="20px" grid-col-gap="20px">
								<nuxt-link
									v-for="(item, index) in feature"
									:key="index"
									:to="item.link"
								>
									<Column align-items="center" class="feature-item">
										<Row
											class="item-icon--box p-5"
											justify-content="center"
											width="70px"
										>
											<img :src="item.icon" height="70" width="50" />
										</Row>
										<TextView
											custom-class="font-12 mt-10"
											font-weight="500"
											text-alignment="center"
										>
											{{ item.label }}
										</TextView>
									</Column>
								</nuxt-link>
							</GridView>
						</Column>
					</Row>
					<Row custom-class="px-40 py-20">
						<TextView custom-class="font-24" font-weight="600">
							Booking Hotel Murah Online dengan Harga Promo
						</TextView>
					</Row>
					<Row custom-class="schedule">
						<Column custom-class="schedule-item" col="3">
							<TextView
								custom-class="font-16"
								font-color="heather"
								font-weight="400"
							>
								Tujuan
							</TextView>
							<TextView
								custom-class="font-18"
								font-color="manatee"
								font-weight="600"
							>
								Mau nginep ke mana?
							</TextView>
						</Column>
						<Column custom-class="schedule-item" col="6">
							<Row>
								<Column col="6">
									<TextView
										custom-class="font-16"
										font-color="heather"
										font-weight="400"
									>
										Check-in
									</TextView>
									<TextView custom-class="font-18" font-weight="600">
										Jum, 29 Jan 2021
									</TextView>
								</Column>
								<Column col="6">
									<TextView
										custom-class="font-16"
										font-color="heather"
										font-weight="400"
									>
										Check-out
									</TextView>
									<TextView custom-class="font-18" font-weight="600">
										Sab, 30 Jan 2021
									</TextView>
								</Column>
							</Row>
						</Column>
						<Column custom-class="schedule-item" col="3">
							<TextView
								custom-class="font-16"
								font-color="heather"
								font-weight="400"
							>
								Tamu & Kamar
							</TextView>
							<TextView custom-class="font-18" font-weight="600">
								1 Tamu, 1 Kamar
							</TextView>
						</Column>
					</Row>
					<Row custom-class="px-40 py-20" justify-content="flex-end">
						<button type="button" class="btn">Cari Hotel</button>
					</Row>
				</Column>
			</Row>

			<!-- info -->
			<Row custom-class="px-200 mt-22-rem">
				<GridView
					custom-class="info px-40 py-20"
					cols="2"
					grid-row-gap="30px"
					grid-col-gap="20px"
				>
					<Row v-for="(item, index) in infoList" :key="index">
						<Column col="3" align-items="center" justify-content="center">
							<img :src="item.imageUrl" height="80" width="80" />
						</Column>
						<Column col="9" justify-content="center">
							<TextView custom-class="font-20" font-weight="600">
								{{ item.title }}
							</TextView>
							<TextView
								custom-class="font-14"
								font-weight="300"
								font-color="manatee"
							>
								{{ item.description }}
							</TextView>
						</Column>
					</Row>
				</GridView>
			</Row>

			<!-- kemudahan -->
			<Row custom-class="kemudahan mt-30" height="1250px">
				<Column custom-class="px-18-rem">
					<TextView
						custom-class="font-28"
						font-weight="600"
						text-alignment="center"
					>
						Kemudahan itu ada tiketnya!
					</TextView>
					<Row custom-class="kemudahan-box mt-30">
						<GridView
							custom-class="kemudahan-item p-40"
							cols="3"
							grid-row-gap="40px"
							grid-col-gap="20px"
						>
							<Row v-for="(item, index) in kemudahan" :key="index">
								<Column col="12" align-items="center">
									<img :src="item.imageUrl" height="100" width="100" />
									<TextView custom-class="font-20 mt-20" font-weight="600">
										{{ item.title }}
									</TextView>
									<TextView
										custom-class="font-14 mt-20"
										font-weight="300"
										font-color="manatee"
									>
										{{ item.description }}
									</TextView>
								</Column>
							</Row>
						</GridView>
					</Row>
				</Column>
			</Row>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
