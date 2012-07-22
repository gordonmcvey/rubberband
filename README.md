#Rubberband

Rubberband is a CSS "framework" implementing an elastic grid.  

An elastic grid works on the same basic principles as other CSS grids such as 960.gs, but is distinguishable by the fact that all sizes are defined with percentage values instead of explicit units.  This means that a column that takes up 2/3 of the screen on a high resolution desktop display will also take up 2/3 of the screen on a smartphone as well.   The grid is fully adaptable to almost any screen resolution within reason.  

##Features

* Elastic columns.  All widths are measured in percentages, making the layout highly adaptable
* No floats!  This eliminates the need for clearfix, floating the container, making the container's overflow hidden, or any of a number of other hacks and tricks to make the layout behave.  Rubberband uses inline-bloxks instead.  
    * Because we're using inline-blocks, we have some control over the vertical aligning of our columns too.  The default vertical-align setting is top but you can override it if you want.  You can't do that with floated columns
* 2-12 column support
* Multi-span columns.  You can make a column span the space of multiple single columns for non-uniform layouts
* Column juggling.  The optional rubberband-juggle stylesheet allows you to rearrange the order of columns within their container.  This allows you to do things like put a navigation menu down the left hand side, but have its markup follow the markup for the main content, allowing for better accessibility for users with screen readers and other non-standard displays.  

##More info

Rubberband implements a grid that supports any number of regular columns from 2 - 12 
columns.  It also supports mix and match, each column can be a different width from the 
others, provided that all the columns add up to 100% of the container's width.  For 
example, you can have a half-width column alongside a quarter-width column and two 
eight-width columns without problems.  

Rubberband uses multiple classes to specify column characteristics.  For example, an 
element with the class "column quarter" will give you a quarter-width column, but a class
of "column twelth seven" will give you a 7/12th width column.  

Rubberband is licensed under the Apache version 2 license, a permissive license with 
similar compliance criteria to licenses such as BSD or MIT.  

This is the second release, which does still have a few issues to iron out, bit it should 
stillbe usefil in its current format.  
