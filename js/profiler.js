function contains(targetSubString, targetString) 
{
	if ( targetString === undefined || targetString == null )
		return false;
		
	if ( targetString.indexOf(targetSubString) >= 0 )
		return true;
	else
		return false;
}

$( document ).on('click', '[data-multiplefor]', function() 
{
	var targets = $(this).attr("data-multiplefor").split(',');
	
	for (j = 0; j < targets.length; j++) 
	{
		$('#' + targets[j]).prop('checked',
			function(i, oldVal) { return !oldVal; });
	}
});

$( document ).on('click', 'ul.profiler > li > div.view-roles > ul > li.roles-add', function()
{
	var self = $( this );
	
	var marker = self.parent().parent().parent();
	var markerClasses = marker.attr('class');
	
	if ( contains('checked', markerClasses) )
		marker.removeClass('checked');
	else
		marker.addClass('checked');
});

$( document ).on('click', 'ul.profiler > li > div.view-roles > ul:nth-of-type(2) > li', function() {
	var self = $( this );
	var selfClasses = self.attr('class');
	var selfValue = self.attr('value');
	
	var mirrorDirective = self.parent().parent().children('ul:first-of-type');
	var mirror = mirrorDirective.children('li[value=\"' + selfValue + '\"]');
	
	if ( contains('checked', selfClasses) )
	{
		if (mirror.length > 0)
			mirror.fadeOut('slow', function() {$(this).remove()});
			
		self.removeClass('checked');
	}
	else
	{
		$(self.prop('outerHTML')).hide().prependTo(mirrorDirective).fadeIn('slow');
	
		self.addClass('checked');
	}
});

$( document ).on('change', 'ul.profiler > li > div.view-image > input', function() {
	$( this ).parent().children('label')[0].innerText = $( this )[0].files[0].name;
});