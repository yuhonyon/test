$(function(){
	var ow1=0;
	function size(){
	    ow1=$(window).width()>720?720:$(window).width();
	    $("html").css("fontSize",ow1/160*7+"px");
	}
	size();
	$(window).resize(function(){
	    size();
	})
	
	document.body.addEventListener('touchstart', function() {});
	FastClick.attach(document.body);
})