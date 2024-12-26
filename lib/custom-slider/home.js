(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			 $('#ensign-nivoslider').nivoSlider({
				effect: 'slideInRight',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: false,
				manualAdvance: true
			 });
			 
			$('#ensign-nivoslider-2').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: true,
				pauseOnHover: true,
				manualAdvance: true
			 });

			$('#ensign-nivoslider-3').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: true,
				manualAdvance: false
			 }); 
})(jQuery); 