$(document).ready(() => {

//----------------------------------------------------------------------------------------------------
/*Button Hover Animation START*/	
$('.btn').on('mouseenter',(event) =>{
	$(event.currentTarget).css({
		color:						'rgb(0,0,0)',
		backgroundColor:			'rgb(255,255,255)'
	});
})

$('.btn').on('mouseleave',(event) =>{
	$(event.currentTarget).css({
		color:						'rgb(255,255,255)',
		backgroundColor:			'transparent'
	});
})
/*Button Hover Animation END*/
//----------------------------------------------------------------------------------------------------
/*Button Section Opener START*/
	
$('.btn').on('click', (event) => {
		
		switch(true){
			case $(event.currentTarget).hasClass('btnAbout'):
				var $a = $('.btnAbout');
				var $b = $('.about');
				
			break;
			case $(event.currentTarget).hasClass('btnBarb'):
				var $a = $('.btnBarb');
				var $b = $('.barb');
				
			break;
			case $(event.currentTarget).hasClass('btnCont'):
				var $a = $('.btnCont');
				var $b = $('.cont');
				
			break;
			case $(event.currentTarget).hasClass('btnGps'):
				var $a = $('.btnGps');
				var $b = $('.gps');
				
			break;
			default:
				var $a = $('.btnAbout');
				var $b = $('.about');
				
		}
	
			$b.siblings().fadeOut(); // The .sibling is used to erase any section that is opened
			$b.show('slow');

			

	});
	
});

/*Button Section Opener END*/
//----------------------------------------------------------------------------------------------------