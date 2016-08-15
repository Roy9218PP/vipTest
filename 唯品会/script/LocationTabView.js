function LocationTabView() {

	TabView.call(this)
}

//实现原型链继承
LocationTabView.prototype = Object.create(TabView.prototype)

LocationTabView.prototype.constructor = LocationTabView

/*
 * 重写父类的load方法
 */
LocationTabView.prototype.load = function(index) {

	//部分重写
	TabView.prototype.load.call(this, index)

	var locationDiv = document.querySelector('.header-location')

	console.log(locationDiv)
	
	this.left = locationDiv.getBoundingClientRect().left + 'px'

	this.top = locationDiv.getBoundingClientRect().bottom + 'px'
	
	$(window).resize(function(){
		
		this.left = locationDiv.getBoundingClientRect().left + 'px'

	    this.top = locationDiv.getBoundingClientRect().bottom + 'px'
		
	}.bind(this))
	
	
	if(this.$tab){
		
		this.$tab.show().css({
			
				left: this.left,
		top: this.top
		})
		
		return
	}

	//创建locationTabView的界面
	this.$tab = $("<div class='locationBox'>").css({

		border: '1px solid silver',
		backgroundColor: 'white',
		position: 'absolute',
		left: this.left,
		top: this.top

	}).appendTo($('body')).append($("<ul class='cityList'>").css({

		listStyleType: 'none'
			//padding:0
	})).hover(function(){
		
		$(this).show()
		
	},function(){
		
		$(this).hide()
	})
	

	
	for(var keyName in this.datas) {

		var aLi = $("<li>").append($("<span>").css({

			display: 'inline-block',
			color: normalTextColor,
			fontSize: '0.8rem',
			width: '20px',
			textAlign: 'center',
			lineHeight: '25px'

		}).text(keyName)).appendTo($('.cityList'))

		//根据ABCD获取ABCD对应的城市数组
		var cities = this.datas[keyName]

		var lastClickSpan = 0
		
		for(var i = 0; i < cities.length; i++) {

			var title = cities[i]

			$("<span>").css({

				color: normalTextColor,
				fontSize: '0.8rem',
				padding: '0 5px',
				textAlign: 'left',
				lineHeight: '25px'

			}).text(title).appendTo(aLi).click(function(){
				$('.header-location a').text($(this).text())
				
				$(this).css({
					
					backgroundColor:skinColor,
					color:'white'
				}).addClass('clicked')
				
				$(lastClickSpan).css({
					
					backgroundColor:'',
					color:normalTextColor,
					
				}).removeClass('clicked')
				
				
				lastClickSpan = $(this)
				
				
			}).hover(function(){
				
				if($(this).attr('class') == 'clicked'){
					$(this).css('color','white')
				}
				else{
					$(this).css('color',skinColor)
				}
				
				
			},function(){
				
				if($(this).attr('class') == 'clicked'){
					
					$(this).css('color','white')
				}
				else{
					
					$(this).css('color',normalTextColor)
				}
				
			})
		}

	}

}