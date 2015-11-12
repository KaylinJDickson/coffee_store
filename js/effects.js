(function()//document ready
{

function showInfo()
  {
    $(this).closest(".content_item").find("p").fadeIn(2000);
  }

     
    
 
  $(".content_item").on("mouseenter", showInfo);
    
	
	function showInfo1()
  {
    $(this).closest(".ourwork").find("p").fadeIn(2000);
  }

     
    
 
  $(".ourwork").on("mouseenter", showInfo1);
  
	
function showInfo2()
  {
    $(this).closest(".testimonials").find("p").fadeIn(2000);
  }

     
    
 
  $(".testimonials").on("mouseenter", showInfo2);
    	
	
function showInfo3()
  {
    $(this).closest(".projects").find("p").fadeIn(2000);
  }

     
    
 
  $(".projects").on("mouseenter", showInfo3);
    		
	
});

//Photo slideshow 1

		setInterval("rotateImages()", 4000);
		
		
		
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
		
		

		

		

			
		
		

	