    function myfunc(){
		var text= document.getElementById("one").value;
		document.getElementById("two").innerHTML = "Hello"+" "+text+"!!";
		document.getElementById("three").value=text;
		return true;
	}
	function time(){
			setInterval(myfunc,50);
	}
	function myfunct(){
			var text1=document.getElementById("three").value;
			document.getElementById("two").innerHTML = "Hello"+" "+text1+"!!";
			document.getElementById("one").value = text1;
			return true;
	}
	function time1(){
			setInterval(myfunct,50);
	}
	