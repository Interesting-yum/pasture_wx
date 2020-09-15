/*
 * 应用表单校验相关配置和表单的基础配置
 * 依赖：graceChecker.js 进行校验
 *
 * 使用：引入该js到页面，let res = graceChecker.check({phoneNo:"",code:""},formRule.loginRule)
 */

export default {
	equipmentData:{
		name:"测试人员1",
		code:"0123456789",
		phone:"18161218432",
		switch:false,
		livestock:0,
		timeInterval:7,
		user:17,
		equipmentRemarks:"这是一个备注"
	},
	//摄像头的表单信息
	monitorForm:{
		              name:{
							title:"名称",
							name:"name",
						},
					  code:{
							title:"IP地址",
							name:"code",
						},
					  phone:{
							title:"卡号",
							name:"phone",  
							icon:[{
									name: 'div',
									attrs: {
									class:'cu-tag bg-blue '
									},
									children: [{
										type: 'text',
										text: '+86'
									}]
								  },{
									name: 'div',
									attrs: {
									class:"cu-tag line-blue"
									},
									children: [{
										type: 'text',
										text: '中国大陆'
									}]
								  }]
						},
					  pasture:{
							title:"绑定牧场",
							type:"picker",
							mode:"selector",
							range:["牧场1","牧场2","牧场3","牧场4","牧场5","牧场6"],
							value:0,
							name:"pasture",
						},
					  img:{
							title:"摄像头图片",
							type:"img",
							name:"monitorImg",
							value:[],
						},
					  remarks:{
							title:"摄像头备注",
							type:"textarea",
							name:"monitorRemarks",
					}		
	},
	
	//GPS表单的信息
	equipmentForm:{
		              name:{
							title:"设备名",
							placeholder:"请输入设备名啦",
							name:"name",
						},
					  code:{
							title:"设备编码",
							name:"code",
						},
					  phone:{
							title:"设备卡号",
							name:"phone",  
							icon:[{
									name: 'div',
									attrs: {
									class:'cu-tag bg-blue '
									},
									children: [{
										type: 'text',
										text: '+86'
									}]
								  },{
									name: 'div',
									attrs: {
									class:"cu-tag line-blue"
									},
									children: [{
										type: 'text',
										text: '中国大陆'
									}]
								  }]
						},
					  switch:{
							title:"测试开关",
							type:"switch",
							name:"switch",
							value:false,
						},
					  livestock:{
							title:"绑定牲畜",
							type:"picker",
							mode:"selector",
							range:["牲畜1","牲畜2","牲畜3","牲畜4","牲畜5","牲畜6"],
							value:0,
							name:"livestock",
						},
					  timeInterval:{
							title:"指令发送间隔",
							name:"timeInterval",
							value:0,
							inputTpye:"number",
							align:"right",
							icon:[{
								  name: 'div',
								  attrs: {
									style: 'color: bule;'
								  },
								  children: [{
									type: 'text',
									text: '分'
								  }]
								 }]
						},
					  equipmentImg:{
							title:"设备图片",
							type:"img",
							name:"equipmentImg",
							value:[],
						},
					  equipmentRemarks:{
							title:"设备备注",
							type:"textarea",
							name:"equipmentRemarks",
						}
	},
	pastureData:{
		pastureName:"测试人员1",
		pastureIntroduce:"0123456789",
		pastureRange:"18161218432",
		pastureLivestock:"1,2",
		pastureRecord:"1,2",
	},
	//牧场的表单信息
	pastureForm:{
		              name:{
							title:"牧场名",
							name:"pastureName",
						},
					  introduce:{
						  title:"牧场介绍",
						  type:"textarea",
						  name:"pastureIntroduce",
					  },	
					  map:{
						  title:"地图范围",
						  type : "map",
						  value:"",
						  name:"pastureRange",
						  icon:[{
									name: 'div',
									attrs: {
									class:'cuIcon-locationfill text-purple text-lg'
									},
								}]
					  },	
					  livestock:{
							title:"绑定牲畜",
							type:"multipleSelect",
							value: ["1", "2"], //默认选中项
							multipleSelect:{
								show: false, //是否显示 - 双向绑定
								info: "",
								list: [ {
											label: "牲畜1",
											value: "1",
										  },
										  {
											label: "牲畜2",

											value: "2",
											disabled: true, //禁用
										  },
										  {
											label: "牲畜3",
											value: "3",
										  },
										  {
											label: "牲畜4",
											value: "4",
										  },
										  {
											label: "牲畜5",
											value: "5",
										  }], //数据源
								
							},
							name:"pastureLivestock",
 							icon:[{
									name: 'div',
									attrs: {
									class:'cuIcon-right text-olive text-lg'
									},
								}]
						},
						record:{
									title:"绑定摄像头",  
									type:"multipleSelect",
									multipleSelect:{
										show: false, //是否显示 - 双向绑定
										info: "",
										list: [ {
													label: "摄像头1号",
													value: "1",
												  },
												  {
													label: "摄像头2号",
													value: "2",
												  },
												  {
													label: "摄像头3号",
													value: "3",
												  },
												  {
													label: "摄像头5号",
													value: "5",
												  }], //数据源
									},
									name:"pastureRecord",
									icon:[{
											name: 'div',
											attrs: {
											class:'cuIcon-right text-olive text-lg'
											},
										 }]
							},
							img:{
								title:"牧场图片",
								type:"img",
								name:"pastureImg",
								value:[],
							},		
	}
}

//demo样式
/* [{
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
 				{
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
				}, 
				
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

				}] */
