import Assets from '../../config/assets.config.js'
export default{
	//多边形的数据demo
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
	//视频的点标记的模板
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
		}],
		
	 //右上角的picker的选项目录					
	 array: ['中国-台湾-香港', '美国-旧金山-铁山大桥', '巴西-跑马场', '日本-红灯区'],
	 

}