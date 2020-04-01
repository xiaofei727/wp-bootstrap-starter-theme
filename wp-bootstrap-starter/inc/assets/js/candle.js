jQuery(document).ready(function(){
	// Date object for today
	let today = new Date();

	jQuery(".gv-list-view").each(function( index ) {
		// To get date_field element of the candle
		let date_field = jQuery( this ).find('.gv-field-1-date_created');

		// To get date string of the candle
		let dateStr = jQuery( this ).find('.gv-field-1-date_created p').html();

		// To hide the date field of the candle
		jQuery( this ).find('.gv-field-1-date_created').css('display', 'none');

		// To create a Date object from date string
		let date = new Date(dateStr);

		// console.log('date', dateStr, date);

		// To calculate the time difference of two dates 
		var Difference_In_Time = today.getTime() - date; 
		  
		// To calculate the no. of days between two dates 
		var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

		//console.log('difference', Difference_In_Days, Difference_In_Time );

		// To get integer type of the difference_days
		let days_past = Math.floor(Difference_In_Days);


		if(days_past <= 10) { // If it is less than 10 days, reduce the height and keep the light on
			jQuery(this).find('.candle-lit').css('margin-bottom', - days_past * 10);
			jQuery(this).find('.candle-flame').css('bottom', 138 - days_past * 10);
		}
		else { // if biggeer than 10, reduce the height and turn off the candle
			jQuery(this).find('.candle-lit').css('margin-bottom', - 110);
			jQuery(this).find('.candle-flame').css('display', 'none');
		}
		
	});

});
