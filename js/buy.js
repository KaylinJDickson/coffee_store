$(function () //document ready
{
	
	
	$("#when").datepicker({minDate: "+0D", maxDate: "+7D", dateFormat: "m-dd"});
	$("#accordion").accordion({heightStyle: "content"});
	$("#quantity").on("keyup", function ()
	{
		var total = +$(this).val()* //.val means that value thats been put into *means multiply the quantity by the price
		$("#properties").find(":selected").data("price"); //#pseudo selector
			$(".total").text(total); //updates screen
	});
	
	$("#dialog-confirm").dialog(
	{
		resizable: false,
		height:340,
		modal: true,
		buttons:
		{
		"Confirm": function()
		{
		$( this ).dialog( "close" );
		},
		"Cancel": function()
		{
		$( this ).dialog( "close" );
		}
		}
	});
    
    $(function() {
    $( "#progressbar" ).progressbar({
      value: 20
    });
  });
		
});