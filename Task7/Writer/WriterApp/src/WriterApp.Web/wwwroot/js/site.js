
$(document).ready(function () {
    $(".chosen-select").chosen({ disable_search_threshold: 10 });
    console.log(123);
    $("input[type=submit]").click(function (e) {
        e.preventDefault();
        if ($('.search-choice').length)
            $(this).closest('form').submit();
        else
            $('.chosen-container').css('border', '1px solid red');
    });
});
