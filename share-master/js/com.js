$(function(){
	var ow=0;
	function size(){
		ow=$(window).width()>720?720:$(window).width();
		$("html").css("fontSize",ow/160*7+"px");
	}
	size();
	$(window).resize(function(){
		size();
	})
})