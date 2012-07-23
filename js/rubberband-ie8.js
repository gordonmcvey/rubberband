/**
 * Rubberband elastic grid system - Javascript workarounds for IE8
 *
 * This script attaches explicit classes to elements what we can normally 
 * find with nth-child queries in CSS3.  This allows the grid to work 
 * properly in IE8.  We don't need it in IE9 which has more comprehensive
 * CSS support.  This should in theory also work in IE7 and older as well
 * but I've not tested that because I'm not interested in expending 
 * significant effort in supporting anything older than IE8
 *
 *
 * @copyright Gordian Solutions and Gordon McVey
 * @license http://www.apache.org/licenses/LICENSE-2.0.txt Apache license V2.0
 * @todo Remove jQuery dependency
 */

$(function ()
{
	// Add last-child class to the last column in each set
	$('.columnHolder > .column:last-child').addClass ('last-child');
	// Add the endrow class to the n-th child of uniform grids
	$('.columnHolder.autobreak.half > :nth-child(2n+2), ' 
	+ '.columnHolder.autobreak.third > :nth-child(3n+3), '
	+ '.columnHolder.autobreak.quarter > :nth-child(4n+4), '
	+ '.columnHolder.autobreak.fifth > :nth-child(5n+5), '
	+ '.columnHolder.autobreak.sixth > :nth-child(6n+6), '
	+ '.columnHolder.autobreak.seventh > :nth-child(7n+7), '
	+ '.columnHolder.autobreak.eighth > :nth-child(8n+8), '
	+ '.columnHolder.autobreak.ninth > :nth-child(9n+9), '
	+ '.columnHolder.autobreak.tenth > :nth-child(10n+10), '
	+ '.columnHolder.autobreak.eleventh > :nth-child(11n+11), '
	+ '.columnHolder.autobreak.twelth > :nth-child(12n+12)').addClass ('endrow');
});
