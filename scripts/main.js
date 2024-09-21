import 'bootstrap';
import $ from 'jquery';
import '../src/style.scss'

    
$(document).ready(function() {
    let arrayHeaderItems = $('nav > ul > li');
    
    $.each(arrayHeaderItems, function(indexInArray, valueOfElement) {
            
        $(valueOfElement).hover(
            function() { // Mouse in
                let divSelected = $('<div></div>').addClass('selected');
                $(this).append(divSelected);
            },
            function() { // Mouse out
                $(this).find('.selected').remove();
            }
        );
    });
});

