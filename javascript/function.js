$(document).ready(function(){
	var $imageSlider = $('.imageSlider'),//for the imageSlider
		$sliderList = $imageSlider.find('li'),
		$sliderImage = $sliderList.find('img'),
		imageWidth = $sliderImage[0].width,
		imageLength = $sliderImage.length,
		current =0,
		$click = $('.click'),
		$imageList = $('.imageList'),//for the image list
		$images = $imageList.find('li');
		
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
	function transition(direction, location, imageSlider){
		var unit;
		if(direction && location !=0){
			unit = (direction === 'next')? '-=': '+='; 
		}
		imageSlider.animate({'margin-left': unit ? (unit+location):location},1000);
	}
	function addBorder($class,$images,current){
		var listImg = $images.eq(current);
		($class === 'remove')? listImg.removeClass('active'): listImg.addClass('active');
	}
});