// ==UserScript==
// @name         Messenger PWA Bypass
// @namespace    https://github.com/daongochuy2516/messenger-pwa-bypass
// @version      1.0
// @description  Strip PWA flags so the Messenger app loads the normal web version
// @match        https://www.messenger.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  'use strict';
  // messenger pwa app bypasser
  // works both as a chrome extension content script (see manifest.json)
  // and as a tampermonkey/violentmonkey userscript (header above)
  // meta stopped support messenger pwa on 15/12/2025 (including microsoft store build)
  // pwa launches are tagged with internal routing flags
  // removing those flags forces the normal web delivery path
  // ex: https://www.messenger.com/?ref=homescreenpwa&__pwa=1 -> https://www.messenger.com/

  const url = new URL(location.href);
  const flags = url.searchParams;

  if (flags.has('__pwa')) {
    flags.delete('__pwa');
    flags.delete('ref');
    location.replace(url);
  }
})();
