$(document).ready(function(){
	var $imageSlider = $('.imageSlider'),
		$imageList = $imageSlider.find('li'),
		$image = $imageList.find('img'),
		imageWidth = $image[0].width,
		imageLength = $image.length,
		current = 1,
		$click = $('.click');
		
	$click.on('click',function(){
		var direction = $(this).data('dir'),
			location = imageWidth;
		(direction === 'next')? current++ : current--;
		if(current -1 === imageLength){
			current = 1;
			location = 0;
		}else if(current === 0){
			current = imageLength;
			location = (imageLength * imageWidth)-imageWidth;
			direction ='next';
		}
		transition(direction,location, $imageSlider);
	});
	
	function transition(direction, location, imageSlider){
		var unit;
		if(direction && location !=0){
			unit = (direction === 'next')? '-=': '+='; 
		}
		imageSlider.animate({'margin-left': unit ? (unit+location):location},1000);
	}
	//set the variables
	//click first the button
	//after it was clicked
	//animated the slider
});