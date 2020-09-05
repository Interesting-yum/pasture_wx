<template>
	<view class="topBar">
				   <view class="cu-bar search bg-seach" >
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
</template>

<script>
	export default {
         props:{
			 isFilter:{
				type:[Boolean, String],
				default:false,
			 },
			 selectedFilter:{
				 type:String,
				 default:"",
			 },
			 filterRowList:{
				 type: Array,
				 default () {
				   return []
				 }
			 },

		 },
		data() {
			return{};
		},
		watch:{

		},
		mounted(){
			let query =  uni.createSelectorQuery().in(this);
			this.hanleTopBar(query);
		},
		methods:{
			filterTap(){
				this.isFilter = !this.isFilter;
				this.$emit("filterTap",isFilter);
				let query = uni.createSelectorQuery().in(this); 
 				this.$nextTick(()=>{
					this.hanleTopBar(query);
				}) 
			},
			filterItemTap(filterItem){
				this.$emit("filterItemTap",filterItem);
			},
			hanleTopBar(query){
				let _this = this;
				query.select('.topBar').boundingClientRect(data => {
				      console.log("data",data)
					   console.log("_this",_this)
					   _this.$emit("hanleTopBar",data)
				}).exec();
			},
		}
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
	
</style>
