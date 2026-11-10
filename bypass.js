(() => {
  'use strict';
  // messenger pwa app bypasser
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
