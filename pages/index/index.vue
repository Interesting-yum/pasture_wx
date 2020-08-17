<template>
	<view class="bg page-body">	
		<view class="padding bg-white" :style="{height:systemInfo.bodyHeight+'px'}">
			<view class="flex">
				<view class="flex-sub  margin-bottom-sm margin-xs ">
					<card></card>
				</view>
			</view>
			<view class="flex  p-xs  mb-sm">
				<view class="flex-sub   ">
					<uni-notice-bar style=" border-radius: 20px;" backgroundColor="rgba(40, 173, 179, 0.18)" class="uni-notice-bar  bg-purple" showIcon="true" scrollable="true" single="true" :text="noticeText"></uni-notice-bar>		
				</view>
			</view>
			
			<view class="nav-list">
			<navigator :url="item.url"  class="nav-li bg-purple"  :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in menu"  :key="index">
				<view class="nav-title">{{item.name}}</view>
				<view class="nav-name">{{item.num}}</view>
				<image :src="item.img" ></image>
			</navigator> 

			</view > 
			
			
		</view>
		

		 
	</view>
</template>
<script>
	

	import card from '@/components/index/index_card/card.vue'
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import Vuex from 'vuex'


	export default {
		components: {
		card,uniNoticeBar
		},
		data() {
			return {
				userList:[],
				noticeText:"牛三跑出了栏杆了|牛三跑出了栏杆了2",
				winSize:{},
				menu:[{
					name:"摄像头",
					num:7,
					img:"../../static/index/grid/record.png",
					url:"/pages/monitor/monitor",
				},{
					name:"GPS设备",
					num:18,
					img:"../../static/index/grid/shebei.jpg",
					url:"",
				},{
					name:"牧场",
					num:1,
					img:"../../static/index/grid/牧场.png",
					url:"",
				}]
				}	
		},
		computed:{
			...Vuex.mapState(["systemInfo"])
		},
		onLoad() {
	          console.log(this.systemInfo)
			if(uni.getStorageSync('isOnceShow')){
			     //只允许显示一次
				 uni.setStorage({
				     key: 'isOnceShow',
				     data: false
				 });
				 uni.showModal({
				     title: this.App_title,
				     content: "欢迎你 "+userName,
				     success: function (res) {
				         if(res.confirm){
				             console.log('用户点击确定');
				         } else if (res.cancel) {
				             console.log('用户点击取消');
				         }
				     },
				 });
			 }
			 
			 this.getListData();
			 this.getWindowSize();


		},
	
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			/* 获取列表数据 */
			getListData() {
				let list = [];
				for (let i = 0; i < 20; i++) {
					list.push({
						"name": `牛${i+1}`,
						"time": '5月20日',
						"info": `牛${i+1}今天跑出去玩了,牛${i+1}今天跑出去玩了,牛${i+1}今天跑出去玩了,牛${i+1}今天跑出去玩了`
					})
				}
				console.log("list:",list)
				this.userList = list;
			},
			/* 获取窗口尺寸 */
			getWindowSize() {
				uni.getSystemInfo({
					success: (res) => {
						this.winSize = {
							"witdh": res.windowWidth,
							"height": res.windowHeight
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
      .bg{
		  align-items: stretch;
		  .bg-white{
			  height: 100%;
		  }
	  }
 
	 .bw-swiper{
		 margin-top: 15upx;
		 margin-bottom: 10upx;
	 }

	.uni-margin-wrap {
		width:100%;

	}
	.nav-list{
		margin-top: 30upx;
		padding: 0px;
		image {
		    position: absolute;
		    right: 15px;
		    top: 15px;
			border-radius: 50%;
		    font-size: 26px;
		    width: 50px;
		    height: 50px;
		    text-align: center;
		    line-height: 30px;
		}
	}
	.bg-purple {
	    background-color:#28adb3;
	    color: #ffffff;
	}
	.swiper {
		height: 300upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}
	
	.swiper-item image{
	  width: 100%;
	  height: 100%;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
	
	.list_view{

	}
	
	.infoTitle{
		margin-left: 30rpx;
		font-size: 26rpx;
		color: #007AFF;
	}
</style>
