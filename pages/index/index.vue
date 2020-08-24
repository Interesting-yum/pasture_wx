<template>
	<view class="bg page-body">	
		<view  :style="{height:systemInfo.bodyHeight+'px'}">
			<uni-swiper-dot  
			   :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
				<swiper class="swiper-box" 
				@change="change" 
				autoplay=ture 
				>
					<swiper-item v-for="(item, index) in info" :key="index" >
						<view :class="item.colorClass" class="swiper-item">
							<image :src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
            <view class="qiandao grid col-2" >
				<view class="flex-title">
					 <text>牲畜签到</text>
					 <picker>
						 <view class=" radius shadow-warp cu-tag">
							  {{selectPasture.name}}
							  <text class="cuIcon-playfill flex-icon"></text>
						 </view>
					 </picker>
			    </view>
				<view v-for="(sign,index) in signIns" :key="index" class="padding-xs flex flex-sign">
					<view class="flex-sub  padding-xs  radius "><image class="flex-sign-image" :src="sign.img"></image></view>
					<view class="flex-twice padding-xs  radius ">{{sign.content}}</view>
				</view>
			</view>  
			
			<view class="flex  p-xs  mb-sm margin" style="margin: 110px 8px 0px 8px;">
				<view class="flex-sub">
					<uni-notice-bar style=" border-radius: 20px;" backgroundColor="rgba(40, 173, 179, 0.18)" class="uni-notice-bar  bg-purple" showIcon="true" scrollable="true" single="true" :text="noticeText"></uni-notice-bar>		
				</view>
			</view>
			
			<view class="nav-list margin">
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
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
    import {mapState} from 'vuex'

	export default {
		components: {
		card,uniNoticeBar,uniSwiperDot
		},
		data() {
			return {
				selectPasture:{
					name:"牧场1",
					id:1,
				},
				signIns:[{
					name:"1",
					img:this.$mAssetsPath.yidao,
					content:"已签:72",
				},{
					name:"2",
					img:this.$mAssetsPath.weidao,
					content:"未签:21",
				},{
					name:"3",
					img:this.$mAssetsPath.chidao,
					content:"迟到:10",
				},{
					name:"4",
					img:this.$mAssetsPath.zongshu,
					content:"总数:158",
				}],
				info: [{
							colorClass: 'uni-bg-red',
							url: this.$mAssetsPath.lunbo1,
							content: '内容 A'
						},
						{
							colorClass: 'uni-bg-green',
							url: this.$mAssetsPath.lunbo2,
							content: '内容 B'
						},
						{
							colorClass: 'uni-bg-blue',
							url:this.$mAssetsPath.lunbo3,
							content: '内容 C'
						}
					],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'round',
				dotsStyles:{
							backgroundColor: 'rgba(83, 200, 249,0.3)',
							border: '1px rgba(83, 200, 249,0.3) solid',
							color: '#fff',
							selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
							selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
							bottom:60,
						},
				userList:[],
				noticeText:"牛三跑出了栏杆了|牛三跑出了栏杆了2",
				winSize:{},
				menu:[{
					name:"摄像头",
					num:7,
					img:this.$mAssetsPath.record,
					url:"/pages/index/monitor/monitor",
				},{
					name:"GPS设备",
					num:18,
					img:this.$mAssetsPath.shebei,
					url:"/pages/index/equipment/equipment",
				},{
					name:"牧场",
					num:1,
					img:this.$mAssetsPath.niuniu,
					url:"/pages/index/pasture/pasture",
				},{
					name:"信息模块",
					num:"s",
					img:this.$mAssetsPath.info,
					url:"",
				},{
					name:"管家服务",
					num:"b",
					img:this.$mAssetsPath.housekeeper,
					url:"",
				}]
				}	
		},
		computed:{
			 ...mapState({ systemInfo:state=>state.systemStore.systemInfo}),
		},
		onLoad() {
			
	          console.log("Vuex",this.systemInfo)
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


		},
	
		methods: {
			change(e) {
				this.current = e.detail.current
			},
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

		}
	}
</script>

<style lang="scss">
      .bg{  
		  align-items: stretch;
		  background-color: #f1f1f1 ;
		  .bg-white{
			  height: 100%;
		  }
	  }
 
	 .bw-swiper{
		 margin-top: 15upx;
		 margin-bottom: 10upx;
	 }
	 .swiper-box {
	 	height: 450upx;
	 }
	 
	 .swiper-item {
	 	display: flex;
	 	justify-content: center;
	 	align-items: center;
	 	height: 100%;
	 	background: #eee;
	 	color: #fff;
	 }

	.uni-margin-wrap {
		width:100%;

	}
	.swiper .uni-swiper-dots-horizontal {
	    bottom: 50px;
	}
	.qiandao{
		  position: absolute; 
		  left: 50%; 
		  top: 170px;  
		  width: 90%;  
		/*  height: 120px; */
		  border-radius: 8px;
		  transform: translate(-50%);
		  background-color: #fff;
		  padding: 8px;
		  z-index: 999;
		  .flex-title{
			  display: flex;
			  text{
				  flex: 1 1 80%;
				  color: #0081FF;
				  font-size: 30upx;
				  font-weight: 800;
				  padding-left: 20upx;
			  }
			  picker{
				   view{
					   background-color: rgba(37, 111, 134, 0.5);
					   width: 100%;
					   color:#28bebf;
					   .flex-icon{
						   font-size: 20upx;
						   color:#28bebf;
					   }
						
				   }
				   flex: 1 1 20%;
			  }
			  width: 100% !important;
			  
		  }	  
		  .flex-sign{
			   
			  &:nth-child(2){		 
			  	  border-right:  solid 1px #cacacadb;
				  border-bottom: solid 1px #cacacadb;
			  };
			  &:nth-child(3){
				  border-bottom: solid 1px #cacacadb;
			  }
			  &:nth-child(4){
			  	  border-right:  solid 1px #cacacadb;
			  }
			  .flex-sign-image{
				  	width: 30px !important;
				  	height: 30px  !important;
			  }
			  .flex-twice{
				   font-size: 10px;
				   line-height: 30px;
				   color: rgba(40, 190, 191, 0.9);
			  }
			 
			  
		  }

	}
	.uni-swiper-slides>div{
		 bottom: 50px;
	},
	.nav-list{
		margin-top: 30upx;
		padding: 0px;
		justify-content: initial;
		image {
		   position: absolute;
		   right: 5px;
		   top: 20px;
		   border-radius: 50%;
		   font-size: 26px;
		   width: 30px;
		   height: 30px;
		   text-align: center;
		   line-height: 30px;
		}
		.nav-li {
		   padding: 10px;
		   width: 30%;
		   margin: 0 1.5% 20px;
		}
		.nav-title{
			font-size: 10px;
			&:first-letter{
				font-size: 10px;
			}
		}
		.nav-name {
		    font-size: 10px;
		    margin-top: 30upx;
			&:first-letter {
			    font-size: 10px;
			}
		}
	}
	

	.bg-purple {
	    background-color:#28adb3;
	    color: #ffffff;
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
