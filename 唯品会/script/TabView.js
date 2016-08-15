function TabView(){
	
	this.tabDatas = TabView.tabViewDatas.datas
}

TabView.prototype.load = function(index){
	
	this.datas = this.checkDatas(index)
}

TabView.prototype.checkDatas = function(index){
	
	if(index == 0){
		
		//获取城市列表的数据
		var locationDatas = this.tabDatas[0].userLocation
	
		
		return locationDatas
	}
	
}