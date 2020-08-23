//定义aop配置文件

/**
 * 方法前的切面方法
 * @param {Object} beforefn
 */
Function.prototype.before = function (beforefn) {
  var _self = this; //保存原函数引用
  return function () { //返回包含了原函数和新函数的"代理函数"
   beforefn.apply(this, arguments); //执行新函数，修正this
   return _self.apply(this, arguments); //执行原函数
  }
 };

/**
 * 方法后的切面方法
 * @param {Object} afterfn
 */ 
Function.prototype.after = function (afterfn) {
  var _self = this;
  return function () {
   var ret = _self.apply(this, arguments);
   afterfn.apply(this, arguments);
   return ret;
  }
};


console.log("aop配置已开启")

