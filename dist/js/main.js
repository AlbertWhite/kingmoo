$(document).ready(function(){
    $(".partner-img").hover(function(){
    	var src = $(this).attr(
    		"src");
    	var new_src = src.replace("0","1");
    	$(this).attr(
    		"src", new_src);
    }, function(){
    	var src = $(this).attr(
    		"src");
    	var new_src = src.replace("1","0");
    	$(this).attr(
    		"src", new_src);

    });

    $('.carousel').carousel();

    $(document).on("mouseover", ".case-block", function(){
        $(this).find(".black-hover").addClass("show");
    });
    
    $(document).on("mouseleave", ".case-block", function(){
        $(this).find(".black-hover").removeClass("show");
    });

    console.log("234");
    $(".menu-li").click(function(){
        $(".menu-li").removeClass("selected");
        $(this).addClass("selected");
    });
    
});