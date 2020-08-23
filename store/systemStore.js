import Vue from 'vue'
import Vuex from 'vuex'

import $mRoutesConfig from '@/config/routes.config'
import $mRouter from '@/utils/router'

const systemInfo = uni.getStorageSync('systemInfo') || '';

export default{
    state:{
        //系统相关信息
        systemInfo:systemInfo,
       },
       getters:{
           getSystemInfo(state,provider){
              return state.systemInfo[provider];
           }
       },
       mutations:{//相当于methods,定义一些方法(同步)。方法里有个默认参数--state
			setSystemInfo(state, provider) {
				state.systemInfo = provider;
			}
       },
       actions:{//异步操作（也可以定义同步方法）。提交mutation，而不是直接变更状态。

       }
}