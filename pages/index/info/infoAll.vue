<template>
	<view class="page" >
		   <view class="topBar">
			   <view class="cu-bar search bg-seach">
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="名称.内容" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-blue shadow-blur round">搜索</button>
					<text :class="['text-'+(isFilter?'green':'blue')]" class="cuIcon-filter"  style="margin-left: 20upx;" @tap="filterTap"></text>
				</view>
			   </view>
			   <view v-show="isFilter">
				   <view class="flex padding-xs filter-view"  v-for="(filterRow,filterRowIndex) in filterRowList" :key="filterRowIndex" style="background-color: #fff;"> 
						<view @tap="filterItemTap(filterItem)" class="flex-sub  padding-xs flex" :key="filterItemIndex"  v-for="(filterItem,filterItemIndex) in filterRow">
							<view class="cu-tag  flex-sub radius" :class="[selectedFilter == filterItem.name ?'bg-blue':'line-blue']"  >{{filterItem.name}}</view>
						</view>
				   </view>
				</view> 
		   </view>
		   
		   
		   <view class="timeline-view padding-sm" :style="{'margin-top':topBarHighet+'px'}">
			<view class="uni-timeline" style="padding: 0upx 20upx;"  v-for="(item,index) in infoList" :key="index">
				<view class="uni-timeline-item timeline-title">
					<view class="uni-timeline-item uni-timeline-first-item">
						<view class="uni-timeline-item-keynode">{{item.timeTitle}}</view>
						<view class="uni-timeline-item-divider"></view>
						<view class="uni-timeline-item-content"></view>
					</view>
				</view>

				<view class="uni-timeline-item" v-for="listItem in item.list">	
					<view class="uni-timeline-item-keynode text-cut" @tap="uniTimeLineTap(listItem)">
						<view class="flex" style="justify-content: center;" ><image :src="listItem.titleImg"></image></view>
						<view >{{listItem.name}}</view>
					</view>
					<view class="uni-timeline-item-divider"></view>
					<view class="uni-timeline-item-content"> <!-- :class="['state-'+listItem.state]" -->
						<view class="margin-xs padding-sm radius state-0" @tap="showModal" data-target="Modal">
							<view  class="timeline-view-cag">
							<view class="cu-tag bg-blue radius">
								<text class="cuIcon-time" style="margin-right:10upx;"></text>
								{{listItem.time}}
							</view>
							<view class="cu-tag  radius" :class="[listItem.state==0?'bg-blue':'bg-red']">{{listItem.state==0?"正常":"异常"}}</view>
							</view>
							<view class="timeline-view-content">
								{{listItem.content}}
							</view>
						</view>
					</view>
				</view>
			</view>
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
	export default {
		components:{
			uniLoadMore
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
				infoList: [{
					timeTitle:"2020-8-29",
					list:[{
					 titleImg:this.$mAssetsPath.shebei,
					 name:"设备2号",
					 state:"0",
					 time:"05:10",
					 content:"uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成"
					},{
					 titleImg:this.$mAssetsPath.record,
					 name:"设备3号",
					 state:"0",
					 time:"05:10",
					 content:"uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成"
					},{
					 titleImg:this.$mAssetsPath.renyuan,
					 name:"刘巍",
					 state:"1",
					 time:"05:10",
					 content:"刘巍去了一次厕所，重警告！!!,没带纸！"
					}]
				 },{
					timeTitle:"2020-8-28",
					list:[{
					 titleImg:this.$mAssetsPath.shebei,
					 name:"设备1号",
					 state:"1",
					 time:"05:10",
					 content:"uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成"
					},{
					 titleImg:this.$mAssetsPath.shebei,
					 name:"设备7号",
					 state:"0",
					 time:"05:10",
					 content:"uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成"
					},{
					 titleImg:this.$mAssetsPath.shebei,
					 name:"设备10号",
					 state:"1",
					 time:"05:10",
					 content:"uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成"
					}]
				 }] 

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
			filterTap(){
				this.isFilter = !this.isFilter;
				let query = uni.createSelectorQuery().in(this);
				this.$nextTick(()=>{
					this.hanleTopBar(query);
				}) 
				
			},
			filterItemTap(filterItem){
				this.selectedFilter = filterItem.name;
			},
			hanleTopBar(query){
				let _this = this;
				query.select('.topBar').boundingClientRect(data => {
				      console.log("data",data)
					   console.log("_this",_this)
					_this.topBarHighet = data.height;
				}).exec();
			},
			handleOnReachBottom(){
				if(this.infoList.length<4){
					this.infoList.push(this.infoList[0]);
				}else{
					this.load.status = "noMore"
				}
			}
		},
		onLoad() {
			
		},
		mounted() {
		 	  let query = uni.createSelectorQuery().in(this);
			  this.hanleTopBar(query); 
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
    .topBar{
		position: fixed;
		/*  #ifdef  H5  */
		top: 44px;
		/*  #endif  */
		/*  #ifdef MP-WEIXIN  */
		top: 0px;
		/*  #endif  */
		width: 100%;
		z-index: 999;
		.bg-seach{
			 background: linear-gradient(to bottom, rgb(47, 133, 252) 0%,#ffffff 100%);
		}
		.filter-view{
			padding-left: 25upx;
			padding-right: 25upx;
			padding-bottom: 0upx;
			&:last-child{
				padding-bottom: 10upx;
			}
		}
	} 
	
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
