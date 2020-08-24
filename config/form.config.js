/*
 * 应用表单校验相关配置和表单的基础配置
 * 依赖：graceChecker.js 进行校验
 *
 * 使用：引入该js到页面，let res = graceChecker.check({phoneNo:"",code:""},formRule.loginRule)
 */

export default {
	/* GPS的设备表单校验 */
	equipmentForm:{
		name:{
			title:"设备名",
			placeholder:"请输入设备名啦",
			value:"小二狗",
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
				  }],	  
		},
		
		switch:{
			title:"测试开关",
			type:"switch",
			name:"switch",
			checked:true,
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
				style: 'color: blue;'
			  },
			  children: [{
				type: 'text',
				text: '分'
			  }]
			}],
		},
		
		equipmentImg:{
			title:"设备图片",
			type:"img",
			name:"equipmentImg",
			imgList:[],
		},
		
		textarea:{
			title:"设备备注",
			type:"textarea",
			name:"equipmentRemarks",
		}
	},	

}
