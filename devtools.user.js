// ==UserScript==
// @name         DevTools Android
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use Eruda to enable devTools for Android
// @author       You
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

window.__devTools = () => {
    let s = document.createElement('script');
    s.src = "https://cdn.jsdelivr.net/npm/eruda";
    s.addEventListener('load', function() { eruda.init(); });
    document.head.appendChild(s);
}