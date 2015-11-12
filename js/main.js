$(function() //doc ready
  {
   
    function showMore()
    {
       

$(this).closest(".prop").find(".properties").fadeIn();
    }
    
    $(".prop").on("mouseenter" , showMore);
    
  
            
    $("button").on("click" , function()
                   {
        $(".properties").fadeOut();
    });
        
     
$(".showPrice").on("click" , function()
                   {
     $(".highlight").removeClass("highlight");    
     $(this).parent().addClass("highlight");
     $(this).remove();    
        
    });
        
});


