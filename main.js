 $(document).ready(function() {

    $("img").mouseenter(function() {
    	$(this).animate({
    		height: "+=100px",
    		width: "+=100px"
    	});
	 }); // ends mouseenter

    $("img").mouseleave(function() {
    	$(this).animate({
    		height: "-=100px",
    		width: "-=100px"
    	});
	 }); // ends mouseleave
}); // ends doc ready 