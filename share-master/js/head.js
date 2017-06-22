
	function size(){
		var ow=0;
		ow=$(window).width()>720?720:$(window).width();
		$("html").css("fontSize",ow/160*7+"px");
		var oL=$(window).width()>720?($(window).width()-720)/2:0;
		$(".head").css("left",oL+"px");
		$(".con").css({
			"minHeight":$(window).height()+"px"
		})
	}
	$(function(){
		size();
	})
	$(window).resize(function(){
		size();
	})


	function hide1(){
		$(".dTc_bg").hide();
		$(".dTc_android").hide();
		$(".dTc_iphone").hide();
	}
	$(".dTc_android").click(function(){
		hide1();
	})
	$(".dTc_iphone").click(function(){
		hide1();
	})

function isweixin(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.indexOf("micromessenger")!=-1){
		return true;//是微信浏览器
	}
	else{
		return false;//不是微信浏览器
	}
  
}
function testApp(url) {  
    var timeout, t = 200, hasApp = true;  
    setTimeout(function (e) {  
        if (hasApp) {  
            // alert('1');  
        } else {  
        	if(isweixin()){
        		$(".dTc_bg").show();

				if(device.android()){
					$(".dTc_android").show();
				}
				else if(device.iphone()||device.ipad()||device.ipod()){
					$(".dTc_iphone").show();
				}
				
				e.preventDefault();
        	}
        	else{
        		window.location.href="http://m.iauto360.cn/";
        	}
           
        }  
        document.body.removeChild(ifr);  
    },500)  
  
    var t1 = Date.now();  
    var ifr = document.createElement("iframe");  
    ifr.setAttribute('src', url);  
    ifr.setAttribute('style', 'display:none');  
    document.body.appendChild(ifr);  
    timeout = setTimeout(function () {  
         var t2 = Date.now();  
         if (!t1 || t2 - t1 < t + 100) {  
             hasApp = false;  
         }  
    }, t);  
}  