/**
 * pt-from表单使用说明
 *    props:
 *		  headImg:
 *				类型:String
 *				内容:"表单标题图片路径,如果不需要,调用者可以不需要设置"
 *				默认:"noHave"
 *		  formDatas:
 *				类型:Array
 *				内容:"表单内的组件数组,"
 *				默认:[]
 *              单个对象属性:{
 *					type:
 *						类型:String
 *						内容:"组件的类型,"
 *						属性介绍:{	 
 *	                       img 
 *							  内容      :  "图片文件上传组件",
 *                            私有参数  :  {value,}
 *						   picker 
 *							  内容      :  "选择器组件",
 *                            私有参数  :   {range,range-key,start,end,mode}
 *						      img:"图片文件上传组件",
 *						} 
 *                  mode:{
 *						类型:String
 *						内容:"picker组件的模式类型,同uniapp官网picker组件一样"   					 
 *					 }
 *					name:
 *						类型:String
 *						内容:"组件的name属性,方便表单赋值和取值,"   
 *					title:
 *						类型:String
 *						内容:"组件的标题,"
 *					value:
 *						类型:Array
 *						内容:"图片文件对象的数组"
 *						单个对象属性:{
 *	                       
 *						}
 *              
 *					}
 *
 */
<template>
	<view>
		<view class="head-img" v-if="headImg!='noHave'">
			<image  mode="aspectFill" :src="headImg"></image>
		</view>
		<view class="uni-padding-wrap">
			<form class="formView" @submit="formSubmit" @reset="formReset">
				    <view  v-for="(item,index) in formDatas" 
					 :class="{imgType:item.type=='img','align-start':item.type=='textarea'}"
					 :key="index"
					 :style="{'background-color':item.name==errorName?'rgba(181, 23, 23, 0.18)':'#fff'}"	
					 class="cu-form-group">
					 <view v-if="item.type=='img'" class="cu-bar bg-white ">
					 	<view class="action">
					 		{{item.title}}
					 	</view>
					 	<view class="action">
					 		{{item.value.length}}/4
					 	</view>
					 </view>
					 <view v-else class="title">{{item.title}}</view>
					 
					 <!-- 图片上传组件 -->
					 <view v-if="item.type=='img'" class="grid col-4 grid-square flex-sub" :name="item.name">
						<!-- 图片容器 -->
						<view class="bg-img" v-for="(img,imgIndex) in item.value" :key="imgIndex" @tap="ViewImage($event,item)" :data-url="item.value[index]">
						<image :src="item.value[imgIndex]" mode="aspectFill"></image>
							<view class="cu-tag bg-red" @tap.stop="DelImg($event,item)" :data-index="imgIndex">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<!-- 添加按钮 -->
						<view class="solids" @tap="ChooseImage($event,item)" v-if="item.value.length<4">
							<text class='cuIcon-cameraadd'></text>
						</view>
					 </view>
					 <!-- 选择器组件 -->
					 <picker v-else-if="item.type=='picker'"
					  :mode="item.mode" 
					  @change="change($event,item)" 
					  @cancel="cancel($event,item)"
					  @columnchange="columnchange($event,item)"
					  :value="item.value" 
					  :range="item.range"
					  :range-key="item.rangeKey"
					  :start="item.start"
					  :end  ="item.end"
					  :name="item.name"
					  >
					 <view class="picker"> 
						  {{getPickerValueByMode(item)}}
					 </view>
					 </picker>
					 <!-- 地图路线选择组件 -->
					 <view class="flexFull" style="width: 60%;flex-wrap: nowrap;overflow: hidden;" v-else-if="item.type=='map'" @tap="mapTap($event,item)">
						 <text>{{item.value || '请选择'}}</text>
						 <input style="display: none;" :name="item.name" :value="item.value" />
					 </view>
					 <!-- 多选的选择器 -->
					 <view class="flexFull" v-else-if="item.type=='multipleSelect'" >
						 <view class="text-area" @tap="multipleSelectTap($event,item)">
						   <text class="value" >{{item.multipleSelect.info || "请选择"}}</text>
						   <input style="display: none;" :name="item.name" :value="item.value" />
						 </view>
						 <multiple-select
						   v-model="item.multipleSelect.show"
						   :ref="item.name"
						   :dataList="item.multipleSelect.list"
						   :default-selected="item.value"
						   :item="item"
						   @confirm="multipleChange"
						 ></multiple-select>
					 </view>
					 <!-- 复选框组件 -->
					 <checkbox-group  v-else-if="item.type=='checkbox'" :name="item.name" class="block" @change="CheckboxChange($event,item)">
						  <label class="uni-list-cell uni-list-cell-pd" v-for="(checkbox,checkboxIndex) in item.checkboxs" :key="checkboxIndex">
						  <view>
							<checkbox   
						   :class="checkbox.checked?'checked':''" 
						   :checked="checkbox.checked?true:false"
						   :value="checkbox.value" />
						   </view>
						   <view>{{checkbox.title}}</view>
						 </label>
					 </checkbox-group>	 
					 <!-- 单选框组件 -->
					 <radio-group  class="block" :name="item.name"  v-else-if="item.type=='radio'" @change="RadioChange($event,item)">
					   <label class="uni-list-cell uni-list-cell-pd"  v-for="(radio,radioIndex) in item.radios"  :key="radioIndex">
					       <view>
					          <radio  :class="item.radioValue==radio.value?'checked':''" :checked="item.radioValue==radio.value?true:false" :value="radio.value"> </radio>
					        </view>
					         <view>{{radio.title}}</view>
					  </label>
					 </radio-group>
					 <!-- 开关组件 -->
					 <switch    v-else-if="item.type=='switch'"  @change="SwitchChange($event,item)" :name="item.name" :class="item.value?'checked':''" :checked="item.value?true:false"></switch>
					 <!-- 文本框组件 -->
					 <textarea  v-else-if="item.type=='textarea'" maxlength="-1" :value="item.value"  @input="input($event,item)" :name="item.name" :placeholder="item.placeholder||'请输入'+item.title"></textarea>
					 <!-- 输入框组件 -->
					 <input :type="item.inputTpye || 'text' "    v-else class="input" :style="{'text-align':item.align||'left'}"  @blur="blur($event,item)" :value="item.value" :name="item.name" :placeholder="item.placeholder||'请输入'+item.title" />
					 <!-- 后缀图标样式 -->
					 <view class="cu-capsule radius" v-if="item.icon" v-html="item.icon"></view>
				
					</view>

				<view class="uni-btn-v uni-common-mt">
					<button class="btn-submit" formType="submit" type="primary">提交</button>
					<button type="default" formType="reset">清空</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	//来自 graceUI 的表单验证， 使用说明见手册 http://grace.hcoder.net/doc/info/73-3.html
	var  graceChecker = require("@/utils/graceChecker.js");
	import multipleSelect from "@/components/multiple-select/multiple-select";
	export default {
		components: {
		  multipleSelect
		},
		props:{
			headImg:{
				type:String,
				default: "noHave"
			},
			formDatas:{
				type:Array,
				default(){
					return [];
				},
			},
			rule:{
				type:Array,
				default(){
					return [];
				},
			},
		},
		data() {
			return {
                 errorName:"",
			}
		},
		methods: {
			change(e,item){
				console.log("picker选择器触发改变");
				console.log("item",item);
				console.log("e",e);
				item.value = e.detail.value;
				this.$emit("change",e,item)
			},
			multipleChange(e,item){
				item.value = e.map((el) => el.value);
				item.multipleSelect.info = e.map((el) => el.label).join(",");
				this.$emit("multipleSelect",e,item)
			},
			columnchange(e,item){
				console.log("picker多咧选择器触发改变");
				console.log("item",item);
				console.log("e",e);
				console.log("改变的值",e.detail.value);
				console.log("改变的列",e.detail.column);
				this.$emit("columnchange",e,item)
			},
			cancel(e,item){
				console.log("picker关闭了");
				this.$emit("cancel",e,item)
			},
			blur(e,item){
				console.log("input失去焦点");
				console.log("item",item);
				console.log("e",e);	
				this.$emit("blur",e,item)
			},
			input(e,item){
				console.log("textarea获得焦点");
				console.log("item",item);
				console.log("e",e);	
				this.$emit("input",e,item)
			},
			getPickerValueByMode(item){
				let str = (item.mode=="time"||item.mode=="date") && item.value
				   || item.mode=="selector" && item.range[item.value]
				   || item.mode=="multiSelector" && item.value.reduce((cur,pre,index,arr)=>{
					   cur+=item.range[index][pre]+((index!=item.range.length-1)?" - ":"");
					   return cur;
				   },"")
				  if(!str){
					  str = "暂无信息";
				  }
				  return str; 
			},
			SwitchChange(e,item){
				item.value = e.detail.value
				this.$emit("SwitchChange",e,item)
			},
			RadioChange(e,item){
				console.log("?????")
				item.radioValue = e.detail.value
				this.$emit("RadioChange",e,item)
			},
			multipleSelectTap(e,item){
				this.$refs[item.name][0].open();
				this.$emit("multipleSelectTap",e,item); 
			},

			CheckboxChange(e,item){
				console.log("复选框",e,item);
				let values = e.detail.value,
				    items = item.checkboxs;
					items.map(m=>m.checked=false);
					values.forEach(v=>{
					   let value = items.find(f=>f.value==v);
					   if(value){
						  value.checked=true
					   }
					})
				this.$emit("CheckboxChange",e,item)	
				
			},
			mapTap(e,item){
				this.$emit("mapTap",e,item)	
			},
			ChooseImage(e,item) {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (item.value.length != 0) {
							item.value = item.value.concat(res.tempFilePaths)
						} else {
							item.value = res.tempFilePaths
						}
						console.log("this",this);
						this.$emit("ChooseImage",e,item);
					}
				});
			},
			ViewImage(e,item) {
				uni.previewImage({
					urls: item.value,
					current: e.currentTarget.dataset.url
				});
				this.$emit("ViewImage",e,item)
			},
			DelImg(e,item) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这张图片吗？',
					confirmText: '确定',
					cancelText: '取消',
					success: res => {
						if (res.confirm) {
							item.value.splice(e.currentTarget.dataset.index, 1)
						}
						this.$emit("ViewImage",e,item)
					}
				})
			},
			confirm(e,item){
				this.$refs[item.name][0].info = item.data.map((el) => el.label).join(",");
				this.$emit("confirm",e,item)
			},
			formSubmit: function (e) {
				console.log(this.formDatas)
				//错误表单组件提示为空
				this.errorName = ""; 
				//进行表单检查
				/* var formData = e.detail.value; */
				var formData = this.formDatas.reduce((cur,per,arr,i)=>{
					 if(per.value  instanceof Array){
						 per.value = per.value.toString();
					 } 
					 cur[per.name] = per.value;
					 return cur;
				 },{})
				var checkRes = graceChecker.check(formData, this.rule);
				if(checkRes){
					uni.showToast({title:"验证通过!", icon:"none"});
					this.$emit("formSubmit",formData);
				}else{
					this.errorName = graceChecker.name;
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			},
			formReset: function (e) {
				console.log("清空数据")
				this.chosen = ''
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style lang="scss">
	.head-img{
	     width: auto; 
	     height: 250upx;
		 image{
			 width: 100%;
			 height: 100%;
		 };
	}
	
	.uni-page-head {
	     padding: 0px; 
	}
	.uni-padding-wrap {
	    width: 100%;
	    padding: 0 0px;
	}
	.formView{
		.imgType{
			display: block;
			&::before{
				content: "";
			}
		}
		radio-group,checkbox-group{
			display: flex;
			flex-flow: row-reverse wrap;
			radio,checkbox{
				margin-right: 10upx;
			},
			.uni-list-cell {
				&:after{
					 height: 0px;
				}
			}
			.uni-list-cell-pd {
			    padding: 11px 5px;
			}
		} 
		.cu-form-group{
			.title{
				font-size:$font-base;
				min-width: 80px;
			}
			.flexFull{
				font-size:$font-base;
				flex: 1;
				text-align: right;
				margin-right: 10upx;
			}
			.input{
				font-size:$font-base;
			}
			picker{
				&::after{
					line-height: 50px;
				}
			}
			.cu-bar {
				.action{
					&:first-child{
						margin-left: 0px;
					}
				}
			}
			&:last-child{
				border-bottom: solid 1px #eee;
			}
			
		}
		.uni-common-mt{
			display: flex; 
			justify-content: space-around;
			margin-bottom: 60rpx;
			button{
				 padding: 0px 45px;
			}
		}
		
	}
	
	.uni-textarea-textarea{
		    overflow-y: auto;
		    border: solid 1px #cccaca;
		    padding: 3px;
		    border-radius: 5px;
	}
</style>
