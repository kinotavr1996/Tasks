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
    //jQuery('.autocompleted').autocomplete(options);

});



(function($) {
    $.fn.autocomplete = function(options) {
		$(this).each(function(){
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
                $dialog.append('<div data-id="' + states[i][options['key']] + '">' + options.source[i][options['label']] + '</div>');
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
		
       $dialog.on('click','div',function() {		   
           $input.val( $(this).text()).focus();
           $input.attr('data-id',  $(this).attr('data-id'));
            $close.addClass('visible');
            alreadyFilled = true;
            for (var i = 0; i < states.length; i++) {
                if (states[i][options['key']] == $(this).attr('data-id')) {
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
            $input.attr('data-id','');
            $dialog.addClass('open');
            $input.val('').focus();
            $input.removeClass('visible');
        });

        function match(str) {
            clearDialog();
            for (var i = 0; i < states.length; i++) {
                var index = states[i][options['label']].indexOf(str);
                if (index !== -1) {
                    temp = states[i][options['label']].split(str);
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