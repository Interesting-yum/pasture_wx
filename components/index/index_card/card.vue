<template>
  <div class="hm-task-card ">
<!-- 	 <image class="fixed" src="../../../static/index/card/cardbg2.jpg">
		 
	 </image> -->
    <div class="box shadow-warp radius   bg-purple ">
      <text class="title nav-title">{{ options.title }}</text>
	   <text class="time">{{ options.time }}</text>
      <div class="submain ">
        <div class="block text-blue">
          <div class="shiliangzhinengduixiangWrap cardItem">
            <text class="cuIcon-babyfill  cardTcon" ></text>
          </div>
		  <text  >已到：{{ options.num }}</text>
        </div>
        <div class="priceWrap" style="margin-left: 5%;" >
          <div class="youhuiquanWrap cardItem">
             <text class="cuIcon-warn  cardTcon" ></text>
          </div>
		   <text  >未到：{{ options.price }}</text>
        </div>
      </div>
      <div class="main ">
        <div class="container">
          <div class="webduanzhifuyemiantubiaoWrap cardItem">
             <text class="cuIcon-focus  cardTcon" ></text>
          </div>
		   <text  >总数：{{ options.confirmed }}</text>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HmTaskCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-task-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          title: '牲畜签到',
          tag: '家务活',
          time: new Date().toLocaleDateString(),
          num: '2',
          minutesAgo: '分钟前',
          price: '34',
          confirmed: '75',
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
	
@import './index.response.css';
.cardTcon{
	font-size: 30px;
}
</style>
