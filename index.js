/*
 * @title JSEventカレンダー
 * @description Selecting date text to Google Calendar
 * @include https?://*
 * @license MIT License
 */
"use strict";

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
    window.open(url, "_blank");
}

function getSelectingText() {
    return window.getSelection().toString();
}

