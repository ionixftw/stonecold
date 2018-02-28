// Deadmau5 - Strobe
var ratio = 0;
var num = 55;
var totalCount = 0;
var day, hour, minute, second = 0;
var d, h, m, s = 0;
var sign = ":";
var str = "";
document.addEventListener("click", counter);
document.addEventListener("keydown", counter);



function converter(s) {
    second = Math.floor(s % 60);
    minute = Math.floor((s / 60) % 60);
    hour = Math.floor(s / (60 * 60) % 24);
    day = Math.floor(s / (60 * 60 * 24) % 7);
    str = minifier();
    return str;
}

function minifier() {

    d = leadingZero(day) + "<span class='arial'>d</span>";
    h = leadingZero(hour) + "<span class='arial'>h</span>";
    m = leadingZero(minute) + "<span class='arial'>m</span>";
    s = leadingZero(second) + "<span class='arial'>s</span>";
    if (day > 0) {
        str = d + sign + "<span class='small'>" + h + sign + m + sign +
            "<span class='smaller animated'>" + s + "</span></span>";
        return str;
    } else if (hour > 0) {
        str = h + sign + "<span class='small'>" + m + sign + "<span class='smaller animated'>" +
            s + "</span></span>";
        return str;
    } else if (minute > 0) {
        str = m + sign + "<span class='small'><span class='smaller animated'>" + s +
            "</span></span>";
        return str;
    } else {
        str = "<span class='animated'>" + s + "</span>";
        return str;
    }
}

function leadingZero(input) {
    if (input < 10) {
        return "0" + input;
    } else {
        return input;
    }
}

function timer() {
    if (num >= 86400 * 7) {
        num = 0;
    }
    num++;
    document.getElementById("time").innerHTML = converter(num);
    ratio = (totalCount / (num / 60)).toFixed(2);
    document.getElementById("ratio").innerHTML = ratio + "<span class='arial'>per minute</span>";
}
function counter() {
    totalCount++;
    document.getElementById("counter").innerHTML = "<span class='arial'>total </span>" + totalCount ;

}
var timerStart = setInterval(timer, 1000);