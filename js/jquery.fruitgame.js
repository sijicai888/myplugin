function FruitGame($topli, $rightli, $downli, $leftli,$switch,$speed) {
	this.li_arr = [];
	this.current = 0;
	this.timer;
	this.status = 0;
	this.damping = $speed;
	this.damping_add = 0;
	
	(function(fruitgame) {
		
		var inverted_arr = [];


		$topli.each(function() {
			//		$(this).text($(this).index());
			fruitgame.li_arr.push($(this));
		});
		$rightli.each(function() {
			//		$(this).text($(this).index());
			fruitgame.li_arr.push($(this));
		});
		
		
		$downli.each(function() {
			inverted_arr.push($(this));
		});
		inverted_arr.reverse(); 
		for (var i = 0;i<inverted_arr.length;i++) {
				fruitgame.li_arr.push(inverted_arr[i]);
				 
		}
		inverted_arr = [];
		$leftli.each(function() {
			inverted_arr.push($(this));
		});
		inverted_arr.reverse();
		for (var i = 0;i<inverted_arr.length;i++) {
				fruitgame.li_arr.push(inverted_arr[i]);
				
		}
		inverted_arr = [];
		for (var i = 0;i<fruitgame.li_arr.length;i++) {
			fruitgame.li_arr[i].text(i);
		}
		
		
		
		function move(){
			if(fruitgame.current<fruitgame.li_arr.length-1){
					fruitgame.current++;
					fruitgame.li_arr[fruitgame.current].css('background','pink');
					fruitgame.li_arr[fruitgame.current-1].css('background','lightskyblue');
				}else{
					fruitgame.current = 0;
					fruitgame.li_arr[fruitgame.current].css('background','pink');
					fruitgame.li_arr[fruitgame.li_arr.length-1].css('background','lightskyblue');
				}
		}
		
		function stop(){
			
			clearInterval(fruitgame.timer);
			 setTimeout(function(){
			 	fruitgame.damping_add +=3;
				fruitgame.damping+=fruitgame.damping_add;
				if(fruitgame.damping<500){
					move();
					stop();
				}else{
					fruitgame.damping = $speed;
					fruitgame.status = 0;
					fruitgame.damping_add =0;
					$switch.text('star');
					
				}
			},fruitgame.damping);
		}
		
		function dampingMove(){
			
		}
		
		$switch.click(function(){
			
			if(fruitgame.status==0){
				fruitgame.status=1;
				$switch.text('stop');
					fruitgame.timer = setInterval(function(){
					move();
					
				},$speed);
			}else{
				
				if(fruitgame.damping == $speed){
					stop();
				}
				
			}
			
		});
		
		
	})(this);
	
}