$(document).ready(function() {
    var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    var newArray = [];
    for (var i = 0; i < states.length - 1; i++)
        newArray.push({
            id: i,
            name: states[i]
        });
    var options = {
        source: newArray,
        key: "id",
        label: "name",
        changed: function(s) {
            alert('You choose ' + s.name)
        }
    };
    jQuery('input.autocomplete').autocomplete(options);
    jQuery('.autocompleted').autocomplete(options);

});



(function($) {
    $.fn.autocomplete = function(options) {

        var alreadyFilled = false,
            selector = this,
			dialog = [],
			_close = [],
			wrapper = [];
		
			dialog[0] = selector.attr('class') + '-dialog',
            _close[0] = selector.attr('class') + '-autocomplete_close',
            wrapper[0] = selector.attr('class') + '-autocomplete-wrapper ';
            dialog[1] = '<div class="'+ dialog[0] + ' MyPluginDialog"></div>',
            _close[1] = '<span class="' + _close[0] + ' MyPluginClose">Delete</span>',
            wrapper[1] = '<div class="' + wrapper[0] + ' MyPluginWrapper"></div>';
        states = options.source;		
        $(this).after(wrapper[1]);
		
        $('.' + wrapper[0]).append(selector);
		
        $('.' + wrapper[0]).append(_close[1]);
		
        $('.' + wrapper[0]).append(dialog[1]);

		
        function initDialog() {
            clearDialog();
            console.log(options["key"]);
            for (var i = 0; i < states.length; i++) {

                $('.' + dialog[0]).append('<div data-id="' + states[i][options['key']] + '">' + options.source[i][options['label']] + '</div>');
            }
        }

        function clearDialog() {
            $('.' + dialog[0]).empty();
        }
        $(this).click(function() {
            if (!alreadyFilled) {
                $('.' + dialog[0]).addClass('open');
            }

        });
        $('body').on('click', '.' + dialog[0] + ' > div', function() {
            $(selector).val($(this).text()).focus();
            $(selector).attr('data-id', $(this).attr('data-id'));

            $('.' +  _close[0]).addClass('visible');
            alreadyFilled = true;
            for (var i = 0; i < states.length; i++) {
                if (states[i][options['key']] == $(this).attr('data-id')) {
                    options.changed(states[i]);
                    break;
                }
            }
        });
        $('.' +  _close[0]).click(function() {
            clearDialog();
            initDialog();
            alreadyFilled = false;
            $(selector).val('');
            $('.' + dialog[0]).addClass('open');
            $(this).val('').focus();
            $(this).removeClass('visible');
        });

        function match(str) {
            clearDialog();
            for (var i = 0; i < states.length; i++) {
                var index = states[i][options['label']].indexOf(str);
                if (index !== -1) {
                    temp = states[i][options['label']].split(str);
                    for (var j = 1; j < temp.length; j++)
                        temp[0] += '<b>' + str + '</b>' + temp[j];
                    $('.' + dialog[0]).append('<div data-id="' + states[i][options['key']] + '">' + temp[0] + '</div>');
                }
            }
            str = null;

        }
        $(this).on('input', function() {
            initDialog();
            $('.' + dialog[0]).addClass('open');
            alreadyFilled = false;
            if ($(this).val())
                match($(this).val());
        });
        $('body').click(function(e) {
            if (!$(e.target).is("input, .autocomplete_close")) {
                $('.' + dialog[0]).removeClass('open');
            }
        });
        initDialog();
    }
})(jQuery);