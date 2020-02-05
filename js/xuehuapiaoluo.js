(function ($) {
    $.fn.snow = function (options) {
        var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'z-index': '9999', 'top': '-50px' }).html('&#10052;'),
            documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                minSize: 10,
                maxSize: 20,
                newOn: 1000,
                flakeColor: "#AFDAEF" /* 姝ゅ鍙互瀹氫箟闆姳棰滆壊锛岃嫢瑕佺櫧鑹插彲浠ユ敼涓�#FFFFFF */
            },
            options = $.extend({}, defaults, options);
        var interval = setInterval(function () {
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            }, durationFall, 'linear', function () {
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);
$(function () {
    $.fn.snow({
        minSize: 5, /* 瀹氫箟闆姳鏈€灏忓昂瀵� */
        maxSize: 50,/* 瀹氫箟闆姳鏈€澶у昂瀵� */
        newOn: 500  /* 瀹氫箟瀵嗛泦绋嬪害锛屾暟瀛楄秺灏忚秺瀵嗛泦 */
    });
});