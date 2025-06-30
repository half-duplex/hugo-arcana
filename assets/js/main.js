/*
    Arcana by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
        breakpoints({
            wide:      [ '1281px',  '1680px' ],
            normal:    [ '981px',   '1280px' ],
            narrow:    [ '841px',   '980px'  ],
            narrower:  [ '737px',   '840px'  ],
            mobile:    [ '481px',   '736px'  ],
            mobilep:   [ null,      '480px'  ]
        });

    // Play initial animations on page load.
        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-preload');
            }, 100);
        });

    // Dropdowns.
        $('#nav > ul').dropotron({
            offsetY: -15,
            hoverDelay: 0,
            alignment: 'center'
        });

    // Nav.

        // Bar.
            $(
                '<div id="titleBar">' +
                    '<a href="#navPanel" class="toggle" aria-label="Menu"></a>' +
                    '<span class="title">' + $('#logo-wrapper').html() + '</span>' +
                '</div>'
            )
                .appendTo($body);

        // Toolbox.
            let toolBoxElement = '<div class="toolbox">';
            let multilingual = $('#multilingual');
            if (multilingual[0]){
                toolBoxElement +=
                    '<div class="dropdown">' +
                        multilingual.html() +
                    '</div>';
            }

            toolBoxElement += '</div>';

        // Panel.
            $(
                '<div id="navPanel">' +
                    '<nav>' +
                        $('#nav').navList() +
                    '</nav>' +
                    toolBoxElement +
                '</div>'
            )
                .appendTo($body)
                .panel({
                    delay: 500,
                    hideOnClick: true,
                    hideOnSwipe: true,
                    resetScroll: true,
                    resetForms: true,
                    side: 'left',
                    target: $body,
                    visibleClass: 'navPanel-visible'
                });

    // Dropdown buttons.
        $('a#languageDropdown').click(function (e) {
            $('ul#languageContent').toggleClass("show");
            e.stopPropagation();
        });
        $(document).click(function() {
            $('ul#languageContent').removeClass("show");
        });

})(jQuery);
