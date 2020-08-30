/*
 * 应用表单校验相关配置
 * 依赖：graceChecker.js 进行校验
 *
 * 使用：引入该js到页面，let res = graceChecker.check({phoneNo:"",code:""},formRule.loginRule)
 */
import form from './form.config.js'
const equipmentForm = form.equipmentForm;  //GPS设备的表单数据
export default {
	/* GPS的设备表单校验 */
	equipmentRule:[{
		name:equipmentForm.name.name, 
		checkType : "string", 
		checkRule:"1,10",  
		errorMsg:"名称应为1-10个字符",
		},{
		name:equipmentForm.code.name, 
		checkType : "string", 
		checkRule:"10,10",  
		errorMsg:"编码应为10个字符",
		},{
		name:equipmentForm.phone.name, 
		checkType : "phoneno", 
		checkRule:"",  
		errorMsg:"请输入正确的手机号",
		},{
		name:equipmentForm.livestock.name, 
		checkType : "notnull", 
		checkRule:"",  
		errorMsg:"绑定牲畜不能为空",
		}
	],
	/* 用户密码登录 */
	loginByPassRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	},{
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	},  {
		name: 'password',
		checkType: 'string',
		checkRule: '6,18',
		errorMsg: '请输入6-18位密码'
	}],

	/* 用户验证码登录 */
	loginByCodeRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}, {
		name: 'code',
		checkType: 'string',
		checkRule: '4',
		errorMsg: '请输入4位验证码'
	}],

	/* 发送验证码验证手机号 */
	sendCodeRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
		name: 'mobile',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '手机号格式不正确'
	}],

	/* 编辑新增个人发票 */
	pInvoiceRule: [{
		name: 'title',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '发票抬头不能为空'
	}],

	/* 编辑新增公司发票 */
	cInvoiceRule: [{
		name: 'title',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '发票抬头不能为空'
	}, {
		name: 'duty_paragraph',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '发票税号不能为空'
	}],


	/* 用户注册 */
	registerRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
			name: 'mobile',
			checkType: 'phoneno',
			checkRule: '',
			errorMsg: '手机号格式不正确'
		}, {
			name: 'code',
			checkType: 'string',
			checkRule: '4',
			errorMsg: '请输入4位验证码'
		}, {
			name: 'password',
			checkType: 'string',
			checkRule: '6,18',
			errorMsg: '请输入6-18位密码'
		}, {
			name: 'nickname',
			checkType: 'string',
			checkRule: '2,12',
			errorMsg: '请输入2-12位昵称'
		}
	],

	/* 密码重置 */
	resetPasswordRule: [{
		name: 'mobile',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '手机号不能为空'
	}, {
			name: 'mobile',
			checkType: 'phoneno',
			checkRule: '',
			errorMsg: '手机号格式不正确'
		}, {
			name: 'code',
			checkType: 'string',
			checkRule: '4',
			errorMsg: '请输入4位验证码'
		}, {
			name: 'password',
			checkType: 'string',
			checkRule: '6,18',
			errorMsg: '请输入6-18位密码'
		}
	]
}
