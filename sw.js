if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let o={};const l=e=>s(e,t),u={module:{uri:t},exports:o,require:l};n[t]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-35b84e39"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.03f61b50.js",revision:null},{url:"assets/workbox-window.prod.es5.e081b4a3.js",revision:null},{url:"assets/index.0efebeed.css",revision:null},{url:"index.html",revision:"6b667f1aa31dab5e72845e95f9d16cd3"},{url:"manifest.webmanifest",revision:"29f16a461368853212aae91e67f8728b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*(?=\/npm\/eruda)/,new e.StaleWhileRevalidate({cacheName:"npm-eruda",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/.*(?=monitor\.latest\.js)/,new e.StaleWhileRevalidate({cacheName:"monitor",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:21600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
