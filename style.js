$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $('#cover-heading');
   var offset = startChange.offset();

   function checkScroll() { 
    scrollStart = $(this).scrollTop();
    if(scrollStart > offset.top) {
        $("#navigation").removeClass("top");
        $("#navigation").addClass("scrolled");
     } else {
        $("#navigation").removeClass("scrolled");
        $("#navigation").addClass("top");
     }
   }

   checkScroll();

   if (startChange.length) {
	   $(document).scroll(checkScroll);
   }
  $("#body").css("display", "block");
});