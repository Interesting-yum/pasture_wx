<template>
	<view class="page">
		<pt-form 
		:formDatas="formDatas"
		:headImg="headImg"
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
    import {aop} from "@/utils/utils.js"
	export default{
		components:{
			ptForm,
		},
		data(){
			return {
				headImg:this.$mAssetsPath.headImg, 
				formDatas:[{
					title:"设备名",
					placeholder:"请输入设备名啦",
					value:"小二狗",
					name:"name",
					rule:{name:"name", checkType : "string", checkRule:"1,10",  errorMsg:"名称应为1-10个字符"},
				},{
					title:"设备编码",
					name:"code",
					rule:{name:"code", checkType : "string", checkRule:"10,10",  errorMsg:"编码应为10个字符"},
				},
				{
					title:"设备卡号",
					name:"phone",
					icon:`<view class='cu-tag bg-blue '>
								+86
							</view>
							<view class="cu-tag line-blue">
								中国大陆
						  </view>`,
					rule:{name:"phone", checkType : "phoneno", checkRule:"",  errorMsg:"请输入正确的手机号"},	  
				},
				{
					title:"测试开关",
					type:"switch",
					name:"switch",
					checked:true,
				},
/* 				{
					title:"测试单选",
					type:"radio",
					name:"radio",
					radioValue:"2",
					radios:[{
						value:"1",
						title:"品种1"
					},{
						value:"2",
						title:"品种2"
					},{
						value:"3",
						title:"品种3"
					}],
					checked:true,
				},
				{
					title:"测试复选",
					type:"checkbox",
					name:"checkbox",
					checkboxValue:"2",
					checkboxs:[{
						value:"1",
						title:"品种1",
						checked:false,
					},{
						value:"2",
						title:"品种2",
						checked:false,
					},{
						value:"3",
						title:"品种3",
						checked:true,
					},{
						value:"4",
						title:"品种4",
						checked:true,
					}],
				}, */
				
				{
					title:"绑定牲畜",
					type:"picker",
					mode:"selector",
					range:["牲畜1","牲畜2","牲畜3","牲畜4","牲畜5","牲畜6"],
					value:0,
					name:"livestock",
					rule:{name:"livestock", checkType : "notnull", checkRule:"",  errorMsg:"绑定牲畜不能为空"},	
				},{
					title:"指令发送间隔",
					name:"timeInterval",
					value:0,
					inputTpye:"number",
					align:"right",
					icon:`<view>分</view>`
				},{
					title:"设备图片",
					type:"img",
					name:"equipmentImg",
					imgList:[],
				},{
					title:"设备备注",
					type:"textarea",
					name:"equipmentRemarks",

				}]
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
			ChooseImage(item){
				console.log("调用者-ChooseImage",item);
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
			},
			
		},
		onLoad() {
			console.log(this);
			aop(this,(arr,i)=>{
			   return	arr[i] instanceof Function && !i.startsWith("$") && !i.startsWith("_") && !i.startsWith("create") &&  i!="constructor" && !i.startsWith("select")
			},(e,item)=>{
				// #ifdef MP-WEIXIN
				this.formDatas=this.formDatas.map(f=>f.name==item.name ? (f = item):f)
				//#endif
			})

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