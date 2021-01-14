<template>
	<div class="home">
		<Column class="mobile-body">
			<!-- banner -->
			<Column class="banner" background="mariner">
				<Carousel
					custom-class="mt-10 pl-20"
					:settings="{
						...sliderSettings,
						autoplay: true,
					}"
					@beforeChange="beforeChangeCarouselMain"
				>
					<div v-for="(item, index) in bannerList" :key="index" class="pr-15">
						<img :src="item.imageUrl" class="banner-item" />
					</div>
				</Carousel>
				<Row justify-content="space-between" class="banner-footer">
					<Row class="count-item">
						<TextView custom-class="font-12" font-color="white"
							>{{ currentPositionCarouselMain + 1 }} /
							{{ bannerList.length }}</TextView
						>
					</Row>
					<Row class="promo" background="mariner">
						<TextView custom-class="font-12" font-color="white"
							>Lihat Semua Promo</TextView
						>
					</Row>
				</Row>
			</Column>

			<!-- feature -->
			<Column class="feature">
				<TextView custom-class="font-14" font-weight="bold"
					>Hey kamu, mau kemana ?</TextView
				>
				<GridView
					custom-class="feature-container mt-20"
					cols="4"
					grid-row-gap="20px"
					grid-col-gap="20px"
				>
					<nuxt-link
						v-for="(item, index) in feature"
						:key="index"
						:to="item.link"
					>
						<Column align-items="center" class="feature-item">
							<Row
								class="item-icon--box p-10"
								background="white"
								justify-content="center"
								width="60px"
							>
								<img :src="item.icon" height="50" width="50" />
							</Row>
							<TextView
								custom-class="font-12 mt-10"
								font-weight="500"
								text-alignment="center"
								>{{ item.label }}</TextView
							>
						</Column>
					</nuxt-link>
				</GridView>
			</Column>

			<!-- penawaran -->
			<Column custom-class="penawaran" col="12" justify-content="center">
				<TextView custom-class="font-14" font-weight="bold"
					>Penawaran Spesial 2020</TextView
				>
				<TextView custom-class="font-12"
					>Penawaran spesial khusus buat kamu lo!</TextView
				>
				<Carousel
					custom-class="mt-10"
					:settings="{
						...sliderSettings,
						centerMode: true,
						centerPadding: '20px',
					}"
				>
					<div v-for="(item, index) in bannerList" :key="index" class="pr-15">
						<img :src="item.imageUrl" style="height: 50px" />
					</div>
				</Carousel>
			</Column>
			<Row height="50px"></Row>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
