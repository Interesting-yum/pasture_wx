<template>
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<image style="height: 80rpx;width: 80rpx;border-radius: 50%;" v-if="showImg" :src="titleImg" mode="scaleToFill" fade-show="true"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">MEI：{{content}}</view>
					</view>
					<view class="right" v-if="showRightStr == 'rightIcon'">
						<view  style="font-size: 25px;" :class="['cuIcon-'+icon,'text-'+color]" @tap="iconTap" ></view>
					</view>
					<view class="right" v-if="showRightStr == 'rightMonitor'">
						<image style=" width: 45px; height: 90%;" :src="monitorRightImg"  @tap="iconTap" ></image>
					</view>
					<view class="uni-media-list-text-left flex" v-if="showRightStr == 'rightBattery'">
						<view style=" line-height: 18px; width: 100%; text-align: center;">{{eq}}</view>
						<view class="cu-progress radius striped active">
							<view class="bg-cyan" :style="[{ width:eq}]"></view>
						</view>
					</view>
				</view>

	
</template>

<script>
	export default {
		name: 'titleView',
		props: {
			//是否显示标题图片
			showImg: {
				type: Boolean,
				default: true
			},
			//标题的图片
			titleImg:{
				type:String,
				default: ""
			},
			//右边需要显示的模块
			showRightStr: {
				type: String,
				default: ""
			},
			icon:{
				type: String,
				default: "list"
			},
			color:{
				type: String,
				default: "ovlie"
			},	
			//电量
			eq:{    
				type: String,
				default: "0%"
			},
			//标题
			title:{
				type: String,
				default: "标题"
			},
			//内容
			content:{
				type: String,
				default: "内容"
			}
		},
		data(){
			return {
				monitorRightImg:this.$mAssetsPath.monitorRightImg,
			}
		},
		methods:{
			iconTap(e){
				console.log("图标点击",e);
				this.$emit("iconTap",e);
			}
		}
	}
</script>

<style lang="scss">
	.uni-media-list{
		width: 100%;
		.right{
			.text-olive{
				font-size: 25px;
			}
		}
	}
	
	.uni-media-list-logo{
		    flex: 1 1 15%;
	}
	.uni-media-list-body{
		    flex: 1 1 70%;
	}
	.uni-media-list-text-left{
		flex: 1 1 15%;
		flex-flow: column;
		display: flex;
		
		.uni-media-list-text-left{
			position: absolute;
			right: 10%;
			top: 5px;
			width: 80px;
			padding-top: 5px;
		 	.cu-progress{
				border: solid 0.5px #bbb4b4;
				width: 40%;
				height: 16px;
				&:after{
					content: "●";
					color: #adb5b1;
					position: absolute;
					right: -1px;
				}
			}
		
		}

/* 	 	.cu-progress{
			border: solid 0.5px #bbb4b4;
			align-self: center;
			width: 70%;
			height: 16px;
			align-items: inherit;
			overflow: inherit;
			&:after{
				    content: "●";
				    color: #adb5b1;
				    position: absolute;
				    right: -20%;
				    height: 14px;
				    line-height: 13px;
			}
		} */
	
	
	}
</style>
