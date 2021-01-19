<template>
	<div class="search">
		<Column custom-class="mobile-body">
			<Row custom-class="curve" height="200px"></Row>
			<Row custom-class="form p-20">
				<Column custom-class="form-container p-10" background="white">
					<Column :on-click="openBottomSheet">
						<TextView custom-class="font-14" font-color="manatee"
							>Dari</TextView
						>
						<Row custom-class="py-5">
							<Column custom-class="border-bottom-dashed" col="11">
								<Row>
									<img :src="icons.airplaneIcon" height="20" width="20" />
									<TextView custom-class="font-14 pl-10" font-color="manatee"
										>Mau ke mana?</TextView
									>
								</Row>
							</Column>
							<Column col="1">
								<Row custom-class="swap-content">
									<img :src="icons.swapIcon" height="15" width="15" />
								</Row>
							</Column>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee">Ke</TextView>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.airplaneIcon" height="20" width="20" />
							<TextView custom-class="font-14 pl-10" font-color="manatee"
								>Mau ke mana?</TextView
							>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee"
							>Pergi</TextView
						>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.calendarIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
								>Sen, 18 Jan 2021</TextView
							>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee"
							>Pulang</TextView
						>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.calendarIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
								>Sen, 18 Jan 2021</TextView
							>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee"
							>Penumpang</TextView
						>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.userIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
								>1 Dewasa</TextView
							>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee"
							>Kelas Kabin</TextView
						>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.seatIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
								>Ekonomi</TextView
							>
						</Row>
					</Column>
					<Column custom-class="mt-20">
						<TextView
							custom-class="font-14"
							font-weight="700"
							font-color="pickledBlueWood"
							>Tampilkan tiket FLEXI</TextView
						>
						<TextView custom-class="font-12"
							>Tiket fleksible yang bebas di reschedule</TextView
						>
					</Column>
					<Row
						custom-class="mt-20"
						align-items="center"
						justify-content="center"
					>
						<button type="button" class="btn">Cari Penerbangan</button>
					</Row>
				</Column>
			</Row>

			<BottomSheet
				:visible="isBottomSheetShow"
				@closeBottomSheet="closeBottomSheet"
			>
				<template slot="bottom-sheet-header">
					<div class="header">ini header</div>
				</template>
				<template slot="bottom-sheet-body">
					<div class="body">ini body</div>
				</template>
			</BottomSheet>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
