$(document).ready(function(){

	$(window).load(function(){
	
	// MSIE = ($.browser.msie) && ($.browser.version <= 8);
	//Loader---------------------------------------------------------------------------------------------
			$("#loadingHolder").delay(100).animate({opacity:"0"}, 700, function(){$("#loadingHolder").css({width:"0px"})});
			//$("body").css('overflow','visible');
			function addGalley(){
				$('.loader').remove();
				from.hide();
				to.append(from);
				from.show();		
			} 
	
	
	$(function(){
			$('#slides').slides({
				effect: 'fade',
				fadeSpeed:1000,
				play: 6000,
				pause: 6000,
				generatePagination: true,
				crossfade: true,
				hoverPause: true,
				animationStart: function(current){$('.caption').animate({bottom:-100},800, "easeOutSine");},
				animationComplete: function(current){$('.caption').animate({bottom:0},500, "easeOutSine");},
				slidesLoaded: function() {$('.caption').animate({bottom:0},300, "easeOutSine");}
			});
		});
		$(function(){$('.pagination li a')
			.mouseover(function(){$(this).stop().animate({marginTop:'-6px',height:'10px'}, 100)})
			.mouseout(function(){$(this).stop().animate({marginTop:'0px',height:'4px'}, 100)});
		});
	
	
	//content Tabs-------------------------------------------------------------------------------------    
			$('#ca-container').contentcarousel();
			//Tab navigation hover---------------------------------------------------------------------------------------           
			$('.ca-nav .img_act').css({opacity:0})
			$('.ca-nav a').hover(function(){
				 if (!MSIE){
				$(this).find('.img_act').stop().animate({opacity:1});
				$(this).find('.img_act2').stop().animate({opacity:0});
			}else{
				$(this).find('.img_act2').css({'opacity':0}); 
				$(this).find('.img_act').css({'opacity':1}); 
				}
			}, function(){
				 if (!MSIE){
					$(this).find('.img_act').stop().animate({opacity:0})
					$(this).find('.img_act2').stop().animate({opacity:1})
				}else{
					$(this).find('.img_act2').css({'opacity':1}); 
					$(this).find('.img_act').css({'opacity':0}); 
					}
			})
			 $('.ca-close .img_act').css({opacity:0})
				$('.ca-close').hover(function(){
					$(this).find('.img_act').stop().animate({opacity:1}).end()
						.find('.img_act2').stop().animate({opacity:0}).end()
						.find("span").stop(true).animate({'color':'#b6b6b6'}, 250, "easeOutSine");
				}, function(){
					$(this).find('.img_act').stop().animate({opacity:0}).end()
						.find('.img_act2').stop().animate({opacity:1}).end()
						.find("span").stop(true).animate({'color':'#fff'}, 250, "easeOutSine");			
				})
			
			
			
			//Tabs---------------------------------------------------------------------------------------------  
			bannersInit();  
			$('.ca-item .icon-act').css({opacity:0});
			
		   function bannersInit(){
			var banners = $(".ca-more").hover(bannerOverHandler, bannerOutHandler);
			var animateState = true;
			
			function bannerOverHandler(){
			   $(this).find("h2").stop(true).animate({color:'#b7b7b7'}, 250, "easeOutSine", animationFinishHandler);
			   $(this).find(".icon-act").stop(true).animate({opacity:0.7}, 250, "easeOutSine", animationFinishHandler);
			   
			}
			function bannerOutHandler(){
				$(this).find("h2").stop(true).animate({color:'#fff'}, 250, "easeOutSine", animationFinishHandler); 
				$(this).find(".icon-act").stop(true).animate({opacity:0}, 250, "easeOutSine", animationFinishHandler);
			}
			function animationFinishHandler(){
				animateState = true;
			}
		}
	
		
		//Social icons---------------------------------------------------------------------------------------           
			$('.soc .img_act').css({opacity:0})
			$('.soc a').hover(function(){
				$(this).animate({color:'#ed1c24'}, 250, "easeOutSine");
				 if (!MSIE){
				$(this).find('.img_act').stop().animate({opacity:1}, 250, "easeOutSine");
				$(this).find('.not_act').stop().animate({opacity:0}, 250, "easeOutSine");
			}else{
				$(this).find('.not_act').css({'opacity':0}); 
				$(this).find('.img_act').css({'opacity':1}); 
				}
			}, function(){
				$(this).animate({color:'#3b3b3b'}, 250, "easeOutSine");
				 if (!MSIE){
					$(this).find('.img_act').stop().animate({opacity:0}, 250, "easeOutSine");
					$(this).find('.not_act').stop().animate({opacity:1}, 250, "easeOutSine");
				}else{
					$(this).find('.not_act').css({'opacity':1}); 
					$(this).find('.img_act').css({'opacity':0}); 
					}
			})
		
	
	})
});