<template>
	<div class="search">
		<Column custom-class="mobile-body">
			<Row custom-class="curve" height="200px" />
			<Row custom-class="form p-20">
				<Column custom-class="form-container p-10" background="white">
					<Column :on-click="openBottomSheetOrigin">
						<TextView custom-class="font-14" font-color="manatee">
							Dari
						</TextView>
						<Row custom-class="py-5">
							<Column custom-class="border-bottom-dashed" col="11">
								<Row>
									<img :src="icons.airplaneIcon" height="20" width="20" />
									<TextView custom-class="font-14 pl-10" font-color="manatee">
										{{ form.origin.length > 0 ? form.origin : 'Mau ke mana?' }}
									</TextView>
								</Row>
							</Column>
							<Column col="1">
								<Row custom-class="swap-content">
									<img :src="icons.swapIcon" height="15" width="15" />
								</Row>
							</Column>
						</Row>
					</Column>
					<Column :on-click="openBottomSheetDestination" custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee">
							Ke
						</TextView>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.airplaneIcon" height="20" width="20" />
							<TextView custom-class="font-14 pl-10" font-color="manatee">
								{{
									form.destination.length > 0
										? form.destination
										: 'Mau ke mana?'
								}}
							</TextView>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee">
							Pergi
						</TextView>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.calendarIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
							>
								Sen, 18 Jan 2021
							</TextView>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee">
							Pulang
						</TextView>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.calendarIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
							>
								Sen, 18 Jan 2021
							</TextView>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee">
							Penumpang
						</TextView>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.userIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
							>
								1 Dewasa
							</TextView>
						</Row>
					</Column>
					<Column custom-class="mt-10">
						<TextView custom-class="font-14" font-color="manatee">
							Kelas Kabin
						</TextView>
						<Row custom-class="border-bottom-solid py-5">
							<img :src="icons.seatIcon" height="20" width="20" />
							<TextView
								custom-class="font-14 pl-10"
								font-weight="700"
								font-color="pickledBlueWood"
							>
								Ekonomi
							</TextView>
						</Row>
					</Column>
					<Column custom-class="mt-20">
						<TextView
							custom-class="font-14"
							font-weight="700"
							font-color="pickledBlueWood"
						>
							Tampilkan tiket FLEXI
						</TextView>
						<TextView custom-class="font-12">
							Tiket fleksible yang bebas di reschedule
						</TextView>
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

			<!-- origin location -->
			<BottomSheet
				:visible="isBottomSheetOriginShow"
				:height="1000"
				:is-rounded-header="false"
				@closeBottomSheet="closeBottomSheetOrigin"
			>
				<template slot="bottom-sheet-header">
					<div class="header">
						<Row justify-content="space-between">
							<TextView custom-class="max-line-1 font-16" font-weight="500"
								>Tujuan</TextView
							>
							<img
								:src="icons.roundedCloseIcon"
								width="25"
								@click="closeBottomSheetOrigin"
							/>
						</Row>
					</div>
				</template>
				<template slot="bottom-sheet-body">
					<div class="body">
						<Column cols="12">
							<TextInput
								type="text"
								place-holder="Mau ke mana?"
								name="origin"
								field="origin"
								:value="keywoard.origin"
								border-radius="10"
								@onChange="onChange"
								@clearValue="
									clearValue({
										field: 'origin',
										defaultValue: '',
									})
								"
							/>
						</Column>
						<Column
							v-if="locationFilter && locationFilter.length"
							custom-class="mt-10"
						>
							<Row
								v-for="(item, index) in locationFilter"
								:key="index"
								custom-class="mt-10"
								:on-click="setValue"
								:payload-custom="
									JSON.stringify({ field: 'origin', value: item.name })
								"
							>
								<Column col="9">
									<Row>
										<TextView
											custom-class="max-line-1 font-14"
											font-weight="400"
											>{{ item.name }}</TextView
										>
									</Row>
									<Row>
										<TextView
											custom-class="max-line-1 font-12"
											font-color="manatee"
											>{{ item.country }}</TextView
										>
									</Row>
								</Column>
								<Column col="3" align-items="center" justify-content="center">
									<Row custom-class="py-5 px-20" background="heather">
										<TextView
											custom-class="max-line-1 font-12"
											font-color="white"
											>Region</TextView
										>
									</Row>
									<Row>
										<TextView
											custom-class="max-line-1 font-12"
											font-color="manatee"
											>{{ item.property }} properti</TextView
										>
									</Row>
								</Column>
							</Row>
						</Column>
						<Row
							v-else
							custom-class="mt-20"
							align-items="center"
							justify-content="center"
						>
							<TextView custom-class="max-line-1 font-12" font-color="manatee"
								>Destination not found</TextView
							>
						</Row>
					</div>
				</template>
			</BottomSheet>

			<!-- destination location -->
			<BottomSheet
				:visible="isBottomSheetDestinationShow"
				:height="1000"
				:is-rounded-header="false"
				@closeBottomSheet="closeBottomSheetDestination"
			>
				<template slot="bottom-sheet-header">
					<div class="header">
						<Row justify-content="space-between">
							<TextView custom-class="max-line-1 font-16" font-weight="500"
								>Tujuan</TextView
							>
							<img
								:src="icons.roundedCloseIcon"
								width="25"
								@click="closeBottomSheetDestination"
							/>
						</Row>
					</div>
				</template>
				<template slot="bottom-sheet-body">
					<div class="body">
						<Column cols="12">
							<TextInput
								type="text"
								place-holder="Mau ke mana?"
								name="destination"
								field="destination"
								:value="keywoard.destination"
								border-radius="10"
								@onChange="onChange"
								@clearValue="
									clearValue({
										field: 'destination',
										defaultValue: '',
									})
								"
							/>
						</Column>
						<Column
							v-if="locationFilter && locationFilter.length"
							custom-class="mt-10"
						>
							<Row
								v-for="(item, index) in locationFilter"
								:key="index"
								custom-class="mt-10"
								:on-click="setValue"
								:payload-custom="
									JSON.stringify({ field: 'destination', value: item.name })
								"
							>
								<Column col="9">
									<Row>
										<TextView
											custom-class="max-line-1 font-14"
											font-weight="400"
											>{{ item.name }}</TextView
										>
									</Row>
									<Row>
										<TextView
											custom-class="max-line-1 font-12"
											font-color="manatee"
											>{{ item.country }}</TextView
										>
									</Row>
								</Column>
								<Column col="3" align-items="center" justify-content="center">
									<Row custom-class="py-5 px-20" background="heather">
										<TextView
											custom-class="max-line-1 font-12"
											font-color="white"
											>Region</TextView
										>
									</Row>
									<Row>
										<TextView
											custom-class="max-line-1 font-12"
											font-color="manatee"
											>{{ item.property }} properti</TextView
										>
									</Row>
								</Column>
							</Row>
						</Column>
						<Row
							v-else
							custom-class="mt-20"
							align-items="center"
							justify-content="center"
						>
							<TextView custom-class="max-line-1 font-12" font-color="manatee"
								>Destination not found</TextView
							>
						</Row>
					</div>
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
