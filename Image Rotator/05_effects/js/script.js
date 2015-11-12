//Photo slideshow 1
$(function(){
		setInterval("rotateImages()", 4000);
		
		});
		
	function rotateImages(){
		
		var oCurPhoto = $('#photoShow div.current');
		var oNxtPhoto = oCurPhoto.next();
		if(oNxtPhoto.length == 0)
			oNxtPhoto = $('#photoShow div:first');
			
			
		oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({ opacity:0.0 }).addClass('current').animate({ opacity:1.0 }, 1000,
			
			function(){
				oCurPhoto.removeClass('previous');
			});
			
		
		}
		

//Photo slideshow 2
$(function(){
		setInterval("rotateImages2()", 1000);
		
		});
		
	function rotateImages2(){
		
		var oCurPhoto = $('#photoShow2 div.current');
		var oNxtPhoto = oCurPhoto.next();
		if(oNxtPhoto.length == 0)
			oNxtPhoto = $('#photoShow2 div:first');
			
			
		oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({ opacity:0.0 }).addClass('current').animate({ opacity:1.0 }, 300,
			
			function(){
				oCurPhoto.removeClass('previous');
			});
			
		
		}

$(function(){
		setInterval("rotateImages3()", 2000);
		
		});
		
	function rotateImages3(){
		
		var oCurPhoto = $('#photoShow3 div.current');
		var oNxtPhoto = oCurPhoto.next();
		if(oNxtPhoto.length == 0)
			oNxtPhoto = $('#photoShow3 div:first');
			
			
		oCurPhoto.removeClass('current').addClass('previous');
		oNxtPhoto.css({ opacity:0.0 }).addClass('current').animate({ opacity:1.0 }, 1000,
			
			function(){
				oCurPhoto.removeClass('previous');
			});
			
		
		}
		
		

	