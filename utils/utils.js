/**
 * 时间格式的转化
 * @param {Object} time
 */
function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

/**
 * aop方法的自定义注入
 */
function aop(arr,isAllow=()=>{return false},beforeFn=()=>{},afterFn=()=>{}){
	if((arr instanceof Object || arr instanceof Array) 
		&&  beforeFn instanceof Function  && afterFn instanceof Function ){ 
			for(var i in arr){
				if(isAllow.apply(this,[arr,i,...arguments])){
					 arr[i] = arr[i].before(beforeFn).after(afterFn);
				}	 
			}
			console.log("aop自定义方法注入初始化完毕")
		}else{
			console.log("参数不对");
		} 

}

/**
 * 表单自动填充数据
 * @param {Object} data
 * @param {Object} arr
 */
function hanleValue(data,arr){
	for(var i in data){
		let target = arr.find(f=>f.name == i);
		if(target){
			target.value = data[i];
		}
	}
}

/**
 * 路径格式的转化为对象
 * @param {Object} longitude
 * @param {Object} latitude
 */
function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

/**
 * 日期转化工具
 */
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	aop:aop,
	hanleValue:hanleValue,
}
