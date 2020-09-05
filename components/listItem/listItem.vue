<template>
	<view  class="listItemContainer">
		<view  class="listItem " 
		v-for="(value,key) in list" :key="key" :style="{'flex-basis':listItemWidth}">
	     <view class="titleView bg-white flex shadow" @tap="listItemTap(value)">
			    <view class="sub flex justify-center">
					<image :src="titleImg" class="titleImg"></image>
				</view>
				<view class="twice">
					<view class="title text-cut text-shadow text-blue text-bold">{{value.title}}</view>
					<view class="content text-xs text-gray">{{value.content}}</view>
				</view>
		 </view>
				
		</view>

	</view>
</template>

<script>
	export default {
		props:{	
			list:{
				type:[Array,Object],
				default (){
					return [];
				}
			},
			titleImg:{
				type:String,
				default:""
			},
			listItemWidth:{
				type:String,
				default:"50%"
			}
		},
		data(){
			return {};
		},
		methods:{
		  	listItemTap(item){
				this.$emit("listItemTap",item)
			},
		}
	}
</script>

<style lang="scss">
	.listItemContainer{
			flex-flow: row wrap;
			padding-top: 30upx;
			display: flex;
		}
	.listItem{
		padding: 20rpx;
		flex: 1 1; 
		float: left; 
		height: 100px;
		overflow: hidden;
		.titleView{
			border: solid 0.5px #ccc7c7;
			border-radius: 15upx;
			height: 100%;
			flex: 1 1 auto;
			flex-flow: row nowrap;
			.sub{
				width: 35%;
				padding: 5px;
				margin-top: 10upx;
			}
			.twice{
				width:65%;
				padding: 5px;
				.content{
					height: 50%;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					padding-right:10upx;
					word-break: break-all;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
			.titleImg{
				width: 80upx;
				height: 80upx;
	
			}
		}
	}
</style>
