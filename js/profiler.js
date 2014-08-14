$( document ).on('click', '[data-multiplefor]', function() 
{
	var targets = $(this).attr("data-multiplefor").split(',');
	
	for (j = 0; j < targets.length; j++) 
	{
		$('#' + targets[j]).prop('checked',
			function(i, oldVal) { return !oldVal; });
	}
});