(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/dif-anc-circulate-podcast-edit-02-1920.png' : 'images/dif-anc-circulate-podcast-edit-02-960.png');
var a='data-src'; if($('.js-2').hasAttr('src')) { a='src'; } $('.js-2').attr(a, (dpi>1) ? 'images/podmaster-364.png' : 'images/podmaster-182.png');
var a='data-src'; if($('.js-3').hasAttr('src')) { a='src'; } $('.js-3').attr(a, (dpi>1) ? 'images/podcast-300x300-460.png' : 'images/podcast-300x300-230.png');
var a='data-src'; if($('.js-4').hasAttr('src')) { a='src'; } $('.js-4').attr(a, (dpi>1) ? 'images/pasted-image-260.png' : 'images/pasted-image-130.png');
var a='data-src'; if($('.js-5').hasAttr('src')) { a='src'; } $('.js-5').attr(a, (dpi>1) ? 'images/pasted-image-260-1.png' : 'images/pasted-image-130-1.png');
var a='data-src'; if($('.js-6').hasAttr('src')) { a='src'; } $('.js-6').attr(a, (dpi>1) ? 'images/pasted-image-256.png' : 'images/pasted-image-128.png');
var a='data-src'; if($('.js-7').hasAttr('src')) { a='src'; } $('.js-7').attr(a, (dpi>1) ? 'images/pasted-image-256-1.png' : 'images/pasted-image-128-1.png');
$('.js-8').attr('src', (dpi>1) ? 'images/podmaster-592.png' : 'images/podmaster-296.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-2').unveil(50);
$('.js-9 source').unveil(50);
$('.js-3').unveil(50);
$('.js-10 source').unveil(50);
$('.js-4').unveil(50);
$('.js-11 source').unveil(50);
$('.js-5').unveil(50);
$('.js-12 source').unveil(50);
$('.js-6').unveil(50);
$('.js-13 source').unveil(50);
$('.js-7').unveil(50);
$('.js-14 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-3')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});