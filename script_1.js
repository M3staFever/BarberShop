$(document).ready(() => {
/*Default Values*/
	$('.home').siblings().hide();

//----------------------------------------------------------------------------------------------------
/*Button Hover Animation START*/	
$('.btnanim').on('mouseenter',(event) =>{
	$(event.currentTarget).css({
		color:						'rgb(0,0,0)',
		backgroundColor:			'rgb(255,255,255)'
	});
})

$('.btnanim').on('mouseleave',(event) =>{
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
			case $(event.currentTarget).hasClass('btnHome'):
				var $a = $('.btnHome');
				var $b = $('.home');
				
			break;
			case $(event.currentTarget).hasClass('btnAbout'):
				var $a = $('.btnAbout');
				var $b = $('.about');
				
			break;
			case $(event.currentTarget).hasClass('btnTeam'):
				var $a = $('.btnTeam');
				var $b = $('.team');
				
			break;
			case $(event.currentTarget).hasClass('btnGall'):
				var $a = $('.btnGall');
				var $b = $('.gall');
				
			break;
			case $(event.currentTarget).hasClass('btnList'):
				var $a = $('.btnList');
				var $b = $('.list');
				
			break;
			default:
				var $a = $('.btnHome');
				var $b = $('.home');
				
		}
	
			$b.siblings().fadeOut(); // The .sibling is used to erase any section that is opened
			$b.show('slow');

			

	});
	
});

/*Button Section Opener END*/
//----------------------------------------------------------------------------------------------------