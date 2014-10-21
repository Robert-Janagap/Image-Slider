$(document).ready(function(){
	//variables
	var $imageSlider = $('.imageSlider'),//for the imageSlider
		$sliderList = $imageSlider.find('li'),
		$sliderImage = $sliderList.find('img'),
		imageWidth = $sliderImage[0].width,
		imageLength = $sliderImage.length,
		$click = $('.click'),
		current = 0,
		$imageList = $('.imageList'),//for the image list
		$images = $imageList.find('li');
		//var prevImg=0;
	//big image slider
	$click.on('click',function(){
		var direction = $(this).data('dir'),
		location = imageWidth;
		addBorder('remove',$images,current);
		(direction === 'next')? current++ : current--;
		if(current === imageLength){
			current = 0;
			location = 0;
		}else if(current < 0){
			current = imageLength-1;
			location = (imageLength * imageWidth)-imageWidth;
			direction ='next';
		}
		addBorder('add',$images,current);
		transition(direction,location, $imageSlider);
	});
	//for small image slider click
	$images.on('click',function(){
		var selectedImg=$(this).data('current'),
			set = imageWidth,
			imgLocation=selectedImg*set,
			unit;
		if(current > selectedImg){
			unit ='+=';
			imgLocation=(current-selectedImg)*set
		}else if(current < selectedImg){
			unit ='-=';
			imgLocation=(selectedImg-current)*set
		}
		$imageSlider.animate({'margin-left':unit ? (unit+imgLocation): imgLocation},1000);
		current = selectedImg;
		$images.removeClass('active');
		$(this).addClass('active');
		
	});
	//for big imageslider animation
	function transition(direction, location, imageSlider){
		var unit;
		if(direction && location !=0){
			unit = (direction === 'next')? '-=': '+='; 
		}
		imageSlider.animate({'margin-left': unit ? (unit+location):location},1000);
	}
	//for border bottom of small slider if the big slider click
	function addBorder($class,$images,current){
		var listImg = $images.eq(current);
		($class === 'remove')? listImg.removeClass('active'): listImg.addClass('active');
	}
});