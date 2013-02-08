/**
 * simple popover jQuery plugin
 *
 * @param {String} pos position of popover
 * (top, bottom)
 */
jQuery.fn.popover = function(pos) {
    pos = pos || 'bottom';
    var selector = $(this.selector);
    var height = $(this).innerHeight();
    // pc
    if ($(window).width() >= 768) {
        // class popover HTMLElement
        $(selector).hover(function() {
            if ($('.pop').is(':animated') === true) {
                return false;
            }
            $('.pop', this).css({
                position: 'absolute',
                left: 0
            });
            $('.pop', this).css(pos, height);
            $('.pop', this).slideDown();
        }, function() {
            $('.pop', this).hide('slow');
        });
    }
};