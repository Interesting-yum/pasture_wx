<template>
	<view class="page" >
		   <top-bar
		    class="topBar"
		   :filterRowList="filterRowList"
		   :isFilter="isFilter"
		   :selectedFilter="selectedFilter"
		   @filterItemTap="filterItemTap"
		   @filterTap = "filterTap"
		   @hanleTopBar = "hanleTopBar"
		   >
		   </top-bar>
		   
		   <view class="timeline-view padding-sm" :style="{'margin-top':topBarHighet+'px','padding-top':'0px'}">
			   <listItem
			   :list="list"
			   :titleImg = "titleImg"
			   :listItemWidth= "listItemWidth"
			   @listItemTap = "listItemTap"
			   ></listItem>
			   <uni-load-more :status="load.status" color="#007aff" />
		  </view>
		 
		  <!-- 模拟框的view -->
		  <view class="cu-modal" :class="modalName=='Modal'?'show':''">
		  	<view class="cu-dialog">
		  		<view class="cu-bar bg-white justify-end">
		  			<view class="content">信息详情</view>
		  			<view class="action" @tap="hideModal">
		  				<text class="cuIcon-close text-red"></text>
		  			</view>
		  		</view>
		  		<view class="padding-sm">
		  			<view class="flex model-content">
						<view class="flex">
							  <view class="flex-sub bg-grey">时间</view>
							  <view class="flex-treble bg-grey">{{model.time}}</view>
						</view>
						<view class="flex">
							  <view class="flex-sub bg-grey">类型</view>
							  <view class="flex-treble bg-grey">{{model.type}}</view>
						</view>
						<view class="flex">
							  <view class="flex-sub bg-grey">内容</view>
							  <view class="flex-treble bg-grey">{{model.content}}</view>
						</view>
					</view>
		  		</view>
		  	</view>
		  </view>
			
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import topBar      from '@/components/topBar/topBar.vue'
	export default {
		components:{
			uniLoadMore
			,topBar
		},
		data() {
			return {
				load:{
					status:"loading",
				},
				model:{
					time:"2020-2-10 21:15:14",
					type:"正常",
					content:"uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成",
				},
				modalName:"",
				shebeiImg: this.$mAssetsPath.shebei,
				topBarHighet:0,
				isFilter:false,
				selectedFilter:"",
				query:{},
				listItemWidth:"100%",
				titleImg:this.$mAssetsPath.baoxiu,
				list: [{
						title: "螺丝松了",
						content: "1号螺丝松了，快点维修",
					},
					{
						title: "2号设备故障",
						content: "2号设备出现问题",
					},  
					{
						title: "3号摄像头坏点了",
						content: "3号号摄像头出现不明了问题",
					},
					{
						title: "天恩摄像头出现问题",
						content: "天恩摄像头出现问题呀，请尽快修复",
					},
					{
						title: "3号GPS摄像头丢失",
						content: "3号摄像头被丢失了",
						
					}
				],
				filterRowList:[[
					{
						name:"设备信息",
                    },
					{
						name:"报警信息",
					},
					{
						name:"操作信息",
					},
					{
						name:"指令信息",
					},
				],[
					{
						name:"上次信息",
                    },
					{
						name:"时间信息",
					},
					{
						name:"昨日信息",
					},
					{
						name:"算法信息",
					},

				]],


			};
		},
		methods:{
			uniTimeLineTap(e){
				uni.navigateTo({
					url:"../equipment/equipmentForm"
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			filterTap(e){
				console.log("e",e);
			},
			filterItemTap(filterItem){
				this.selectedFilter = filterItem.name;
			},
			hanleTopBar(data){
				this.topBarHighet = data.height;
			},
			handleOnReachBottom(){
				this.load.status = "noMore"
			}
		},
		onLoad() {
			setTimeout(()=>{
				this.load.status = "noMore"
			},1300)
		},
		mounted() {

		},
		//下拉刷新
		onPullDownRefresh() {
			console.log("???")
			uni.stopPullDownRefresh();
		},
		//加载更多
		onReachBottom() {
			this.handleOnReachBottom();
			console.log("到底部了")
		},
	}
</script>

<style lang="scss">
	.timeline-view{
		padding-top: 20px;
		overflow: auto; 
		.state-0{
			background-color: #509ac3;
			color: #ffffff;
		}
		.state-1{
			background-color: #e82061;
			color: #ffffff;
		}
		   
		.timeline-title{
			height: 80upx;
		}
		.uni-timeline {
		    margin: -5px 0;
		}
		.uni-timeline-item{
			padding-bottom: 0px;
		}
		.uni-timeline-first-item{
			.uni-timeline-item-keynode{
				background-color:transparent; 
				text-align: center;
			}	
		}
		.uni-timeline-item-keynode{
			    justify-content: right;
			    background-color: #3cd1e0;
			    margin-right: 10px;
			    border-radius: 5px;
				font-size: 25upx;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 5px;
				display: flex;
				align-items: center;
				padding: 5px;
				image{
					width: 15px;
					 height: 15px;
				}
		}
		
		.timeline-view-content{
			margin-top: 15upx;
		}
	}
	
	.model-content{
		width: 100%;
		flex-flow: column wrap; 
		.flex-sub{
			    align-items: center;
			    justify-content: center;
			    display: flex;
				border: solid 1px #000000;
				border-right: 0px;
				border-bottom: 0px;
				&:last-child{
					 border-bottom: 1px;
				}
		}
		.flex-treble{
			   display: flex;
			   text-align: left;
			   padding: 15upx;
			   border: solid 1px #000000;
			   border-bottom: 0px;
			   &:last-of-type{
				    border-bottom: 1px;
			   }
		}
		
	}
	

</style>
