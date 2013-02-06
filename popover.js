/**
 * simple drop down navigation jQuery plugin
 *
 */
jQuery.fn.popover = function() {
    var target = $(this.selector);
    // pc
    if ($(window).width() >= 768) {
        // this reference is HTMLUlElement
        $(target).hover(function() {
            var style = {
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0
            };
            $('.pop', this).css(style);
        }, function() {
            $('.pop', this).css('display', 'none');
        });
    }
};
