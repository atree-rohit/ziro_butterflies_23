if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,o)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let c={};const r=s=>i(s,a),d={module:{uri:a},exports:c,require:r};e[a]=Promise.all(n.map((s=>d[s]||r(s)))).then((s=>(o(...s),c)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/icons/icon-128x128.png",revision:"89f26b9e8c64a86646eb4955d01f34ba"},{url:"assets/icons/icon-144x144.png",revision:"af2df8d22809f141cd559bcd24d3011a"},{url:"assets/icons/icon-152x152.png",revision:"26d3cd175038b9a24c85060c836096ec"},{url:"assets/icons/icon-192x192.png",revision:"aa3c695a9e6a4a0057ef63a7f247f3cb"},{url:"assets/icons/icon-384x384.png",revision:"7b783da60c2bc9b5ab5ae5d239b352d9"},{url:"assets/icons/icon-48x48.png",revision:"88a19349638cd37102a09e116cfcfe31"},{url:"assets/icons/icon-512x512.png",revision:"0f30fd88c5c649bb4abdc126c0abca3b"},{url:"assets/icons/icon-72x72.png",revision:"336febe134a43aae298099e336e030be"},{url:"assets/icons/icon-96x96.png",revision:"c5abb2a969d7674f378ad6da1092f370"},{url:"assets/index-46ce5b6e.js",revision:null},{url:"assets/index-ab3318fc.css",revision:null},{url:"index.html",revision:"483eed5ccf90cf855821e906e963e4ac"},{url:"registerSW.js",revision:"c3b7e49215ea7f26ee28fb320e62b5a9"},{url:"zb.svg",revision:"5c171e87b95cac874788289029487fc7"},{url:"assets/photos/Hesperiidae_photos.json",revision:"e99b86b9bd8e25a954d191328365a040"},{url:"assets/photos/Lycaenidae_photos.json",revision:"a042a27c771ba148feaa5b938e1199e8"},{url:"assets/photos/Nymphalidae_photos.json",revision:"2926ddfcdbe5875e46f445a32aafd6be"},{url:"assets/photos/Papilionidae_photos.json",revision:"877b4144aa81a3c21e25a20ad21d72d5"},{url:"assets/photos/Pieridae_photos.json",revision:"9b04384768047152183e6c3540296d10"},{url:"assets/photos/Riodinidae_photos.json",revision:"a611c9262af9eb335517c3dfe4643505"},{url:"assets/icons/icon-72x72.png",revision:"336febe134a43aae298099e336e030be"},{url:"assets/icons/icon-96x96.png",revision:"c5abb2a969d7674f378ad6da1092f370"},{url:"assets/icons/icon-128x128.png",revision:"89f26b9e8c64a86646eb4955d01f34ba"},{url:"assets/icons/icon-144x144.png",revision:"af2df8d22809f141cd559bcd24d3011a"},{url:"assets/icons/icon-152x152.png",revision:"26d3cd175038b9a24c85060c836096ec"},{url:"assets/icons/icon-192x192.png",revision:"aa3c695a9e6a4a0057ef63a7f247f3cb"},{url:"assets/icons/icon-384x384.png",revision:"7b783da60c2bc9b5ab5ae5d239b352d9"},{url:"assets/icons/icon-512x512.png",revision:"0f30fd88c5c649bb4abdc126c0abca3b"},{url:"manifest.webmanifest",revision:"7c08da5c7aca86e236417ba92f693aec"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
