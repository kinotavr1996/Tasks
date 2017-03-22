$(document).ready(function(){
	
	var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	var newArray = [];
	for(var i = 0; i < states.length - 1;i++){
	newArray.push({id:i,name:states[i]});
	
}
	var options = {
		source: newArray,
		key: "id",
		label: "name",
		changed: function(s){alert('You choose ' + s.name)}
	};
	jQuery('input.autocomplete').autocomplete(options);
	
});



(function ($) {
	$.fn.autocomplete = function(options){
		
    var alreadyFilled = false,
		selector = this,
		dialog = '<div class="dialog"></div>',
		_close = '<span class="autocomplete_close">Delete</span>',
		states = options.source;
	$(this).after(_close);
	$(this).after(dialog);
	
	
    function initDialog() {
        clearDialog();
		console.log( options["key"]);
        for (var i = 0; i < states.length; i++) {		
			
            $('.dialog').append('<div data-id="' + states[i][options['key']] + '">' + options.source[i][options['label']] + '</div>');
        }
    }
    function clearDialog() {
        $('.dialog').empty();
    }
    $(this).click(function () {
        if (!alreadyFilled) {
            $('.dialog').addClass('open');
        }

    });
    $('body').on('click', '.dialog > div', function () {		
		for(var i= 0;i < states.length;i++){
			if(states[i][options['key']] == $(this).attr('data-id')){
				options.changed(states[i]);
			}
		}
        $(selector).val($(this).text()).focus();
		$(selector).attr('data-id',$(this).attr('data-id'));
        $('.autocomplete_close').addClass('visible');
        alreadyFilled = true;
    });
    $('.autocomplete_close').click(function () {
		clearDialog();
		initDialog();
        alreadyFilled = false;
        $('.dialog').addClass('open');
        $(this).val('').focus();
        $(this).removeClass('visible');
    });

    function match(str) {
		clearDialog();
        str = str.toLowerCase();
       
        for (var i = 0; i < states.length; i++) {
			var index = states[i][options['label']].toLowerCase().indexOf(str);
            if (index !== -1) {
				temp = states[i][options['label']].split(str);	
				for(var j = 1;j < temp.length; j++)
					temp[0] += '<b>' + str + '</b>' + temp[j];			
                $('.dialog').append('<div>' + temp[0] +'</div>');
            }
        }
		str = null;
		
    }
    $(this).on('input', function () {
		
		 initDialog();
        $('.dialog').addClass('open');
        alreadyFilled = false;	
		
        if($(this).val())
             match($(this).val());
    });
    $('body').click(function (e) {
        if (!$(e.target).is("input, .autocomplete_close")) {
            $('.dialog').removeClass('open');
        }
    });
    initDialog();
	}
})(jQuery);