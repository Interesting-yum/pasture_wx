(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName) ||
          [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, params.concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/pages.json ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 11 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!*****************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/store/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));

var _routes = _interopRequireDefault(__webpack_require__(/*! @/config/routes.config */ 16));
var _router = _interopRequireDefault(__webpack_require__(/*! @/utils/router */ 17));
var _systemStore = _interopRequireDefault(__webpack_require__(/*! ./systemStore */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
console.log("systemStore", _systemStore.default);
_vue.default.use(_vuex.default);

var ACCESSTOKEN = uni.getStorageSync('accessToken') || '';
var REFERRER = uni.getStorageSync('referrer') || '';
var USER = uni.getStorageSync('user') || {};
var REFRESHTOKEN = uni.getStorageSync('refreshToken') || '';

var store = new _vuex.default.Store({
  modules: {
    systemStore: _systemStore.default },

  state: {
    //用户token
    accessToken: ACCESSTOKEN,
    //用户信息
    userInfo: USER.member,
    //推荐人
    referrer: REFERRER,
    //小程序openid
    openId: '',
    //网络状态，用于下载提醒
    networkState: 'unknown',
    refreshToken: REFRESHTOKEN },


  getters: {
    // 获取网络状态
    networkStatus: function networkStatus(state) {
      return state.networkState;
    },
    // 判断用户是否登录
    hasLogin: function hasLogin(state) {
      if (state.accessToken) {
        return true;
      } else {
        return false;
      }
    } },

  mutations: {
    login: function login(state, provider) {
      state.accessToken = provider.access_token;
      state.refreshToken = provider.refresh_token;
      state.userInfo = provider.member;
      state.user = provider;
      uni.setStorageSync('user', provider);
      uni.setStorageSync('accessToken', provider.access_token);
      uni.setStorageSync('refreshToken', provider.refresh_token);
      uni.setStorageSync('userInfo', provider.member);
    },
    logout: function logout(state) {
      state.accessToken = '';
      state.refreshToken = '';
      state.userInfo = {};
      uni.removeStorageSync('accessToken');
      uni.removeStorageSync('refreshToken');
      uni.removeStorageSync('userInfo');
    },
    setReferrer: function setReferrer(state, referrer) {
      state.referrer = referrer;
      uni.setStorageSync('referrer', referrer);
    },
    setOpenId: function setOpenId(state, openId) {
      state.openId = openId;
      uni.setStorageSync('openId', openId);
    },
    setNetworkState: function setNetworkState(state, provider) {
      state.networkState = provider;
    } },


  actions: {
    networkStateChange: function networkStateChange(_ref, info) {var commit = _ref.commit;
      commit('setNetworkState', info);
    },
    reLogin: function reLogin(_ref2, info) {var commit = _ref2.commit;
      commit('logout', '');
      _router.default.redirectTo({
        route: _routes.default.login });

    },
    logout: function logout(_ref3, info) {var commit = _ref3.commit;
      commit('logout');
    } } });



console.log("store", store);var _default =
store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!**************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/routes.config.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * 路由表对象：
                                                                                                      * 该文件挂载在Vue原型中 $mRoutesConfig
                                                                                                      * 作用：调用$mRouter对象的方法 传入以下对应的路由对象，详细见common目录下的router.js
                                                                                                      * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
                                                                                                      * 注意：所有在pages目录下新建的页面都必须在"路由表"中进行声明，并且在框架的pages.json注册。
                                                                                                      *
                                                                                                      * 配置参数项说明：
                                                                                                      * name:可选配置 （路由名称）
                                                                                                      * path:必填配置 （路由地址）
                                                                                                      * requiresAuth:可选配置 （是否权限路由）
                                                                                                      */var _default =

{
  // 权限路由 在main.js可实现路由拦截 所以路由都需要注册 待完善
  promoCode: {
    name: '创建订单',
    path: '/pages/order/create/order',
    requiresAuth: true },


  // 非权限路由
  main: {
    name: '首页',
    path: '/pages/index/index' },

  category: {
    name: '分类',
    path: '/pages/category/category' },

  cart: {
    name: '购物车',
    path: '/pages/cart/cart' },

  login: {
    name: '登录',
    path: '/pages/public/login' },

  index: {
    name: '注册',
    path: '/pages/public/register' },

  loginType: {
    name: '登录类型',
    path: '/pages/public/logintype' } };exports.default = _default;

/***/ }),
/* 17 */
/*!******************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/router.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 路由对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 中心思想：需要路由鉴权,由于uni-app没有vue中的全局钩子函数，所以封装了Router对象。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 说明：应用中的路由跳转尽量使用该Router的方法，并配合config中的路由表对象进行跳转。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */var
Router = /*#__PURE__*/function () {
  function Router(arg) {_classCallCheck(this, Router);
    this.callBack = function () {};
  }_createClass(Router, [{ key: "beforeEach", value: function beforeEach(

    callBack) {
      if (callBack instanceof Function) this.callBack = callBack;
    } }, { key: "push", value: function push(

    to) {
      this.callBack('navigateTo', to);
    } }, { key: "redirectTo", value: function redirectTo(

    to) {
      this.callBack('redirectTo', to);
    } }, { key: "reLaunch", value: function reLaunch(

    to) {
      this.callBack('reLaunch', to);
    } }, { key: "switchTab", value: function switchTab(

    to) {
      this.callBack('switchTab', to);
    } }, { key: "back", value: function back(

    delta) {
      uni.navigateBack({
        delta: delta });

    } }]);return Router;}();var _default =


new Router();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */
/*!***********************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/store/systemStore.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));

var _routes = _interopRequireDefault(__webpack_require__(/*! @/config/routes.config */ 16));
var _router = _interopRequireDefault(__webpack_require__(/*! @/utils/router */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var systemInfo = uni.getStorageSync('systemInfo') || '';var _default =

{
  state: {
    //系统相关信息
    systemInfo: systemInfo },

  getters: {
    getSystemInfo: function getSystemInfo(state, provider) {
      return state.systemInfo[provider];
    } },

  mutations: { //相当于methods,定义一些方法(同步)。方法里有个默认参数--state
    setSystemInfo: function setSystemInfo(state, provider) {
      state.systemInfo = provider;
    } },

  actions: {//异步操作（也可以定义同步方法）。提交mutation，而不是直接变更状态。
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 19 */
/*!**************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/assets.config.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _indexConfig = _interopRequireDefault(__webpack_require__(/*! ./index.config.js */ 20));var _monitorImg$monitorRi;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var PATH = _indexConfig.default.assetsPath;
/*
                                             * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
                                             * 页面使用：this.$mAssetsPath.grid_1
                                             * CSS背景：应尽量使用:style="" 行内样式设置背景图
                                             * PATH说明：本地路径或者服务器路径
                                             *
                                             * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
                                             *
                                             * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
                                             */var _default = (_monitorImg$monitorRi = {


  // 摄像头图片
  monitorImg: PATH + '/index/grid/record.png',
  // 摄像头右侧图片
  monitorRightImg: PATH + '/摄像头 (1).png',
  // 默认头像
  headImg: PATH + '/missing-face.png',

  // 出错填充图片
  errorImage: PATH + '/errorImage.jpg',

  // 品牌logo
  logo: PATH + '/logo.png',

  // 商城新闻
  newsBg: PATH + '/news.png',

  // 商城新闻
  userBg: PATH + '/user-bg.jpg',

  // vip北京
  vipCardBg: PATH + '/vip-card-bg.png',

  // 弧形背景
  arc: PATH + '/arc.png',

  // 500
  noNetWorkImg: PATH + '/noNetWork.png',



  // 404
  notFoundImg: PATH + '/notFound.png',


  //主页图片
  record: PATH + "/index/grid/record.png",
  shebei: PATH + "/index/grid/shebei.png",
  niuniu: PATH + "/index/grid/围栏.png",
  info: PATH + "/index/grid/info.png",
  housekeeper: PATH + "/index/grid/housekeeper.png",


  yidao: PATH + "/index/已签到.png",
  weidao: PATH + "/index/未签到.png",
  zongshu: PATH + "/index/签到打卡 (1).png",
  chidao: PATH + "/index/迟到.png",

  lunbo1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597601855526&di=2384a7934aed90644dd81fd6d53171fe&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3331418667%2C2390293085%26fm%3D214%26gp%3D0.jpg',
  lunbo2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597601895278&di=ed311819f4492187805eb5a5857f9af7&imgtype=0&src=http%3A%2F%2Fwww.amaomb.com%2Fuploads%2Fallimg%2F140423%2F1-140423205030220.jpg',
  lunbo3: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597601776748&di=fe3ccbb78d2c8c7d7c8c2321c173423a&imgtype=0&src=http%3A%2F%2Fpic11.photophoto.cn%2F20090601%2F0034034564495352_b.jpg',


  //地图模块 => marker标记图片
  locationImg: PATH + "/map/loctionIconBlue.png",
  circleImg: PATH + "/map/圆点.png",
  circleGreen: PATH + "/map/circleGreen.png",
  recordImg: PATH + "/map/recordImg.png",
  messageImg: PATH + "/map/info.png",

  //地图模块 =>base64 的 图 片
  weixin: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu1dB3hUVfb/nfdm0uki2JBir9hFUFFJBBIEdddesLGKCZJd6+qu6H9ddXVdJAHXjm1tu4KSUBJKLCiKUhRRQQEVkCKQkJ7Me+f/3TczYTLzyn0zkyYz36e7n7nlnHPveff0Q0j8EhRIUMCSApSgTYICCQpYUyDBIInbkaCADQUSDJK4HgkKJBgkcQcSFIiOAokXJDq6JWbtJRRIMMhectAJNKOjQIJBoqNbYtZeQoEEg+wlB51AMzoKJBgkOrolZu0lFEgwyF5y0Ak0o6NAgkGio1ti1l5CgQSD7CUHnUAzOgokGCQ6uiVm7SUUSDDIXnLQCTSjo0CCQaKjW2LWXkKBBIPsJQedQDM6CiQYJDq6JWbtJRRIMMhectAJNKOjQIJBoqNbYtZeQoEEg+wlB93SaI4ZOrGrz+ubAaKhYi8GJheXFOS39L4tvX6CQeJI4VGZeWfPKi14P45LdpilsjNzlxPRwOYA8wNFJYWTOgwSJoAmGCQOpzcyM2+sAvwLhK7+5XhSUUnhA3FYukMskT0sbyIp+FcEsIzyotKCbh0CCQsgEwwS4+nlDMsdCoUWhS9D4AtnlRTOjHH5dj/dL1pp6/d8HPaAzMwVxaWFgY9Gu0fFFMAEg8R4bjlZuZMAuj/y68lPFpUWToxx+TaZHtAnrmXQQAKv8DR6XppZNrncDJjsrNzpBLrW7G8Mfqm4pHBsmyARp00TDBIjIbOz8mYSMNpEvHi/qLTAUFg70k8wR6PXtyhUn2BggwLOD38RrV5PQ8hkrtBUz8C5cydv6Ej4R0oCHRn6dgC7uXJqWHE2FJcU9GsHILoCwVKf8N/6Mp/quS546a1w92/Y8RV0gUXiBXF1fZoPNkSRJG2X1RI+Re3X0b6gOZl5ZSCcbU8WnqRrSoOi8t9NRSvmH4tLC/vGQNp2MzXBIDEchWG9IrxotQTryC+eXzA5hi1afartC9IcGp3BCpl9Y3U+p2h+YVmrA98CGyYYJAaiWuofgTWZeUVxaeEJMWzR6lP9r6KvDKDjpTZnFuIkiPxXiYF3i0sKxkjN7QCDEgwS5SENHz6xr0fX1jtN74hiVsCKNQlEtznhF/w7Cy5h3q15PMd3NLHSDscEg8jegLBxlubd8PW445p7R2aOH6hAneysk/iRZuY6EN9cXDL1pSjJ2u6mJRgkiiOxc45FLMco9zSq/az8CFFs3+pTRmXljtEZk4noYKnNmct06PmzS6etkBrfjgclGCSKw3GhyAa1kQ4fkzTyjFsPpnT6lohSZEkmAha9DeoDHfnjkGAQ2dMOjHP1ejQJ6G3/igi4Gzz62Yqii4DCgeBA3BihjMEbNMX7vp3uEPSYGwq58S85wglDBUO/rqO+JpJoyhFjbxiVk5k72Y3y2kSTNtJFhLebia4lgmPIh7jMIJ4crkOYe8wZQjEPWq/szr4jh5wkGMQFV9v5PdLSUjDl33djws2PoKamznRVnXHd7NKC6S62jHqoETKSpN1PgOt4MMEoxMgP+jJyMnMXBfM8mgEkXhLw+yCydyx24KjeBIM4XMGAX+A2ZoyJzHfYM/nyq4bjiqtH4j+vzMbrr861XFXI5axT2ez5U96N+vY7TBTWJyJ1BgExebOZMR06LyWVppptyQGPuWHy1rTp1tYuXllUUhiWK9JS2Md33QSD2NAz8BVe7nTR+vXfHw8/dhvSM1JRXVWLvFsewfZtlhEoxo7i8hWXFlwX3+MEAqbZRWbh59HsxcxMVnJUmMfcytrVkUP/Ewxic2tkfR1PTrsT/Qcc2LTSuh824rbx/3C8j/G+OFEZEByhNB9g5TEPvLgTwTSUCeWk8+SOHHaSYBCbC2KX6xCcdm7mqci//aqIVf71+KtYWPqZw/WLb8RrTlbuDIBswzxYUTYhJeVXHN5vF37clIqqqm7U4DtMnk9EaAlVaop63G/JY26Ff4JB7BjEKpU0bE74C/LVyrX4850Fjncuni+IXW6GIdIpyia+5IKNPOSU0yIA+37D58rLb+m0s+JUR6ADHnMiPLI3pBUnGMThRuRk5a5wCtzbt1d3TJl2V5MOcsM1k1BdXev0esRVcbUzP3OXTov1P992DNJTu9gBRSu/WUHP/6cn6foBUowCbCCdr+vIIpQTngkGcaIQhOKbN5aIh1qlloolglYsJ9FKyO7QURbvMHirPA5O8qzR/+/uXk7MEUoGmvqSj75Z45G9HL+VEj9mV0GWBhLX6Lc/xE6MSU9PxcTbr8RDDzxnTYgWzJOwTHQi2q1dkPkDMs92F3a/aQuUf78M2lUhdbDCd+Jt9JzTkcNKEgwiddT2g2QtW5GrxFchD1/f0cOfnrpCu+XaXuh70H5uyEALF0OZVQI0+pynMZcVlRae4zyw44xody+IYccnxV8EgVHuUz3vtjdrSXZm7gbpyFY/InHVN8yul59u6nKnq6cf1u99vuHKE5Ce2tlpbDOxa/pbP9LnK7sRYD+vjUJq3ODiZmy7YRDD+wvlRVNvdVixADcItsRYp1TbiD1bULQK3cspwzE4loEKPWfYKgw/Z7Ar+lTXVihTnv2KNm0dYjuvlfB1BXuUg9sFg8h7f3mSp8HzZHuQc6VfEUarlf9xnS4rxK4/XJOG/n1c+EEAw9r17Kv9LV+T35Co1eYM4tb7a1WjKcoPRNTTZHWR1gxQDCIjC1vTi3LwgRv1Gy47EN1dVAndtmO18uATB1oxic7aCR01xL2ZaBn1DYnTREfl0mqfNha7ZHLSg8F8cSKVq2WcAwgjl9MHnwy+/ELpfcRLojz7qnkQ4m9EF2nTF0RWsbQ7sbbMWnN0IraDS+I6XTY1BfqFI8BnnCzFKMpdD62k6prICiitKFpKARrloDZlEMs8A4EM4WcwDpLCi1HOpE9s7WIBTqm3rSFmiJYLTaIS8VBdV1aoxEYdXbVRXRnU14TYxYyJRGTrTW9aa79e9frEGxuQntbJ9gzmLlqsFs03VfaLSgra9H5J3R2HQW2GgJ0liBXapD98bydatPgLmrvoJEfTYtOptm6xALsXsCXEK3/4feNoAo3xF5Z2zvcQOpsoQA1GmU9VvlB1vt20lrDJRTGsXecOXoOLRp5idY/oy29WKs+8alpDK8EgUbKok2KuXzJqMZ91uv+rVF27k6a/8bHyzfc5stu1ptiVk5Vn5NWF/+KZZpqddeu1gimcInVl6GNkCwIfgYyK7PavQ2BBTk76Xr/uMsIxhw8I3yPBIDJUdznGNrAuPW2l/ui9kV+kbb+uUh59qp7q606S2q6VxC5rc2/snnPBGIAySealkKJJ6KBA9QXZvHIxlfsc+Jl+69gjQp2MCQZxTXn7CU6Kue+vf1xH+/bob7GKriz6uITeKT66uX7CRs1LBMpfNpvbwjWarGKgYgllNwotKPRiizBG5FMHJukiJYLMFXzW6Sv5klFniaWUp1+eR199d37Esr+B5jkCp1bXQcwUc2Y2qmPw8Uct0G+68jxHngwVuwRvBA7YWMfAKhKtlhK7zHSpaHtjxFJowZFmjgNElRLyEcHjOBSAnpT0HcZeUqc8+1o3MPcx4bvfRI3eVmUQc8XcX2SJAR9fe0kjn3J8qswBGWOE2PXQlB6kac0C8AyxwYz9W0jsChUZBXMohLFu26+ZNa6RpoM3CZyRAe7RbROVVx5AVZVAnVM+iqniVM3QXwXoMllrlxWMHbGyvRkurcYgsgUQ+OjDof8uG+jZw/F+8I5d8Nz/uPm4oOpshmELiF1GYTZvQ99ovMfyoTZ+VPmAgzZoJ51Cep+DO1NaemcFpJpJTnpDfQ1t21KhrlyuKl9/1cuRoMbiwmRODwE8RNbaZSZeeRs9fdtDSJAUzjaDWo1B3IQ/sMcDHjYEnDUUSPJagq9Mfg70vUWBdb/2aUuflhK73ByKLHNwalqldl5mFR95TE+FFFsxqEElaF4PdAJ08ZYSoFZW+pKXfOzxLP0MSkODI4giREZh3sCE6e4ilw0u6/ClVoMEahUGMQ3LkLnAXbtAv+wC4JgjIg6UVq6G8uxrpgfNYI2YVCkNq4XELscbaGQqGtXTHUv0NP7uss1K/0P3d1qzLklBfZLXYAyrn1Jejk6vvwbv5l+clgMCUblunIxCxPytvB5mUroz0aIYYaqYu7AQ8DGHQ79wJNBrH//uNbVQHp0K2mFee0q76mKmhsYy5e33DpH3xreuk1FG5+D9D1jvu+zq/RWPN9mO7BoBNalJ8Kny37uUJR8jfd48kE+zXtrIx1FPEPk44iOn6tpkO7FLMAdDHxqNmBnFtWqVKfIUjRIcEQvEoBkW04UmKaWUh4pdNP8DKLMXmr8eh/SDPvFG/9+icTIypnsb1fyWlp+dSvRop5/5C5919n6mLc5CMNcB7E5PMpqhuf15tm1F5xkzv1U2/hz5RAcWC++SZaQdE00Kr6IoHKOa4pnU3pLb3NIkfLx7qrrY0Ukx1y8f8xl36XSq8sZ7oHK53Ge9SwaUiipLKLS7bwUODJNGtv26Sn3s342orZXLy2aUAzypqLTwSRfoSg91+GjAd/Gl22nAYT1lFqxM9cLnUWSGmo7xeNCQMaf4K88Hn9g4YM11CoNZACSqmkRJflvFvFPG19rD9xxtLN3QCCopA83/CORzyH22Kb2vDx0E/p15RIpwlygffFpG/511KOm8pwyiv6+eqboSXsQ5SjI0m+YUZuMbPmo9HTdQqn10nVdFbYqU28IW9LQ08nnf+u9S76fLB1kN7Iit5OJxXi32gjjlS2h33LwVBx/U3PS4fQeU/xaDvv7OHDcbxZ5TUqA/eDuQZi+xUU1tJb3y9sf48tvTDVt/wNEoiuVaOhnjKHbZVWvUjjzqF4y6WKqoglDEd6cnG07SWH+KSujciVkteOFnWrMuwukn1o9nbFms8Lbm/DiQ1xxcu4vARwz4VM+9PrLCX3CpVd/CTOwKetzNdtTOPB24dJQ87YST8V/P7qLKyjND3w87J2OsYpdd2SD2eqHddqdGihLh0zBDqjrFgwav1FApmmRkEFRinyf/L9XEbBoSvze+Ii3IIHnrTWOJiCr1R/+czGlpSbYnFyF22chWgT/xYf2h/34UsN++UpeCd+xiz/2Pm8alGIKXWchKWO8MqY0Cg7Izc5dbtVBouHbcL2qvXlKvh08hVKbbk88NXGJsSgqQmkrQl636zvvC64ebzd8bX5EWYxCrMHD9mMPn8s3XDJc+wO07QP+ZCWXNOuvIsRDRi0kBhg6CPirT1sko9o/F0SjaF7ixdtklV+kHHrhBv/L6g4mdBSbxLahM80JTo1fMzWjvTSJkpAvXB1i95++blarqyPKjv4GGpNL3LjCwxRjEruoHd0r/QM8f1x377nOMDMD0zKtQvvzGdKhRa9xExeZunaFflAOc4LcDhP9sHY2GPiIR4ipp7XJSzBvy76pVvUlS5u46r4LaFOvoAhl62jGI+Jv289a1SY9OOdRsXFsUoYgWp3jMazkGycqdblfL1oj5Of6IJfq4q84AyLoY2Zp1UKc8b84cEhfZVOxycDTqJx+/ipZ92TXc2mVFcCdrl50+5jtz6I806Eyp9sqGzyMjCewQQhPNxQi+IGIu69DVCfdWEhChi1j1BYlmz44wp8UYxKkcfxNxFOVn7ZrfreaTj88y+2Yrf30MtNNIsY74SUSrGHOaxK7s84CUZNDsBRKORt6tPP3KJ03WLonTNCvibKuYJyXt1m67M4NIyIXOv+oULxq8UkOdFwsbkZJKSA1p8Ky/M2eld+FHZsUYyotKC1zUB3INSrua0GIMIrB0U9LHTOyyvcgH9Db0DMMs/OtOKaJypwxomWfB885sy/ERjsbtO9YqTzyzhSqrzpTZJLy1mq1ifsW1W9UD+0hF2RqKeZrXMQBTBkazMekZ1Cwu1LercnvyXx4xdVa2RjGKaPGI97wWZRC3TCLELhxz+Ie+m685Azt39VAfmQqqNc9r0CbcABzWH/D5YBRYnrsQaJApsGwdBGblaDRcJZ+vLFFefvtoKbErEORnV5hC3++Abfo1N/SUUcwFHXe3gGIevExCYuvSpXlLZ6Gse/PuNb0fe5Me0uIMYjCJCElQMNmpEU0T9xP9pO+7T4qydbupvVY/7QTw1b9r/rHYVe73nVg5Gf3CliV3yDka5cQuIad7G9SxPq+23qqZphvFvN6roiYOHnOrr2tqqjDzRl4F5S8Pf0u7qkzitH474exOL06rMEgQCGHqBPEkx2y1WDzmwsloJnaFpOaaEUW78iJgkFw9CAixa/Kz26ii0rz4s9+69RKIbjPbq3HImRuUM4ZKtWgWLF0RZTCi0+GLvysK0Llz89ej6WV59rW1ysrVEdasvckf0qoMIgjvD2D0TbazcNl5zPWLssHnnmF/9qZil72jkfv3gX7FhdJORgEAPfPqfOXLb4bJXMTgGHarmCd70JAUP495OKwZGYDXa34N9I+WLve+MTMywPM3UjVR5txanUGCQNmKXVbxHumpldqj96WLD58McthVAUUo5MtX2eZONRWNCDoZA9Yuuz2opk6je/6+hTTNxKHGdSAKsQntWanxymt/UQ7oI+8xb0HF3OsFRIiJ1U//ZNlK72v/a/dlRUcOmzCaFB5KzAMZ6BqMVjCK5omsSNAGZpo5e/6Ud6XuTcigmBkkcNFv8xc145k66w+4SZixE7sEnwi9oamPvfB7pKV+7rvjlhRZJ6MhRvy9ALR5izltTMQ5Ye0S9WlxyvGWViN66a0lytKVp7shuLbvvtv4upvbhWIu4BaKuWKTR6K//+lS79vvRVZVbAcvSFMFGMZYKz3P7GyElVFT1Qdk81ZiYpBABfHlzQCMIhzBVuwKMIm/tE8IuEcfPku75veDkZ7a3fZLb5ea6+Bo5H7mYhdv3/GL54EnzF8BG0muIf+uatWbJF5Ax1+9R0VNauyh7FYbpaQCqSaKeeh4Ll70uWfO/Mgq1m3MIDlZufeDaaIbxging2yoUEwMYp3vEZ2VwypbzfI2Ef3EF41crZ9zRpaV2BWrozHcyWi8SPc+spoqKo+KgMvGuNA46Mz1yplDpfI8Wl4xJ+P1cPrR9P+uUz5fHlnEr42q1sukKTvh1OwDAGxg1i60k3hiY5DMvLLw1Eu/UMQvFZcUjnUDbOhYo+0yeLKjtSswiVJTTMUuW0fj/r0BXQNt2S4FZlDsIp9vlfKfGVIxZMGFo1XMlV27oJaXw9e7N1jYYuP0s1PMQ7egu/++UamqbpZc5v97dB/AWMA3WvSROiPu1SYZ5UR8nVUds5gYxNJLHIcn2B/g55tkZSo1JXaI2CVqZtk6GkVq7v69QfM/lHcy+j0p9QSYFFGwlq0aL79ms3LQwY5VSWjtt+C1a0Hffwulri4Cxcbe+6GxXz/UnzAQ2n6Oy5mSyOMFOtko5sFJeqPe4M3/i2lMfSxlVaNhEqfU7WjWbDaHUa5DO8fsJYmaQfz98DTzsiIiTzlOvSECpXEmm71UpoQJiF28Zt1w5SvzCOAIj3nA2kXLV0nT2kbVaLaGjGJOSz8FffwBqD6SKawAEoxSM/QcNPa3KmNsPtNJMQ/O0jZu3ZT0yJRICx2A1k6csgvXacKSefe+qvZxH6UeQ7xVIvkrY3ljetV3WnLVZt1zGkOx7zVjoTtHzSBOhQeCNZWkb5zDQFdiV7SOxu9+gPL2LHmxK+CZJ1vF/M5q1Ztsrpj/tAHKnFmgCvNgTBna1R95JKouvEhKBAsPSLRbX3+3dJW3tCxClGyJvid2cDgVHBSlhkYnVZRdnbbD3zrc4je3vsvCF+q6H2rLKCbNR6NmELsQbr+Yyk8WlRZOlDlk2TGyYldMjkZddy12WcGvDRq8Dmeea/6J/2ol1DnvyaJuO07r2g27r7jcVuwyi7eyWlT36T5P/l895LezN/+5PNcRI/I6a5rWxQtPF531LirDNpmFiFhnbdvO6uQNXbpwL4+mNbeShkCTTPqapzr9WN+J9GPlCMkbxlce/N123RtRjb5pflgL66gZJCczb5edmU04aYpLCqSsNnLI7RllJ3YF2l6YZh+yiAC+J09uuyjFLrG4ICqr3t3aH+9OJ0KkGzyOzBFERk9JRcX111kySXi0rh0ReMHidZ4Zs00ZW0b/GDl0fG/Fqz7D4EyycJjKHAIDDQSY6kGp0L99uct6y3peduvfVnnQos160jlmY8LrgEXFIHZRqqGbtnRYtJ3YFeFkFIAleb7z3ZVXRb32kQy6Aui7Hxqo4AXxAZZL4wuIdw2XX71JPahvpAz/0waob7wicz9cjxEvSfn48RHilscDdOokd9Sss+7Jv383NK1r5OPBPxaXFjrGkDk2N3WNWfgjxvhbxmYc4ZHX2UJXYEb55RX9v9aITGPpQu+tHNXCELJtvhkyNlZzrwwdbcWugJNRFF8ITc3lIwbM0K+7bDDS0xyrO9Bzr72vrFh9drA8kAzBuEtXaONymZpCAAKY1NVBebrAVhnn5BR0H3QSDj3uUBx1YE/0PeQgrPj2R6xZuxEbVq9FzafLbMkidJLKK65sNkYEI6qSZUn5g89We956N9LH4880zC+eXzDZDoCc8/OOB2OFzNlFO+YUTzXuTLeIjJBc9JvGlM//WnOAeSvfEDFS5rybbelU76rZ4Ci86pL4RQyzFbtMPOZGp6SR53zBI4eJ6oCmsV28bcc6zwNPdHfrsdUuvQo4OFK6pNnvQln1pSWKqWeegdtuGo0eXax9Hks3bMdbjzwL/GJ9QSquu77JupWcQk6lwprg0Wobar13PJBqdilki1KPzLr1LAXK+9GeY3CeVa0BBYw3u6yLdXlj/i27+3z2K3tPjXgpQ9QD1wziqJxHgN66TiVX1i6hL6SmfK7dco2X+x8cEZSn3PePT6i8IrLaoJ2V7PAjoY8Oy1URX9+KcnieLrA82EPHXopxF5pHz4dP2lFRiyf+8RIaVq02XU/4SypuvdWoWhSeCGUFgMgGUKc8/zWtWWfhBJU7xwsGX99JT0/fHesNtjK09KIGFHb+Odbljfmv1PR4973GrqbWr6CbwhWDuHo99nwKyj2Nar+WLgYdSjFZa1foHK1fn3m4+eoTgmIXLV+1WHn+dfsbG5ZjIgps6+NygYzI5rG0+H0oiz8wPdh9Rg7DXX+4wNWhCyb5+13/gmLxkuz845+QelB3u/YqzfbzbdzyS/IjBabxZW5Nu9mZuQKZN2NR0K2IcY53N8anyUU/OBF0o+79NL+yj2kBw6CvxxWD2FUk79d/f6xft9kCJrmvjxNCbv/u1skYFLv0keedpE74ayXpulmYRfOsRINJ/E1E+exzwacPMQVTmf40aNu2iL/pXbviwRceRHoUKR+Lln6H2X+barpf/RmD4LlCrnO2rjN77n5oN9XUmkZoyViuwoEYlZXbj3UcrIHqPAqXaw16+eyyaRFy4aBB+alpaQ1pqsppSqM3jVQ9DcRpKtFHZohdl7xNG5lSGQW1IlcTyvoluwdEGCOMkQFzrzSD2DkGe+7bDQVP3Y3rr74fNTXmloWWtmjZMY+AXWeI2C6p8jog+smsMaXdHty9+w7thlu6E5nEj9fVQZ3ymOn0rDtvRObg49zyftP4e+/9t6mopQ/oB84PtIFwWF3/cOm33jdnmptM4xA2FA1yVoUH70rbvPJkb21kjko0mwD4fUVE63f/Sm4YxKkT0m1/uhLDsk7Df16ZjddfnWsKqrAvexs957SmqBUhdiX5JgJ0f5S0tEtpR+OEP1UqKWmRspXYzMa0O/HFSTigu23Evi24z8xYjLXT34wYI4Ib9cfuc0RVr2+o9/zpgWSrL2Vrh5UEAbZikNtSt84bklRl7ehzxHjPgPVa0s47qw4yJ74Mg/iDxBpH2zWzF6LVlKfuNnatrqq1fUUEk2iq50LZZBUXuEoPDeSwTJeO7QqubKOYayee8hOGDTetim5Mt2AQz369kP/wOPTo0gOqSA6P4le29DsUW4hZWuFDjivStJe+UVavOdJ8YNuIxgIWq8qcZ3oqZ05I3zbGETGJAa/VdsfMBvMSX7ZKuj8Q0feiP0vQ/vfktDvRf8AeUf3dd8rw3NPv2E4SXnYFnO+2VbITLG7+7lrsslicVRW+P96jKRTZaTY4xUpB73PO6bj02kykp6QhPVUqjyoCilgYxLdlx+bkvz1hGhYsFHNvo2dgW734ORapFBnwrXyxy49xEbHuqDwAG/TIzGhh0i4uLTR0E9OXVdaUe/lVw3HF1SMjDu2e26dg1VffO9/XsLgX5wnxHRH4EEiIXdbRiA2XXPWT2ref9eshiLz0UyiLSiKAzxhwMG75yzVGSrF4RZQoSop+sXo93rjnX6aEsXtBDMX8vkc20e4qE0OE0bn+wrb8gNkV+56c8fM3B6gNFq+e3B3ZrqsYv7uveUhSSD6TKYM4xVkJEM7NPBX5t19lCo0QtfJueQTbt1lGwxvzWsPTLkMuuwaVDN5OIPMKg917bNFvGt+LAr13LPey0UHueOmvIrATHtWD7p3dVfRs9DVi5dqf8Obd5p3i7BhE+2zF10kvv21e2buNFPNQ+tm5FNKhf/5il3WHEkgiL9L8VG6rPBCbdfPeqKGF8cxfkMzcDU4Wn379D8DDj01Aekak11cwyITxj2LbVvuSoO2FQYIkNBjFp40hhY3nVQGt1YC/WWWx2SrmIedi5yQc+8989OyRYYxOTkpCp7TOUi9JXUMddldXomzRl1j6UmSxDrvATK3RV+fNv98yI72tFPPwq2zXISAWXeR/td3wRoO5bh4eMWD+gmTlTpKx9px+xrG49/6bIlh0wi2PYv26TY4f77Z+xp0AtMtF0E44+SdkjrAVrYLrGwLa0wVQTfI++p17On53TWYTKIqiICM1HSlJplWDoOk6qmorUd/QAB2Ef4590BQNu36N7VUxD0fEqQD6Bd7yd53yQMLXnFXXZdfLdft0s64D1RZNY1gAACAASURBVNwwYekHEYWnGRjrlBd+7/034vQz9tjx7Uy9zYFtOwuJE2OIv9s98TKKeegetckeqKVzkbrkE9Otr3x0Avbv1VxaEHpJktcLj+oPItY0DT7NZ/wT/L074xOseXe+OYPcdCX4+MiYQ23rzl+S/u+flh7ztlTMzRCxUtaDY/cl39xH0zcenaFqthmDDK6YVHXgnNVaymVW58+Mrd5G9YhQw4Sjo9B/UXwzrerq7turO6ZMu8sQtbZu3Ykbr5lkef9EzVoFPL0tlT8Z5hBj7CKWGy+54kel7wApp6NotilKh6pbfkG3adNMt/d274pbHs1FskWFQ7NJX67+GfP+Md10Pe7eFfqDd0T8jZlZvddaMQf4U4D8oRfMZQBmeho9L7WVJUuAYRRrgFJm+6FmrjjGU7fi4uQdfIynvh8I/rNh/PiNlvzr+w2dfl3Y2OVIBhxefH6jqKTw8lDCOTKIGByw9pRZMUnQmvXnO6bgqy+trFe80tPgGdqWxJZlDruoAb1rty36uNxeEv2njO2qUr1oDPQx7/L88/BuWG/JJBfdeS369LbuJeSfSChdsBIrXrEuEqhddTFw+okR++ifrVztffmtiGfFLgPTaHRE+sTikqkvydIv3uMc07vDNzQqlWC3M0OETmQw06PFpQV+p17gJ8UgQU5WSF1uhnx6eiom3n4lHnrgOfMvGnOFt9HTtyMwh1MFjYbc/N1qWobTLTbo0KgSqkJ6lYoyPl2nToViU5yhz7mn47zRQ9CjS5owtTbR06cDG37ajtJX5qDqhx8t76CVci6qlHj++Nek8DRaW+Zodn+4TIee76ZqZjwZxc7sG+s+IaH1jxWVFNwZFYOISXZKq2CS6mrzXh4yiTaxIhmv+XY46kcft56zR0ulEYurvTs9CXpYaFbKxx8jY451A59QPDIO6I3uh/fFTwuXSKEnWjho9+SCepiYi595dY365TeHNV9ItjbLnlmii5a3QX2gLT52spmsUsQKDgqJkNCZ/zG7tPCuqBkkUNlOmICl7c9uQ6VdIRfnwRKKuU8hkqoHWpukoi7ZfGjGO/9DynLTxzgmjHQLxdy3bdfW5Acfl+pkJQVAG4pdAZ1kppMbwgkP05eTeWJRaWEzp5K0iBXc0KkMSzhg7d2UGwqvnWLe8LvLN6j9D3HMxxbrBRVzsz7rwf3iySRG859xV/o7boX9rBVz96+HydoriJFfNL9QKPSt+pPuNWMKlTnupGmnzlowbWnUL4iY6CZpqiO9HvaKeddf9HF5veUVcw8aPc4pC8nLliF99mxbncTp1hkWK8EcB5pXWuSyJZs8/51lWgDObG0GdvOJxyxXlq0622nvECnFVc942XWdxgmJpsGrjSHCGDAPtZNshAUVOspYQQ8FiAhzZua64tLCCK+36xdEAJ2dlTeTANtCXcaXlHHd7NICc1ukE/at+PcmxZzR18yB1Jibv0tJy5CKAwlXzJ3QEIp72qKFrkUu8WqIRkI88jzrLbZsh/LQkzCtb2UxS8sZthjDzxlsVLB/4pmdqKwyD0eJeE6MrlqTwkUUJ/zj+XcjLYOVrqSgq8bUVWHeINYPfeGys/J+JiAy/sykaJyYGxWDyJjdZJP840mgaNcKFRuDtdKCcYP6Ucet45zRUvU9rRRzGbgEo6R+/DGSvv3GKFht9dOPPdLvADzuSDhVY1CeeBq07idjqT09iWxEq5SUZdrjf2lmH6YlX3xFr8/sTpou9Qo59YyXoUVLjcnOzLuLCI9YvJw3FJcUvBD+t6gYRCxildDS9OzGWOG9pYgUvq6lyChSaBWC7/Z746KYu8HHqOq+yx/oqW7ZAq13b+P/e48ZgGTz+LqI5WnpCigvvR3x34VyKnQjs4P3/fGmr6l/X7MXo55eeP1TWrZqIAFSJm7Z/htu6BLLWKOYXZK6BkBEUhsDO4tLCnqYrR81gziJWR1FOTcUc2ColULNffpCPz8b6Gaf9SejmMdywKoqmm1KHldDA5RJ/wTtrrLcMuIdGXDwQi1/3Ll2MAqxSyl4YaOyszyk65TfVyMCmiOg8zczbVOxK4hPdmbuXCKyykSM8H8E50lSPJJsdo6b0ISTWC5FS8+VERWNw1dV8KmDwIOGAKJ/gMmvKlVOMY8Wp06dAI9H7rhoxlxdWfChY4piUOxiQqX+6H0NSE81/YpGiB0rv15Oz7/RC7q+fxNENjVf21rsys7KvYFA5l5sh2r1chQ3OVW7SEthMSguKXDMRoz2ssRj3h6POZtnzZhswp06g4edDz60eX0Dt4q5W/iTkgnpaXKzDI95/l+TAN3IoQ8v7mi2Cns9DfrlFybh1IFym/h1Gp9650M1VFvTTOTy84lfjAv/tYXYlX3eLf2heL4kgmnKJoMfKi4ptEzej5pBBPLWekj7jtT1wx4e0i/vF+ABh0I/N8sQu2JRzGVuo7hnonSoXbPNZuuYesxldgL4sP7Qfz9KrhX2mnVQpzxvurDhhBMCl2mJxtYTu84/P7+7h32fEWBauoSZv0nruvXYt99+W7OiUIswSHsPLfEXltPWh5YU9ZfxDemo63CngmKXaGJTlyapOcvd02aj0tJIWjH3bSv/NfnBx/YJXSBEjJIyWZr1ZDQDO+bej8wt6mQcNWpcGtclfwRCZJ93P0K6T1NOmLvgSetasNGaeYMEs4zVb+Ncc6d7aJsINWjwFmXNd71px69Oyxh/17p1Q1V2NhoPj6oSv+0eQjEXuoeUmCRUpb88tpl2lYeZYwMvY0iBO6n1bFph2/Z+TPbWoL7R19bWrpzMvHkgiOauVq/c/xWXFv7V6ZBjekFMldx2kM/shLRVzj2npFZqE27vRKKJzqcfQ/nkQ8C3J0HJbt2Gww5HVfZI6N2l9FwnEI2/u1HMtWWr1ya98NqhUgu7GBTeCtux9+OEG4BuXbcr0178mbbvjIy5N9s7jtauESPykhUNRQQMs2GOecWlhcNlyBATg4gNDCZhmshg4YUu8zZ4JsYS6Sns1eRVxwnjAmp9TxV/9JR95QcZLEPG2EWENlx86Xp1wGF7onUrK0ALSqGsMe91GL41qx7UDBmC2nOGAqpUTKMl9ElJQHq63PHojZrP+8dJVWDdvIxm2C5C7OK+B22grdv6Ul29IwVDxS56+W0oX1r0fjztBPDVewp3U8DaRbou1XFUlIMina+LNrYroHPMISCiYvseJPnbqgb9lLKyadY28BCKyJ2AIwljH+CPFNbuIGJRhsdvs2FsZdbOKZ4/Te6GSoBh5b9hUiu0O/4s2sxEmkd/XA9l/lzIi13djdckWrHLtWL+6jur1CVfhFVltzE6JHnWak880B+7K1V6dx7oU9HlzPnHqSmgWvPSskbA5IO3R3j3DWvXS28uxedfHi0rdgE806d48t0UGBwxNO9ANQki//hwG0wqG0k7cd68aRI1qfyryNDFmXIxjDC4XvfdScR5TYwRsh4zSz+HMmBYWd5852Wto5NOsw4pEWLXss9BH5WBGpy/ugIWQ+y64ALoogeBi19aGpBsWQy0+UK+XZW/Jv/lkWaKeeDjYnm62rirvsNxR+65SOt+hPLWLNDGX2yhjKn34/adFmKXRScQIXYRTy4qKXzAiXSjzht/iq4q7xHIH3Jg8dPA580pKVzotF7o39uUQbIz80RRqHvsyuSL6NLikgJ3N8yCAna+m4aJd1arSRbdaEPW06uroC1ehOQVK6S+Luz1oOacc1F7xhlSYlc8FHOr5jMCDX3/3ov5z3kRbR1YZyiffA7jRakxS3yzfpHc9H4UYpfy4ptp8GmHN61o52R0ELtGZk64WiF+2f7Scw0xjZxVWuC6sU+bMEhOZl4Wg58iIucgQMbaotKCsEw4N9+APWOtrFdMBO3OvzAxO9KjKsWLRq8Cz08/IWPmDHi2y/Wq0Lp1R9WY0Wjsb1FNPACmG8VcX/HtD97nXrFfMPQ1Bnbrj97XaOsxr64BvTO7mdhl1xhVLK9lnQ2MyjR1DpqdlCF2vfXeR/hgyZkUUrLVzsloJnblZOb9E4Q/2t0GEWdFPj2zaOFU+951Fos4XojorqL5rJxhE/qwwlNkQuWDK+hM18wunRKXrpdW+ofvsKO+pzEXH+KEq08hVKaHNF3VdaQu+RSpC+dDqZcTu+qPOQbVw0eYil3eJCCjhRRz4/U48/QP+NJRZznhafw9ROyyqdvd1PvRsHZdMgo4SEofB61cDeXZ10xBsdwvIHZxjTaFUj1vg2AT628EEvyigM+dVVL4rRTOJoNajUFysnLvB8i6JlA4cMzbdMb42fML/xctcuHzrPw2vosvW0cDDnV8zUSOuWbS/kOprERa6TwkL3cpdg0eIlzkTWAKVUXaY/7qO1+rS76Qy9UI7MAnHbdYv3T0YKSZF6WLOAIhds2cA2XhYouLHOYxJ4I++BSweE3sYmNqaqE8OhW0w9xAaceQ/k5F0GBTLFwAK7zkrPGI2QunWle4kLhYLc4goh0XAZNBJFvsYDcBj+2o9Pzzk0/+ZV4FQgIxsyHZWXnrzcqINlw5dpt6wEG2HW/rvCpqU+xNt4bYVTQLnl/sld0gbL6ePVGdk2OIXalpQIqkYq6VV+1Iuu9hc4cLYzfIOiSdVXUTXz56J59+0rEyZIzGY85pqeDR54PPONlU7LJ1NDJroWJXE4xGok6gW7FTkW/G+0pN9aj3Fr9QKYOj3ZgWY5ARI/J6Kj68SIRsGSCZuVEU6KzT9UkLFkzdITPH7RgrC1bDuFu3qV27WzKIq1B2nZH8xedILy2BUivH3w3HHgPlsmxQF+dUCyNNZdLjW5Rfd5lWRxRZnIrfVG7fIqBzxte+/HHdqWcP03UEbe0usm03oeCLZSJ2CUej5/7HLY9Oy7t+p/JO8WratNW8l53ToTO/WFS6z43AJN1pqMzfW4RBcoblXgeiJ2TbJzPzG7pG981ZWPCDDNDRjrFikPq8/F89qRmRptLARtUpHjR4nXPMQ+Gimhqkz50tL3alJIOzh4HPPr2Z2BWOq7by2/VJz75i/hoHohicatqGrsknD/xEv2TUKUhr/jw6ecw5OQlU3+B8FGFilzL5OdD35sXzmtUT/vKbr9Xpb3q5vvEwpwejCQiN/ly0YMrDzkDJj4grg4waOm4fTkp6GaARMiAw8KGiaX8KryQhMzeaMZYvyITbd6gp5rkQsYayuxW7uHdP6FdcCPSPrGxqeMzveKAKPs3UYx7aB9JNoTUzsYueedXeY37RSNCsUiiLl/rzeR1+hth10rFQPvzMdGS4o1GkCtN/ZjBt2eZ8R4P2YuYni0oLJzrB4ubvzptLrpZ9Xt4wUvAqCM71lxhrifjO1q7Ra1VOv+Hq6zeq+x0Qkcgv6F6Z5oWmOuYe2VPJpdgl9uXTTgSPzgI6h2SImnrMg/JM5OUIdNGaLl3HLCh27arYzzKUPdxj/vNmv5NxvT/33e5n52hsKpdaV28YBuijZtV3bJZt7p+Jd7PYuDBITlbuwwA1q2lqhhGDt0CnB4vnFzzlRMyW+LulFStr5Hc08KSIEIV6j4qa1NhiqsLFrrT585Hy+VKpSiMcELv0swdB3129K+m+h00rq9gVyIimZzx71HryaaYx/PpF2UY1lWY/kSbwsZ2TUYy2cTQe0g/6xBtBy76C8uZ7QHWN4/Fb59bHNxcpJgYZcW7eAFXF6yCE5Chb4Mb8ZAOl3FtS8ni1I/ZhAwIV5q8VhZR9quddNzE6oUu58YOI4xRV2UXhhnj/1M2bkVE8C96ffpZamg/cn1FZuYMqKk31JJnySvI942PwmAsno4nY5ehoHHsJlPeXSL1CBqt1Sq9AZZVKIH/nodBfnKPJoz79kcNyL1aIXgEhssVUc4C3so6rihcUmDeycLgiESH1wlnEfGE0EZ9WnnQ9NWUj593RTMSq8yqoTTHPP5e61Q6DOmUwvJ9+AXrPKrQj/CMdUhYh9NRcXggRzUxg0TPeNHzHVgwSoewm1RsjUA0Tu2wdjS6S1JDkgX7BcPDQQZqSP+kHamyMjLBwSQ+ns4yKQXKG5d0EBc84LQ7w/zwNnhtjCX83y90QYdHFJQVSfpVQGG1jsW7Nr1DTM5ouTUsWYfAmETKCGdIWX10r2u7RR/0uhmhkbluxy59aGeG/0Dun/4r7JnbmtJBy9XYXICh2ibAVM2uXfIazsQsf2g/6Nb8HunUB3i76RH3/k0Hm27exiDUyK/duBWRvSmOu0qGMjzVExK7MqadB7RYN41lG85597ho6bXDTF6kiI9mosdsSP1OPuQtlNwhTrD0e7cSuULGoKcdcod36mOGb+Lwh0h1mlfv+ASqv2ENGI7PRRRh5chL0i0aCBwek+OraHcpdfxP1XUxfwHj3V3R1BXIyb/0jSPmn/YeDV0DXLi5e8NS6WC+XrT0/yrRey3wQj7dC+9M9nYMBi7sykqSD79zgmZJKSLWK9BCyyNKVUGbMAVXa1LTyf+Xj1nPFXuwyGss0L1LSOeNr7Q9X7YODD7K1WDZ3NIoYY8EY8ldOP/hAYNyV4BAHKv29YLGyeUtENLL/3eOXiksKx7o5D6ex0tBmZ916LUGxrbMryv3srPRcHq8QEdvSQjryi+cXTHZCMPzvthmFV93ws7r//kavu/JOKUYgXjx/IuxKVChxzAmvqxdebKYFiyOGBuX5eBfGkO8Zv4ci+lGHfYqxvz/BTOxqcjTW1PoDGqW9fXvsXX5z9wngi0b6Y7u+/OY79ZlXTROiWqrUrRSD5GTeeh5IsVWymfFgcWnB/fG8ULatFqJUxux6nLAnqULLv6sTERRhwQpvfhMrbhkZgFeyD6G+as2P3n+/ZNEHkVcWlRTKF7FyAbgh1mradBDkqrsT7dZHZ63nYWc1C21RHi0E/SwXkxYiMgbel+bXUjgZ9QuyWPnf7LWmirlfS3mgqKRQPhhWkiaODCJSGRUvr3JoonhLUWnhvyX3lB7mVN40aj0kM1cET95mBkjjkLO/Vc4464jqVC8aAr0FpQG2GegmlF2r9zUm3flgNTS/xzxY3FMI78aHOErx0g0eASejsHZJNSvlTulfaTde0UvZ+Mu+NHcRqFLemt+k4wgAHW9kJBYt2WbDEZzsrLzPCTjJirisY3xLOf6sqo8EYZGx/5vB7dQpqz7vT7/qGen7VEsabGQunmwou3FZnnhug7p+g2mznpaQs63glxa7mkxr7i84H3cE9P79oCz40FbvaoLRzGbcgh8MWwbJycoTJRn/z/ICMLfIyyH2MywsFk1Dm55k5hXFpYVWhcFs762d+Maqd3fjbX9Sq7qkp8dDzEpJBVJTHL9FBrz6/I/WemfOMS3f01JythODW4pdTSqaealRu3X5iEOgjx4OHBQIJhYhJsULgLJPQCwfiNvSZW4tTy0nc8KhIBbl4k1/Ovie2SWFpr0WnAgu83fZVm/RmvUCr8gKKxGCU9N21940Xqnp2TXSWyuDQGCMqpKhmMv8+LMvt3heftOy8EC0L6bM3jJjgmIXiA72d+CVY/rQtfmQfuBRw8ADLLrZ/bINyn9mWHjVm+8pPhia6hkYbWSFDM7WDJKV+1+ALjZfhGcWlRReKLNBtGOyM3OXE5GjIhqLyOEUFq7vs+/a6ksuTa3fr1dkRyJJxARzCCax/ZqKc//wsw2et9617IHY0l9KJ3QuGHx9Jz01/VomHk9E0n6Qptc+LZX16y8jHOGY2eyPDg4zd5t7+FtGMQ+lhenJjRiWd4KqwCLJnX+uatCPki285UR4s7+76YMo4rM8jWq/aJyGYu8cG4U9CFvNmWcvq8nKlKsSGJxEhIw0hvCa2/10n+7zPP3K9/TNGsvapW0lWgm4RwzLO10hvhHAlXbVZ6xw3OOYF07GSGuXLXHenLVM/WDJiUFJLtRS3JKKuSODZGfmiUxAc4cL69lFpVPlGn1Hwx0O/dgtXrSYTHyWNYZDNtP22Wd5+bg/HM6pIjnW/ieKKgqzvdPLoa3f9Iu34Ll0amiwFMIEczD0obNLp61w2jdefx82bFyXZCRfAcJ4IoQVpHOzi3AyivF7HI3C2qX/4apu6NvH/lWurq1S7vqbZuUxbw1Lnh/ysJ94SrX09O0ERIY7M5YUlRZYxMC4IZz9WKvccctZMb4iAWtNmVOaKnu9uxuPH/h1TfbwE7SklBRRSyr0J16L5CR29HVom7f/4nn5bVXZuMk2D16sHU2sVXQnMUnJydw+nKFcC8Jo0/N3WLgpPCX0ZlmoKty/70q++cojrWK76LGpS5UfN5tGibemuBnBIDlZuZcC9IYZLVjn4cXzC+dFdwBys+z0gp77dsP2bRalemPMJpNlEgOLpCRog09e6zvh+BTef79eapKSZFeNRGfWeFf1DmXpso3K/Pd7KrV1hrfe7ud/OWhiS3cJPv/88YeounITEV1HQE8nuEz/zvhJJ56sEZd4dWWqGycjZ531sz4qq1l1Fvp6zU/KUy/1Mb2DraCYh+4bwSDZWblTCTQ+HDgGtheXFDh+8aIicMgko2cg0VCzdZ57eRIm3PwIamrM68PG+rUNdJ2a7qZul/GVP6Tvr3zc0QpnpDdwWmodfD4fVVbvVr7f0BU//FCvlFe6UmpbWqzKHnJLN071XkzEN9kXenZgYmA+mAuKSwvfCx3p2smYkrJOv/7SFBx1mFFUS739we9RV2+hzbe8Ym7LIDlZeSsBHBfJIPxMcUnhH2JlALv5dsr5aYOOxX2TbsJ/XpmN11+da76MRa9rtzDLmpjdris1nvG+T1XHxtt0OWhQfmqP9MYLmegK2UozFvBWMvg51vjfsxdMtXQDBJ2MzJgom/LLfft8wb17KMqS5aa+rdZSzB1ekLw6M/mzNWzwdq/H3/+Rh2OP9/vPrr/6fmtRK04xOX5HpQjOdCifI3XrnQeJVwNMk6IJwLRafejQSZ7UpF8zFcYVBIwBmWTgOYMWGMErGTxtZ2XSK26CUcVHT9W1yW5fZVOwWtBjbkWGZiKWKA0KhU0r0ZGmndqS1UfsdI9jjj0EDz8+oQmHJR9/iYcesGxaingycyAUfJJsTJL0fQsZKHw5muKZFK9XI2fY+CEg9TImvoJApnnscnCySA7/L3T92aL50z6Sm2M+SpwvE0QBCanYrkgJpm0awzZjkOysCccQ+CszFBXmA94rLdwcC5Gs5u7pOAtTR1no6xFc42+TnsWnn5iCagyJJ5OI9UQZHRALcSGqA444cPFiEGbGizGMguCEMWC+gIjC2rC5PDXGAh14fleVZ6ab10JmFyG+uhG7xJqt4TGXekFGZuaerBCZ1ltpJE+PefP+tVOGCG7GBEI+Fll5zcNfj+Da1VW1hqhlpbD7CSu+WLxBZ/3dePkR/Fl4ylgGxrhlFkOMIipTwNNjLXk0dOj4jPQkygHTaOHPk5Xzrc6GGasI/IreqL88u2zaFjdn6HasW7Er3rkvbuBtLmKdn3c8GKYOqUZS9583b7K7AH8bSEZl5p3NxEMZNNasXm5wqrBc9erV3XQlJ1ErdFJLENlQRD2+gVBgWN0YNJAYe4q6EZeJ/07AikbFsyJWESrn3JsPgKqOYdAoIjrfzUGbjRXVzwG8ST79lWjbA8QCg4zYFUsoUSywBec2F7GG3NKN0jymrwSDBheXTPk4HpvaeupDNrj8quG44uqRtlvaWrXCZsZqBo4H7m7WEJanbmna2YrCmSAMY+ZjyU1qnslmDN5FTP/TiF+fU7JPWbxq2LrBK3ysqZ7HeB/Mk6KpXhMLLOFzIx2FmXm7zGrqMnhCcUlhQayb26W8hq4dNOvK7Pevx1/FwlLzkpah8+Otl8jA5nbMyKxbTyOdhhFhmJU/yO2aANcw4z0mfm12ydQi9/Nbb4YQv2J9aeMJrZknfbZZbd149QrMzsqdTqBrnZC48Q8XYfRFpv7CiKkPPfAslnxsrbA3TWgDM6ETnsIwAuhngek8As6VLfjttK74uwjJIJ3f2lHtnRFvZVtm/9/CmAgGsSvrw0TnFs+bsigWxN044W7705UYlnVafESsKHPYY8HVbG521oSToPOZIJwZb4YQpYSZMYcIbzcgeU40VSzjjW9HXy+SQewy+Zh3sK6dGktJH6d011CCpqen4u+P5aH/APPAz3U/bMRt4/9hfwaM95kxM54OODeHnnN+3qnQDWPEWQAPidXaFLE34yeAZ7BORdFWr3SDz9421jRZIScztxhEptqxiMlija6ZvWCKRbyHMwn9KZw+0eRlIIMH2l2afXt1x5RpdyE9I7LC6Z/vmIKvvrRqec0rfYpnTGvKsyOHju8NjzKYiAaBMAjMJ0aTQ+FIQcZyEL+r6fTenPkFyx3HJwZETQFTBpHKBzfkW5pQNH+Kc917G/D8TkLfZDu95IIxZ+OmW5onN84v+RRP/tOqCWT8iqpZge73Q3iOg86nCmYg4kEAOUbpRnNSzLyJQAvBPFf36Qtb2k8RDYy/1Tl2KbeTAHKuc8WY4vMp0+YuevK7WIjklNkX7k2/4ZpJ2LbVwm8ZZ2U859xbT4SiHMOEo0A4nsBHtxQzGDRk3gGiRQxexBrPtwsKjIXmibnOFHCoapL7GkBXOC9jmEw+YmAOKZhfNK/A2eZqsqidhatf/wMw5am7jFm2rweii9kxxKMkOgysHkbgQ4j4aDAdDoJphREpmkgP4hoGfQDGfNL0RW3htJMGdS8b6FiWIjsz93UiuswlXSrB/CGIP2JN+UiFsua9BU9udVrDqdJI0Ko14ZZHsX7dJtPlrKqcCL2HfFpvj8K9mdEbhN7MdBgIA8A4mgjBeutOYMbn74wlIMwnxvxZpQXvx2fRxCrxpoAjg4gNR2blTVCAJ2PZnBnVBKwGeDsT7QJDpAbuJOgVTEo5dJQTeCcrymEAPx0BGAM9enbF1ddmY7LQPZqVH/fHczDzaoA+A6GbCPlg8H4g6k2wboscC05u5oq+3YIhxCuh1tQsikeLbkeKYwAAAuFJREFUYjf7J8ZGRwEpBhFLC3Ml6/wcEUn1144OnN/GLGZeQ4TlYCzTiZdrlPRFSwR6/jao1b6xkGaQIBo5w/JyWeF7CWRZ4Kx9oxxf6Bj4AsBK0rFcI17uSWlYPmvWM85N9uILRmK1FqKAawZpYpTMW89j0OUEXBpbploLYdYCyzLwGQwfhL6MmZbNLi38vAW2SSzZjigQNYMEcfDnOvt+zwrfQIa3+Lfw4+/BWMMgoTesZtaWxSuf5LdAnb0Jh5gZJJRYRrWMZO9ppPCpRHwKg04iIFCduP2QlYGdYN4Kok3E/L1OghnwLWn8Q8Ln0H7OqT1AElcGMUNoxIi8nkojn0gKHQdGbwZ3EaEl4n8B6kLgzmDDytQ5GlEt0DtjOxibYFjHuJyAcoB2MbADxFuh0xYm3sqNtGVOWcHG9kD4BAwdgwItziBuyTBiRF5ntb6xE3k8naDpnVhRF4GQ3tQWIqwJpEhjLS4t3JPF53bDxPgEBWwo0O4YJBxWp/yR1ixDmbhJex8F2j2DiCp9DJphdTQtkWu+912DBMZWFGj3DCIAt+ptbiAV58DExFVJUCCUAh2DQTLzyqwKIheVFHQIHBLXrmNSoENcLrs03QSDdMyL11Gg7hAMYlcJJcEgHeWqdUw4OwiDWHS8bSeFGDrm0SeglqFAh2AQgUh2Vt7M8ArhBL4w1hKeMkRKjNl7KdBhGMRvzcqdBCZRJbycdJ7c1lX39t5rs/dg3qEYZO85lgSm7YUCCQZpLyeRgKNdUiDBIO3yWBJAtRcKJBikvZxEAo52SYEEg7TLY0kA1V4okGCQ9nISCTjaJQUSDNIujyUBVHuhQIJB2stJJOBolxRIMEi7PJYEUO2FAgkGaS8nkYCjXVIgwSDt8lgSQLUXCiQYpL2cRAKOdkmBBIO0y2NJANVeKJBgkPZyEgk42iUFEgzSLo8lAVR7oUCCQdrLSSTgaJcUSDBIuzyWBFDthQL/D8LFO4s1r9S/AAAAAElFTkSuQmCC",
  jichu: "data:image/png;base64,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",
  add: "data:image/png;base64,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",
  update: "data:image/png;base64,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",
  del: "data:image/png;base64,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",
  fanhui: "data:image/png;base64,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",
  editImg: "data:image/png;base64,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",
  muchang: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu19C5QcVbX2t6t7Ju9MV2sQQbgkmW58cK+BX+AqogTyozwChGcAwxuS6Q5wBUT5vWIU9IJI0CTVQyTh/QwgD3mI4fJS7oWIgBge6epJwEiAELp68pxJpmv/6/TM4CTMTJ96dVdPn1qLxVqZvffZ+zv1dVWds8/eBHUpBBQCAyJAChuFgEJgYAQUQdTdoRAYBAFFEHV7KAQUQdQ9oBBwh4B6grjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDTWnVCQKKIHUy0SpMdwgogrjDzZ2WsXZ0jAv7gLA3QLtpgA6wzqCY+D+AJhCaCBTvOwCD1xFoLTM+IMI6ZnzIhA8I+IiY1tkaf6DZ1JZPN69255jSGggBRZCA742YkZtM4EMJfAiI9g14uA4wljOhjZiyDF5RZM6tH2G/gbM/vyHgsYekeUUQn6d1dGtupwbmswEcSsBBPpt3bU48dUD8FjMtI41esruiL7afv8cq1wbrRFERxKeJbsq0TYlwsQVEx/pkMnAzDM6D6XkmXsaIvNA+bNuL6kmzPeyKIB5uw1HGqp0baNs5BDqXgN09mAqRKq9g0DIALxZZW7Y+PfHPIXKu4q4ogriAPNZq7k3MlxJougv1WlR5AeAnmSNPWOmJf6rFANz6rAjiALnYAvNoIlxIhMkO1IaWKGM9iJeC6fHOxsgjm86d8MHQClC9Yjmbz4VrRsaKm88m8IUETHSmPPSlGfxXgB5lm58ozE4+N9QiVk+QgWbUWDtap/YLAL54x32JoXYT+BYPYz0DvyPQ7fl08+99s1tFQ4ogO4K/cM1IvWvTBSBcSqWNPHW5QaBnM/M22PxQLT9ZFEH6zH4skztdY74KhJ3d3BRKp38EmFEA4Qmb+N72luT9tYSTIgiA+ALzq6xhPgH/p5YmrxZ9FU8WItzBRIutlublYY+hrgmiL2xrQpd9DQjnEFDXWFTnRuVlYG1RHmPvQnqnjdXxYfBR6/amiBu5kwD+lXqdCsFtybyRQXfB1uZb50/8Wwg8+tiFuiNI3MjtxsQLCTgsTBOhfOlFgJfZRAsLLYkbw4BJXRFEN7KXEtHV1QaegeeJ6dKtGnIb7bGbY1p7ghhfI0DkcR1cbf/CMD4zfwTQDZ32sPmbz999TbV8qguCjG1duV+Ei4sJ2KtaQPcZ96f5VOLHA/nRlHlHJ+48moATiOjwEPhbdRcYuMe28Yv22YmXK+3M0CZI92bfVWC0EEGrNLh9x2PwVmLttHy6+R5pP4T/2vojyebjAD4MRKOkdYeYIAMM4C5i+kElD4YNWYLohjmViBcC9Nlq3yvidYGIjsynEi+49uWmVcNjm7q+pWk8DUzTQBjr2latKzKu26rRVRtbmtcGHcrQI0hpJ3zjXCKaGTR4MvaZ8Tqi2uHWzIl/l5GXldEzucMA+xgwjiOiT8nqDSG5DjAtzI8Z/UOctvOmoOIaUgQpfWvYXXcT0figAHNo94k8Nx0f9Bp/rNU8SLMxA4SzHPo3BMT5XYZ2rpVqfjyIYIYMQeJG7mIQ/zIIkFzZZJ6XTycvdKXrUil2/covU7HrZiKa5NJE7aoxP2Bz9LuF2RPe8TOI2ifIre+Pim/ccBOAE/wExostZqStdCLjxYZr3bmrR+jDO/5Wx6n5F+dTibmu8dtBsaYJMiazcs8G7noQRJ/3CxBvdnhDUcNx7bOSS73Z8aYdy+SO0cAPeLNSy9p8f3702NP9+DapWYLEMuZRGvh2gMaEYSqZ8c428GEb08k3w+BP3MhurOdlYQAmEx3rNSGy9gjCTHpr7koAl4UmwZD5xW088ogNsz/3URjIIXzQjewrdfktsv0EbO6y+eD1s5Mvup2XmiJIfJ45FlEsAfAttwH7rcfMd1np5Cl+2/VqTzfMvxBhH692al+fN9iMbxTSyVfdxFIzBIlfb36RbRbHOSe4CTQIHZv58kI6eUUQtj3ZXPzWmHhnZL0nG0NIWbz+2tS4d3vqXyynYdUEQUrfG8x3gGi00wCDkreBRYVU4tyg7HuxG8uYl2vAT7zYKOkytjDwWwY/CU1r15jHM+MgIkz1bLvCBhj8qJVKHul02NATRM+Y3yfgKqeBBSnPzKus6Oi9MHOXzUGO48a22CyNctH1O3fvmAy+uzPSeNHmmXu89wk/xNL6ho1HMvEpBBzlxs9q6DAww0olbncydqgJomey8wh0vpOAKiQ7aEZuhXz4xDD6/LZ/RaT4FIE+7cUHG/yjQiopFkLKX937UIeD+WQQTSuvUD0JZrxspROOjlWHkyBzOBrfKXdnmDb/+k4rA7OtVMKo3lR/cuSmBeY+EcLTXpIYRcYsAeflU4lFrmJbuGZkvLjpiNK8MR8exmVmmzC50JJ4Rja+8BFk7uoR8WFbHgLR/5UNotJyReLjw1SdozsXix/xekMy+FQrlRQ/TN4vkX282T6cyD6OgGMAjPRu1AcLTFfk082Xy1oKF0GMtaPjVPhvgPaTDaAacgxcbaUSP6jG2DuOGTdy32bwg0QY5tYfZnTaEZ4aWAbAPHNYrIEOJ+bjCTy1mpu7DL7GSiUvlcUqNAQZPc8c1xDFUyE59VcGP96QH2bvWu1WAfGMKfLPxL6Q+4t5o63RVCevHe4HA0p7WRHMBUH0UKn8xfTrfLr5P2QHDgVBBDkao/xHgPaUdbzacsy4zEonqra6FjOyZ2hEIknT9cVAu61pU9pnTXzJtRGXinpr7gCyeSkII1yacKfG+Ek+nZgjq1x1gnT/ovALIPqCrNNhkGPwNoB+s7UhckWlK5zrmewsgDIeU23WbkPkGxtSE1ZUC89qLOEzIWW1JFplY64uQbrPjD9T4xUNRV/AO2zmWytRg1bPmCIH7eeyE9yfHIPfZmqYXGgZ/7YXO37o6plsWyWzI2wbxxRmJx6S9b2qBNEz2ecIdKCss+GX4/eYtdsY9l1uc38Gi1E3zP8igtfFgTc6Ig1T+t0ArALAccO8F4TjKzV0F2v7OemaVR2CdGfkPlhLu7AuJvANZrqTWbvdj1NuesYUr1QtLvz4WIWBVxDRJlszJ7Z7seOnbtzI3gSiM/y0OZitfGTUKCcZEFUhSNwwF1VtFaNSM9FnHGb8Lwh3dEXsezbM3HOdIxfEj0kmdxsRTnWkt4OwKFZnRUYd6uTm8DKerG4lsyVE0qKVTuwh65uQqzhB9Iz5/wj4mRMnh5IsM34vyGKNHvOAzIm3eMYUy7iejhMz43dWOhHKnKm4kX2zUidC3SQsVpQgemtuOjHfNZRueA+xdIgNPlG0uZBKPLyjnaZMdkKEcSeI9vcwhsjIvS+fTngimKfxB1H2Y8HBiW9uNngrRpB4xvx3AP/rJKDAZBlbQCyqiO8WjsJyKBBhKRhvABjLwAQCT/GcOsLIWWPGTJJ5UgWG9QCGq3I/2DgpPzvhaGO1IgRpmv/2eC2ydZnXLFOvkyiyOW3gsvZ04g+9tsYsXPHpaJd2IggidfsAr2OESd8GTSukmh8Mk0/Cl/g883McwctEGFdR37qwW/6CxD+cjBk8QUSlw+KmF6udQmID3y2kEr8aDBwxcYjQdCaeXuN7M6Uwi2iMuzlF5+QGcizbXZboeQL2dqzrSYHfy6eSuzg1EThB4kb2fhCJsv7VujYXGdP6PjVkHBlr5Jo1sqcT03QifElGJ2wy+UhzI2bStjD5pWfMh6qyvO/yWyxQgoSg2uHaoo3DvJbNLx1E0oongXAqgRwtE1bz5uzStOT6WRPNavrQd+wqr2C6KigXGEFEY0xo+J9qTQ4Dy4npcL9L5Y9dkN1fIzpBIz4lDB/4g+LLuCifTlxXrTnYjhylavv4xGpdpXwratq+bpIygyHIPHOYHsXr1Sp/yYynrTFjpga6esNMMcM8kDSaDsbxFf/glLmzmNfkh9ufr3Za/mgj+4VGYFm1im6IrGUrlYjJQLajTCAEqeTu6CeCZizOpxPnuAHDi44o90nM1xCh2Ysdv3UZeNwaET0WZ47v8Nu2jD3RMUtD50uVTEjs555wvRfkO0FKxz8ZT8uA57dMtc9oiHjimex9AB3nd2xe7IkeJUT4FUe0eyudh6Ub5lNEmOzFf6+6zDzLSicXurHjL0GWLG/UP2x8q9L9OUR7MyZteqGlufoFm+ewpo8TVQ3D14KgdIaFsZQ1urtgNz0QdN8S3TANIqTc3Jh+6hQjaG6fmWhzY9NXgsQNcw4IAzaodONgOR3m0i70YZ7am5UbxOHf40buayB+3qFaxcUZeBiMJdbI6P1+v4Lpmdx5BNECr7pXqYZZOum6GqdvBBH7BlHiyi4pMrJF4sPaU8mV1Z2GT46uZ7KramZJuDv1ZokN+m1/eWFOsY0tyH5D0+hZp3pByDN4vpVKXuDWtm8E0TPmYwQc5tYRp3rM/Cebhh0Vup3inkDC8O7tFNNued4ApnuhYUm+JfGEUxux1lV7kL3tpbD0TSwSHdLe0vyU0zh65X0hSMzITdaIXTvh1HlRFtNKJU92qldJ+bhh/hmEr1RyTL/HYkAUe76TgXsLqUTZJ8LYRavjka0dz1Y7ragXB/H6baUTuhdcfCGIbpivEeFfvTgiq8vMP7PSyf+Ula+KXKn4XcdHFa/YEWSwjA9swh22zUv667dRymOL8pPhqkzDt+RTSU+nFT0TRM+Y3yHgtiDnpte2DTqjkGq+pRJjeRlDz2S/R6BfeLHxsS7jAwbeBWE8AZ5+DX3xR7yEMa8C0e9B9BwzhhF4/zBultrA0V6/qTwTJJ7JvhX0r4bYCeXuYMs+5v26Cdza0TNtRxDsR9zq//PHAIuKkei1G2aOf6v33/6ZQFnqjV5/nWydgdqRHxHVva7OeSJIU2v2uAjTfc78dibNwOptzN8KS++/wbxvMszjI4R7nUW4vTQzPrQZ3y6XYCkamEZQPIkYM8K2e+8lft90XWbv7ji+J4Lohrk8yFRwBv7SZY/4Vph6/w00gTEjdxoR3+ylmJv4MWA7cqDTKih6a24vYvskMImDX0nfbrIaNlRknNCeTnj+8XZNkFjG/KYGSJeRd4q12MSyIqNODlsVjv7iiBu5S0B8jdMYt5NnfrPDHj5l8/m7r/FiR7RB0LRSnSnxbbibF1s1q8u8MT+yYZzX1ysRv2uCxDPmjQDODARE5nn5dPLCQGz7bFTPmD8n4DIvZkW9qmLj8Cnrz9kt78XOjrpjjbZ9I1Q8EUwnEOFf/LQdZlsM3G6lEjP88NEdQbp7eHzotahAvwEwrsunExf5EVzQNnQjez0RzfQyjtjwtBA7LOi8KHGOJdqTmg/C57z4HHZdhnaklZr4qB9+uiJIrNWcoTFu9cOBvjbEB6oVbd41bMdEPxHnEo7EPzSXeD5KzPhDflznVJy411a/sRzMXndldVt8r5wQ+kNfDoERm5vW2uadMIe6HKr2K+6KILphPhxEp1MbmFtIJS72I7DAbIin5/AOkTXsqVe7n68BXmIVeVPi0Bcxz3B7oInBrxHwik14GaDXuIj1NrSNRW7YuHnk5g3iwNYoY9XODdi2M5H2WYAnALwHMSZw9xHmCURwdaBpx9iZcYOVTpznBZO+us4J0t20caNfDmxnx0XdokD8GMCoaNXAUTxOwNe8jMuAYaUSs73Y8Fs3buR2A+zFEq3vRGffPzLjGQI9lx8ZedmPj+GR8/++S0O046sRmw5gwv5uMWZEvmGlJvzRL3wcEyTIvQ+npen9AkHGzpgF//hUVNuy1IdyNaHskNuLgW6Y84mwHXkZvI6IFjDoSauluWJp/OLpBo1maMB3AAwvN0+irYOVSo4vJ+fk744JEs9kbwbodCeDyMrazP9RSCd/LStfKbnuX1d+0useQ1jj64ujSDiMbu1YLZpuMvB3MP/c7Wk8v+an58k9g5jTZRot+f7j44YgAaaW8JP5VDJU3W3FjnUDukRj0V29TLgNPquQSnpqmeZlfCe6cSN3LmvYYLU03+1ErxKysYx5FDGu7C85tospsT7dnPPTD0cE0Re2NVHRLvjpQD+2znXdp9tnx2Kt5t6ij57Xsw020bGhOA7sMz7VNCcamDLj571pNqLFhJVOePo27C8eRwRpyrRNicBeGjQwNuiCQqp5ftDjDGZfN9q+TlR8zFPLYuZNNrSphXRzVYpYVBO/So0dy2TP1IArmOhnTnoPyvrniCCVrJQofhGY6BfVKL7ck5Er8njKfhgOBLTIQC5S5ND1LROWyU6GkvOAwK3vjwqiDpojgvjRBswxBIz3mXBLkWmR3++X/fkSN3InMezbiSjq2Nd/KlS9g6wH35VqHwScEcQwHyfCt6uFoEjLYGBxITp6SRBJjPGMeQ4Dv6lGRm61MFXjDo6AI4JUsl3WoG4zbwLobhAW+VXuJ5YxL9eAn3i6YZjf6og2HhyWDrKeYnGpHDOyk4giu4J4DNkYIxoC2bBHEjQLGtYx83taF9qc9ulw6Y5nNWcEyWTXhC13p6dq4I3bIvatjhtk9sDX3+aYU2TD2EHWaQxu5Mde35aI2MVDCJjCoIOljwUzi2yM122i54n4acuOPRN0wqab+BwRRM+YeWkA3HjjQUdUDSTgYYa22Fo78QnMIbusuVI7avNOAk0vKzuIQFg7yHqJaTBdsfytMR/r9wGt7m7A/AB10V1hecI4IkjcyG4MJMXd95nkd5lxM3P0hoFO541uze3UYPMtXr+pmPGQlU4c43sIITSoG7nZAF9YiSO+JbKIcx3pRKaaUDgjSMbc4mXpsxqBilYITPQAwO8U7RHPR7WtuxKKUxh8meeeicwP5NPJanbPCh7S7uzlFoAvqcrrNfMaG/hFYWTDQj+SIp0C5oggumGalfj1cBpEdeT53XwqOaQPHulG9mQiXFsVYnxyUtcy+MdWKnl9JefbEUHihvkECIdW0sHQjsX4ST6dmBNa/zw4Jnq0a4ybiOgbHswEosrgv9o2nVWu6otfgzsiiJ7JLiSQb4dR/AqiGna81nyths8yY8ZazbM0xmIZ2WrKMGOBlU6cH7QPjggSM7IXakSDtlIO2uGw2A9bg0zPuCxZ3hhbN8zQgIp353LvOy/rbIgetencCR+4tzG4piOCxK83vwgbrwflTC3ZHUpPkJ7DYE/UYm94cZiLiU4otCQCKUHliCDiBtYz5tMEHFRLN3MQvlbqER+E731tjp5njmuMQpwSTAQ9VlD2mbmLSTshiMRWxwQZ27pyvwgXX/CSrxQUUBW229HZENkjyMd70PGIk5IM+9lKt8wLIi4Gigw63m+SOCZI6Sli5K4m4kuDCLSWbDLj91Y6UbGmQb5is/itMXqn9lrNdMGSCF6QhJhOzaeb75EQlxJxRZBukmQfJaLDpUYZwkKlHCzwL62OEQ/got3ERmr4L9FodKfcUwR8M/zOOvOQGTYocpBflU1cEwQ3rRqub+kSJXDq/ntETKE4IAXmu4ta9MawH5IKtGyss/s5EGkG54m1Sfl0syg+4elyT5CeYXXDfJAIR3vyYqgpM78JaIu3RYu3uM0wDgoScSAMxKErxuB3vMz4mzWu8yteq1Z6JgiYKd5q/hSgcLdF83sGJOyV+pKDHgXjRmtc82M4kYoSaoGJNGXe0TV05ggUD2yQEBn2o1Knd4L0ANLTPEa0YnN9jjtE2PrvSunoMN/WhejiDakJK/wfoLzFeMZcAoh6vPVxiY92EE2yWpqXu43YN4IIB5qub/tKpFh8CES7uHWoLvSYXwTRovyw4j2ibm0lYo4tMI/WNDxYibFCNQbjpXw6sa9bn3wlSMkJsXzYoV0DovPUXknZadnMjPuYcGPQ/Rf1jPkOAbuX9cgHAfH+D/BqEBXAKBDoI4BHgzgu3shF+wUfSrhKe8qgmVaq+TfSCn0E/SdIj/GequG3VWpS3AQfJh0Gr2Tgpk7im7a07Pmun77FjOwZGlFgVR1F6zgAjxDTs9t4+JNSLfPmrh4RG96xX0+R6iMIOMDPmLezxfggn07s7MZ+YAQpOWOsHa2jfS4RznXjXD3qiHV8IiyFjRvzO3U+6HUVRmAYxDke0cuFCHcw0X1+FLQu1QTu7JjGhJZAcsKYprvZQAyWIL1Pk1bzIGJeTKAJ9XjTu41ZrOeD6U7WcGOhJfGKGzu6YU4lwsNudPvTYeaPALo8yKOwTa25gyNcytTw1IOlr/+lTl7p5IFOcagIQXqd0g3zv4jwA6dOKnmxEcmvMbRFduOwO5z0Mowb2fs9d8IqbYTyVgYtKAwrzqnUwkLTgrZDNM2+ya9mpDZFxxdaxr/t5H6qKEGEY2ONXHOEeNFQTHNwArwXWdkq5qLYOIrFDwnU4GU8Zl4FTTvKy3Kp6/FvfX+UvnHjLwGe6cOiz8X5VGKuE18qTpBe57pLfPLV9dR91cnEDCgrWhynk6IgW9lLz5hpAhaUFRxEoNSOm5tOrXbNKtF2nCD60Jdatrm6GPxHK5V0dIy4agQpRbiQG2JdZoqAH3ltMeAKsRpUcvIuHTeyf5BoqTYIFytzrFV2GkqNdCJ4mgj7yOps9x0CcJc9YpzUKluPYnUJ0uNE7LpVMRrWdSkB31U78YNPPYPnW6nkBWVvENGJd11OVC90ldnAIkM5lfxe2XEqLOCVJDZompMzI6EgSC/GpWJuzHMAPsfre3OF561iw9mEswstiRvLDdjTF/2FcnL9/T2s5Oj11QtJbObLC+nkFbK4hIogvU43zX97fETb9kMGn+6xDYEsDjUjZxP2kVny1Y3spUR0tdPAmLHESidOcqo3kLwoZg2iJnRG/1r47njfupOJc/QNtGU5CE43AO/NpxInysYXSoJ8TBRRnwk0h4AZsgENdbl8KiE1Z3rGvIOAU5zgwYyc1Tn837we/BKvzFrjtutAdMb23wD8NoEezKcS4lXa86W35g6Azc8RQZM3xivyqeTnZeWlwJY1FpScvrBtdxSLPwRwBoEagxon7HZF0TQrlZwk46eeMZ932Gu8YyvzPhvTyTdl7A/4xBCbwjYeIEJsIBlmfpWBMwvp5KtexhK68Vbzx2A4KeDXkU8lRsiOWxME6Q1m5MK3Pzu8q+v7IJ7p9uNTFpgwyjk5Ax83su86yqr2oVJkabGlsWvVYOToxVWQxEon9/aM8xKO6B/m3nJSEjcfGTVKtgFTTRGkF8yevJ0LmPj8ejn8I2KXJoi4adblRDsIqfkVx4WtyKhdZG+agW7qeCZ7M0CnS9/0PpBSjKUb5qlEuF1+XNpd9jiuFIDSA1da8Nb3R8U2rT9bY1zqtY95pV13Mx6DH7VSySPL6YrVwEZm6WqDDPzASiUcf9Dv6IeeMQsENJXz7+OnCPCslUp4r2lQOtWaE4eivigztq1FJhVmTfirjGxtE6Q3QrHm/2Hb8Uz8vUAyQWWQrIAMMz9mpZNHlBtqlLFq52HU9V45udJTCbzO6hixu+cP89ZVe2jctUpmzL4ysosO5ezGjLZjNbLvLycn/m4TJstWYhwaBOmDSiklgXExCEfKvmLIgBoGGdknSOlbrbhtjZTPzEvz6aTniv1iOVcjcpxx7BdBnMRsAwfJHlAbcgT5+Dulu3feJQQ6bah80JfyolKJshVkRrSu2HUEa/+QIoh4ihB93Y8zHfGMybJjdj+90G6lEgOudjmx5aTPZFHT9m2fNfElGftDliC9wXdX8th6HjFmi6OeMqCEVYYZv7PSiaPK+nfr+6PiGzeINBO5y+O57d5BnJeA4lvyqeR2eyVyDm8vJX4QhrMmjhRHpPQ1fCk/K/GGjOyQJ0hfELo7JpEo73+wDDhhk3HSD1HPZDud7Bkx4ygrnfidl5i7W0DTMzIf6uLpwRSd5PR8Rn/+6YYpek2KNwWpy7YjewzUu3JHA3VFkN7gR87/+y7DIp2nE/NpIJLeVZVCP0gh5hfz6eS/ywyhZ7Jtzk5w8rsciXzJmjmxXcb+QDKy59+dJg0OOF7ptCpEGVXpezkfaW7ETNomE6e0URljtSijZ1YeSCiez8zTQp/3xbwpn06OlsFZN8z/IcJXZWR7ZaT3WcoYjXXvpt/c31kfBp5lip7hx5ND7IdFOrdknRyVEMUxrFRyoiwudU+QXqB63mNTBD4zJE0r+53Dbba254bZE7PlJth1/V2mS/Lp5mvL2Zf5eylREZikgfawiV4FRV71gxi9Y+uG+RQRJsv48vGPgOReUq+8IsiO6M5hrWln8xDNphnEPA1EUr/YTibJo+yJ+VTi3nI2dCM7k4gcd4QV1Qht4pPaW5JSewrl/Ajq73HDXAzCWU7tO03lVwQZDOG5q0fowzqOJSplE/tWYcPppG4vz1fmU8kflbMRu37llzW76CoZsFSykzHN60d7OR/d/l3PmBkCWtzo26wdV0hP/K2sriKIJFKjblj5mYZtxZM1xqkgfEVSzXcx6aVekX6RyW0CQTpzta+zoq0ZQMeGjSReyCGIb3UMH+Mka0ARxMUtLCqzRMk+nRmnVrp9mahiaKUSUiVEne9L7PCs6n6SXGON6/yxHwXsXED9sUrpFGEUtxBwjFs7zPyclU46ahqkCOIW7R493Wj7Osg+hbqfLGM9mpNStzujuszpPL01N52Y75IyOqgQryjadEr77MTL3m05t9C0wNxHFN72Wh+Lmc630s2OqrwogjifrwE1YhnzKALO9PIrJ+OOdC5R9476Or9SbRj8m64I/7BiTYFETawNG/7Tr/BKBtsAAATCSURBVGKDXY3DP+Wk6J6YC0UQmTvSoUypYFtXcTqIZgRRlNlmXFtIJy6RcStumItAOFtGVkZG7IAT05X56MRfy262ydjdTmYOa/GdcmeBcSUIn3Gs368C359PJY93aksRxCliDuVFAQpN2yqa1kwloq87VO9/qsF5K5X8lIyt+PXmF2HjdRlZZzL8HlhbBOAG2cNHZe0vXDNSL24ST+CU7NmOsjZ7BJh4qtWSfERWvldOEcQpYh7kReJkhLceC/ARIBLLxiPdmrOZTi+km2+V0dcz5mMEBNauWmQZg/mxIiIvr09P/LOMTx/L3LRqeHxzcR8m/k5P6s8oR/oSwqJ0qpVOuiqcrggiAXBQInpr9kjYdAIRH+LiROQL+VRCKpWkyTAPjRCeCCqOHe2K8+YEyjGQA+EfRMgxuAFMsdJ/4tQhsciBm0TAXkH7xeBTrVTyTjfjKIK4QS0AnTEL2pINxN9k2JMBmkKEceWGcXJ0VM+Yfwrie6icj9X/O6/ItyS+ACJHZ1XUK1b1Z25QD+ILzC8x0WSCPZmJDukvhVysKlmppKjwUvYak1m5ZxTF16XPTJS1WBsCbr89FEFqY34/9nJs68r9Ilw8hJjFE2b/nj2XzXlu+oxs5fVYxrxWAy6qsdBduyuddTDICOoVyzX81VUUq2MU7ZpULNLrMtm9JW/nrh4RH94hqnkkqut98KOLFnG8NZqU2VAdzBtFkODnKlQj9Cz7/sWvzcNQBdfHmaLGh7bPSi716p8iiFcEa1Bfz2RnEai1Bl2XcpkZV1npxGVSwmWEFEH8QLEGbcSN7G9BNK0GXR/UZQY/YqWSU/2KSxHELyRrzU7prMuWP/i1ux+K8EV1lpHRA3Hm+A6//FEE8QvJWrQzhEjCwCuIaJO9Fp3YcRoVQWrxxvbT53nmMD3K9xGobM1fP4f10xYznraio470Wny7P58UQfycqRq2FTPMX2qEi2stBL87YqknSK3dARX0N54xz2HGQmcdmyroYJ+hGLyVQd8vpBK/CtID9QQJEt0atC1O70U0vhOgPcPqPoPfBqJHW6kJrwXtoyJI0AjXov0lyxv1dcNEWzPRmluu3m0F4hRFF4gxLz9mzI9w2s6bKjCkOlFYCZBrdQyR4NiArp8BdFy1Yyj1NYxEz5BtfOOXv+oJ4heSQ9hOd9EE/imByjbv8R0Gxks20YJCqvkW321LGFQEkQBJiXQj0F29HS0E+o6X05Bl8WTeBKIlRZDRnmoWeWNVuxRBqgZ9DQ+8+K0xeod2CggHEbC3Lx/0jPUg3G8DDxZSiYfDgo4iSFhmopb9EOWFNmz8sk32ngRKENDMjM8R4dPMHC9VX2cWDX3WQ/QFAT4iovdsYDlArxWhvbkhNWFFGCFQBAnjrCifQoOAIkhopkI5EkYEFEHCOCvKp9AgoAgSmqlQjoQRAUWQMM6K8ik0CCiChGYqlCNhREARJIyzonwKDQKKIKGZCuVIGBFQBAnjrCifQoOAIkhopkI5EkYEFEHCOCvKp9AgoAgSmqlQjoQRAUWQMM6K8ik0CCiChGYqlCNhREARJIyzonwKDQKKIKGZCuVIGBFQBAnjrCifQoOAIkhopkI5EkYEFEHCOCvKp9Ag8P8BBFUjjBezfqEAAAAASUVORK5CYII=" }, _defineProperty(_monitorImg$monitorRi, "headImg",



"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598099691740&di=cf21b35e7e83eb33ee721994c433b222&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h457%2F20180125%2F8052-fyqwiqk5870272.jpg"), _defineProperty(_monitorImg$monitorRi, "lun1",


"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3857917291,1566540578&fm=26&gp=0.jpg"), _defineProperty(_monitorImg$monitorRi, "lun2",
"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1072899347,3009270015&fm=26&gp=0.jpg"), _defineProperty(_monitorImg$monitorRi, "lun3",
"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2767695830,491356518&fm=26&gp=0.jpg"), _defineProperty(_monitorImg$monitorRi, "lun4",
"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1576110167,1955716119&fm=26&gp=0.jpg"), _monitorImg$monitorRi);exports.default = _default;

/***/ }),
/* 20 */
/*!*************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/index.config.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var CONFIG = {
  //开发环境配置
  development: {
    assetsPath: '/static', // 静态资源路径
    baseUrl: 'http://demo.rageframe.com/api', // 后台接口请求地址
    hostUrl: 'http://localhost:8080', // H5地址(前端运行地址)
    websocketUrl: '', // websocket服务端地址
    weixinAppId: '' // 微信公众号appid
  },
  //生产环境配置
  production: {
    assetsPath: '/static', // 静态资源路径
    baseUrl: 'http://demo.rageframe.com/api', // 后台接口请求地址
    hostUrl: 'http://h5.tinyshop.rageframe.com', // H5地址(前端运行地址)
    websocketUrl: '', // websocket服务端地址
    weixinAppId: '' // 微信公众号appid
  } };var _default =


CONFIG["development"];exports.default = _default;

/***/ }),
/* 21 */
/*!****************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/formRule.config.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _formConfig = _interopRequireDefault(__webpack_require__(/*! ./form.config.js */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                                     * 应用表单校验相关配置
                                                                                                                                                                     * 依赖：graceChecker.js 进行校验
                                                                                                                                                                     *
                                                                                                                                                                     * 使用：引入该js到页面，let res = graceChecker.check({phoneNo:"",code:""},formRule.loginRule)
                                                                                                                                                                     */var equipmentForm = _formConfig.default.equipmentForm; //GPS设备的表单数据
var _default = { /* GPS的设备表单校验 */equipmentRule: [{ name: equipmentForm.name.name, checkType: "string",
    checkRule: "1,10",
    errorMsg: "名称应为1-10个字符" },
  {
    name: equipmentForm.code.name,
    checkType: "string",
    checkRule: "10,10",
    errorMsg: "编码应为10个字符" },
  {
    name: equipmentForm.phone.name,
    checkType: "phoneno",
    checkRule: "",
    errorMsg: "请输入正确的手机号" },
  {
    name: equipmentForm.livestock.name,
    checkType: "notnull",
    checkRule: "",
    errorMsg: "绑定牲畜不能为空" }],


  /* 用户密码登录 */
  loginByPassRule: [{
    name: 'mobile',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '手机号不能为空' },
  {
    name: 'mobile',
    checkType: 'phoneno',
    checkRule: '',
    errorMsg: '手机号格式不正确' },
  {
    name: 'password',
    checkType: 'string',
    checkRule: '6,18',
    errorMsg: '请输入6-18位密码' }],


  /* 用户验证码登录 */
  loginByCodeRule: [{
    name: 'mobile',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '手机号不能为空' },
  {
    name: 'mobile',
    checkType: 'phoneno',
    checkRule: '',
    errorMsg: '手机号格式不正确' },
  {
    name: 'code',
    checkType: 'string',
    checkRule: '4',
    errorMsg: '请输入4位验证码' }],


  /* 发送验证码验证手机号 */
  sendCodeRule: [{
    name: 'mobile',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '手机号不能为空' },
  {
    name: 'mobile',
    checkType: 'phoneno',
    checkRule: '',
    errorMsg: '手机号格式不正确' }],


  /* 编辑新增个人发票 */
  pInvoiceRule: [{
    name: 'title',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '发票抬头不能为空' }],


  /* 编辑新增公司发票 */
  cInvoiceRule: [{
    name: 'title',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '发票抬头不能为空' },
  {
    name: 'duty_paragraph',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '发票税号不能为空' }],



  /* 用户注册 */
  registerRule: [{
    name: 'mobile',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '手机号不能为空' },
  {
    name: 'mobile',
    checkType: 'phoneno',
    checkRule: '',
    errorMsg: '手机号格式不正确' },
  {
    name: 'code',
    checkType: 'string',
    checkRule: '4',
    errorMsg: '请输入4位验证码' },
  {
    name: 'password',
    checkType: 'string',
    checkRule: '6,18',
    errorMsg: '请输入6-18位密码' },
  {
    name: 'nickname',
    checkType: 'string',
    checkRule: '2,12',
    errorMsg: '请输入2-12位昵称' }],



  /* 密码重置 */
  resetPasswordRule: [{
    name: 'mobile',
    checkType: 'notnull',
    checkRule: '',
    errorMsg: '手机号不能为空' },
  {
    name: 'mobile',
    checkType: 'phoneno',
    checkRule: '',
    errorMsg: '手机号格式不正确' },
  {
    name: 'code',
    checkType: 'string',
    checkRule: '4',
    errorMsg: '请输入4位验证码' },
  {
    name: 'password',
    checkType: 'string',
    checkRule: '6,18',
    errorMsg: '请输入6-18位密码' }] };exports.default = _default;

/***/ }),
/* 22 */
/*!************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/form.config.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
/*
                                                                                                      * 应用表单校验相关配置和表单的基础配置
                                                                                                      * 依赖：graceChecker.js 进行校验
                                                                                                      *
                                                                                                      * 使用：引入该js到页面，let res = graceChecker.check({phoneNo:"",code:""},formRule.loginRule)
                                                                                                      */var _default =

{
  equipmentData: {
    name: "测试人员1",
    code: "0123456789",
    phone: "18161218432",
    switch: true,
    livestock: 0,
    timeInterval: 7,
    user: 17,
    equipmentRemarks: "这是一个备注" },

  //GPS表单的信息
  equipmentForm: {
    name: {
      title: "设备名",
      placeholder: "请输入设备名啦",
      name: "name" },

    code: {
      title: "设备编码",
      name: "code" },

    phone: {
      title: "设备卡号",
      name: "phone",
      icon: [{
        name: 'div',
        attrs: {
          class: 'cu-tag bg-blue ' },

        children: [{
          type: 'text',
          text: '+86' }] },

      {
        name: 'div',
        attrs: {
          class: "cu-tag line-blue" },

        children: [{
          type: 'text',
          text: '中国大陆' }] }] },



    switch: {
      title: "测试开关",
      type: "switch",
      name: "switch" },

    livestock: {
      title: "绑定牲畜",
      type: "picker",
      mode: "selector",
      range: ["牲畜1", "牲畜2", "牲畜3", "牲畜4", "牲畜5", "牲畜6"],
      value: 0,
      name: "livestock" },

    timeInterval: {
      title: "指令发送间隔",
      name: "timeInterval",
      value: 0,
      inputTpye: "number",
      align: "right",
      icon: [{
        name: 'div',
        attrs: {
          style: 'color: bule;' },

        children: [{
          type: 'text',
          text: '分' }] }] },



    equipmentImg: {
      title: "设备图片",
      type: "img",
      name: "equipmentImg",
      imgList: [] },

    equipmentRemarks: {
      title: "设备备注",
      type: "textarea",
      name: "equipmentRemarks" } },


  //牧场的表单信息
  pastureForm: {
    name: {
      title: "牧场名",
      name: "pastureName" },

    livestock: {
      title: "绑定牲2",
      type: "multipleSelect",
      multipleSelect: {
        show: true, //是否显示 - 双向绑定
        info: "", //数据信息
        list: [{
          label: "皮皮虾",
          value: "1" },

        {
          label: "小龙虾",
          value: "2",
          disabled: true //禁用
        },
        {
          label: "大龙虾",
          value: "3" },

        {
          label: "石头蟹",
          value: "4" },

        {
          label: "兰花蟹",
          value: "5" },

        {
          label: "面包蟹",
          value: "6" },

        {
          label: "石斑鱼",
          value: "7" },

        {
          label: "鲫鱼",
          value: "8" },

        {
          label: "鲨鱼",
          value: "9" }],
        //数据源
        defaultSelected: ["3", "5"] //默认选中项
      },
      name: "pastureLivestock",
      icon: [{
        name: 'text',
        attrs: {
          class: "cuIcon-playfill",
          style: 'color: bule;' } }] } } };exports.default = _default;

/***/ }),
/* 23 */
/*!*****************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/constData.config.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 常量定义文件
                                                                                                      */var _default =

{
  // 购物车在tab的位置
  cartIndex: 2,

  // 验证码发送间隔
  sendCodeTime: 60,

  // 个人中心-设置中心菜单
  settingList: [
  { icon: 'iconiconfontweixin', url: '/pages/user/coupon/list', title: '去领券中心', color: '#e07472' },
  { icon: 'icondizhi', url: '/pages/user/address/address', title: '地址管理', color: '#5fcda2' },
  {
    icon: 'iconshoucang_xuanzhongzhuangtai',
    url: '/pages/user/collection/collection',
    title: '我的收藏',
    color: '#5fcda2' },

  { icon: 'iconshare', url: '', title: '分享', color: '#9789f7' },
  { icon: 'iconshezhi1', url: '/pages/set/set', title: '设置', color: '#e07472' }],


  // 个人中心-我的订单
  orderSectionList: [
  { title: '待付款', icon: 'iconfont icondaifukuan', url: '/pages/order/order?state=0', num: null },
  { title: '待发货', icon: 'iconfont iconshouye', url: '/pages/order/order?state=1', num: null },
  { title: '待收货', icon: 'iconfont iconyishouhuo', url: '/pages/order/order?state=2', num: null },
  { title: '评价', icon: 'iconfont iconpingjia', url: '/pages/order/order?state=3', num: null },
  { title: '退款/售后', icon: 'iconfont iconshouhoutuikuan', url: '/pages/order/refund', num: null }],


  // 个人中心-积分余额
  amountList: [
  { title: '余额', value: 0, url: '/pages/user/account/account' },
  { title: '优惠券', value: 0, url: '/pages/user/coupon/coupon?type=1' },
  { title: '积分', value: 0, url: '/pages/user/account/integral' }],


  // 个人中心-推广中心
  promotionList: [
  { title: '累计佣金', value: 0, url: '/pages/distribution/brokerage/detail' },
  { title: '当前佣金', value: 0, url: '/pages/distribution/brokerage/brokerage' },
  { title: '已提现佣金', value: 0, url: '/pages/distribution/cash/list' }],


  // 订单状态
  orderStatus: [
  { key: 0, value: '待付款' },
  { key: 1, value: '待发货' },
  { key: 2, value: '已发货' },
  { key: 3, value: '已收货' },
  { key: 4, value: '已完成' },
  { key: -1, value: '退货申请' },
  { key: -2, value: '退款中' },
  { key: -3, value: '退款完成' },
  { key: -4, value: '已关闭' },
  { key: -5, value: '撤销申请' }],


  // 订单退货状态
  refundStatus: [
  { key: 1, value: '退款申请' },
  { key: 2, value: '等待退货' },
  { key: 3, value: '等待确认收货' },
  { key: 4, value: '等待确认退款' },
  { key: 5, value: '已退款' },
  { key: -1, value: '退款已拒绝' },
  { key: -2, value: '退款已关闭' },
  { key: -3, value: '退款不通过' }],


  // 订单评价状态
  evaluateStatus: [
  { key: 0, value: '未评价' },
  { key: 1, value: '已评价' },
  { key: 2, value: '已追评' }],


  // 订单状态导航
  orderNavList: [
  { state: undefined, text: '全部' },
  { state: 0, text: '待付款' },
  { state: 1, text: '待发货' },
  { state: 2, text: '待收货' },
  { state: 3, text: '评价' }] };exports.default = _default;

/***/ }),
/* 24 */
/*!*****************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/websocket.config.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * websocket 请求路由说明
                                                                                                      * 连接成功后会发送一个 fd 回来，为自己的客户端id，注意保存，后续以这个判断消息是自己发的还是别人发的
                                                                                                      *
                                                                                                      * 公共状态码说明
                                                                                                      * 1006: 意外断开
                                                                                                      * 2000: OK。一切正常
                                                                                                      * 2001: 连接成功
                                                                                                      * 2002: 心跳成功
                                                                                                      * 2003: 排队中
                                                                                                      * 2004: 排队成功
                                                                                                      * 2005: xxx客服为您服务
                                                                                                      * 2006: xxx用户来了
                                                                                                      * 4000: 客户端未响应连接关闭数据，无效的操作参数，等等
                                                                                                      * 4001: 用户验证失败
                                                                                                      * 4002: 正常报错提示
                                                                                                      * 4004: 所请求的资源不存在
                                                                                                      * 4101: 已在别处登录
                                                                                                      * 4102: 用户已离线
                                                                                                      * 4103: 当前接待人数过多
                                                                                                      * 4104: 客服不在线
                                                                                                      * 5000: 内部服务器错误。 这可能是由于内部程序错误引起的。
                                                                                                      *
                                                                                                      */var _default =

{
  // 登录
  login: 'site.login',

  // 客服列表
  serviceIndex: 'service.index',

  // 连接客服
  queueUpMatching: 'queueUp.matching',

  // 排队查询
  queueUpIndex: 'queueUp.index',

  // 发送消息
  serviceMessage: 'service.message',

  // 主动结束会话
  memberClose: 'member.close',

  // 客服转接[只接收]
  bubbleTransferring: 'bubble.transferring',

  // 被客服结束会话[只接收]
  bubbleClose: 'bubble.close',

  // 当前会话历史消息
  memberConversation: 'member.conversation',

  // 自动回复 发送消息
  ruleMessage: 'rule.message',

  // 心跳
  ping: 'site.ping' };exports.default = _default;

/***/ }),
/* 25 */
/*!*************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/request/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.http = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ 26));
var _login = __webpack_require__(/*! @/api/login */ 27);
var _index = _interopRequireDefault(__webpack_require__(/*! @/config/index.config */ 20));
var _helper = _interopRequireDefault(__webpack_require__(/*! @/utils/helper */ 28));
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var http = new _request.default();

// request全局参数设置
exports.http = http;http.setConfig(function (config) {/* 设置全局配置 */
  config.baseUrl = _index.default.baseUrl; /* 根域名不同 */
  var systemInfo = uni.getSystemInfoSync();
  var systemInfoHeaders = {
    'device-name': systemInfo.brand, // 设备名称
    'width': systemInfo.screenWidth, // 屏幕宽度
    'height': systemInfo.screenHeight, // 屏幕高度
    'os': systemInfo.platform, // 客户端平台
    'os-version': systemInfo.system // 操作系统版本
  };
  config.header = _objectSpread({},
  config.header, {},
  systemInfoHeaders);

  return config;
});

var isRefreshing = false;
var requests = [];
http.interceptor.request(function (config) {/* 请求之前拦截器 */
  config.header['x-api-key'] = uni.getStorageSync('accessToken');
  // 单商户
  // config.header['merchant-id'] = uni.getStorageSync('merchantId') || 1;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 刷新refreshToken
function handleRefreshToken(_x) {return _handleRefreshToken.apply(this, arguments);}function _handleRefreshToken() {_handleRefreshToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(refresh_token) {var params;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            params = {};







            params.group = 'tinyShopWechatMq';




            params.refresh_token = refresh_token;_context3.next = 5;return (
              http.post(_login.refreshToken, params).then( /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(r) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                          _store.default.commit('login', r.data);
                          isRefreshing = false;case 2:case "end":return _context2.stop();}}}, _callee2);}));return function (_x3) {return _ref2.apply(this, arguments);};}()));case 5:case "end":return _context3.stop();}}}, _callee3);}));return _handleRefreshToken.apply(this, arguments);}


http.interceptor.response( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(response) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.t0 =
            response.data.code;_context.next = _context.t0 ===
            200 ? 3 : _context.t0 ===

            400 ? 4 : _context.t0 ===



            401 ? 7 : _context.t0 ===

































            405 ? 32 : _context.t0 ===


            404 ? 34 : _context.t0 ===


            429 ? 36 : _context.t0 ===


            500 ? 38 : 40;break;case 3:return _context.abrupt("return", response.data);case 4:_helper.default.toast('错误的请求');return _context.abrupt("return", Promise.reject(response.data.message));case 7:isRefreshing = false; // refreshToken 的返回状态为401
            if (!(response.config.url === _login.refreshToken)) {_context.next = 15;break;}uni.removeStorageSync('accessToken');_helper.default.backToLogin();throw response.data.message;case 15:if (_store.default.state.refreshToken) {_context.next = 20;break;}_helper.default.backToLogin();throw response.data.message;case 20:if (isRefreshing) {_context.next = 30;break;}isRefreshing = true; // 刷新token
            _context.next = 24;return handleRefreshToken(_store.default.state.refreshToken, response);case 24:requests.forEach(function (cb) {return cb();});requests = [];isRefreshing = false;return _context.abrupt("return", http.request(response.config));case 30:return _context.abrupt("return", new Promise(function (resolve) {// 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
              requests.push(function () {resolve(http.request(response.config));});}));case 31:return _context.abrupt("break", 42);case 32:_helper.default.toast('当前操作不被允许');return _context.abrupt("return", Promise.reject(response.data.message));case 34:_helper.default.toast(response.data.message);return _context.abrupt("return", Promise.reject(response.data.message));case 36:_helper.default.toast('请求过多，先休息一下吧');return _context.abrupt("return", Promise.reject(response.data.message));case 38:_helper.default.toast('服务器打瞌睡了');return _context.abrupt("return", Promise.reject(response.data.message));case 40:
            _helper.default.toast(response.data.message);return _context.abrupt("return",
            Promise.reject(response.data.message));case 42:case "end":return _context.stop();}}}, _callee);}));return function (_x2) {return _ref.apply(this, arguments);};}(),

function (error) {
  return Promise.reject(error);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 26 */
/*!***************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/request/request.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Request 1.0.6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @Class Request
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @description luch-request 1.0.6 http请求插件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @Author lu-ch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @Date 2020-03-17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @Email webwork.s@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * http://ext.dcloud.net.cn/plugin?id=392
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */var
Request = /*#__PURE__*/function () {function Request() {var _this = this;_classCallCheck(this, Request);_defineProperty(this, "config",
    {
      baseUrl: '',
      header: {
        'content-type': 'application/json' },

      method: 'GET',
      dataType: 'json',

      responseType: 'text',

      custom: {} });_defineProperty(this, "interceptor",


































    {
      /**
       * @param {Request~requestCallback} cb - 请求之前拦截,接收一个函数（config, cancel）=> {return config}。第一个参数为全局config,第二个参数为函数，调用则取消本次请求。
       */
      request: function request(cb) {
        if (cb) {
          _this.requestBeforeFun = cb;
        }
      },
      /**
          * @param {Request~responseCallback} cb 响应拦截器，对响应数据做点什么
          * @param {Request~responseErrCallback} ecb 响应拦截器，对响应错误做点什么
          */
      response: function response(cb, ecb) {
        if (cb) {
          _this.requestComFun = cb;
        }
        if (ecb) {
          _this.requestComFail = ecb;
        }
      } });}_createClass(Request, [{ key: "requestBeforeFun", value: function requestBeforeFun(


    config) {
      return config;
    } }, { key: "requestComFun", value: function requestComFun(

    response) {
      return response;
    } }, { key: "requestComFail", value: function requestComFail(

    response) {
      return response;
    }

    /**
       * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
       * @param { Number } statusCode - 请求响应体statusCode（只读）
       * @return { Boolean } 如果为true,则 resolve, 否则 reject
       */ }, { key: "validateStatus", value: function validateStatus(
    statusCode) {
      return statusCode === 200;
    }

    /**
       * @Function
       * @param {Request~setConfigCallback} f - 设置全局默认配置
       */ }, { key: "setConfig", value: function setConfig(
    f) {
      this.config = f(this.config);
    }

    /**
       * @Function
       * @param {Object} options - 请求配置项
       * @prop {String} options.url - 请求路径
       * @prop {Object} options.data - 请求参数
       * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
       * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
       * @prop {Object} [options.header = config.header] - 请求header
       * @prop {Object} [options.method = config.method] - 请求方法
       * @returns {Promise<unknown>}
       */ }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this2 = this;var options,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                options.baseUrl = this.config.baseUrl;
                options.dataType = options.dataType || this.config.dataType;

                options.responseType = options.responseType || this.config.responseType;




                options.url = options.url || '';
                options.data = options.data || {};
                options.params = options.params || {};
                options.header = options.header || this.config.header;
                options.method = options.method || this.config.method;
                options.custom = _objectSpread({}, this.config.custom, {}, options.custom || {});



                options.getTask = options.getTask || this.config.getTask;return _context.abrupt("return",
                new Promise(function (resolve, reject) {
                  var next = true;
                  var cancel = function cancel() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : options;
                    var err = {
                      errMsg: t,
                      config: config };

                    reject(err);
                    next = false;
                  };

                  var handleRe = _objectSpread({}, _this2.requestBeforeFun(options, cancel));
                  var _config = _objectSpread({}, handleRe);
                  if (!next) return;
                  var requestTask = uni.request({
                    url: Request.mergeUrl(_config.url, _config.baseUrl, _config.params),
                    data: _config.data,
                    header: _config.header,
                    method: _config.method,



                    dataType: _config.dataType,

                    responseType: _config.responseType,




                    complete: function complete(response) {
                      response.config = handleRe;
                      if (_this2.validateStatus(response.statusCode)) {// 成功
                        response = _this2.requestComFun(response);
                        resolve(response);
                      } else {
                        response = _this2.requestComFail(response);
                        reject(response);
                      }
                    } });

                  if (handleRe.getTask) {
                    handleRe.getTask(requestTask, handleRe);
                  }
                }));case 12:case "end":return _context.stop();}}}, _callee, this);}));function request() {return _request.apply(this, arguments);}return request;}() }, { key: "get", value: function get(


    url) {var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = {};
      options.params = params;
      return this.request(_objectSpread({
        url: url,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }, { key: "put", value: function put(


    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'PUT' },
      options));

    } }, { key: "delete", value: function _delete(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE' },
      options));

    } }, { key: "connect", value: function connect(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'CONNECT' },
      options));

    } }, { key: "head", value: function head(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'HEAD' },
      options));

    } }, { key: "options", value: function options(




    url, data) {var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS' },
      _options));

    } }, { key: "trace", value: function trace(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'TRACE' },
      options));

    } }, { key: "upload", value: function upload(



    url, _ref)













    {var _this3 = this;var filePath = _ref.filePath,name = _ref.name,header = _ref.header,_ref$formData = _ref.formData,formData = _ref$formData === void 0 ? {} : _ref$formData,_ref$custom = _ref.custom,custom = _ref$custom === void 0 ? {} : _ref$custom,_ref$params = _ref.params,params = _ref$params === void 0 ? {} : _ref$params,getTask = _ref.getTask;
      return new Promise(function (resolve, reject) {
        var next = true;
        var globalHeader = _objectSpread({}, _this3.config.header);
        delete globalHeader['content-type'];
        delete globalHeader['Content-Type'];
        var pubConfig = {
          baseUrl: _this3.config.baseUrl,
          url: url,



          filePath: filePath,
          method: 'UPLOAD',
          name: name,
          header: header || globalHeader,
          formData: formData,
          params: params,
          custom: _objectSpread({}, _this3.config.custom, {}, custom),
          getTask: getTask || _this3.config.getTask };






        var cancel = function cancel() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pubConfig;
          var err = {
            errMsg: t,
            config: config };

          reject(err);
          next = false;
        };

        var handleRe = _objectSpread({}, _this3.requestBeforeFun(pubConfig, cancel));
        var _config = {
          url: Request.mergeUrl(handleRe.url, handleRe.baseUrl, handleRe.params),



          filePath: handleRe.filePath,
          name: handleRe.name,
          header: handleRe.header,
          formData: handleRe.formData,
          complete: function complete(response) {
            response.config = handleRe;
            if (typeof response.data === 'string') {
              response.data = JSON.parse(response.data);
            }
            if (_this3.validateStatus(response.statusCode)) {// 成功
              response = _this3.requestComFun(response);
              resolve(response);
            } else {
              response = _this3.requestComFail(response);
              reject(response);
            }
          } };






        if (!next) return;
        var requestTask = uni.uploadFile(_config);
        if (handleRe.getTask) {
          handleRe.getTask(requestTask, handleRe);
        }
      });
    } }, { key: "download", value: function download(

    url) {var _this4 = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        var next = true;
        var pubConfig = {
          baseUrl: _this4.config.baseUrl,
          url: url,
          method: 'DOWNLOAD',
          header: options.header || _this4.config.header,
          params: options.params || {},
          custom: _objectSpread({}, _this4.config.custom, {}, options.custom || {}),
          getTask: options.getTask || _this4.config.getTask };

        var cancel = function cancel() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pubConfig;
          var err = {
            errMsg: t,
            config: config };

          reject(err);
          next = false;
        };

        var handleRe = _objectSpread({}, _this4.requestBeforeFun(pubConfig, cancel));
        if (!next) return;
        var requestTask = uni.downloadFile({
          url: Request.mergeUrl(handleRe.url, handleRe.baseUrl, handleRe.params),
          header: handleRe.header,
          complete: function complete(response) {
            response.config = handleRe;
            if (_this4.validateStatus(response.statusCode)) {// 成功
              response = _this4.requestComFun(response);
              resolve(response);
            } else {
              response = _this4.requestComFail(response);
              reject(response);
            }
          } });

        if (handleRe.getTask) {
          handleRe.getTask(requestTask, handleRe);
        }
      });
    } }], [{ key: "posUrl", value: function posUrl(url) {/* 判断url是否为绝对路径 */return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);} }, { key: "mergeUrl", value: function mergeUrl(url, baseUrl, params) {var mergeUrl = Request.posUrl(url) ? url : "".concat(baseUrl).concat(url);if (Object.keys(params).length !== 0) {var paramsH = Request.addQueryString(params);mergeUrl += mergeUrl.includes('?') ? "&".concat(paramsH) : "?".concat(paramsH);}return mergeUrl;} }, { key: "addQueryString", value: function addQueryString(params) {var paramsData = '';Object.keys(params).forEach(function (key) {paramsData += key + '=' + encodeURIComponent(params[key]) + '&';});return paramsData.substring(0, paramsData.length - 1);} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {Function} request 请求拦截器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @property {Function} response 响应拦截器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @type {{request: Request.interceptor.request, response: Request.interceptor.response}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */ }]);return Request;}(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * setConfig回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {Object} - 返回操作后的config
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @callback Request~setConfigCallback
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} config - 全局默认config
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 请求拦截器回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @return {Object} - 返回操作后的config
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @callback Request~requestCallback
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Object} config - 全局config
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Function} [cancel] - 取消请求钩子，调用会取消本次请求
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 响应拦截器回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @return {Object} - 返回操作后的response
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @callback Request~responseCallback
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @param {Object} response - 请求结果 response
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 响应错误拦截器回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @return {Object} - 返回操作后的response
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @callback Request~responseErrCallback
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param {Object} response - 请求结果 response
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */exports.default = Request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 27 */
/*!***************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/api/login.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.refreshToken = exports.logout = exports.loginBySmsCode = exports.smsCode = exports.updatePassword = exports.authLogin = exports.mpWechatLogin = exports.wechatH5Login = exports.isBindingCheck = exports.loginByPass = exports.registerByPass = void 0; /**
                                                                                                                                                                                                                                                                                                                                            *@des 登录注册相关接口
                                                                                                                                                                                                                                                                                                                                            *@author stav stavyan@qq.com
                                                                                                                                                                                                                                                                                                                                            *@blog https://stavtop.club
                                                                                                                                                                                                                                                                                                                                            *@date 2019/11/15 15:14:47
                                                                                                                                                                                                                                                                                                                                            *@param login.js
                                                                                                                                                                                                                                                                                                                                            */

// 密码注册
var registerByPass = '/tiny-shop/v1/site/register';

// 密码登录
exports.registerByPass = registerByPass;var loginByPass = '/tiny-shop/v1/site/login';

// 微信授权登录
exports.loginByPass = loginByPass;var wechatH5Login = '/tiny-shop/v1/third-party/wechat';

// 微信小程序授权登录
exports.wechatH5Login = wechatH5Login;var mpWechatLogin = '/tiny-shop/v1/third-party/wechat-mp';

// 密码重置
exports.mpWechatLogin = mpWechatLogin;var updatePassword = '/tiny-shop/v1/site/up-pwd';

// 第三方绑定
exports.updatePassword = updatePassword;var authLogin = '/tiny-shop/v1/member/auth/create';

// 查询绑定状态
exports.authLogin = authLogin;var isBindingCheck = '/tiny-shop/v1/member/auth/is-binding';

// 手机号登录
exports.isBindingCheck = isBindingCheck;var loginBySmsCode = '/tiny-shop/v1/site/mobile-login';

// 获取手机验证码
exports.loginBySmsCode = loginBySmsCode;var smsCode = '/tiny-shop/v1/site/sms-code';

// 退出登录
exports.smsCode = smsCode;var logout = '/tiny-shop/v1/site/logout';

// 刷新token
exports.logout = logout;var refreshToken = '/tiny-shop/v1/site/refresh';exports.refreshToken = refreshToken;

/***/ }),
/* 28 */
/*!******************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/helper.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));var _router = _interopRequireDefault(__webpack_require__(/*! @/utils/router */ 17));
var _constData = _interopRequireDefault(__webpack_require__(/*! @/config/constData.config */ 23));
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
//常用方法集合
var _default = {
  /**
                  * toast提示
                  */
  toast: function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
    if (Boolean(title) === false) {
      return;
    }
    uni.showToast({
      title: title,
      duration: duration,
      mask: mask,
      icon: icon });

  },

  /**
      * 返回登录页面
      */
  backToLogin: function backToLogin() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var currentPage, params;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              // 存当前页面的地址
              currentPage = getCurrentPages()[getCurrentPages().length - 1];
              params = {};





              params.route = "/".concat(currentPage.$vm.__route__);
              params.query = currentPage.$vm.$mp && currentPage.$vm.$mp.query;_context.next = 6;return (





                uni.setStorageSync('backToPage', JSON.stringify(params)));case 6:_context.next = 8;return (
                uni.removeTabBarBadge({ index: _constData.default.cartIndex }));case 8:_context.next = 10;return (
                _store.default.commit('logout'));case 10:
              uni.showModal({
                content: '会话已过期，是否跳转登录页面？',
                success: function success(confirmRes) {
                  if (confirmRes.confirm) {
                    _router.default.push({ route: '/pages/public/logintype' });
                  }
                } });case 11:case "end":return _context.stop();}}}, _callee);}))();

  },
  /**
      * 返回上一页携带参数
      */
  prePage: function prePage(index) {
    var pages = getCurrentPages();
    var prePage = pages[pages.length - (index || 2)];



    return prePage.$vm;
  },

  /**
      * 开发环境全局打印日志
      * @param {Object} title
      */
  log: function log(title) {
    if ( true && Boolean(title) === true) {
      console.log(JSON.stringify(title));
    }
  },

  /**
      * 异步获取设备信息
      */
  getInfoAsync: function getInfoAsync() {
    return new Promise(function (resolve, reject) {
      plus.device.getInfo({
        success: function success(e) {
          resolve(e);
        },
        fail: function fail(e) {
          reject(e.message);
        } });

    });
  },

  /**
      * 安卓10不支持IMEI,则获取OAID
      */
  getOaidAsync: function getOaidAsync() {
    return new Promise(function (resolve, reject) {
      plus.device.getOAID({
        success: function success(e) {
          resolve(e);
        },
        fail: function fail(e) {
          reject(e.message);
        } });

    });
  },

  /**
      * 获取一个随机数
      * @param {Object} min
      * @param {Object} max
      */
  random: function random(min, max) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * min + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (max - min + 1) + min, 10);
        break;
      default:
        return 0;
        break;}

  },

  /**
      * 获取ios的IDFA
      */
  getIdfa: function getIdfa() {
    var idfa = '';
    try {
      if ('iOS' == plus.os.name) {
        var manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
        if (plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')) {
          var identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
          idfa = plus.ios.invoke(identifier, 'UUIDString');
          plus.ios.deleteObject(identifier);
        }
        plus.ios.deleteObject(manager);
      }
    } catch (e) {
      console.error('获取idfa失败');
    }
    return idfa;
  },

  /*
      * obj 转 params字符串参数
      * 例子：{a:1,b:2} => a=1&b=2
      */
  objParseParam: function objParseParam(obj) {
    var paramsStr = '';
    if (obj instanceof Array) return paramsStr;
    if (!(obj instanceof Object)) return paramsStr;
    for (var key in obj) {
      paramsStr += "".concat(key, "=").concat(obj[key], "&");
    }
    return paramsStr.substring(0, paramsStr.length - 1);
  },

  /*
      * obj 转 路由地址带参数
      * 例子：{a:1,b:2} => /pages/index/index?a=1&b=2
      */
  objParseUrlAndParam: function objParseUrlAndParam(path, obj) {
    var url = path || '/';
    var paramsStr = '';
    if (obj instanceof Array) return url;
    if (!(obj instanceof Object)) return url;
    paramsStr = this.objParseParam(obj);
    paramsStr && (url += '?');
    url += paramsStr;
    return url;
  },

  /*
      * 获取url字符串参数
      */
  getRequestParameters: function getRequestParameters(locationhref) {
    var href = locationhref || '';
    var theRequest = new Object();
    var str = href.split('?')[1];
    if (str != undefined) {
      var strs = str.split('&');
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
      }
    }
    return theRequest;
  },

  /**
      * 加密字符串
      */
  strEncode: function strEncode(str) {
    var key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var l = key.length;
    var a = key.split('');
    var s = '',b,b1,b2,b3;
    for (var i = 0; i < str.length; i++) {
      b = str.charCodeAt(i);
      b1 = b % l;
      b = (b - b1) / l;
      b2 = b % l;
      b = (b - b2) / l;
      b3 = b % l;
      s += a[b3] + a[b2] + a[b1];
    }
    return s;
  },

  /**
      * 解密字符串
      */
  strDecode: function strDecode(str) {
    var key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var l = key.length;
    var b,b1,b2,b3,d = 0,s;
    s = new Array(Math.floor(str.length / 3));
    b = s.length;
    for (var i = 0; i < b; i++) {
      b1 = key.indexOf(str.charAt(d));
      d++;
      b2 = key.indexOf(str.charAt(d));
      d++;
      b3 = key.indexOf(str.charAt(d));
      d++;
      s[i] = b1 * l * l + b2 * l + b3;
    }
    b = eval('String.fromCharCode(' + s.join(',') + ')');
    return b;
  },

  /**
      * 比较版本号
      */
  compareVersion: function compareVersion(reqV, curV) {
    if (curV && reqV) {
      var arr1 = curV.split('.'),
      arr2 = reqV.split('.');
      var minLength = Math.min(arr1.length, arr2.length),
      position = 0,
      diff = 0;
      while (position < minLength && (diff = parseInt(arr1[position]) - parseInt(arr2[position])) == 0) {
        position++;
      }
      diff = diff != 0 ? diff : arr1.length - arr2.length;
      if (diff > 0) {
        if (position == minLength - 1) {
          return 1;
        } else {
          return 2;
        }
      } else {
        return 0;
      }
    } else {
      console.log('版本号不能为空');
      return 0;
    }
  },

  /**
      * H5复制
      */
  h5Copy: function h5Copy(content) {
    var textarea = document.createElement('textarea');
    textarea.value = content;
    textarea.readOnly = 'readOnly';
    document.body.appendChild(textarea);
    textarea.select(); // 选择对象
    textarea.setSelectionRange(0, content.length); //核心
    var result = document.execCommand('Copy'); // 执行浏览器复制命令
    textarea.remove();
    return result;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 29 */
/*!************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/graceChecker.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 *@des 表单验证
 *@author stav stavyan@qq.com
 *@blog https://stavtop.club
 *@date 2019/11/15 10:55:56
 */
module.exports = {
  error: '',
  name: '',
  check: function check(data, rule) {
    for (var i = 0; i < rule.length; i++) {
      if (!rule[i].checkType) {
        return true;
      }
      if (!rule[i].name) {
        return true;
      }
      if (!rule[i].errorMsg) {
        return true;
      }
      if (data[rule[i].name] != 0 && !data[rule[i].name]) {
        this.name = rule[i].name;
        this.error = rule[i].errorMsg;
        return false;
      }
      switch (rule[i].checkType) {
        case 'string':
          var reg = new RegExp('^.{' + rule[i].checkRule + '}$');
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'int':
          var reg = new RegExp('^(-[1-9]|[1-9])[0-9]{' + rule[i].checkRule + '}$');
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
          break;
        case 'between':
          if (!this.isNumber(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          var minMax = rule[i].checkRule.split(',');
          minMax[0] = Number(minMax[0]);
          minMax[1] = Number(minMax[1]);
          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'betweenD':
          var reg = /^-?[1-9][0-9]?$/;
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          var minMax = rule[i].checkRule.split(',');
          minMax[0] = Number(minMax[0]);
          minMax[1] = Number(minMax[1]);
          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'betweenF':
          var reg = /^-?[0-9][0-9]?.+[0-9]+$/;
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          var minMax = rule[i].checkRule.split(',');
          minMax[0] = Number(minMax[0]);
          minMax[1] = Number(minMax[1]);
          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'same':
          if (data[rule[i].name] != rule[i].checkRule) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'notsame':
          if (data[rule[i].name] == rule[i].checkRule) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'email':
          var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'phoneno':
          var reg = /^1[0-9]{10,10}$/;
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'zipcode':
          var reg = /^[0-9]{6}$/;
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'reg':
          var reg = new RegExp(rule[i].checkRule);
          if (!reg.test(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'in':
          if (rule[i].checkRule.indexOf(data[rule[i].name]) == -1) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;
        case 'notnull':
          console.log("notnull?");
          if (data[rule[i].name] == null || data[rule[i].name].length < 1) {
            this.error = rule[i].errorMsg;
            this.name = rule[i].name;
            return false;
          }
          break;}

    }
    return true;
  },
  isNumber: function isNumber(checkVal) {
    var reg = /^-?[1-9][0-9]?.?[0-9]*$/;
    return reg.test(checkVal);
  } };

/***/ }),
/* 30 */
/*!*******************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/payment.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 8));




var _login = __webpack_require__(/*! @/api/login */ 27);
var _basic = __webpack_require__(/*! @/api/basic */ 31);
var _request = __webpack_require__(/*! @/utils/request */ 25);
var _helper = _interopRequireDefault(__webpack_require__(/*! @/utils/helper */ 28));
var _router = _interopRequireDefault(__webpack_require__(/*! @/utils/router */ 17));
var _product = __webpack_require__(/*! @/api/product */ 32);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =

{
  // 判断是否公众号（微信H5）
  isWechat: function isWechat() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/micromessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  },

  // wxjssdk
  wxConfigH5: function wxConfigH5() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var jsApiList;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!
              _this.isWechat()) {_context.next = 4;break;}
              jsApiList = JSON.stringify(['chooseWXPay']);_context.next = 4;return (
                _request.http.post("".concat(wechatConfig), {
                  url: $mConfig.hostUrl,
                  jsApiList: jsApiList, // 需要调用微信的原生方法
                  debug: false // 是否打开调试
                }).then(function (r) {
                  jweixin.config(_objectSpread({},
                  r.data));

                }));case 4:case "end":return _context.stop();}}}, _callee);}))();

  },

  /*
      *@des 微信支付
      *
      *@param order_group 订单:order;充值:recharge;
      *@param data 订单 {“order_id”:199} 充值 {“money”:100};
      */
  weixinPay: function weixinPay(order_group, data) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (































                _request.http.post("".concat(_login.isBindingCheck), {




                  oauth_client: 'wechatMp' }).

                then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                              _request.http.post("".concat(_basic.payCreate), {
                                order_group: order_group,
                                pay_type: 1,


                                //

                                trade_type: 'mini_program',

                                data: data,
                                openid: res.data.openid }).
                              then(function (r) {
















                                uni.requestPayment(_objectSpread({},
                                r.data.config, {
                                  timeStamp: r.data.config.timestamp,
                                  success: function success() {
                                    _helper.default.toast('支付成功');
                                    _router.default.push({ route: '/pages/user/money/success' });
                                  },
                                  fail: function fail(res) {
                                    _helper.default.toast('支付失败：' + res.errMsg);
                                  },
                                  complete: function complete() {
                                  } }));


                              }));case 2:case "end":return _context2.stop();}}}, _callee2);}));return function (_x) {return _ref.apply(this, arguments);};}()));case 2:case "end":return _context3.stop();}}}, _callee3);}))();


  },

  /*
      *@des 支付宝支付
      *
      *@param order_group 订单:order;充值:recharge;
      *@param data 订单 {“order_id”:199} 充值 {“money”:100};
      */
  aliPay: function aliPay(order_group, data) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:





              _helper.default.toast('微信小程序不支持支付宝充值');return _context4.abrupt("return");case 4:case "end":return _context4.stop();}}}, _callee4);}))();






























  },

  /*
      *@des 余额支付
      *
      *@param data 支付参数
      */
  balancePay: function balancePay(data) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                _request.http.post("".concat(_product.orderPay), {
                  order_group: 'order',
                  trade_type: 'js',
                  pay_type: 5,
                  data: data }).
                then(function () {
                  _helper.default.toast('支付成功~');
                  _router.default.push({ route: '/pages/user/money/success' });
                }));case 2:case "end":return _context5.stop();}}}, _callee5);}))();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 31 */
/*!***************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/api/basic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.notifyAnnounceView = exports.notifyAnnounceIndex = exports.wechatConfig = exports.configList = exports.payCreate = exports.advList = exports.transmitCreate = exports.collectDel = exports.collectCreate = exports.provinceList = void 0; /**
                                                                                                                                                                                                                                                                                                                              *@des 公用基础
                                                                                                                                                                                                                                                                                                                              *@author stav stavyan@qq.com
                                                                                                                                                                                                                                                                                                                              *@blog https://stavtop.club
                                                                                                                                                                                                                                                                                                                              *@date 2019/11/19 14:56:57
                                                                                                                                                                                                                                                                                                                              *@param registerByPass
                                                                                                                                                                                                                                                                                                                              */

// 获取省市区列表
var provinceList = '/tiny-shop/v1/common/provinces/index';
// 收藏商品
exports.provinceList = provinceList;var collectCreate = '/tiny-shop/v1/common/collect/create';
// 删除收藏商品
exports.collectCreate = collectCreate;var collectDel = '/tiny-shop/v1/common/collect/delete';

// 分享/转发
exports.collectDel = collectDel;var transmitCreate = '/tiny-shop/v1/common/transmit/create';

// 广告
exports.transmitCreate = transmitCreate;var advList = '/tiny-shop/v1/common/adv/index';

// 配置
exports.advList = advList;var configList = '/tiny-shop/v1/common/config/index';

// 充值
exports.configList = configList;var payCreate = '/tiny-shop/v1/common/pay/create';

// 充值配置
exports.payCreate = payCreate;var wechatConfig = '/tiny-shop/v1/third-party/wechat-js-sdk';

// 公告
// 公告列表
exports.wechatConfig = wechatConfig;var notifyAnnounceIndex = '/tiny-shop/v1/common/notify-announce/index';
// 公告详情
exports.notifyAnnounceIndex = notifyAnnounceIndex;var notifyAnnounceView = '/tiny-shop/v1/common/notify-announce/view';exports.notifyAnnounceView = notifyAnnounceView;

/***/ }),
/* 32 */
/*!*****************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/api/product.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.discountProductIndex = exports.wholesaleGroupState = exports.wholesaleView = exports.wholesaleIndex = exports.wholesaleProductIndex = exports.cartItemCount = exports.cartItemUpdateSku = exports.orderProductExpressDetails = exports.orderPreview = exports.evaluateList = exports.orderFreightFee = exports.orderPay = exports.orderClose = exports.orderCreate = exports.cartItemUpdateNum = exports.cartItemClear = exports.cartItemDel = exports.cartItemList = exports.cartItemCreate = exports.productDetail = exports.guessYouLikeList = exports.productList = exports.productCateList = exports.productCate = exports.indexList = void 0; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *@des 产品营销
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *@author stav stavyan@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *@blog https://stavtop.club
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *@date 2019/11/18 13:57:54
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
// 首页列表
var indexList = '/tiny-shop/v1/index/index';
// 产品分类列表
exports.indexList = indexList;var productCate = '/tiny-shop/v1/product/cate/index';
// 首页推荐分类
exports.productCate = productCate;var productCateList = '/tiny-shop/v1/product/cate/list';
// 产品列表
exports.productCateList = productCateList;var productList = '/tiny-shop/v1/product/product/index';
// 产品详情
exports.productList = productList;var productDetail = '/tiny-shop/v1/product/product/view';
// 猜你喜欢
exports.productDetail = productDetail;var guessYouLikeList = '/tiny-shop/v1/product/product/guess-you-like';
// 添加购物车
exports.guessYouLikeList = guessYouLikeList;var cartItemCreate = '/tiny-shop/v1/member/cart-item/create';
// 购物车列表
exports.cartItemCreate = cartItemCreate;var cartItemList = '/tiny-shop/v1/member/cart-item/index';
// 购物车列表
exports.cartItemList = cartItemList;var cartItemCount = '/tiny-shop/v1/member/cart-item/count';
// 删除购物车商品
exports.cartItemCount = cartItemCount;var cartItemDel = '/tiny-shop/v1/member/cart-item/delete-ids';
// 清空购物车
exports.cartItemDel = cartItemDel;var cartItemClear = '/tiny-shop/v1/member/cart-item/clear';
// 修改购物车商品数量
exports.cartItemClear = cartItemClear;var cartItemUpdateNum = '/tiny-shop/v1/member/cart-item/update-num';
// 修改购物车商品sku
exports.cartItemUpdateNum = cartItemUpdateNum;var cartItemUpdateSku = '/tiny-shop/v1/member/cart-item/update-sku';

// 订单创建
exports.cartItemUpdateSku = cartItemUpdateSku;var orderCreate = '/tiny-shop/v1/order/order/create';
// 订单预览
exports.orderCreate = orderCreate;var orderPreview = '/tiny-shop/v1/order/order/preview';

// 取消未支付订单
exports.orderPreview = orderPreview;var orderClose = '/tiny-shop/v1/member/order/close';
// 订单支付
exports.orderClose = orderClose;var orderPay = '/tiny-shop/v1/common/pay/create';
// 选择快递运费计算
exports.orderPay = orderPay;var orderFreightFee = '/tiny-shop/v1/order/order/freight-fee';

// 商品评价列表
exports.orderFreightFee = orderFreightFee;var evaluateList = '/tiny-shop/v1/product/evaluate/index';

// 商品评价列表
exports.evaluateList = evaluateList;var orderProductExpressDetails = '/tiny-shop/v1/member/order-product-express/details';

// 拼团
// 拼团产品
exports.orderProductExpressDetails = orderProductExpressDetails;var wholesaleProductIndex = '/tiny-shop/v1/marketing/wholesale-product/index';
// 开团列表
exports.wholesaleProductIndex = wholesaleProductIndex;var wholesaleIndex = '/tiny-shop/v1/marketing/wholesale/index';
// 开团详情
exports.wholesaleIndex = wholesaleIndex;var wholesaleView = '/tiny-shop/v1/marketing/wholesale/view';

// 开团详情
exports.wholesaleView = wholesaleView;var wholesaleGroupState = '/tiny-shop/v1/marketing/wholesale/group-state';

// 限时折扣
// 限时折扣列表
exports.wholesaleGroupState = wholesaleGroupState;var discountProductIndex = '/tiny-shop/v1/marketing/discount-product/index';exports.discountProductIndex = discountProductIndex;

/***/ }),
/* 33 */
/*!**********************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/config/aopConfig.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//定义aop配置文件

/**
 * 方法前的切面方法
 * @param {Object} beforefn
 */
Function.prototype.before = function (beforefn) {
  var _self = this; //保存原函数引用
  return function () {//返回包含了原函数和新函数的"代理函数"
    beforefn.apply(this, arguments); //执行新函数，修正this
    return _self.apply(this, arguments); //执行原函数
  };
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
  };
};


console.log("aop配置已开启");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/*!********************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/components/uni-icons/icons.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!***********************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/pages/map/mapData.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _assetsConfig = _interopRequireDefault(__webpack_require__(/*! ../../config/assets.config.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  model: "info",
  editModel: "add",
  isLoading: false,
  showImg: true,
  popupType: "bottom",
  popupInfoList: [{
    cuIcon: 'time',
    color: 'olive',
    title: "定位时间" },
  {
    cuIcon: 'location',
    color: 'olive',
    title: "定位地址" },
  {
    cuIcon: 'footprint',
    color: 'olive',
    title: "距离本手机" }],

  mapContext: null,
  windowHeight: 0,
  windowWidth: 0,
  noSelectIcon: _assetsConfig.default.locationImg,
  muchang: _assetsConfig.default.muchang,
  array: ['中国-台湾-香港', '美国-旧金山-铁山大桥', '巴西-跑马场', '日本-红灯区'],
  index: 0,
  enableSatellite: true,
  controlList: [],
  markers: [], //点标记
  recordMarkers: [{
    id: 112,
    type: "record",
    latitude: 39.77265852521458,
    longitude: 116.37371063232422,
    title: '摄像头',
    zIndex: '1',
    iconPath: _assetsConfig.default.recordImg,
    rotate: 0,
    width: 20,
    height: 20,
    anchor: {
      x: 0.5,
      y: 1 },

    callout: {
      content: '摄像头',
      color: '#586e84',
      fontSize: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#00BFFF',
      bgColor: '#1dececc4',
      padding: '0.5',
      display: 'ALWAYS' } },


  {
    id: 113,
    type: "record",
    latitude: 39.73729032077588,
    longitude: 116.34933471679688,
    title: '摄像头',
    zIndex: '1',
    iconPath: _assetsConfig.default.recordImg,
    rotate: 0,
    width: 20,
    height: 20,
    anchor: {
      x: 0.5,
      y: 1 },

    callout: {
      content: '摄像头2',
      color: '#586e84',
      fontSize: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#00BFFF',
      bgColor: '#1dececc4',
      padding: '0.5',
      display: 'ALWAYS' } }],

  //视频的点标记
  cacheMarkers: [], //点标记的缓存
  //多边形的数据
  polygons: [{
    points: [{
      latitude: 39.781892,
      longitude: 116.293413 },

    {
      latitude: 39.787600,
      longitude: 116.391842 },

    {
      latitude: 39.733187,
      longitude: 116.417932 },

    {
      latitude: 39.704653,
      longitude: 116.338255 }],


    fillColor: '#26a4e06e',
    strokeWidth: 3,
    strokeColor: '#26a4e0',
    zIndex: 11 }],

  //点标记的模板
  markerDemo: {
    id: null,
    latitude: null,
    longitude: null,
    zIndex: '1',
    iconPath: _assetsConfig.default.circleImg,
    rotate: 0,
    width: 30,
    height: 30,
    anchor: {
      x: 0.5,
      y: 0.5 } },


  //信息的控件data数据
  controlListInfo: [{
    id: 1,
    img: _assetsConfig.default.weixin,
    tap: function tap(e) {
      this.img = (e.enableSatellite = this.img != _assetsConfig.default.weixin) ? _assetsConfig.default.weixin : _assetsConfig.default.jichu;
      console.log("this", e);
    } },

  {
    id: 2,
    img: _assetsConfig.default.messageImg,
    tap: function tap(e) {
      e.$mHelper.toast("点击了信息模块");
    } },

  {
    id: 3,
    img: _assetsConfig.default.editImg,
    tap: function tap(e) {
      e.model = "edit";
      e.cacheMarkers = e.markers;
      e.controlList = e.controlListEdit;
      var pionts = e.polygons[0].points;
      e.markers = pionts.map(function (p, i) {
        p.markerId = i;
        var demo = _objectSpread({}, e.markerDemo);var _ref =
        [p.latitude, p.longitude, i];demo.latitude = _ref[0];demo.longitude = _ref[1];demo.id = _ref[2];
        return demo;
      });
      console.log(e.polygons[0].points);
    } }],

  //修改的控件data数据
  controlListEdit: [{
    id: 1,
    img: _assetsConfig.default.add,
    type: "add",
    typeStr: "添加",
    tap: function tap(e) {
      e.eidtClick(this);
    } },

  {
    id: 2,
    img: _assetsConfig.default.update,
    type: "update",
    typeStr: "修改",
    tap: function tap(e) {
      e.eidtClick(this);
    } },

  {
    id: 3,
    img: _assetsConfig.default.del,
    type: "del",
    typeStr: "删除",
    tap: function tap(e) {
      e.eidtClick(this);
    } },

  {
    id: 4,
    img: _assetsConfig.default.fanhui,
    tap: function tap(e) {
      e.model = "info";
      e.controlList = e.controlListInfo;
      e.markers = e.cacheMarkers;
    } }] };exports.default = _default;

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/*!*****************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/ThorUI组件库后台模板/utils/utils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 时间格式的转化
 * @param {Object} time
 */
function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;

  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
}

/**
   * aop方法的自定义注入
   */
function aop(arr) {var isAllow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {return false;};var beforeFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};var afterFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
  if ((arr instanceof Object || arr instanceof Array) &&
  beforeFn instanceof Function && afterFn instanceof Function) {
    for (var i in arr) {
      if (isAllow.apply(this, [arr, i].concat(Array.prototype.slice.call(arguments)))) {
        arr[i] = arr[i].before(beforeFn).after(afterFn);
      }
    }
    console.log("aop自定义方法注入初始化完毕");
  } else {
    console.log("参数不对");
  }

}

/**
   * 表单自动填充数据
   * @param {Object} data
   * @param {Object} arr
   */
function hanleValue(data, arr) {
  for (var i in data) {
    var target = arr.find(function (f) {return f.name == i;});
    if (target) {
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
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.') };

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
    '秒': 1000 },

  humanize: function humanize(milliseconds) {
    var humanize = '';
    for (var key in this.UNITS) {
      if (milliseconds >= this.UNITS[key]) {
        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
        break;
      }
    }
    return humanize || '刚刚';
  },
  format: function format(dateStr) {
    var date = this.parse(dateStr);
    var diff = Date.now() - date.getTime();
    if (diff < this.UNITS['天']) {
      return this.humanize(diff);
    }
    var _format = function _format(number) {
      return number < 10 ? '0' + number : number;
    };
    return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
    _format(date.getHours()) + ':' + _format(date.getMinutes());
  },
  parse: function parse(str) {//将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
    var a = str.split(/[^0-9]/);
    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
  } };


module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  dateUtils: dateUtils,
  aop: aop,
  hanleValue: hanleValue };

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map