import Vue from 'vue'
import Vuex from 'vuex'

import $mRoutesConfig from '@/config/routes.config'
import $mRouter from '@/utils/router'
//获取QQ地图的对象
var QQMapWX = require('@/common/qqmap-wx-jssdk.min.js'); // 引入SDK核心类
const qqmapsdk = new QQMapWX({ // 实例化API核心类
    key: 'YPEBZ-2ASWP-FSYDN-V6OJB-OQXR7-7CFQQ' 
});
//获取系统信息
const systemInfo = uni.getStorageSync('systemInfo') || '';


export default{
    state:{
        //系统相关信息
        systemInfo:systemInfo,
		qqmapsdk:qqmapsdk,
		location:location,
       },
       getters:{
           getSystemInfo(state,provider){
              return state.systemInfo[provider];
           },
		   getQqmapsdk(){
			   return state.qqmapsdk;
		   },
		   getLocation(){
			   return state.location;
		   },
       },
       mutations:{//相当于methods,定义一些方法(同步)。方法里有个默认参数--state
			setSystemInfo(state, provider) {
				state.systemInfo = provider;
			},
			setQqmapsdk(state, provider) {
				state.qqmapsdk = provider;
			},
			setLocation(state,provider){
				state.location = provider;
			},
       },
       actions:{//异步操作（也可以定义同步方法）。提交mutation，而不是直接变更状态。
            locationChange({commit}, location) {
				console.log("locationChange","?")
                commit('setLocation', location);
            },
       }
}