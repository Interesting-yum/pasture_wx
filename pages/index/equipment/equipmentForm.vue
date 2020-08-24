<template>
	<view class="page">
		<pt-form 
		:formDatas="formDatas"
		:headImg="headImg"
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
		></pt-form>
	</view>
</template>

<script>
	import ptForm from "@/components/pt-form/pt-form.vue"
    import {aop,hanleValue} from "@/utils/utils.js"
	import form,{equipmentForm2} from "@/config/form.config.js"
	import formRule from "@/config/formRule.config.js"
	const equipmentForm = form.equipmentForm;
	const equipmentData = form.equipmentData;
	const equipmentRule = formRule.equipmentRule;
	export default{
		components:{
			ptForm,
		},
		data(){
			return {
				headImg:this.$mAssetsPath.headImg, 
				formDatas:[],
				rule:formRule.equipmentRule,
			}
		},
		methods:{
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
			formSubmit(e){
				console.log("调用者-RadioChange",e);
			}
			
		},
		onLoad() {
			console.log("本页的this",this);
			this.initAop();         //初始化aop
			this.initData();        //初始化数据

		},
		methods:{
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
						console.log("过滤错误...","\ne：",e,"\nitem：",item, "\n错误：",err)
					}
					//#endif
				})
			},
			/**
			 * 初始化数据
			 */
			initData(){
				this.formDatas = Object.values(equipmentForm);
				hanleValue(equipmentData,this.formDatas);
			}
		}
	}
</script>

<style lang="scss">
	.page{
		image{
			width: 100%;
		}
	}
</style>