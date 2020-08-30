<template>
	<view class="warp">
	
		<view class="example-body">
			<uni-grid :column="3" :highlight="true" :show-border="false" :square="false" @change="change">
				<uni-grid-item  v-for="(item, index) in list"  :key="index"  >
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>

	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'  
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'

	export default {
		components: {
			uniGrid,
			uniGridItem,
		},
		data() {
			return {
				list: [
					{
						url: '../../static/index/grid/livestock.png',
						text: '牲畜',
						path:"../info-list/info-list-Recommend"
					},
					{
						url: '../../static/index/grid/pasture.png',
						text: '牧场',
						path:"../info-list/info-list"
					},
					{
						url: '../../static/index/grid/vaccines.png',
						text: '疫苗',
						path:"../LevineHua-editor/LevineHua-editor"
					}
				]
			}
		},
		methods: {
			change(e) {
				
				let {index} = e.detail
				let item = this.list[index];
				console.log(item)
				uni.navigateTo({
					    url:item.path
				});
		
				
			},
			

		}
	}
</script>

<style>
/* 	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}
 */
	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		/* padding: 0 30upx 30upx */
	}
    .uni-notice-bar{
		margin-bottom: 0px!important;
	}
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		/* margin-top: 20upx; */
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 0upx 0
	}

	.example-body {
		padding: 0upx 30upx; 
		background:#3e111100
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.image {
		width: 50upx;
		height: 50upx;
	}

	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
</style>