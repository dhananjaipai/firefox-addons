// ==UserScript==
// @name         DevTools Android
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use Eruda to enable devTools for Android
// @author       dhananjaipai
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.__devTools = () => {
    let s = document.createElement('script');
    s.src = "https://cdn.jsdelivr.net/npm/eruda";
    s.addEventListener('load', function() { eruda.init(); });
    document.head.appendChild(s);
}