
$(function(){




			$(".datou").hover(function(){
				
				if(parseInt($("#tishi").css("top")) >= 100){
					$("#tishi").stop().animate({top: "-=10",opacity: "+=1"},300);
				}else{
					$("#tishi").stop().animate({opacity: "+=1"},300);
				}
				 
	 
			},function(){
				
				if(parseInt($("#tishi").css("top")) <= 100){
					$("#tishi").stop().animate({top: "+=10",opacity: "-=1"},300);
				}else{
					$("#tishi").stop().animate({opacity: "-=1"},300);
				}
				 
			});
			
			
			$(".tishi").hover(function(){

					$("#tishi").stop().animate({opacity: "+=1"},300);
					
			},function(){

					$("#tishi").stop().animate({top: "+=10",opacity: "-=1"},300);

			});
			
			

	
});
