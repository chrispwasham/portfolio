$( document ).ready(function() {
    $('section button').each(function(index) {
        var sectionHead = $(this).closest('section').find('h3').text();
        $(this).attr("aria-label", $(this).text() + ": " + sectionHead)
    });

    $('section button, section img').click(function() {
        $(this).closest('section').addClass('active');
        $('body').addClass('active');
        $('html, body').animate({
          scrollTop: $('.projects-header').offset().top
        }, 500);
        $('.show-all button').focus();
    })
    $('.show-all button').click(function() {
        var scrollTarget = $('section.active');
        $('section').removeClass('active');
        $('body').removeClass('active');
        setTimeout(function(){ 
            $('html, body').animate({
              scrollTop: scrollTarget.offset().top
            }, 500);
        }, 300);
        scrollTarget.find('button').focus();
    })

});