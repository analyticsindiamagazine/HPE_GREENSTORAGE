$(function () {
$('#vidBox').VideoPopUp({
backgroundColor: "#17212a",
opener: "video1",
maxweight: "340",
idvideo: "v1"
});
 
$('#vidBox2').VideoPopUp({
    backgroundColor: "#17212a",
    opener: "video2",
    maxweight: "340",
    idvideo: "v2"
});




$('#vidBox3').VideoPopUp({
    backgroundColor: "#17212a",
    opener: "video3",
    maxweight: "340",
    idvideo: "v3"
});

$('#vidBox4').VideoPopUp({
    backgroundColor: "#17212a",
    opener: "video4",
    maxweight: "340",
    idvideo: "v4"
});



jQuery("a.bla-1").YouTubePopUp();
jQuery("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay



 $(".virtual").click(function(){
			$("html, body").animate({ 
				scrollTop: $('#virtual').offset().top-160,
			}, 1000);
		});


 $(".overview").click(function(){
			$("html, body").animate({ 
				scrollTop: $('#overview').offset().top-160,
			}, 1000);
		});


 $(".Offerings").click(function(){
			$("html, body").animate({ 
				scrollTop: $('#Offerings').offset().top-120,
			}, 1000);
		});
		
		
$(".Resources").click(function(){
$("html, body").animate({ 
	scrollTop: $('#Resources').offset().top-170,
}, 1000);
});
	
			
$(".resource").click(function(){
$("html, body").animate({ 
	scrollTop: $('#resource').offset().top-120,
}, 1000);
});
	
	
$(".Request-a-quote").click(function(){
$("html, body").animate({ 
	scrollTop: $('#Request-a-quote').offset().top-120,
}, 1000);
});

	
	 $(".menu-item").on("click", function(e) {
      $(".menu-item").removeClass("active");
        console.log("yo");
        $(this).addClass("active");
      });
	
	
 
 
  
	
 
	
 /* discover*/
	
	
	$(".cir-1").show();
	$(".ta1").on("click",function(){
		 $(".end>.container>.row>.left-navigate>ul>li a> span.discover").css({"background-position":"0 0"});
		
$(".end>.container>.row>.left-navigate>ul>li a> span.configure").css({"background-position":"-39px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.deploy").css({"background-position":"-77px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.dispose").css({"background-position":"-192px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.maintain").css({"background-position":"-154px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.optimize").css({"background-position":"-117px -38px"});


		
$(".end>.container>.row>.left-navigate>ul>li>a.disc").css({"transation":"all ease 0.5s","color":"#fff","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.confi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.depl").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.disp").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.mainta").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.optimi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});

		
	$(".cir-1").show(1000);
	$(".cir-2").hide(1000);
	$(".cir-3").hide(1000);
	$(".cir-4").hide(1000);
	$(".cir-5").hide(1000);
	$(".cir-6").hide(1000);

		
		
		
	});
	
	
		/* configure*/
	$(".ta2").on("click",function(){
		 $(".end>.container>.row>.left-navigate>ul>li a> span.configure").css({"background-position":"-39px 0px"}); 
		
$(".end>.container>.row>.left-navigate>ul>li a> span.discover").css({"background-position":"0 -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.deploy").css({"background-position":"-77px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.dispose").css({"background-position":"-192px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.maintain").css({"background-position":"-154px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.optimize").css({"background-position":"-117px -38px"});


		
		
$(".end>.container>.row>.left-navigate>ul>li>a.disc").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.confi").css({"transation":"all ease 0.5s","color":"#fff","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.depl").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.disp").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.mainta").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.optimi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});

	
		
		
		
		
		
	
		
		$(".cir-1").hide(500);
	$(".cir-2").show(1000);
	$(".cir-3").hide(1000);
	$(".cir-4").hide(1000);
	$(".cir-5").hide(1000);
	$(".cir-6").hide(1000);
		
		 
	});
	
	
	/*deploy*/
			 
	$(".ta3").on("click",function(){
		  $(".end>.container>.row>.left-navigate>ul>li a> span.deploy").css({"background-position":"-77px 0px"});
		
$(".end>.container>.row>.left-navigate>ul>li a> span.discover").css({"background-position":"0 -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.configure").css({"background-position":"-39px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.dispose").css({"background-position":"-192px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.maintain").css({"background-position":"-154px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.optimize").css({"background-position":"-117px -38px"});


		
$(".end>.container>.row>.left-navigate>ul>li>a.disc").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.confi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.depl").css({"transation":"all ease 0.5s","color":"#fff","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.disp").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.mainta").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.optimi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});

		 $(".cir-1").hide(1000);
	$(".cir-2").hide(1000);
	$(".cir-3").show(1000);
	$(".cir-4").hide(1000);
	$(".cir-5").hide(1000);
	$(".cir-6").hide(1000);
	});
	
	
	
/*	dispose*/
	
		$(".ta4").on("click",function(){
		 	  $(".end>.container>.row>.left-navigate>ul>li a> span.dispose").css({"background-position":"-192px 0px"});
			
			
$(".end>.container>.row>.left-navigate>ul>li a> span.discover").css({"background-position":"0 -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.configure").css({"background-position":"-39px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.deploy").css({"background-position":"-77px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.maintain").css({"background-position":"-154px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.optimize").css({"background-position":"-117px -38px"});



			
$(".end>.container>.row>.left-navigate>ul>li>a.disc").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.confi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.depl").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.disp").css({"transation":"all ease 0.5s","color":"#fff","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.mainta").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.optimi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});

			$(".cir-1").hide(1000);
	$(".cir-2").hide(1000);
	$(".cir-3").hide(1000);
	$(".cir-4").show(1000);
	$(".cir-5").hide(1000);
	$(".cir-6").hide(1000);
			
			
	});
	
	
	/*maintain*/
		$(".ta5").on("click",function(){
		 	  $(".end>.container>.row>.left-navigate>ul>li a> span.maintain").css({"background-position":"-154px 0px"});
			
$(".end>.container>.row>.left-navigate>ul>li a> span.discover").css({"background-position":"0 -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.configure").css({"background-position":"-39px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.deploy").css({"background-position":"-77px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.dispose").css({"background-position":"-192px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.optimize").css({"background-position":"-117px -38px"});

			
			
			
$(".end>.container>.row>.left-navigate>ul>li>a.disc").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.confi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.depl").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.disp").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.mainta").css({"transation":"all ease 0.5s","color":"#fff","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.optimi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});

		$(".cir-1").hide(1000);
	$(".cir-2").hide(1000);
	$(".cir-3").hide(1000);
	$(".cir-4").hide(1000);
	$(".cir-5").show(1000);
	$(".cir-6").hide(1000);
			
			
	});
	
	
/*	optimize*/
	
		$(".ta6").on("click",function(){
		 	  $(".end>.container>.row>.left-navigate>ul>li a> span.optimize").css({"background-position":"-117px 0px"});
			
$(".end>.container>.row>.left-navigate>ul>li a> span.discover").css({"background-position":"0 -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.configure").css({"background-position":"-39px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.deploy").css({"background-position":"-77px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.dispose").css({"background-position":"-192px -38px"});
$(".end>.container>.row>.left-navigate>ul>li a> span.maintain").css({"background-position":"-154px -38px"});


			
			
			
			
$(".end>.container>.row>.left-navigate>ul>li>a.disc").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.confi").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.depl").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.disp").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.mainta").css({"transation":"all ease 0.5s","color":"#8d8e8f","text-decoration":"none"});
$(".end>.container>.row>.left-navigate>ul>li>a.optimi").css({"transation":"all ease 0.5s","color":"#fff","text-decoration":"none"});

	$(".cir-1").hide(1000);
	$(".cir-2").hide(1000);
	$(".cir-3").hide(1000);
	$(".cir-4").hide(1000);
	$(".cir-5").hide(1000);
	$(".cir-6").show(1000);		
			
		 
	});
	
	
	
	
	
	
	});




 