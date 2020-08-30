
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
							imgList:[],
						},
					  equipmentRemarks:{
							title:"设备备注",
							type:"textarea",
							name:"equipmentRemarks",
						}
	},
	//牧场的表单信息
	pastureForm:{
		              name:{
							title:"牧场名",
							name:"pastureName",
						},
					  map:{
						  title:"地图范围",
						  type : "map",
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
								defaultSelected: ["3", "5"] //默认选中项
							},
							name:"pastureLivestock",
 							icon:[{
									name: 'div',
									attrs: {
									class:'cuIcon-right text-olive text-lg'
									},
								}]
						},
						equipment:{
									title:"绑定GPS",
									type:"multipleSelect",
									multipleSelect:{
										show: false, //是否显示 - 双向绑定
										info: "",
										list: [ {
													label: "曼德力1号",
													value: "1",
												  },
												  {
													label: "德川康2号",
													value: "2",
												  },
												  {
													label: "北斗3号",
													value: "3",
												  },
												  {
													label: "朱沟里5",
													value: "5",
												  }], //数据源
									},
									name:"pastureEquipment",
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
	}
}

