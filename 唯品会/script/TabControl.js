
//主题颜色
var skinColor = '#F10180';
//基本字体
var baseFontSize = '15px';
//固定宽度
var baseWidth = '1000px';

//正常的文本颜色
var normalTextColor =  '#666666';

function TabControl(){
	
	this.locTabView = new LocationTabView()
	
	this.control()
}

TabControl.prototype.control = function(){
	
	//监听定位的标签触发悬停事件
	$('.header-location').hover(function(){
		
		this.locTabView.load(0)
		
	}.bind(this))
}
