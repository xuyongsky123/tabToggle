/**
	方法名：tabToggle
	参数：options={
		menu:菜单容器class名,
		container:内容容器，统一class名
	}
	
*/

;(function($){
	$.fn.tabToggle = function(options){

		var defaultData = {
			menu:'tab_menu',
			container:'single_tab'
		};//default data

		var obj = $.extend(defaultData,options);

		var item = $('.'+defaultData.menu).find('li');

		item.bind('click',function(){

			$(this).addClass('active_item').siblings().removeClass('active_item');

			var number = $(this).index();
			$('.'+defaultData.container+':eq('+number+')').show().siblings().hide();

		});
	}
})(jQuery);