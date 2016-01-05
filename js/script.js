$(function(){

    history.pushState('', '', '');

    var hidePages = function() {
        $('.page').hide();
    };

    $('.mi').click(function (e) {
        var page = $(e.currentTarget).data('page');
        if (page === 'source') {
            window.open("https://github.com/jrwdunham/dative", '_blank');
        } else {
            showPage(page);
            history.pushState(page, '', page);
        }
    });

    var showPage = function (page) {
        console.log('show page ' + page);
        hidePages();
        if (page) {
            $('#' + page).show();
            console.log('calling show on ' + page);
        } else {
            $('#about').show();
        }
    }

    $('#logo').click(function() {
        hidePages();
        $('#about').show();
    });

    $('.faq-q').click(function(e) {
        $q = $(e.currentTarget);
        $a = $q.next('.faq-a');
        if ($a.is(':visible')) {
            $a.slideUp();
        } else {
            $a.slideDown();
        }
    });

    $('.faq-show-all').click(function() {
        $('.faq-a').slideDown();
    });

    $('.faq-hide-all').click(function() {
        $('.faq-a').slideUp();
    });

    window.addEventListener('popstate', function(e) {
        showPage(e.state);
    });

    // Here we detect when the user is navigating to a specific "page" and so
    // we display that "page". Note that this requires the server to route
    // requests to /apps, /doc, etc. to /.
    var path = window.location.pathname;
    pages = ['/apps', '/faq', '/doc', '/api'];
    if (pages.indexOf(path) !== -1) {
        showPage(path.replace('/', ''));
    }

});
