// ==UserScript==
// @name                Tumblr Trim Quotes
// @namespace           http://wolfspirals.tumblr.com/
// @version             0.5
// @description         Trims inner or outer blockquotes in any TinyMCE area based on Trim Level (default 1)
// @include             *://www.tumblr.com/*
// @copyright           2013+, Allyson Moisan
// ==/UserScript==

(function () {
    var trimLevelInner = 1;
    var trimLevelOuter = 1;
    
    var btnInner = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNpi/P//PwOtARMDHcCoJUPIEkZGxv8gDOM3NTX9B2Fi+aNxMmrJqCWjlgx1SxhHq99RS2gGAAIMACJjF035ztbgAAAAAElFTkSuQmCC";
    var btnOuter = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNpi+v//PwOtMRMDHcCoJUPIkqampv8gTCyfkZHxPwiPxsmoJaOWjFoyXCxhBFWPo8E1aglNAECAAQC2c18GuiZyEQAAAABJRU5ErkJggg==";
    
    // insertionQuery v1.0.0 (2014-03-06) 
    // license:MIT 
    // naugtur <naugtur@gmail.com> (http://naugtur.pl/) 
    var insertionQ = function(){"use strict";function a(a,b){var d,e="insQ_"+g++,f=function(a){(a.animationName===e||a[i]===e)&&(c(a.target)||b(a.target))};d=document.createElement("style"),d.innerHTML="@"+j+"keyframes "+e+" {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n"+a+" { animation-duration: 0.001s; animation-name: "+e+"; "+j+"animation-duration: 0.001s; "+j+"animation-name: "+e+";  } ",document.head.appendChild(d);var h=setTimeout(function(){document.addEventListener("animationstart",f,!1),document.addEventListener("MSAnimationStart",f,!1),document.addEventListener("webkitAnimationStart",f,!1)},n.timeout);return{destroy:function(){clearTimeout(h),d&&(document.head.removeChild(d),d=null),document.removeEventListener("animationstart",f),document.removeEventListener("MSAnimationStart",f),document.removeEventListener("webkitAnimationStart",f)}}}function b(a){a.QinsQ=!0}function c(a){return n.strictlyNew&&a.QinsQ===!0}function d(a){return c(a.parentNode)?a:d(a.parentNode)}function e(a){for(b(a),a=a.firstChild;a;a=a.nextSibling)void 0!==a&&1===a.nodeType&&e(a)}function f(f,g){var h=[],i=function(){var a;return function(){clearTimeout(a),a=setTimeout(function(){h.forEach(e),g(h),h=[]},10)}}();return a(f,function(a){if(!c(a)){b(a);var e=d(a);h.indexOf(e)<0&&h.push(e),i()}})}var g=100,h=!1,i="animationName",j="",k="Webkit Moz O ms Khtml".split(" "),l="",m=document.createElement("div"),n={strictlyNew:!0,timeout:20};if(m.style.animationName&&(h=!0),h===!1)for(var o=0;o<k.length;o++)if(void 0!==m.style[k[o]+"AnimationName"]){l=k[o],i=l+"AnimationName",j="-"+l.toLowerCase()+"-",h=!0;break}var p=function(b){return h&&b.match(/[^{}]/)?(n.strictlyNew&&e(document.body),{every:function(c){return a(b,c)},summary:function(a){return f(b,a)}}):!1};return p.config=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b])},p}();
    
    var gm_uwin = ( function() {
            var a;
            try {
                a = unsafeWindow == window ? false : unsafeWindow;
                // Chrome: window == unsafeWindow
            } catch(e) {
            }
            return a || ( function() {
                    var el = document.createElement('p');
                    el.setAttribute('onclick', 'return window;');
                    return el.onclick();
                }());
        }());
    
    var $ = gm_uwin.jQuery;
    
    if ( typeof $ !== "undefined") {
        $(document).ready(function() {
            $("head").append('<style type="text/css">span.mce_trimouter { background:url(\'' + btnOuter + '\') !important; } span.mce_triminner { background:url(\'' + btnInner + '\') !important; }</style>');
            if ($('a.mce_blockquote').length > 0) {
                $('a.mce_blockquote').each(function(i, v) {
                    insertButtons(v);
                });
            }
            insertionQ('a.mce_blockquote').every(function(v) {
                insertButtons(v);
            });
        });
    }
    
    function trimOuterQuotes(m) {
        var post = $(m).contents().find('#tinymce');
        var markup = $('<body>').append(post.html());
        var q = markup.find('blockquote');
        if (q.length >= trimLevelOuter) {
            q = $(q).get(q.length - trimLevelOuter);
            var p = $(q).prev().get(0);
            if (p != null && p.tagName == "P") {
                q = $('<div>').append(p).append(q).append($('<p>'));
            }
            markup.html($(q).html());
        }
        post.html(markup.html());
    }
    
    function trimInnerQuotes(m) {
        var post = $(m).contents().find('#tinymce');
        var markup = $('<body>').append(post.html());
        var f = "blockquote";
        for (var i = 0; i < trimLevelInner; i++) {
            f += " > blockquote";
        }
        var q = markup.find(f).get(0);
        var p = $(q).prev().get(0);
        if (p != null && p.tagName == "P") {
            $(p).remove();
        }
        $(q).remove();
        post.html(markup.html());
    }
    
    function insertButtons(v) {
        if ($($(v).parents("tr").get(0)).contents().find("a.mce_trimouter").length == 0) {
            var td1 = document.createElement("td");
            $(td1).css("position", "relative");
            td1.innerHTML = '<a role="button" id="post_two_trimouther" href="javascript:;" class="mceButton mceButtonEnabled mce_trimouter" onmousedown="return false;" onclick="return false;" aria-labelledby="post_two_trimouter_voice" title="Trim Outer Quotes" tabindex="-1"><span class="mceIcon mce_trimouter"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="post_two_trimouter_voice">Trim Outher Quotes</span></a>';
            $(td1).on("click", function() {
                var m = $(this).parents('table.mceLayout').contents().find('td.mceIframeContainer iframe');
                trimOuterQuotes(m);
            });
            $(td1).insertAfter($(v).parent());
            var td2 = document.createElement("td");
            $(td2).css("position", "relative");
            td2.innerHTML = '<a role="button" id="post_two_triminner" href="javascript:;" class="mceButton mceButtonEnabled mce_triminner" onmousedown="return false;" onclick="return false;" aria-labelledby="post_two_triminner_voice" title="Trim Inner Quotes" tabindex="-1"><span class="mceIcon mce_triminner"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="post_two_triminner_voice">Trim Inner Quotes</span></a>';
            $(td2).on("click", function() {
                var m = $(this).parents('table.mceLayout').contents().find('td.mceIframeContainer iframe');
                trimInnerQuotes(m);
            });
            $(td2).insertAfter($(v).parent());
        }
    }
})();
