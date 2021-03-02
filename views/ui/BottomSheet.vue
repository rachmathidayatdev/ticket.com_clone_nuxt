<template>
	<div
		:class="`bottom-sheet ${visible ? 'visible' : ''}`"
		:style="styleCustom"
		@click="closeBottomSheet"
	>
		<div class="bottom-sheet--container" @click="onBodyClick">
			<header>
				<slot name="bottom-sheet-header" />
			</header>
			<main>
				<slot id="body" name="bottom-sheet-body" class="body" />
			</main>
		</div>
	</div>
</template>

<script>
import interact from 'interactjs'

export default {
	props: {
		visible: { type: Boolean, default: false },
		size: {
			type: Object,
			default: () => ({
				minHeight: 90,
				maxHeight: process.client
					? window.screen.availHeight -
					  (window.outerHeight - window.innerHeight)
					: 400,
			}),
		},
	},
	data() {
		return {
			maxHeightBody: 0,
		}
	},
	computed: {
		styleCustom() {
			return {
				'--maxHeightBody': `${this.maxHeightBody}px`,
			}
		},
	},
	mounted() {
		const self = this
		const { size } = self
		const offset = { x: 0, y: 0 }
		interact('.bottom-sheet--container').resizable({
			// resize from all edges and corners
			edges: { left: false, right: false, bottom: false, top: true },
			listeners: {
				move(event) {
					const { width, height } = event.rect
					const target = event.target

					self.maxHeightBody = size.maxHeight - height

					offset.x += event.deltaRect.left
					offset.y += event.deltaRect.top

					if (height <= size.minHeight) {
						self.closeBottomSheet()
					}

					Object.assign(target.style, {
						width: `${width}px`,
						height: `${height}px`,
						transform: `translate(${offset.x}px, 0px)`,
						// overflow: 'auto',
					})
				},
			},
			modifiers: [
				// keep the edges inside the parent
				interact.modifiers.restrictEdges({
					outer: 'parent',
				}),

				// minimum size
				interact.modifiers.restrictSize({
					min: {
						width: 200,
						height: size.minHeight,
					},
					max: {
						height: size.maxHeight,
					},
				}),
			],

			inertia: true,
		})
	},
	methods: {
		closeBottomSheet() {
			this.$emit('closeBottomSheet', false)
		},
		onBodyClick(e) {
			e.stopPropagation()
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.bottom-sheet {
	visibility: hidden;
	position: absolute;
	height: calc(100vh);
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 100;
	display: flex;
	align-items: flex-end;
	overflow: hidden;

	.bottom-sheet--container {
		position: relative;
		width: 100%;
		background-color: map-get($colors, white);

		touch-action: none;
		min-height: 200px;

		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		.body {
			max-height: calc(100vh - (var(--maxHeightBody) + 30px));
			overflow: scroll;
		}
	}

	&.visible {
		visibility: visible;
	}
}
</style>
