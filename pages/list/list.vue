<template>
	<view class="page">
		<view class="uni-list" >
			<view class="uni-list-cell uni-list-cell-card shadow  bg-white" v-for="(value,key) in list" :key="key">
		
			   <title-view 
			   style="width: 100%;"
			   showRightStr="rightBattery" 
			   :title="value.title"
			   :content="value.content"
			   :titleImg ="value.titleImg"
			   :eq = "value.eq"
			   >
				</title-view >
					
				<uni-collapse :accordion="true" class="collapse">
					<uni-collapse-item  title="操作" >
						<view class="content">
							<view class="cu-list grid" :class="['col-5','no-border']">
								<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<5*2">
									<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
									</view>
									<text>{{item.name}}</text>
								</view>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>

	</view>
</template>
<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import  titleView from "@/components/title-view/title-view.vue"
	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			titleView
		},
		data() {
			return {
				cuIconList: [{
					cuIcon: 'location',
					color: 'olive',
					badge: 120,
					name: '追踪'
				}, {
					cuIcon: 'footprint',
					color: 'olive',
					badge: 1,
					name: '行踪'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 0,
					name: '报警'
				}, {
					cuIcon: 'safe',
					color: 'olive',
					badge: 22,
					name: '健康'
				}, {
					cuIcon: 'likefill',
					color: 'olive',
					badge: 0,
					name: '发情'
				}, {
					cuIcon: 'like',
					color: 'olive',
					badge: 0,
					name: '配种'
				}, {
					cuIcon: 'pullup',
					color: 'olive',
					badge: 0,
					name: '指令'
				}, {
					cuIcon: 'circlefill',
					color: 'olive',
					badge: 0,
					name: '报修'
				}, {
					cuIcon: 'recordfill',
					color: 'olive',
					badge: 0,
					name: '视频'
				}],
				title: 'media-list',
				showImg: false,
				list: [{
						title: "牦牛1号",
						content: "868120204824731",
						eq:"74%",
						titleImg:  this.$mAssetsPath.errorImage||"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
					},
					{
						title: "牦牛2号",
						content: "57845412545632",
						eq:"54%",
						titleImg:  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595521369673&di=88fb002c9cc5cb39f665f639485cd760&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fc0%253Dbaike60%252C5%252C5%252C60%252C20%2Fsign%3Df05a43e562d0f703f2bf9d8e69933a58%2F2cf5e0fe9925bc312629146a5edf8db1ca1370cf.jpg"
					},  
					{
						title: "牦牛3号",
						content: "57845412545632",
						eq:"14%",
						titleImg:  this.$mAssetsPath.errorImage||"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
					},
					{
						title: "牦牛4号",
						content: "57845412545632",
						eq:"100%",
						titleImg:  this.$mAssetsPath.errorImage||"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
					},
					{
						title: "牦牛5号",
						content: "57845412545632",
						eq:"96%",
						titleImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595521369673&di=88fb002c9cc5cb39f665f639485cd760&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fc0%253Dbaike60%252C5%252C5%252C60%252C20%2Fsign%3Df05a43e562d0f703f2bf9d8e69933a58%2F2cf5e0fe9925bc312629146a5edf8db1ca1370cf.jpg"
					}
				]
			}
		},
		onLoad() {
	
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		}
	}
</script>

<style lang="scss">
.title {
	padding: 20upx;
}
.uni-list-cell-card{
	margin: 20rpx;
	border: solid 0.5px #ccc7c7;
	border-radius: 15upx;
	flex-wrap: wrap;
}
.collapse{
	margin: 15upx;
	background-color: #f5f2f200;
	width: 100%;
	
}


.uni-collapse-cell{
	&::after{
		height: 0px!important;
	}
	title-view {
		width: 100%;
	}
	uni-collapse{
		width: 100%;
	}

}


</style>
