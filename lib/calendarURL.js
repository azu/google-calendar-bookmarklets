/**
 * Created by azu on 2014/09/12.
 * LICENSE : MIT
 */
"use strict";
module.exports = function calendarURL(parameters) {
    var action = parameters.action || "TEMPLATE";
    var text = parameters.text || "";
    var details = parameters.details || "";
    var dates = parameters.dates || "";
    var location = parameters.location || window.location.href;
    return 'https://www.google.com/calendar/b/1/render?' +
        'action=' + action +
        '&text=' + encodeURIComponent(text) +
        '&details=' + encodeURIComponent(details) +
        '&location=' + encodeURIComponent(location) +
        '&dates=' + dates +
        '&trp=true' +
        '&sprop=website:' + window.location.href;
};
