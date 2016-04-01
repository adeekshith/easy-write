/**
 * Created by Deekshith Allamaneni on 3/31/16.
 */
"use strict";

let oneKPlus = /\b(?!(this|and|or|a|all|will|be|behind)\b)\w+/gi;

var $container = $('.container');
var $backdrop = $('.backdrop');
var $highlights = $('.highlights');
var $textarea = $('textarea');
var $toggle = $('button');

// yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

function applyHighlights(text) {
    text = text
        .replace(/\n$/g, '\n\n')
        .replace(oneKPlus, '<mark>$&</mark>');

    if (isIE) {
        // IE wraps whitespace differently in a div vs textarea, this fixes it
        text = text.replace(/ /g, ' <wbr>');
    }

    return text;
}

function handleInput() {
    var text = $textarea.val();
    var highlightedText = applyHighlights(text);
    $highlights.html(highlightedText);
}

function handleScroll() {
    var scrollTop = $textarea.scrollTop();
    $backdrop.scrollTop(scrollTop);

    var scrollLeft = $textarea.scrollLeft();
    $backdrop.scrollLeft(scrollLeft);
}

function fixIOS() {
    // iOS adds 3px of (unremovable) padding to the left and right of a textarea, so adjust highlights div to match
    $highlights.css({
        'padding-left': '+=3px',
        'padding-right': '+=3px'
    });
}

function bindEvents() {
    $textarea.on({
        'input': handleInput,
        'scroll': handleScroll
    });
}

if (isIOS) {
    fixIOS();
}

bindEvents();
handleInput();
