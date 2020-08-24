export default {
	equipmentData:{
		name:"测试人员1",
		code:"0123456789",
		phone:"18161218432",
		switch:true,
		livestock:0,
		timeInterval:7,
		user:17,
		equipmentRemarks:"这是一个备注"
	},
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
						},
					  switch:{
							title:"测试开关",
							type:"switch",
							name:"switch",
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
	}
}