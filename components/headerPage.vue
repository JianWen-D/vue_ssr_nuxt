<template>
	<header>
		<div  class="pub-header">
			<a href="javascript:;" :class="{'top-logo': true, 'logo-active': down}" id="top-logo">
				<img :src="`http://testmama.janvem.com/${baseInfo.logo}`" alt="">
			</a>
			<div :class="{'mobile-nav': true, 'down': down}" id="mobile-nav">
				<div class="mobile-box">
					<i class="iconfont icon-menu" id="mobile-btn" @click="show = !show"></i>
					<ul class="nav" :style="`display: ${show ? 'block': 'none'}`" id="mobile-nav-list">
						<li class="nav-item" v-for="(item, index) in navList.one" :key="index">
							<a href="javascript:;" @click="turnRouter(item.link, index)">{{item.title}}</a>
						</li>
					</ul>
				</div>
			</div>
			<nav :class="{'top-nav': true, 'down': down}" id="top-nav">
				<ul>
					<li v-for="(item, index) in navList.one" :key="index">
						<a href="javascript:;" @click="turnRouter(item.link, index)">{{item.title}}</a>
					</li>
				</ul>
			</nav>
		</div>
		<ul class="sec-nav">
			<li class="sec-nav-nav-item" v-for="(item, index) in navList.two" :key="index">
				<a href="javascript:;" @click="turnRouterOther(item.link, index)">{{item.title}}</a>
			</li>
		</ul>
	</header>

</template>

<script>
	import config from './../config'
	import headerBase from './../config/headerInfo'
	export default {
		name: 'headerPage',
		data() {
			return {
				navList: [],
				config: config,
				down: true,
				show: false
			}
		},
		props: {
			baseInfo: {
				type: Object,
				default: {}
			}
		},
		mounted() {
			if (sessionStorage.getItem('language') === 'cn') {
				this.navList = headerBase.header_cn
			} else {
				this.navList = headerBase.header_en
			}
			// if (this.$route.fullPath === '/teacher') {
			// 	window.onscroll = () => {
			// 		let t = document.documentElement.scrollTop || document.body.scrollTop;
			// 		if (t >= 60) {
			// 			this.down = true
			// 		} else {
			// 			this.down = false
			// 		}
			// 	}
			// } else {
			// 	this.down = true
			// }
		},
		methods: {
			turnRouter(value, index) {
				if (index === this.navList.one.length - 1) {
					if (sessionStorage.getItem('language') === 'en') {
						sessionStorage.setItem('language', 'cn')
					} else {
						sessionStorage.setItem('language', 'en')
					}
					this.$router.go(0)
				} else {
					this.$router.push(value)
				}
			},
			turnRouterOther(value, index) {
					this.$router.push(value)
			}
		}
	}
</script>

<style lang="less" scoped>
	.trans(@sec, @who, @speed) {
		transition: @sec @who @speed;
		-webkit-transition: @sec @who @speed;
		-moz-transition: @sec @who @speed;
	}
	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: calc(100%);
		height: 105px;
			background-color: #fff;
			box-shadow: 1px 0 5px rgba(0, 0, 0, .9);
		border-bottom: 1px solid #999;
		.trans(.4s, all, ease);
	}
	.pub-header {
		.trans(.4s, all, ease);
		>.mobile-nav {
			width: 100%;
			height: 60px;
			>.mobile-box {
				position: absolute;
				top: 0;
				right: 0;
				height: inherit;
				width: 50px;
				text-align: center;
				line-height: 60px; // background-color: #fff;
				border-left: 1px solid #999;
				>i {
					display: block;
					font-size: 1.6rem;
					color: #fff;
					cursor: pointer;
				}
				>.nav {
					display: none;
					position: absolute;
					top: 60px;
					right: 0;
					padding-top: 30px;
					width: 200px;
					font-size: 1.2rem;
					line-height: 35px;
					color: #fff;
					background-color: rgba(0, 0, 0, .9);
					>.close {
						position: absolute;
						top: 0;
						right: 10px;
					}
					>.nav-item {
						padding-left: 20px;
						margin-bottom: 12px;
						text-align: left;
						>a {
							display: block;
							color: #fff;
						}
					}
				}
			}
		}
		>.top-logo {
			float: left;
			display: block;
			margin-left: 1rem;
			font-size: 1.6rem;
			line-height: 60px;
			color: #fff;
			>img {
				display: block;
				height: 60px
			}
		}
		>.logo-active {
			color: #333;
		}
		>.top-nav {
			display: none;
			line-height: 60px;
			.trans(.6s, all, ease);
			>ul {
				padding-right: 1rem;
				width: 100%;
				text-align: right; // font-size: 0;
				>li {
					position: relative;
					display: inline-block; // font-size: 1rem;
					margin-left: 5px;
					>a {
						padding: 0 1rem;
						color: #fff;
					}
					>ul {
						display: none;
						position: absolute;
						top: 100%;
						left: 0;
						width: 100%;
						background-color: #333;
						>li {
							width: 100%;
							text-align: center;
							line-height: 30px;
							>a {
								display: block;
								color: #fff;
							}
						}
					}
				}
				// >li:nth-child(6)>a {
				// 	border: 1px solid #fff;
				// 	border-radius: 5px;
				// }
			}
		}
		>.down {
			>ul>li>a {
				color: #333;
			}
			// >ul>li:nth-child(6)>a {
			// 	border: 1px solid #333;
			// 	border-radius: 5px;
			// }
			i {
				color: #333 !important;
			}
		}
	}
	.sec-nav {
		line-height: 45px;
		background-color: #f8f8f8;
		border-top: 1px solid #e7e7e7;
		> li {
			display: inline-block;
			> a {
				padding: 0 1rem;
				display: block;
				color: #777;
				.trans(.4s, all, ease);
				&:hover {
					color: #666;
				}
			}
		}
	}

	@media screen and (min-width: 768px) {
		.pub-header {
			border-bottom: none;
			>.mobile-nav {
				display: none;
			}
			>.top-nav {
				display: block;
			}
		}
	}

	@media screen and (min-width: 992px) {
		.pub-header {
			>.mobile-nav {
				display: none;
			}
		}
	}
</style>