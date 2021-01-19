<template>
	<div :class="`bottom-sheet ${visible ? 'active' : ''}`">
		<div class="bottom-sheet-backdrop" @click="closeBottomSheet">
			<div class="bottom-sheet-container" :style="styleCustom">
				<header>
					<slot name="bottom-sheet-header" />
				</header>
				<main>
					<slot name="bottom-sheet-body" class="body" />
				</main>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		visible: { type: Boolean, default: false },
		height: { type: String, default: '100px' },
	},
	computed: {
		styleCustom() {
			const { height } = this

			return {
				'--height': height,
				'--bottom': `-${height}`,
			}
		},
	},
	methods: {
		closeBottomSheet() {
			this.$emit('closeBottomSheet', false)
		},
	},
}
</script>

<style lang="scss">
.bottom-sheet {
	position: absolute;
	width: 100%;
	z-index: 99;
	visibility: hidden;
	overflow: hidden;

	.bottom-sheet-backdrop {
		height: calc(100vh - 37px);
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.8);

		.bottom-sheet-container {
			position: absolute;
			bottom: -100px;
			height: 100px;
			width: 100%;
			background-color: white;
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
			transition: all 0.3s ease;
		}
	}

	&.active {
		visibility: visible;

		.bottom-sheet-backdrop {
			.bottom-sheet-container {
				bottom: 100px;
				transform: translate(0, 100%);
			}
		}
	}
}
</style>
