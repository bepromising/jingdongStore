(function(){
	var codes = [];
	var regExp = /^[a-zA-Z0-9]{4}$/;
	var pwdyanzheng = /^[a-zA-Z0-9]{6,10}$/;
	var yanzhengresult = document.getElementById("yanzhengresult");
	var shuaxin = document.getElementById("shuaxin");
	var labell = document.getElementById("code-label");
	
	//0~9數字
	for(var i = 48; i<=57; i++){
		codes.push(i);
	}
	
	//小寫字母a~z
	for(var i=97;i<=122;i++){
		codes.push(i);
	}
	
	//大寫字母A~Z
	for(var i=65;i<=90;i++){
		codes.push(i);
	}
	
	function getcodes(){
		var arr = [];
		var code;
		for(var i=1;i<=4;i++){
			var n = Math.floor(Math.random()*62);
			var charr = String.fromCharCode(codes[n]);
			arr.push(charr);
		}
		code = arr.join("");
		labell.innerHTML = "";
		labell.innerHTML = code;
	}

	
	
	document.getElementById("dengluanniu").onclick = function(){
		getcodes();
	}
	
	
	/**这个方法去掉空格
	function trim(str){
		var reg = /^\s+|\s*$/g;
		return str.replace(reg,"");
	}
	**/
	
	shuaxin.onclick = function(){
        getcodes();
	}

     //登录事件
    document.getElementById("loginnn").onclick = function(){
    	var inputt = document.getElementById("yanzhengtext").value;
    	var pwd = document.getElementById("loginpwd").value;
    	var username = document.getElementById("loginname").value;
    	if(regExp.test(inputt) && pwdyanzheng.test(pwd)){
    		if(inputt.toLowerCase() == labell.innerHTML.toLowerCase() && pwd == "12345678" && username == "admini"){
			    admini();
		    }else if(username != "admini"){  
		    	yanzhengresult.innerHTML = "帐号有誤";
		        yanzhengresult.style.color = "#DF3033";
		        getcodes();
    	    }else if(pwd != "12345678"){ 
    	    	yanzhengresult.innerHTML = "密码有误";
	            yanzhengresult.style.color = "#DF3033";
	            getcodes();
	        }else if(inputt.toLowerCase() != labell.innerHTML.toLowerCase() ){ 
    	    	yanzhengresult.innerHTML = "验证码有误";
	            yanzhengresult.style.color = "#DF3033";
	            getcodes();
	        }
        }else if(username == "" || pwd == "" || inputt == ""){
        	yanzhengresult.innerHTML = "不能为空";
        	yanzhengresult.style.color = "#DF3033";
        	getcodes();
        }else if(!regExp.test(inputt)){
        	yanzhengresult.innerHTML = "验证码格式不對";
	        yanzhengresult.style.color = "#DF3033";
	        getcodes();
        }else if(!pwdyanzheng.test(pwd)){
        	yanzhengresult.innerHTML = "密码格式不對";
	        yanzhengresult.style.color = "#DF3033";
	        getcodes();
        }
    }    

    function admini(){
    	document.getElementById("denglu").style.display = "none";
    	document.getElementById("cover").style.display = "none";
    	var username = document.getElementById("loginname").value;
    	document.getElementById("dengluanniu").innerHTML = "欢迎您，林晨希";
    	document.getElementById("dengluanniu").style.fontSize = "15px"
    	document.getElementById("zhuce").innerHTML = "";
    	document.getElementById("dengluanniu").onclick = function(){
    		document.getElementById("denglu").style.display = "none";
    		document.getElementById("cover").style.display = "none";
    	};
    }

})();
