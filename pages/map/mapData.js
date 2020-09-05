import Assets from '../../config/assets.config.js'
export default{
	option:{
		mode:""
	},
	windowHeight:"100%",
	model:"info",
	isMapInput:false,
	MapInputList:[],
	mapInputValue:"",
	editModel:" ",
	isLoading:false,
	showImg: true,
	popupType:"bottom",
	popupInfoList:[{
		cuIcon: 'time',
		color: 'olive',
		title: "定位时间"
	},{
		cuIcon: 'location',
		color: 'olive',
		title: "定位地址"
	},{
		cuIcon: 'footprint',
		color: 'olive',
		title: "距离本手机"
	}],
	mapContext:null,				  //地图的原生对象

	noSelectIcon:Assets.locationImg,  //没有选中的地图图标样式(修改模式)
	muchang:Assets.muchang,           //右上角的picker组件的图标内容
	array: [],						  //右上角的picker组件的数据内容
	index: 0,						  //右上角的picker组件的选中下标
	enableSatellite:true,			  //卫星地图是否开启
	controlList:[],					  //左上角控件的集合
	markers: [],                      //点标记
	recordMarkers:[],                 //视频的点标记
	cacheMarkers:[],                  //点标记的缓存
	polygons:[{				          //多边形的数据
	   points: [],
		fillColor: '#26a4e06e',
		strokeWidth: 3,
		strokeColor: '#26a4e0',
		zIndex: 11
	}],                   
	markerDemo:{					  //点标记的模板
						id: null,
						latitude: null,
						longitude: null,
						zIndex: '1',
						iconPath:Assets.circleImg,
						rotate: 0,
						width: 30,
						height: 30,
						anchor: {
							x: 0.5,
							y: 0.5
						}
				},	
	controlListInfo:[{                 //初始化的控件data数据
			 id:1,
		     img:Assets.weixin,
			 tap(e){
				this.img =(e.enableSatellite=(this.img != Assets.weixin  ))?Assets.weixin:Assets.jichu;
				console.log("this",e);
			 }
		 },
		 {
		 	 id:2,
		     img:Assets.messageImg,
			 badge:15,
		 	 tap(e){
				e.$mRouter.push({route: `/pages/index/info/info`})
		 	 }
		  },
		{
			id:3,
			img:Assets.editImg,
			tap(e){
				e.model = "edit";
				e.cacheMarkers = e.markers;
				e.controlList = e.controlListEdit;
				let pionts = e.polygons[0].points;
				e.markers = pionts.map((p,i)=>{	
				  p.markerId = i;
				  let demo = {...e.markerDemo};	  
				  [demo.latitude,demo.longitude,demo.id] = [p.latitude,p.longitude,i]; 	
				  return demo;
				});
				console.log(e.polygons[0].points)
			}	
		},],
	//修改的控件data数据
	controlListEdit:[{
						 id:1,
						 img:Assets.add,
						 type:"add",
						 typeStr:"添加",
						 tap(e){
				            e.eidtClick(this);
						 }
		             },
					 {
						 id:2,
						 img:Assets.update,
						 type:"update",
						 typeStr:"修改",
						 tap(e){
							e.eidtClick(this);
						 }
					 },
					{
						 id:3,
						 img:Assets.del,
						 type:"del",
						 typeStr:"删除",
						 tap(e){
							e.eidtClick(this);
						 }
					},
					{
						 id:4,
						 img:Assets.fanhui,
						 tap(e){
							e.model = "info";
							e.controlList = e.controlListInfo;
							e.markers = e.cacheMarkers;
						 }
					}],	
}