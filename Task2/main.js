/*function DoRotate(angle, selector) {
    console.log(selector);
    $(selector).css({
        transform: 'rotate(' + angle + 'deg)'
    });
}
function AnimateRotate(angle, selector) {
    var elem = $(selector);

    $({ deg: 0 }).animate({ deg: angle }, {
        duration: 200,
        step: function (now) {
            elem.css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
}

$(document).ready(function () {
    var contentWidth = $('.content').width(),
        expbuttonRight = $('.right-panel').width(),
        expButtonLeft = $('.left-panel').width();
    var i = 0, j = 0;
    $('.expand-left').click(function () {
       
        
        var pMinWidth = $(this).parent().css('min-width');
        if (i % 2 == 0) {
            console.log(contentWidth + expButtonLeft);

            DoRotate(90, $(this));
            AnimateRotate(90, $(this));
            $(this).parent().css('min-width', 0);
            $(this).parent().animate({ width: $(this).height() }, 500);
            if ($('.content').width() != contentWidth) {
                $('.content').width($('.content').width() + expButtonLeft);
            }
            else {
                $('.content').width(contentWidth + expButtonLeft);
            }

        } else {
            DoRotate(0, $(this));
            AnimateRotate(0, $(this));
            $(this).parent().css('min-width', pMinWidth);
            $(this).parent().animate({ width: expButtonLeft }, 500);
            $('.content').width(contentWidth);
        }
        i++;


    });
    $('.expand-right').click(function () {
         $(this).css({
            position: 'absolute',            
            top: '90px;',
            right: '-40px;'
        });
        var pMinWidth = $(this).parent().css('min-width');
        if (j % 2 == 0) {
            console.log(contentWidth + expbuttonRight);
            DoRotate(90, $(this));
            AnimateRotate(90, $(this));
            $(this).parent().css('min-width', 0);
            $(this).parent().animate({ width: $(this).height() }, 500);
            if ($('.content').width() != contentWidth) {
                $('.content').width($('.content').width() + expbuttonRight);
            } else {
                $('.content').width(contentWidth + expbuttonRight);
            }


        } else {
            DoRotate(0, $(this));
            AnimateRotate(0, $(this));
            $(this).parent().css('min-width', pMinWidth);
            $(this).parent().animate({ width: expbuttonRight }, 500);
            $('.content').width(contentWidth);
        }
        j++;
        console.log(j);


    });


});*/
$(document).ready(function () {
     $('.expand-left').click(function () {
            $(this).parent().toggleClass('rotated');
            $('.content').toggleClass('rotate-left');
            
     });
      $('.expand-right').click(function () {
          $(this).parent().toggleClass('rotated');
          $('.content').toggleClass('rotate-right');
          
     });
});