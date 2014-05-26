// ==UserScript==
// @name       		Tumblr Smaller Text
// @namespace  		http://wolfspirals.tumblr.com/
// @version    		0.5
// @description  	Shrinks or Resets text in any TinyMCE area
// @include     	*://www.tumblr.com/*
// @copyright  		2013+, Allyson Moisan
// ==/UserScript==

(function () {
    var btnUp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAAGj9fUKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcNJREFUeNpi/P//PwMyYAIRvTMWKMBFQCpAuGf6/P8gmhFdC0AAYQgwAfU7oIggmVGP1QyAAMIQQAdM6AJAO+YD8X+sCoAS9UAK5IkDMEUErQAIINLdgFUBsqNwmXAAyaH/cVoB8mJxRgIjsiIUR0IlQKYpABUqUscXAAFE0ASiggHJjQIUGQAE67EpAhq8H4jXk+VHaMg9AOIAIPs+SQZANX+AGtAACn4MQ2BJHh2DshEQv8chvh/GpzgWAAKIIgOYqBb/A6MZGB3vgfg8Sbqh0SCAFCUCaFE0HzmKkDHB0EbKxA9geZXY1DYfykyElmkkBVgCqIQA2rgAath9ojQj2XoAWppeQLediYCtoAziAMUfYFkWpoAFh60gmxiAzhXE4pqEIZ62AQKM4jw9YC4f0pbjSmoBQAqUrBSBye0DrSxHr7ALgJQ9EBdCLZ8IxPlA3Ah0xAGaWo5eeQItdCSingRlefT6MRFWntAszrFY/ABKg5p9CTSzHIvFhtDy+gOxDmCiksWOQIsvQNlEO4DkQgZHHBMCjtgSLEmWQ5uGIIsFCCUsHKFzgKxgx2JxA74UDZQDJT5DJKH96H2c0bJ9QAAAHytL4ubDLqIAAAAASUVORK5CYII=";
    var btnDn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAYAAAGj9fUKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZVJREFUeNpi/P//PwMyYAIRvTMW7EcRAAIBoOB9EIMRXQtAADFiNQOrANCM/1i1AAQQhgA+I/ZjU4BhAsyu4owERqKsAAgg4t1AYwUgLwLxeSh7Pk5HQiUTSPImQTcABBBBE0j2JdCdBhQZAAT9lBrAgMVV/9GDF58BAuiaoUEeAGTXY6gGBSIu3DN9/n8gVkDjByCroTgWAAKIIgOYqBr/o5op1Awqe2HlGc54BipQAFLxQPwQiB8Ak+cBpILwARAvAIo14itOQGlcAKjoAVJRCxJzBOL3sCKGqBSGxbmJQAMWEPQzUGM/rECD2hgIxPOHQdoGCDCK8/SAuXx4W46rTTEa7JQAFmoYAoyaACClD+UuhJVNZPkc1A6BFnLo4g5YxEDtqvVA3ADF96ElLPn5HGp5P7TRdgFUtqH7COoYWIIElbz2UAd8AGJFoPoPNClkoK2081DuBCDeCGWDmjcO0DpFkeqWQ4P1PpS7ARoyyACUBgwIOYBky6HRcR9ayYFqx0Rc1S+QAjnyAFCN42jZPmgsBwAk7vjEBUfMOgAAAABJRU5ErkJggg==";
    
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
            $("head").append('<style type="text/css">span.mce_shrinktext { background:url(\'' + btnDn + '\') !important; } span.mce_resettext { background:url(\'' + btnUp + '\') !important; }</style>');
            if ($('a.mce_blockquote').length > 0) {
                $('a.mce_blcokquote').each(function(i, v) {
                    insertButton(v);
                });
            }
            insertionQ('a.mce_blockquote').every(function(v) {
                insertButton(v);
            });
        });
    }
    
    function shrinkPostText(m) {
        var post = $(m).contents().find('#tinymce');
        var markup = $('<body>').append(post.html());
        markup.find("div, p, li").each(function(i, e) {
            var t = $(e).children("sup, sub");
            if (t.length >= 1) {
                $(t).parent().each(function(j, l) {
                    l.innerHTML = $(t).html();
                });
            }
            var s = $(e).children("small");
            if (s.length < 1) {
                $(e).wrapInner('<small />');
            }
        });
        post.html(markup.html());
    }
    
    function resetPostText(m) {
        var post = $(m).contents().find('#tinymce');
        var markup = $('<body>').append(post.html());
        markup.find("div, p, li").each(function(i, e) {
            var s = $(e).children("small, sup, sub");
            if (s.length >= 1) {
                $(s).parent().each(function(j, l) {
                    l.innerHTML = $(s).html();
                });
            }
        });
        post.html(markup.html());
    }
    
    function insertButton(v) {
        if ($($(v).parents("tr").get(0)).contents().find("a.mce_shrinktext").length == 0) {
            var td1 = document.createElement("td");
            $(td1).css("position", "relative");
            td1.innerHTML = '<a role="button" id="post_two_shrink" href="javascript:;" class="mceButton mceButtonEnabled mce_shrinktext" onmousedown="return false;" onclick="return false;" aria-labelledby="post_two_shrink_voice" title="Shrink Text" tabindex="-1"><span class="mceIcon mce_shrinktext"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="post_two_shrink_voice">Shrink Text</span></a>';
            $(td1).on("click", function() {
                var m = $(this).parents('table.mceLayout').contents().find('td.mceIframeContainer iframe');
                shrinkPostText(m);
            });
            $(td1).insertAfter($(v).parent());
            var td2 = document.createElement("td");
            $(td2).css("position", "relative");
            td2.innerHTML = '<a role="button" id="post_two_reset" href="javascript:;" class="mceButton mceButtonEnabled mce_resettext" onmousedown="return false;" onclick="return false;" aria-labelledby="post_two_reset_voice" title="Reset Text" tabindex="-1"><span class="mceIcon mce_resettext"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="post_two_reset_voice">Reset Text</span></a>';
            $(td2).on("click", function() {
                var m = $(this).parents('table.mceLayout').contents().find('td.mceIframeContainer iframe');
                resetPostText(m);
            });
            $(td2).insertAfter($(v).parent());
        }
    }
)();
