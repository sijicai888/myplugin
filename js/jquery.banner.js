$(function() {
				$.fn.setBanner = function(type, button_on_tyle, button_off_style, change_time,auto_time,change_way) {

					if(!change_time) {
						change_time = 500;
					}
					if(!auto_time){
						auto_time = 2000;
					}
					if(!change_way) {
						change_way = 'enter';
					}
					(function(self) {

						var width_singo = self.width();
						var length_li = self.children('ul').eq(0).children('li').length;
						self.current_index = 0;
						
						
						
						
						switch(type) {
							case 'move':

								self.css({
									'overflow': 'hidden',
									
								});
								self.children('ul').eq(0).children('li').css({
									'width': self.width(),
									'height': self.height(),
									'float': 'left',
									'cursor':'pointer'

								});
								self.children('ul').eq(0).css({
									'position': 'absolute',
									'width': self.width() * self.children('ul').eq(0).children('li').length,
									'height': self.height(),
									'left': -(self.width() * (self.children('ul').eq(0).children('li').length - 1)),
									'top': 0
								});
								self.children('ul').eq(1).children('li').eq(0).addClass(button_on_tyle).siblings().addClass(button_off_style);
								self.timer = setInterval(function() {
									var left_final;
									if (self.current_index==length_li-1) {
										left_final = -width_singo*(length_li-1);
										self.children('ul').eq(0).animate({'left':left_final},change_time);
										self.current_index = 0;
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									} else{
										left_final = -width_singo*length_li+width_singo*(self.current_index+2);
										self.children('ul').eq(0).animate({'left':left_final},change_time);
										self.current_index++;
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									}				
								}, auto_time);
								self.hover(function(){
									clearInterval(self.timer);
								},function(){
									self.timer = setInterval(function() {
						
									var left_final;
									if (self.current_index==length_li-1) {
										left_final = -width_singo*(length_li-1);
										self.children('ul').eq(0).animate({'left':left_final},change_time);
										self.current_index = 0;
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									} else{
										left_final = -width_singo*length_li+width_singo*(self.current_index+2);
										self.children('ul').eq(0).animate({'left':left_final},change_time);
										self.current_index++;
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
										
										
									}				
		
								}, auto_time);
								});
								
								if(change_way == 'enter') {
									self.children('ul').eq(1).children('li').mouseenter(function() {
										var $pic_ul = self.children('ul').eq(0);
										var length_now = $(this).index() + 1;
										var left_final = -width_singo * length_li + width_singo * length_now;
										$pic_ul.stop();
										$pic_ul.animate({
											'left': left_final
										}, change_time);
										$(this).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
										self.current_index = $(this).index();

									});
								} else {
									self.children('ul').eq(1).children('li').click(function() {
										var $pic_ul = $(this).parent().parent().children('ul').eq(0);
										var width_singo = $(this).parent().parent().width();
										var length_li = $(this).parent().children('li').length;
										var length_now = $(this).index() + 1;
										var left_final = -width_singo * length_li + width_singo * length_now;
										$pic_ul.stop();
										$pic_ul.animate({
											'left': left_final
										}, change_time);
										$(this).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
										self.current_index = $(this).index();
										

									});
								}

								break;

							case 'breathe':
								self.css({
									'overflow': 'hidden',
									
								});
								self.children('ul').eq(0).children('li').css({
									'width': self.width(),
									'height': self.height(),
									'position': 'absolute',
									'left': 0,
									'top': 0,
									'display': 'none',
									'cursor':'pointer'
								});
								self.children('ul').eq(0).children('li').eq(0).css({
									'display': 'block'
								});
								self.children('ul').eq(0).css({
									'position': 'absolute',
									'width': self.width(),
									'height': self.height(),
									'left': 0,
									'top': 0
								});
								self.children('ul').eq(1).children('li').eq(0).addClass(button_on_tyle).siblings().addClass(button_off_style);
								
								self.timer = setInterval(function() {
									
									if (self.current_index==length_li-1) {
										
										self.children('ul').eq(0).children('li').fadeOut(change_time);
										self.current_index = 0;
										self.children('ul').eq(0).children('li').eq(self.current_index).fadeIn(change_time);
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									} else{
										
										self.children('ul').eq(0).children('li').fadeOut(change_time);
										self.current_index++;
										self.children('ul').eq(0).children('li').eq(self.current_index).fadeIn(change_time);
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									}				
								}, auto_time);
								self.hover(function(){
									clearInterval(self.timer);
								},function(){
									self.timer = setInterval(function() {
									
									if (self.current_index==length_li-1) {
										
										self.children('ul').eq(0).children('li').fadeOut(change_time);
										self.current_index = 0;
										self.children('ul').eq(0).children('li').eq(self.current_index).fadeIn(change_time);
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									} else{
										
										self.children('ul').eq(0).children('li').fadeOut(change_time);
										self.current_index++;
										self.children('ul').eq(0).children('li').eq(self.current_index).fadeIn(change_time);
										self.children('ul').eq(1).children('li').eq(self.current_index).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
									}				
								}, auto_time);
								});

								if(change_way == 'enter') {

									self.children('ul').eq(1).children('li').mouseenter(function() {
										var $pic_li_all = $(this).parent().parent().children('ul').eq(0).children('li');
										var $pic_li_show = $(this).parent().parent().children('ul').eq(0).children('li').eq($(this).index());

										$pic_li_all.stop();
										$pic_li_all.fadeOut(change_time);
										$pic_li_show.fadeIn(change_time);
										$(this).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
										self.current_index = $(this).index();
									});

								} else {
									self.children('ul').eq(1).children('li').click(function() {
										var $pic_li_all = $(this).parent().parent().children('ul').eq(0).children('li');
										var $pic_li_show = $(this).parent().parent().children('ul').eq(0).children('li').eq($(this).index());

										$pic_li_all.stop();

										$pic_li_all.fadeOut(change_time);
										$pic_li_show.fadeIn(change_time);
										$(this).removeClass(button_off_style).addClass(button_on_tyle).siblings().removeClass(button_on_tyle).addClass(button_off_style);
										self.current_index = $(this).index();
									});
								}

								break;

						}

					})(this);

				}

				

			});