<template>
	<view class="page" >
		<view class="uni-list"  :style="{ minHeight: systemInfo.bodyHeightNoButtom+'px'}">
			<view class="uni-list-cell uni-list-cell-card shadow  bg-white"  v-for="(value,key) in list" :key="key">
			   <title-view 
			   :showImg = "showImg"
			   :title="value.title"
			   :content="value.content"
			   :titleImg ="equipmentImg"
			   :eq = "value.eq"
			   showRightStr = "rightBattery"
			   style="flex: 1 1 auto"
			   >
				</title-view >
					
				<uni-collapse :accordion="true" class="collapse">
					<uni-collapse-item  title="操作" >
						<view class="content">
							<view class="cu-list grid" :class="['col-4','no-border']">
								<view  @tap="navTo(item.url)"  class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<5*2">
									<view :class="['cuIcon-' + item.cuIcon,'text-' + cuIconColor]">
									</view>
									<text>{{item.name}}</text>
								</view>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
         <uniFab
		          horizontal="right"
                  :pattern="pattern"
				  :content = "content"
                  @trigger="uniFabTrigger">
         </uniFab>
	</view>
</template>
<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import titleView from "@/components/title-view/title-view.vue"
	import uniFab from '@/components/uni-fab/uni-fab.vue'; //导入悬浮按钮
	import {mapState} from 'vuex'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			titleView,
			uniFab
		},
		computed:{
			...mapState({ systemInfo:state=>state.systemStore.systemInfo}),
		},
		data() {
			return {
				showImg:false,
				equipmentImg:this.$mAssetsPath.shebei,
				pattern:{
					buttonColor:"#0081ff"
				},
				content:[{
					iconPath:this.$mAssetsPath.shebei,
					selectedIconPath:"",
					text:"新增设备",
					name: '删除'
				}],
				cuIconColor:"blue",
				cuIconList: [{
					cuIcon: 'form',
					name: '信息',
					url:"./equipmentForm"
				}, {
					cuIcon: 'pullup',
					name: '发送指令'
				}, {
					cuIcon: 'circlefill',
					name: '故障报修'
				}, {
					cuIcon: 'roundclose',
					name: '删除'
				}],
				list: [{
						title: "设备器1号",
						content: "868120204824731",
						eq:"74%",
					},
					{
						title: "设备器2号",
						content: "57845412545632",
						eq:"54%",
						
					},  
					{
						title: "设备器3号",
						content: "57845412545632",
						eq:"14%",

					},
					{
						title: "设备器4号",
						content: "57845412545632",
						eq:"100%",

					},
					{
						title: "设备器5号",
						content: "57845412545632",
						eq:"96%",
						
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
			}
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
