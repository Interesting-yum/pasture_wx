<template>
	<view class="page">
		<swiper class="card-swiper margin-top" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 安曲牧场
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow " @tap="goInfo(id)" data-target="gridModal">
					信息
				</button>
			</view>
		</view>
		<view class="content">
			<view class="cu-list grid" :class="['col-3','no-border']">
				<view  @tap="navTo(item.url)"  class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<5*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + cuIconColor]">
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		components: {

		},
		computed:{
			...mapState({ systemInfo:state=>state.systemStore.systemInfo}),
		},
		data() {
			return {
				id:7,
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url:  this.$mAssetsPath.lun1
				}, {
					id: 1,
					type: 'image',
					url: this.$mAssetsPath.lun2,
				}, {
					id: 2,
					type: 'image',
					url: this.$mAssetsPath.lun3,
				}, {
					id: 3,
					type: 'image',
					url: this.$mAssetsPath.lun4,
				}, {
					id: 4,
					type: 'image',
					url: this.$mAssetsPath.lun3,
				}],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				cuIconColor:"orange",
				cuIconList: [{
					cuIcon: 'recordfill',
					name: '摄像头',
					url:"./equipmentForm"
				}, {
					cuIcon: 'global',
					name: 'GPS'
				}, {
					cuIcon: 'github',
					name: '耗牛'
				}, {
					cuIcon: 'mark',
					name: '信息'
				} ,{
					cuIcon: 'locationfill',
					name: '地图'
				} ,{
					cuIcon: 'roundclose',
					name: '删除'
				}],

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
			},
			goInfo(id){
				uni.navigateTo({
					url:"pastureForm?id="+id,
				})
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		}
	}
</script>

<style>
</style>
