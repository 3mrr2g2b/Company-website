$(document).ready(function(){
    
    //window loading...
    
    //toggle click....
    $('.menu-toggle').click(function(){
			$('.menu-toggle').toggleClass('active');
			$('.navbar-menu').toggleClass('active');
			
			
			
		});
		//scroll window         
    $(window).scroll(function() {    
    if (this.scrollY > 20) 
    {
        $(".navbar").addClass("active");
    }
    else
    {
        $(".navbar").removeClass("active");
    }
});

});

