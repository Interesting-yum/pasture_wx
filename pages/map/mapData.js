import Assets from '../../config/assets.config.js'
export default{
	model:"info",
	editModel:"add",
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
	mapContext:null,
	windowHeight:0,
	windowWidth:0,
	noSelectIcon:Assets.locationImg,
	muchang:Assets.muchang,
	array: ['中国-台湾-香港', '美国-旧金山-铁山大桥', '巴西-跑马场', '日本-红灯区'],
	index: 0,
	enableSatellite:true,
	controlList:[],	
	markers: [],                      //点标记
	recordMarkers:[{
							id: 112,
							type:"record",
							latitude: 39.77265852521458,
							longitude: 116.37371063232422,
							title: '摄像头',
							zIndex: '1',
							iconPath: Assets.recordImg,
							rotate: 0,
							width: 20,
							height: 20,
							anchor: {
								x: 0.5,
								y: 1
							},
							callout: {
								content: '摄像头',
								color: '#586e84',
								fontSize: 10,
								borderRadius: 4,
								borderWidth: 1,
								borderColor: '#00BFFF',
								bgColor: '#1dececc4',
								padding: '0.5',
								display: 'ALWAYS'
							}
						},
						{
												id: 113,
												type:"record",
												latitude: 39.73729032077588,
												longitude: 116.34933471679688,
												title: '摄像头',
												zIndex: '1',
												iconPath: Assets.recordImg,
												rotate: 0,
												width: 20,
												height: 20,
												anchor: {
													x: 0.5,
													y: 1
												},
												callout: {
													content: '摄像头2',
													color: '#586e84',
													fontSize: 10,
													borderRadius: 4,
													borderWidth: 1,
													borderColor: '#00BFFF',
													bgColor: '#1dececc4',
													padding: '0.5',
													display: 'ALWAYS'
												}
											}],                 //视频的点标记
	cacheMarkers:[],                  //点标记的缓存
	//多边形的数据
	polygons:[{
	   points: [{
				latitude: 39.781892,
				longitude: 116.293413
			},
			{
				latitude: 39.787600,
				longitude: 116.391842
			},
			{
				latitude: 39.733187,
				longitude: 116.417932
			},
			{
				latitude: 39.704653,
				longitude: 116.338255
			}
		],
		fillColor: '#26a4e06e',
		strokeWidth: 3,
		strokeColor: '#26a4e0',
		zIndex: 11
	}],
	//点标记的模板
	markerDemo:{
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
	//信息的控件data数据
	controlListInfo:[{
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
		 	 tap(e){
		 		e.$mHelper.toast("点击了信息模块")
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