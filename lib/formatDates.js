/**
 * Created by azu on 2014/09/12.
 * LICENSE : MIT
 */
"use strict";
var chrono = require("chrono");
function pickupChronoDate(dates) {
    if (dates.length == 1) {
        return dates[0];
    }
    for (var i = 0; i < dates.length; i++) {
        var chronoDate = dates[i];
        console.log(chronoDate);
        if ("startDate" in chronoDate && "endDate" in chronoDate) {
            return chronoDate;
        }
    }
    return dates[0];
}
function buildDate(dates) {
    if (typeof dates === "undefined" || dates.length === 0) {
        return;
    }
    var chronoDate = pickupChronoDate(dates);
    var startDateText = formatDateString(chronoDate.startDate);
    var endDateText = chronoDate.endDate ? formatDateString(chronoDate.endDate) : null;
    if (startDateText && endDateText) {
        return startDateText + "/" + endDateText;
    } else {
        return startDateText + "/" + startDateText;
    }
}
function format0(str, len) {
    return ('_' + Math.pow(10, len) + str).slice(-len);
}
function formatDateString(date) {
    var TDate = date.getUTCFullYear() + format0(date.getUTCMonth() + 1, 2) + format0(date.getUTCDate(), 2);
    var times = format0(date.getUTCHours(), 2) + format0(date.getUTCMinutes(), 2) + format0(date.getUTCSeconds(), 2);
    return  TDate + "T" + times + "Z";
}

/**
 *
 * @param {string} text date string
 * @returns {string} start-date-string/end-date-string
 */
module.exports = function formatDates(text) {
    var parsingDates = chrono.parse(text);
    var dates = buildDate(parsingDates);
    return dates;
};