<template>
	<view class="page" :style="{ minHeight: systemInfo.bodyHeightNoButtom+'px'}">
		 <listItem
		 :list="list"
		 :titleImg = "titleImg"
		 @listItemTap = "listItemTap"
		 ></listItem>
         <uniFab
		          horizontal="right"
                  :pattern="pattern"
				  :content = "content"
                  @trigger="uniFabTrigger">
         </uniFab>
	</view>
</template>
<script>
	import uniFab from '@/components/uni-fab/uni-fab.vue';    //导入悬浮按钮
	import listItem from "@/components/listItem/listItem.vue";//列表组件
	import {getPastureListByUserId} from "@/api/pasture.js"   //导入牧场api
	import {mapState} from 'vuex'
	export default {
		components: {
			uniFab,
			listItem
		},
		computed:{
			...mapState({ systemInfo:state=>state.systemStore.systemInfo,userInfo:state=>state.userInfo}),
		},
		data() {
			return {
				showImg:false,
				headerImg:this.$mAssetsPath.lun2,
				titleImg:this.$mAssetsPath.niuniu,
				pattern:{
					buttonColor:"#0081ff"
				},
				content:[{
					iconPath:this.$mAssetsPath.niuniu,
					selectedIconPath:"",
					text:"新增设备",
					name: '删除'
				}],
				list: []
			}
		},
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
			this.init();
		},
		methods:{
			init(){
				this.getPastureListByUserId().then(e=>{
					this.list = e.data.map(m=>{
						m.title = m.pastureName;
						m.content = m.pastureIntroduce
					});
					console.log(this.list);
				})
			},
			//根据用户的Id获取列表
			async getPastureListByUserId(){
				await new Promise((resolve,reject)=>{
					this.$http.get(`${getPastureListByUserId}`, {"userId":this.userInfo.id}).then((rep) => {
						 resolve(rep);
					}).catch((e)=>{
						reject(e);
					})
				})
			},	
			navTo(route) {
			  this.$mRouter.push({route});
			},
			uniFabTrigger(e){
				console.log(e);
			},
			listItemTap(e,value){
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

.listItemContainer{
		flex-flow: row wrap;
		padding-top: 30upx;
	}
.listItem{
	padding: 20rpx;
	flex: 1 1 45%; 
	width: 50%; 
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

