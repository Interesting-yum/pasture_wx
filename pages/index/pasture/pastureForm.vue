<template>
	<view class="page">
		<pt-form 
		:formDatas="formDatas"
		:rule="rule"
		@change="change"
		@columnchange="columnchange"
		@cancel="cancel"
		@blur="blur"
		@input="input"
		@ChooseImage="ChooseImage"
		@ViewImage="ViewImage"
		@DelImg="DelImg"
		@SwitchChange="SwitchChange"
		@RadioChange = "RadioChange"
		@formSubmit="formSubmit"
		@CheckboxChange="CheckboxChange"
		@multipleSelectTap="multipleSelectTap"
		@multipleSelect="multipleSelect"
		@mapTap="mapTap"
		></pt-form>
        
	</view>
</template>

<script>
	import ptForm from "@/components/pt-form/pt-form.vue"
    import {aop,hanleValue} from "@/utils/utils.js"
	import form,{equipmentForm2} from "@/config/form.config.js"
	import formRule from "@/config/formRule.config.js"
	import {addPasture} from "@/api/pasture.js"
	const pastureForm = form.pastureForm;
	const pastureData = form.pastureData;
	const pastureRule = formRule.pastureRule;
	export default{
		components:{
			ptForm,
		},
		data(){
			return { 
				formDatas:[],
				rule:pastureRule,
			}
		},
		methods:{
			iconTap(e){
				console.log(e);
			},
			change(e,item){
				console.log("调用者-change",e,item)
				
			},
			columnchange(e,item){
				console.log("调用者-columnchange",e,item)
			},
			cancel(e,item){
				console.log("调用者-cancel",e,item);
			},
			blur(e,item){
				console.log("调用者-blur",e,item);
			},
			input(e,item){
				console.log("调用者-input",e,item);	
			},
			ChooseImage(e,item){
				console.log("调用者-ChooseImage",e,item);
			},
			ViewImage(e,item){
				console.log("调用者-ViewImage",e,item);	
			},
			DelImg(e,item){
				console.log("调用者-DelImg",e,item);	
			},
			SwitchChange(e,item){
				console.log("调用者-SwitchChange",e,item);	
			},
			RadioChange(e,item){
				console.log("调用者-RadioChange",e,item);	
			},
			CheckboxChange(e,item){
				console.log("调用者-CheckboxChange",e,item);	
			},
			multipleSelectTap(e,item){
				console.log("调用者-multipleSelectTap",e,item);	
			},
			multipleSelect(e,item){
				console.log("multipleSelectTap",e,item);
			},
			mapTap(e,item){
				uni.navigateTo({url:"../../map/mapPage?mode=editPasture&&item="+ encodeURIComponent(JSON.stringify(item))});
			},
			async formToServer(e) {
				console.log("addPasture:",`${addPasture}`)
                 this.$http.post(`${addPasture}`, e).then((rep) => {
					  this.$mHelper.toast("添加成功");
                      setTimeout(()=>{
						  uni.navigateBack();
					  },500)
				 })
			},
			formSubmit(e){
				console.log("调用者-RadioChange",e);
				this.formToServer(e);
			},
			/**
			 * aop初始化方法
			 */
			initAop(){
				aop(this,(arr,i)=>{
				   return	arr[i] instanceof Function && !i.startsWith("$") && !i.startsWith("_") && !i.startsWith("create") &&  i!="constructor" && !i.startsWith("select")
				},(e,item)=>{
					// #ifdef MP-WEIXIN
					try{
						this.formDatas=this.formDatas.map(f=>f.name==item.name ? (f = item):f)
					}catch(err){
						/* console.log("过滤错误...","\ne：",e,"\nitem：",item, "\n错误：",err) */
					}
					//#endif
				})
			},
			updateRange(e,item){
				console.log("回来了？",e)
				console.log("回来了？",item)
				let locationStr = e.map((el) => "["+el.latitude+","+el.longitude+"]").join(",")
				console.log("locationStr",locationStr)
				item.value = locationStr;
/* 				this.formDatas.map(m=>{
					if(m.name == item.name){
						m
					}
				}) */
			},
			/**
			 * 初始化数据
			 */
			initData(){
				this.formDatas = Object.values(pastureForm);
				hanleValue(pastureData,this.formDatas);
			}
			
		},
		onLoad() {
			console.log("本页的this",this);
			this.initAop();        //初始化aop
			this.initData();        //初始化数据
/* 			uni.$on("updateRange",function(e,item){
				console.log("回来了？",e)
				console.log("回来了？",item)
				let locationStr = e.map((el) => "["+el.latitude+","+el.longitude+"]").join(",")
				console.log("locationStr",locationStr)
				this.item = 
			})
 */
		},

	}
</script>

<style lang="scss">
	.page{
		image{
			width: 100%;
		}
	}
</style>