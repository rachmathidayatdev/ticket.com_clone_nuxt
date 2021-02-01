<template>
	<div :id="id" :class="classes">
		<div v-if="prefixIcon" class="prefix-icon">
			<img :src="prefixIconUrl" width="15" height="15" />
		</div>
		<input
			v-model="inputModel"
			:class="classesInput"
			:type="type"
			:placeholder="placeHolder"
			:name="name"
			autocomplete="off"
			@input="onChange"
		/>
		<div v-if="suffixIcon" class="suffix-icon">
			<img
				v-if="clearInput"
				:src="icons.roundedCloseIcon"
				width="15"
				height="15"
				@click="clearValue"
			/>
			<img v-else :src="suffixIconUrl" width="15" height="15" />
		</div>
		<label v-if="material" :style="styleCustom">{{ placeHolder }}</label>
	</div>
</template>

<script>
import ICONS from '~/constants/icons'

export default {
	props: {
		id: { type: String, default: null },
		customClass: { type: String, default: null },
		placeHolder: { type: String, default: '' },
		type: { type: String, default: 'text' },
		name: { type: String, default: 'name' },
		field: { type: String, default: '' },
		value: { type: [String, Number], default: '' },
		borderRadius: { type: [String, Number], default: 0 },
		borderColor: { type: String, default: 'manatee' },
		prefixIcon: { type: Boolean, default: true },
		prefixIconUrl: { type: String, default: ICONS.SEARCH_ICON },
		suffixIcon: { type: Boolean, default: true },
		suffixIconUrl: { type: String, default: ICONS.SEARCH_ICON },
		material: { type: Boolean, default: true },
		clearInput: { type: Boolean, default: true },
	},
	data() {
		return {
			icons: {
				roundedCloseIcon: ICONS.ROUNDED_CLOSE_ICON,
			},
			inputModel: this.value,
		}
	},
	computed: {
		classes() {
			const classes = ['input-container']
			const { customClass } = this

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
		classesInput() {
			const classesInput = ['input']
			const {
				borderRadius,
				borderColor,
				prefixIcon,
				suffixIcon,
				material,
			} = this

			if (borderRadius) {
				classesInput.push(`border-radius-${borderRadius}`)
			}

			if (borderColor) {
				classesInput.push(`border-color-${borderColor}`)
			}

			if (prefixIcon) {
				classesInput.push('pl-30')
				classesInput.push('pr-10')
			} else {
				classesInput.push('px-10')
			}

			if (suffixIcon) {
				classesInput.push('pr-30')
				classesInput.push('pl-10')
			} else {
				classesInput.push('px-10')
			}

			if (material) {
				classesInput.push('material')
			}

			return (classesInput.length && classesInput.join(' ')) || null
		},
		styleCustom() {
			const { prefixIcon } = this

			return {
				'--label-left': prefixIcon ? '30px' : '10px',
			}
		},
	},
	watch: {
		value() {
			this.inputModel = this.value
		},
	},
	methods: {
		onChange() {
			this.$emit('onChange', {
				field: this.field,
				value: this.inputModel,
			})
		},
		clearValue() {
			this.inputModel = ''
			this.$emit('clearValue')
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.input-container {
	position: relative;
	width: 100%;
	margin: 10px 0;

	.prefix-icon {
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
	}

	.input {
		width: 100%;
		border: 1px solid;

		@include border-color($colors);
		@extend .py-10;

		&.material {
			&:focus {
				&::placeholder {
					opacity: 1;
					color: map-get($colors, heather);
				}
			}

			&:not(:placeholder-shown) ~ label,
			&:focus ~ label {
				top: 1px;
				left: 15px;
				@extend .font-12;
				background-color: map-get($colors, white);
			}

			&::placeholder {
				opacity: 0;
				transition: 0.3s;
			}
		}
	}

	label {
		position: absolute;
		pointer-events: none;
		color: map-get($colors, manatee);
		left: var(--label-left);
		top: 50%;
		transform: translateY(-50%);
		transition: 300ms ease all;
	}

	.suffix-icon {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}
}
</style>
