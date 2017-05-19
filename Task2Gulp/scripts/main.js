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
//# sourceMappingURL=main.js.map
