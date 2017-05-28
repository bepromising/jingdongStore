/*** 大圖顯示出 ***/
$(function(){
	/*** 大圖顯示出 ***/
	$(".img-hover").each(function(){
		var i = $(".img-hover").index(this) + 1;
		
		$(this).mouseover(function(){
			$(this).css("border","2px solid #861d1d");
			$(this).siblings().css("border","2px solid transparent");
			$("#datu-pro").attr("src","img/datu0"+i+".png");
			$("#chaodatu").attr("src","img/chaodatu0"+i+".png");
		});			
	});
	
	
	/*** 送至地點 ***/
	$(".item").each(function(){
		var i = $(".item").index(this);
		$(this).click(function(){
			var citytext = $(".item").eq(i).text();
			$("#city").text(citytext);
		});
	});
	
	huadong();
	denglu();
	
	/*** 購買數量  ***/
	$("#jia").click(function(){
		var value = $(".buy-num");
	    var n = parseInt(value.val()) + 1 ;
	    var m = n.toString();
	    $("#jian").css("color","#666");
	    $("#jian").css("cursor","pointer");
	    if( n >= 10 ){
			value.val(10);
			$("#jia").css("cursor","not-allowed");
			$("#jia").css("color","#ccc");
		}else{
		    value.val(m);	
		}
	});
	
	$("#jian").click(function(){
		var value = $(".buy-num");
	    var n = parseInt(value.val()) - 1 ;
	    var m = n.toString();
	    $("#jia").css("color","#666");
	    $("#jia").css("cursor","pointer");
	    if( n <= 1){
			value.val(1);
			$("#jian").css("cursor","not-allowed");
			$("#jian").css("color","#ccc");
		}else{
		    value.val(m);	
		}
	});
	/*** 購買數量  ***/
	
	
	/*** 圖片上下翻 ***/
	$("#xiafan").click(function(){
		$("#track-con ul").animate({top:"-190px"},600,function(){
		     $("#track-con ul>li").eq(0).appendTo($("#track-con ul"));
		     $("#track-con ul").css('top','0px');
		});
	});
	$("#shangfan").click(function(){
		     $("#track-con ul").css('top','-190px');
		     $("#track-con ul>li").eq(4).prependTo($("#track-con ul"));
		     $("#track-con ul").animate({top:"0px"},600);
	});
	
	
})

/*** 導航滑動塊 ***/
	var huadong = function(){
		var ihuadong = $("#navitem i");
		var aaa = $("#navitem li a:first");
		
		ihuadong.css({
			'width':aaa.width()-20,
			'left' :parseInt(aaa.position().left) + 10 + "px"
		});
		
		$("#navitem li").hover(function(){
			if(ihuadong.css('display') == 'none'){
				ihuadong.show();
			};
			
			ihuadong.stop().animate({
				width: $(this).width()-20,
				left : parseInt($(this).position().left) + 10 + 'px'
			},300);			
		});
		
		$("#navitem li").on("mouseleave.fffff",function(){
			ihuadong.stop().animate({
				width: $("#wwid").val(),
				left : $("#llt").val()
			},300);
		});
		
		$("#navitem li").click(function(){
		    var wid = parseInt($(this).width()) - 20;
		    $("#wwid").val(wid);
		    var lt  = parseInt($(this).position().left)+ 10 + "px";
		    $("#llt").val(lt);
		    ihuadong.css("width","wid");
		    ihuadong.css("left","lt");
		});		
	};


/*** 登錄窗口 **/
    var denglu = function(){
    	var login = $("#dengluanniu");
    	var cover = $("#cover");
    	var loginfor = $("#denglu");
    	var close = $("#denglu strong");
    	var qrcode = $("#erweima");
    	var saoasao = $("#saoasao");
    	var codemove = $("#codemove");
    	
    	//要使登录窗口居中,计算left和top
    	
    	login.click(function(){ 
    		//要使登录窗口居中,计算left和top
    	    var left = $(window).width()/2 - loginfor.width()/2;
    	    var top = $(window).height()/2 - loginfor.height()/2;
    	    var loginleft = left + "px";
    	    var logintop = top + "px";
    		
    		loginfor.css({
    			'left': loginleft,
    			'top': logintop
    		});  
    	    loginfor.fadeIn(600);
            cover.fadeIn(600);
    	});
    	
    	close.click(function(){
    		loginfor.fadeOut(600);
    		cover.fadeOut(600);
    		$("#loginname").val("");
    		$("#loginpwd").val("");
    		$("#yanzhengtext").val("");
    	});
    	/********/
    	$("#saoma a").click(function(){
    		$(this).css({
    			'font-weight': 'bold',
    		    'color': '#c81623'
    		});
    		$(".login-box").css('display','none');
    		$("#login-saoma").css('display','block');
    		$("#zhanghao a").css({
    			'font-weight': 'normal',
    		    'color': '#666'
    		});
    	});
    	/**********/
    	$("#zhanghao a").click(function(){
    		$(this).css({
    			'font-weight': 'bold',
    		    'color': '#c81623'
    		});
    		
    		$("#login-saoma").css('display','none');
    		$(".login-box").css('display','block');
    		$("#saoma a").css({
    			'font-weight': 'normal',
    		    'color': '#666'
    		});
    	});
    	/********/
    	$("#loginname").focus(function(){
    		$("#user .login-label").css({
    			'background-position': '0 -48px',
    			'border-color': '#bbb'
    		});
    	});
    	$("#loginname").blur(function(){
    		$("#user .login-label").css({
    			'background-position': '0 0',
    			'border-color': '#bbb'
    		});
    	});
    	/********/
    	$("#loginpwd").focus(function(){
    		$("#pwd .login-label").css({
    			'background-position': '-48px -48px',
    			'border-color': '#bbb'
    		});
    	});
    	$("#loginpwd").blur(function(){
    		$("#pwd .login-label").css({
    			'background-position': '-48px 0px',
    			'border-color': '#bbb'
    		});
    	});
    	/*****/
    	codemove.mouseover(function(){
    		qrcode.stop().animate({left:"0"},500,function(){
    			saoasao.stop().fadeIn(400);
    		});
    	});
    	codemove.mouseout(function(){
    		saoasao.stop().fadeOut(100);
    		qrcode.stop().animate({left:"70px"},500);
    	});
    };
