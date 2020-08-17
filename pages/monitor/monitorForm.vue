<template>
  <view>
    <inputs 
    id="inputs" 
    ref="inputs" 
    :inputsArray="inputsArray" 
    activeName="获取输入" 
    :ruleSet="ruleSet"  
    @chaildOpenEvent="openWin"
    @activeFc="activeFc" 
    :onLoadData="onLoadData" 
    animationType="rotate3d-fade" 
    :animationDuration=".2" 
    submitReSet
    :buttonStyle="buttonStyle" 
    :inputDebounceSet="inputDebounceSet" 
    :focusStyle="focusStyle" 
    :fontSizeScaleSet="fontSizeScaleSet"
    :verifyStatusSet="verifyStatusSet"
    :usingComponents="usingComponents"
	buttonStyle = "{activeButton:'a'}"
    @inputsChange="inputsChange($event)"/>
	
</view>

</template>

<script>
	 import inputs from "@/components/QuShe-inputs/inputs.vue";
	  export default {
	        data() {
	            return {
	                usingComponents: true,
	                verifyStatusSet: {
	                    inputsId: 'inputs', // inputs组件的id属性值,自定义组件模式必填
	                    openVerifyStatus: true,
	                    openScroll: true,
	                    openChangeBorderColor: true,
	                    errNullColor: 'rgba(255,255,0,.7)',
	                    verifyErrorColor: 'rgba(245,16,92,.7)'
	                },
	                fontSizeScaleSet: { //inputs内的字体大小系数设置(字体大小为屏幕宽高度以此系数)
	                    allScale: .018,
	                    titleScale: .018,
	                    contentScale: .017
	                },
	                focusStyle: { //控制input或textarea类型focus或blur时的边框颜色
	                    focusBorderStyle: '#999999',
	                    blurBorderStyle: '#f8f8f8'
	                },
	                inputDebounceSet: { //input、textarea防抖设置
	                    openInputDebounce: true,
	                    delay: 500
	                },
	                "inputsArray": [{
	                        "border_top": "1px solid #f2f2f2", //上划线
	                        "type": "input",
	                        "title": "名称",
	                        "content": "",
							"tapClear":true,
	                        "ellipsis": true
	                    },{
	                        "border_top": "1px solid #f2f2f2", //上划线
	                        "type": "input",
	                        "title": "SDK地址",
	                        "content": "",
							"tapClear":true,
	                        "ellipsis": true
	                    },{
	                        "border_top": "1px solid #f2f2f2", //上划线
	                        "type": "input",
	                        "title": "IP地址",
	                        "content": "",
							"tapClear":true,
	                        "ellipsis": true
	                    },{
	                        "border_top": "1px solid #f2f2f2", //上划线
	                        "type": "input",
	                        "title": "内在地址",
	                        "content": "",
							"tapClear":true,
	                        "ellipsis": true
	                    },
						{ // 二级联动示例2
						    "type": "picker-custom",
						    "title": "所属牧场",
						    "defaultValue": [0, 0], //初始数据
						    "onceShowDefaultValue": true, //是否显示初始数据
						    "itemArray": [{
						        "value_1": "蔬菜", //value_1变量名需与下方steps.steps_1_value相同

						        "item_2": [{ //item_2变量名需与下方steps_2_item相同
						            "name": "青菜", //name变量名需与下方steps.steps_2_value相同
						            "value": "青菜" //可添加多项自定义想要的数据
						        }]
						    }, {
						        "value_1": "荤菜",
						        "item_2": [{
						            "name": "猪肉",
						            "value": "猪肉"
						        }]
						    }],
						    "steps": {
						        "steps_1_value": "value_1",
						        "steps_2_value": "name",
						        "steps_2_item": "item_2"
						    },
						    "linkageNum": 2, //2 表示为2级联动
						    "linkage": true //true 表示开启联动
						},
						{
						    "type": "textarea",
						    "title": "简介",
						    "defaultValue": "请输入简介~" //默认值
						},

	                ],
	    
	                "onLoadData": "data_",
	            }
	        },
	        methods: {
	            openWin(value) {
	                //打开规则或协议页
	                //若有一个以上的rule，则根据value打开规则页面
	                console.log(value);
	            },
	            activeFc(res) {
	                uni.showToast({
	                    title: "获取输入成功"
	                })
	                console.log(JSON.stringify(res));
	            },
	            openTest() {
	                uni.navigateTo({
	                    url: '../test/test'
	                })
	            },
	            setfocus1() { //设置focus示例1
	                this.$refs.inputs.setFocus(2, true);
	            },
	
	            setInputsValue1() {
	                this.$refs.inputs.setInputsValue(3, false);
	            },
	            setInputsValue2() {
	                this.$refs.inputs.setInputsValue('textarea', 'setInputsValue示例2所设置的值');
	            },
	            setInputsValue3() {
	                this.$refs.inputs.setInputsValue((inputsArray) => {
	                    let i = inputsArray.findIndex(item => item.title === 'textarea') //findIndex方法 返回符合测试条件的第一个数组元素索引，如果没有符合条件的则返回 -1
	                    return i;
	                    //可以不使用findIndex方法，但是必须return一个Number
	                }, 'setInputsValue示例3所设置的值');
	            },
	            setInputsValue4() {
	                this.$refs.inputs.setInputsValue('notFind', 'setInputsValue示例4所设置的值', ()=>{
	                    uni.showToast({
	                        title: '错误回调：找不到相应的index哦',
	                        icon: 'none'
	                    })
	                });
	            },
	            refActiveFc() {
	                console.log('触发绑定的activeFc方法');
	                this.$refs.inputs.activeFc();
	            },
	            inputsChange(res) {
	                console.log('pickerChange绑定事件回调:' + JSON.stringify(res));
	            }
	        },
	        components: {
	            inputs
	        }
	    }
</script>

<style>
</style>
