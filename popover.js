/**
 * simple popup over jQuery plugin
 *
 * @params pos position (top, bottom)
 */
jQuery.fn.popover = function(pos) {
    pos = pos || 'bottom';
    var selector = $(this.selector);
    var height = $(this).innerHeight();
    // pc
    if ($(window).width() >= 768) {
        // class popover HTMLElement
        $(selector).hover(function() {
            $('.pop', this).css(pos, height);
            $('.pop', this).css({
                position: 'absolute',
                left: 0
            });
            $('.pop', this).slideDown();
        }, function() {
            $('.pop', this).hide('slow');
        });
    }
};
