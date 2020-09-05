<template>
	<view class="page" >
		<view  class="listItemContainer"  :style="{ minHeight: systemInfo.bodyHeightNoButtom+'px'}">
			<view class="header padding-sm "> 
			  <image style="border-radius: 15upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598727174569&di=bab99eb3458db2fc5b98785c62c25c4f&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1231533122%2C640546120%26fm%3D214%26gp%3D0.jpg"></image>
			</view>
			<view class="flex padding-sm" style="padding-bottom: 0px;     height: 160px;">
				<navigator url="infoAll" style="animationDelay:0.1s" class="animation-slide-bottom flex-sub shadow bg-white padding-sm margin-xs radius flex">
					<view class="flex-twice   radius"><image :src="shebeiImg"></image></view>
					<view class="flex-treble  radius flex" style="flex-flow: column;">
						<text class="flex-sub text-blue ">总信息</text>
						<text class="flex-sub"></text>
						<text class="flex-sub"></text>
					</view>
				</navigator>
				<view class="flex-sub radius flex " style="flex-flow: column;">
					 <navigator url="infoWarn"  style="animationDelay:0.2s"  class=" animation-slide-bottom flex-sub shadow bg-white padding-sm margin-xs radius flex small">
						  <view class='cu-tag badge'>99+</view>
						  <view class="flex-twice   radius flex align-center"><image :src="baojingImg"></image></view>
						  <view class="flex-treble  radius flex align-center text-blue "> 报警信息</view>
						  <view class="flex-sub   radius flex align-center"> <text class="cuIcon-right"></text></view>
					 </navigator>
					 <navigator url="infoRepair"  style="animationDelay:0.3s" class="animation-slide-bottom flex-sub shadow bg-white padding-sm margin-xs radius flex small">
						 <view class='cu-tag badge'>7</view>
						 <view class="flex-twice   radius flex align-center"><image :src="baoxiuImg"></image></view>
						 <view class="flex-treble   radius flex align-center text-blue "> 报修信息</view>
						  <view class="flex-sub   radius flex align-center"> <text class="cuIcon-right"></text></view>
					 </navigator>
				</view>
			</view>
			
			<view class="flex  mb-sm padding-sm" style="padding-top: 0px;    height: 80px;" >
				<view  style="animationDelay:0.4s" class=" animation-slide-bottom flex-sub shadow bg-white padding-sm margin-xs radius flex threeSmall">
				    <view class='cu-tag badge'>99+</view>
					<view class="flex-twice   radius flex align-center"><image :src="jiankangImg"></image></view>
				    <view class="flex-treble   radius flex align-center text-blue  threeContent"> 健康信息</view>
				    <view class="flex-sub   radius flex align-center"> <text class="cuIcon-right"></text></view>
				</view>
				<view  style="animationDelay:0.5s" class=" animation-slide-bottom flex-sub shadow bg-white padding-sm margin-xs radius flex threeSmall">
					<view class='cu-tag badge'>99+</view>
					 <view class="flex-twice   radius flex align-center"><image :src="zhilingImg"></image></view>
					 <view class="flex-treble  radius flex align-center threeContent  text-blue "> 指令信息</view>
					  <view class="flex-sub   radius flex align-center"> <text class="cuIcon-right"></text></view>
				</view>
				<view   style="animationDelay:0.6s" class=" animation-slide-bottom flex-sub shadow bg-white  padding-sm margin-xs radius flex threeSmall">
				   <view class='cu-tag badge'>79+</view>
					  <view class="flex-twice   radius flex align-center"><image :src="caozuoImg"></image></view>
				    <view class="flex-treble   radius flex align-center threeContent text-blue "> 操作信息</view>
				    <view class="flex-sub   radius flex align-center"> <text class="cuIcon-right"></text></view>
				</view>
			</view>


		</view>


	</view>
</template>
<script>
	import titleView from "@/components/title-view/title-view.vue"
	import {mapState} from 'vuex'
	export default {
		components: {
			titleView
		},
		computed:{
			...mapState({ systemInfo:state=>state.systemStore.systemInfo}),
		},
		data() {
			return {
				showImg:false,
				titleImg        :    this.$mAssetsPath.niuniu,
				shebeiImg		:    this.$mAssetsPath.shebei,
				baojingImg		:    this.$mAssetsPath.baojing,
				baoxiuImg		:	 this.$mAssetsPath.baoxiu,
				jiankangImg		:	 this.$mAssetsPath.jiankang,
				zhilingImg		:	 this.$mAssetsPath.zhiling,
				caozuoImg		:	 this.$mAssetsPath.caozuo,

				list: [{
						title: "安曲牧场",
						flexStyle:"60%",
						content: "雪牛天赐的好牧场,您的唯一选择",
					},
					{
						title: "乐道牧场",
						flexStyle:"40%",
						content: "牧场之中的乐天派",
					},  
					{
						title: "辖区牧场",
						flexStyle:"50%",
						content: "牧场之中的乐天派,各项牧场",
					},
					{
						title: "弩唷呃牧场",
						flexStyle:"50%",
						content: "少数民族的专属牧场",
					},
					{
						title: "天道牧场",
						flexStyle:"50%",
						content: "牧场之中的乐天派,各项牧场,您的唯一选择",
						
					}
				]
			}
		},
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		},
		methods:{
			navTo(route) {
			  this.$mRouter.push({route});
			},
			uniFabTrigger(e){
				console.log(e);
			},
			iconTap(e,value){
				console.log("e",e);
				console.log("value",value)
				uni.navigateTo({
					 url: 'pastureMain'
				})
			}
		}
	}
</script>

<style lang="scss">
.header{
	height: 150px;
	width: 100%;
	image{
		height: 100%;
		width: 100%;
	}
}
.listItemContainer{
	    padding-top: 0upx;
	
	    .uniNoticeBar{
		      align-items: start;
			  margin-bottom: 50upx;
			  margin: 15upx;
			  
	    }
		.bg-white {
		  /*  background-color: #33c1b4; */
			 background: linear-gradient(to bottom, rgb(47, 133, 252) 0%,#33c1b4 100%);
			 font-size: 25upx;
		}
		.text-blue{
		    color: #fff;
		}
		.cuIcon-right{
			color: #fff;
		}
		.flex-sub{
	 		image{
				width: 80upx;
				height: 80upx;
			}
			
		}
		.small{
			image{
				width: 60upx;
				height: 60upx;
			}
		}
		.threeSmall{
			padding: 0px;
			padding-top: 8px;
			padding-bottom: 8px;
			.flex-twice {
				justify-content: center;
			}
			image{
				width: 60upx;
				height: 60upx;
			}
			.threeContent{
				font-size: 25rpx;
			}
			
		}

	}



.uni-list{
	flex-flow: row wrap; 
	.uni-item{
		flex: 1 1 45%;
		title-view {
			width: 100%;
			
		}
	
	}
}




</style>

