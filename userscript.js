// ==UserScript==
// @name         Blocked Image
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocked EU Lol
// @author       coolcraftnet18
// @grant        none
// @match      http://*/*
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
	el.src = 'https://github.com/coolcraftnet18/image-unavailable/blob/master/unavailable.png?raw=true';
});
})();
