<template>
	<view class="l-footer" :style="tabbar">
		<text class="l-footer--circle" :style="circleStyle" v-if="midButton && list.length % 2 == 1"></text>
		<view class="l-footer-tabbar c-tabbar">
			<navigator
				v-for="(item, index) in list"
				:key="index"
				:url="item.pagePath"
				hover-class="none"
				open-type="redirect"
				:class="[{ 'c-tabbar__item--big': midButton && index == (list.length - 1) / 2 }, 'c-tabbar__item']"
				:style="{ top: midButton && index == (list.length - 1) / 2 ? '-' + (imgStyle.midHeight - imgStyle.imgHeight) / 2 + 'px' : 0 }"
			>
				<text class="o-tabbar__badge" v-if="item.badge" :style="badgeStyle">{{ item.badge }}</text>
				<image
					class="o-tabbar__img"
					:src="item.currentPage ? item.selectedIconPath : item.iconPath"
					:style="midButton && index == (list.length - 1) / 2 ? midDeault : imgDeault"
				></image>
				<text
					class="o-tabbar__text"
					:style="{ color: item.currentPage ? textStyle.selectedColor : textStyle.color, fontSize: textStyle.fontSize + 'px', paddingTop: textStyle.paddingTop + 'px' }"
					v-if="item.text"
				>
					{{ item.text }}
				</text>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	name: 'tabbar',
	props: {
		//中间按钮是否凸起（仅在list为奇数时有效）
		midButton: {
			type: Boolean,
			default: false
		},
		// tabbar数据
		list: {
			type: Array,
			required: true
		},
		// tabbar样式
		tabbarStyle: {
			type: Object
		},
		// 凸起圆的样式（top,width,box-shadow）
		circleStyle: {
			type: Object
		},
		// 文字样式
		textStyle: {
			type: Object,
			default: function() {
				return {
					color: 'black',
					selectedColor: 'green',
					fontSize: 16,
					paddingTop: 1
				};
			}
		},
		// 图片样式
		imgStyle: {
			type: Object,
			default: function() {
				return {
					imgWidth: 21, //图片宽度
					imgHeight: 21, //图片高度
					midWidth: 51, //突起图片的宽度
					midHeight: 51 //突起图片的高度
				};
			}
		},
		// 角标样式
		badgeStyle: {
			type: Object
		}
	},
	data() {
		return {
			tabbarDefault: {
				height: '50px',
				boxShadow: '0 -1px 5px black'
			}
		};
	},
	computed: {
		/*
		tabbar的样式
		*/
		tabbar() {
			return Object.assign(this.tabbarDefault, this.tabbarStyle);
		},
		/*
		基本图片的样式
		*/
		imgDeault() {
			return {
				width: this.imgStyle.imgWidth + 'px',
				height: this.imgStyle.imgHeight + 'px'
			};
		},
		/*
		中间图片的样式
		*/
		midDeault() {
			return {
				width: this.imgStyle.midWidth + 'px',
				height: this.imgStyle.midHeight + 'px'
			};
		}
	},
	created() {
		this.isCurrentPage();
	},
	methods: {
		/**
		 * @description 是否是当前页面
		 */
		isCurrentPage() {
			let route = getCurrentPages()[getCurrentPages().length - 1].route;
			this.list.map(item => {
				if (item.pagePath.substr(1) == route) {
					item.currentPage = true;
				} else {
					item.currentPage = false;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.l-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	&--circle {
		position: absolute;
		top: -35px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		display: block;
		width: 86px;
		height: 86px;
		border-radius: 50%;
		background-color: white;
		box-shadow: 0 -1px 6px black;
	}
}
.c-tabbar {
	position: relative;
	top: 0;
	right: 0;
	z-index: 2;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: white;
	&__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		&--big {
			position: relative;
		}
		.o-tabbar__badge {
			position: absolute;
			top: -30rpx;
			right: -20rpx;
			width: 30rpx;
			height: 30rpx;
			line-height: 30rpx;
			border-radius: 50%;
			background: red;
			color: white;
			font-size: 12px;
			text-align: center;
		}
	}
}
</style>
