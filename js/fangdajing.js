/***擴大镜 ***/
(function(){
	
	//获取ID为下面这些的元素
	var   box    = document.getElementById("preview-top");
	var   move   = document.getElementById("move");
	var   big    = document.getElementById("bigimg");
	var chaodatu = document.getElementById("chaodatu");
	var   datu   = document.getElementById("datu-pro");
	var  xiaotu  = document.getElementsByClassName("img-hover");
	
	box.onmouseout = function(){
		move.style.display = "none";
		 big.style.display = "none";		 
	}

	   		box.onmouseover = function(){
	   		   move.style.display = "block";
		        big.style.display = "block";
		        move.style.cursor = "pointer";
	   	    }
	  
	
	 
	//获取位置
	box.onmousemove = function(e){
		
		//鼠标当前位置相对于视口的距离
		var x = e.pageX;
		var y = e.pageY;
//		console.log("x:"+x); console.log("y:"+y);
		
		//box盒子相对于视口的位置
		var t = box.offsetTop;
		var l = box.offsetLeft;
//		console.log("t:"+t);  console.log(l);
		
		//计算移动块move的位置
		var _left = x - l - move.offsetWidth/2;
		var _top = y - t - move.offsetHeight/2;
//		console.log("move的left："+_left); console.log("move的top："+_top);
//		console.log(e.scrollLeft);   console.log(e.scrollTop);
		
		if(_top <= 0){
			_top = 0 ;
		}else if (_top >= datu.offsetHeight - move.offsetHeight){
			_top = datu.offsetHeight - move.offsetHeight;
		}
		
		if(_left <= 0){
		    _left = 0;
		}else if(_left >= datu.offsetWidth - move.offsetWidth){
			_left = datu.offsetWidth - move.offsetWidth;
		}
		
		//move块的位置（鼠标在datu中移动的位置）
		move.style.top  = _top + "px";
		move.style.left = _left + "px";
		
		//计算移动比例
		var wbili = _left/(box.offsetWidth - move.offsetWidth);
		var hbili = _top/(box.offsetHeight - move.offsetHeight);
		
		//根据比例计算，设置大图在对应位置的位置
		var datuleft = (chaodatu.offsetWidth - big.offsetWidth)*wbili;
		var datutop  = (chaodatu.offsetHeight - big.offsetHeight)*hbili;
		chaodatu.style.left = -datuleft + "px";
		chaodatu.style.top = -datutop  + "px";
		
	//要完全不損失1px顯示擴大，要    “ 小圖/大圖  = move框/擴大圖的大框   ”	
	};
})();