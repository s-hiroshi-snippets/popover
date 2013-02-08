/**
 * simple popup over jQuery plugin
 *
 */
jQuery.fn.popover = function( type ) {
    type = type || 'left';
    var selector = $(this.selector);
    var height = $(this).innerHeight();
    // pc
    if ($(window).width() >= 768) {
        // class popover HTMLElement
        $(selector).hover(function() {
            var style = {
                position: 'absolute',
                bottom: height,
                left: 0
            };
            $('.pop', this).stop();
            $('.pop', this).css(style);
            $('.pop', this).slideDown();
        }, function() {
            $('.pop', this).hide('slow');
        });
    }
};
