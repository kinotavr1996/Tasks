$(document).ready(function() {
    var request = new XMLHttpRequest();
    request.open("GET", "../src/app/NGC/NGC.json", false);
    request.send(null);
    var newArray = JSON.parse(request.responseText);
    var options = {
        source: newArray.products,
        key: "productId",
        label: "productName",
        changed: function(s) {
            alert('You choose ' + s.name)
        }
    };
     console.log(newArray.products);
    jQuery('input.search').autocomplete(options);


});



(function($) {
    $.fn.autocomplete = function(options) {
        $(this).each(function() {
            var alreadyFilled = false,
                $input = $(this),
                $wrapper = $('<div class="MyPluginWrapper"></div>'),
                $close = $('<span class="MyPluginClose">Delete</span>'),
                $dialog = $('<div class="MyPluginDialog"></div>');

            $input.after($wrapper);
            $wrapper.append($input);
            $wrapper.append($close);
            $wrapper.append($dialog);
            states = options.source;

            function initDialog() {
                clearDialog();
                for (var i = 0; i < states.length; i++) {
                    $dialog.append('<div data-id="' + states[i][options['key']] + '">' + states[i][options['label']] + '</div>');
                }
            }

            function clearDialog() {
                $dialog.empty();
            }
            $input.click(function() {
                if (!alreadyFilled) {
                    $dialog.addClass('open');
                }
            });

            $dialog.on('click', 'div', function() {
				var chosenElement = $(this);
                $input.val(chosenElement.text()).focus();
                $input.attr('data-id', chosenElement.attr('data-id'));
                $close.addClass('visible');
                alreadyFilled = true;
                for (var i = 0; i < states.length; i++) {
                    if (states[i][options['key']] == chosenElement.attr('data-id')) {
                        options.changed(states[i]);
                        break;
                    }
                }
            });
            $close.click(function() {
                clearDialog();
                initDialog();
                alreadyFilled = false;
                $input.val('');
                $input.attr('data-id', '');
                $dialog.addClass('open');
                $input.val('').focus();
                $input.removeClass('visible');
            });

            function match(str) {
                clearDialog();
                for (var i = 0; i < states.length; i++) {
                    var index = states[i][options['label']].indexOf(str);
                    if (index !== -1) {
                        var temp = states[i][options['label']].split(str);
                        for (var j = 1; j < temp.length; j++)
                            temp[0] += '<b>' + str + '</b>' + temp[j];
                        $dialog.append('<div data-id="' + states[i][options['key']] + '">' + temp[0] + '</div>');
                    }
                }
                str = null;

            }
            $input.on('input', function() {
                initDialog();
                $dialog.addClass('open');
                alreadyFilled = false;
                if ($input.val())
                    match($input.val());
            });
            $('body').click(function(e) {
                if (!$(e.target).is("input, .autocomplete_close")) {
                    $dialog.removeClass('open');
                }
            });
            initDialog();
        });

    }
})(jQuery);