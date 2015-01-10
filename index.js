/*
 * @title JSEventカレンダー
 * @description Selecting date text to Google Calendar
 * @include https?://*
 * @license MIT License
 */
"use strict";
var mockWindow = window.open('', '_blank');
(function (scripts, callback, errorback) {
    if (typeof errorback != 'function') {
        errorback = function (url) {
            alert('jsloader load error: ' + url)
        };
    }

    var cssRegexp = /.css$/;
    var load = function (url) {
        if (cssRegexp.test(url)) {
            var link = document.createElement('link');
            link.href = url;
            link.type = 'text/css';
            link.rel = 'stylesheet';
            (document.getElementsByTagName('head')[0] || document.body).appendChild(link);
            if (scripts.length) {
                load(scripts.shift());
            } else {
                callback();
            }
        } else {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            var current_callback;
            if (scripts.length) {
                var u = scripts.shift();
                current_callback = function () {
                    load(u)
                }
            } else {
                current_callback = callback;
            }
            if (window.ActiveXObject) { // IE
                script.onreadystatechange = function () {
                    if (script.readyState == 'complete' || script.readyState == 'loaded') {
                        current_callback();
                    }
                }
            } else {
                script.onload = current_callback;
                script.onerror = function () {
                    errorback(url)
                };
            }
            script.src = url;
            document.body.appendChild(script);
        }
    };
    load(scripts.shift());
})(["//cdn.rawgit.com/wanasit/chrono/v1.0.2/chrono.min.js"], function () {
    var formatDates = require("./lib/formatDates");
    var calendarURL = require("./lib/calendarURL");
    (function __main() {
        var selectText = getSelectingText() || window.prompt("What's date?");
        var dates = formatDates(selectText);
        var url = calendarURL({
            "text": document.title,
            "details": document.title,
            "dates": dates
        });
        openURL(url);
    })();

    function openURL(url) {
        mockWindow.location.href = url;
        mockWindow.focus();
    }

    function getSelectingText() {
        return window.getSelection().toString();
    }


});
