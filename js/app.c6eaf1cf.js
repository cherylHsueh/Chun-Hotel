(function(e){function t(t){for(var c,a,o=t[0],s=t[1],l=t[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},i={app:0},r=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-39c255e2":"ab432b5b"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-39c255e2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-39c255e2":"2b7ce4cd"}[e]+".css",i=s.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===c||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===c||u===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],b.parentNode.removeChild(b),n(r)},b.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var c=i[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=i[e]=[t,n]}));t.push(c[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=i[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,n[1](d)}i[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Chun-Hotel/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a1c":function(e,t,n){},"1b50":function(e,t,n){"use strict";n("3b00")},"1e62":function(e,t,n){"use strict";n("4e38")},3061:function(e,t,n){"use strict";n("bf9f")},"3a9f":function(e,t,n){},"3abb":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABQCAYAAADiF6CoAAAACXBIWXMAAAsSAAALEgHS3X78AAAE70lEQVR4Ae2dLWzbQBSA36ahjG64w8UtLjBqqQuMUpxJQw0YGigaSHFwgwxi2iKD4A4XN3ijK+1k6bm63s55SXzv5yp/0qS5UeM473w/371Xv3t+foYBfd4PMbDBEAgjDIEwwhAIIwyBMMIQCCMMgTDCB66PkRX5FACOAOAJAL7VZfU3tS+nJSvyQwD4EXjpoS6rqxjn4Lwj5hiEEQBMGM/DSlbkHwFgGjhHc23Xsc7NFgi8A2Z4eJQV+RnXuZiZYGPymce8y1nHiLqsHgBgiYfjrMi/cJ4vNth4jgJve1eX1X3M07EP1nVZNYFY4+EEb3XzYKMZBz7nui6rm9ifX2rWNMM+9aDj4kyBjSU0rj3h2BcdkUDUZfXbuYCTrMiPzX37rxljo/G5qcvqkeOEYusI7FNXeNh0UZ+lzr0L2EhOAr/yqy6r1f7vvBnpBd0Cx4tRx5RQFWwcoS7pD1eX1CIaCJzutRd0kBX5ueT5t2DaMVWdcS9IxRUH9rELPDzHVas62ChC48KSa1xwUXFNdVndNn0uHn7VntJiYwjdnQ84/WZHU/q1CuSTpgKRUhgUaoEwpEBEFAaFqgb3FMi5tAKRVBgU6vsRjgIZSSoQaYVBYWVjyFUg7FNaDYVBYSIQngI5FVAg4gqDwsxWqZQC0VIYFNb2rF0FEn1Kq6kwKEwFwlMghwwKRE1hUJjL4uBSINoKg8JkOk1sBWJBYVBYzmuKokCsKAwKs4GIqEBMKAwK05l+fRWIJYVBYT7lcl8FgkELjQsqCoMildzXnRSIozD8LklNYVAkEYg9FEjXVFVNYVAkkw2+rQLBIJ0GXlJVGBSppeVvVCCWFQYFW3kvpuWPYg+OOAj/xMOluyDLirxJnQ+txK9wBrbvOTvHnLqsZh2/thOcd8QtfilNnx6ynXvRpUBQYYSCsOwTBGSC0+BD71+0ro4zLb+5+Ds8vIi5DRpQIMdcCgMbUWgtsoq5FuFOy79h1NquArkMvN57qoqN5yLw0tq5K6MgMVi/rAGyIg9d1F54CiTEHKe9fRDTIxL1Ec2X0Q7WUbdBPQXi0lthYKMJrUUWHGsRqbT8lbcGiJap4RXCAP6/77iwaS1y2+e9u5BcRyxwPj/q6NP70HZ/T327Da0MD8n6CLdPj7oN6iiQGArjUmM7VfzvNWEA2iB8t+R+vM/msuTeydNIy28uqF1gTa0UNxLanH07Vcs1XVvIBG8htlOjKAwKrfoIN22m2QaNpkD2ZIKNwifGWmQrNNPy77kUyC5IKQwK7bR8TgVCIqkwKCzsR7TOKKoC2RIzGR4W6iOa6SuLAtmEtMKgsJKWv3K0NnuxiobCoLC0VTpnVCAvWCxSAWP1EWwKxENFYVBYS8t/5CxuZN5O7YXFtHwWBaKtMCisptNEVSAWFAaF1fqI2ApEXWFQWE7Lj6JArCgMCutp+b0UiCWFQZFCymUfBZJEkQokUh/hK5CtihutKQyKVNLyXQVCTmktKgyKlLLBt1IgVhUGRUr1Eb4C6SpuNKkwKJKqj/AUyH9/4tqywqBI7vkRXQrEusKgSPVBHq4CGaegMCiSfSAgzozaQXvdMVW9tlZP3UWyj7bxFEgoCKYUBkXSzxhyFIiPOYVB8RYe9tQqkFc/S+2ZRskHwlMgYFVhULyZp/diOTHEKreVhu3xZwqYLmjfCAD8A6e0j5ONm8BUAAAAAElFTkSuQmCC"},"3b00":function(e,t,n){},"4e38":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t,n,a,i,r){var o=Object(c["A"])("router-view"),s=Object(c["A"])("the-footer");return Object(c["s"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(o),Object(c["i"])(s)],64)}var i=n("8b03"),r=n.n(i),o=Object(c["I"])("data-v-2c09baac");Object(c["v"])("data-v-2c09baac");var s={class:"footer"},l={class:"footer-content"},u=Object(c["i"])("div",{class:"footer-logo"},[Object(c["i"])("img",{src:r.a,alt:"logo"}),Object(c["i"])("h1",null,"不想上班")],-1),d={class:"footer-info"},b=Object(c["i"])("span",null,"07-536-0000",-1),f=Object(c["i"])("span",null,"香港銅鑼灣星發街1號",-1),p=Object(c["i"])("span",null,"I_don't_want_to_work",-1);Object(c["t"])();var v=o((function(e,t,n,a,i,r){var o=Object(c["A"])("fa-icon");return Object(c["s"])(),Object(c["e"])("footer",s,[Object(c["i"])("div",l,[u,Object(c["i"])("div",d,[Object(c["i"])("ul",null,[Object(c["i"])("li",null,[Object(c["i"])(o,{icon:"phone-alt"}),b]),Object(c["i"])("li",null,[Object(c["i"])(o,{icon:"map-marker-alt"}),f]),Object(c["i"])("li",null,[Object(c["i"])(o,{icon:["fab","instagram"]}),p])])])])])})),j={name:"TheFooter"};n("1b50");j.render=v,j.__scopeId="data-v-2c09baac";var O=j,m={name:"App",components:{TheFooter:O}};n("3061");m.render=a;var g=m,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),A=Object(c["I"])("data-v-642b3c5a");Object(c["v"])("data-v-642b3c5a");var y={class:"container"};Object(c["t"])();var w=A((function(e,t,n,a,i,r){var o=Object(c["A"])("default"),s=Object(c["A"])("rooms");return Object(c["s"])(),Object(c["e"])("main",y,[Object(c["i"])(o),Object(c["i"])(s)])})),C=n("9b19"),k=n.n(C),S=n("3abb"),B=n.n(S),E=Object(c["I"])("data-v-611b3c12");Object(c["v"])("data-v-611b3c12");var x=Object(c["i"])("div",{class:"h-srceen-8 d-flex"},[Object(c["i"])("div",{class:"row"},[Object(c["i"])("div",{class:"cl-s-12 cl-md-2 cl-xl-2"},[Object(c["i"])("div",{class:"logo-block"},[Object(c["i"])("img",{src:k.a,alt:"logo"})])]),Object(c["i"])("div",{class:"cl-s-12 cl-md-8 cl-xl-8 position-relative justify-center"},[Object(c["i"])("div",{class:"main-block"},[Object(c["i"])("div",{class:"main-block-pic"}),Object(c["i"])("span",null,"I don't want to work")])]),Object(c["i"])("div",{class:"cl-s-12 cl-md-2 cl-xl-2"},[Object(c["i"])("div",{class:"hotelName-block"},[Object(c["i"])("span",null,"不想"),Object(c["i"])("span",null,"上班")])])])],-1),I=Object(c["i"])("div",{class:"slide-block h-srceen-2"},[Object(c["i"])("div",{class:"slide-block-btn"}," Slide "),Object(c["i"])("img",{src:B.a,alt:""})],-1);Object(c["t"])();var K=E((function(e,t,n,a,i,r){return Object(c["s"])(),Object(c["e"])(c["a"],null,[x,I],64)})),F={name:"Default"};n("f35a");F.render=K,F.__scopeId="data-v-611b3c12";var M=F,N=Object(c["I"])("data-v-5a9c3948");Object(c["v"])("data-v-5a9c3948");var V=Object(c["i"])("h2",null,"ROOMS",-1),U={class:"row justify-center"};Object(c["t"])();var Q=N((function(e,t,n,a,i,r){var o=Object(c["A"])("room-intro");return Object(c["s"])(),Object(c["e"])("div",null,[V,Object(c["i"])("div",U,[(Object(c["s"])(),Object(c["e"])(c["a"],null,Object(c["y"])(6,(function(e){return Object(c["i"])("div",{key:e,class:"cl-md-6 cl-xl-4"},[Object(c["i"])(o)])})),64))])])})),R={class:"room"},Y=Object(c["i"])("div",{class:"room-title"}," Single Room ",-1),q={class:"card"},X={class:"card-img"},L=Object(c["g"])('<ul class="card-details"><li class="card-details-item container"><div class="row py-3 fSize-10"><div class="cl-s-4 cl-xl-4 justify-center"><span>人數</span></div><div class="cl-s-4 cl-xl-4 justify-center"><span>床</span></div><div class="cl-s-4 cl-xl-4 justify-center"><span>大小</span></div></div><div class="row pb-3 fSize-18"><div class="cl-s-4 cl-xl-4 justify-center"><span>1</span></div><div class="cl-s-4 cl-xl-4 justify-center"><span>Single</span></div><div class="cl-s-4 cl-xl-4 justify-center"><span>18㎡</span></div></div></li><li class="card-details-item card-details-item_baseline py-3"><span class="fSize-12">wifi,早餐,電話,空調,冰箱,禁止吸菸,可帶動物</span></li><li class="card-details-item py-6"><span>假日</span><span>$3000</span></li><li class="card-details-item py-6"><span>平日</span><span>$2888</span></li></ul>',1);function W(e,t,n,a,i,r){return Object(c["s"])(),Object(c["e"])("div",R,[Y,Object(c["i"])("div",q,[Object(c["i"])("div",X,[Object(c["i"])("img",{src:a.pic,alt:""},null,8,["src"])]),L])])}var D={name:"RoomIntro",setup:function(){var e=Object(c["x"])("https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");return{pic:e}}};n("d66c");D.render=W;var P=D,T={name:"Rooms",components:{RoomIntro:P}};n("f867");T.render=Q,T.__scopeId="data-v-5a9c3948";var H=T,J={name:"Home",components:{Default:M,Rooms:H}};n("1e62");J.render=w,J.__scopeId="data-v-642b3c5a";var _=J,z=[{path:"/",name:"Home",component:_},{path:"/reservation",name:"Reservation",component:function(){return n.e("chunk-39c255e2").then(n.bind(null,"2b83"))}}],G=Object(h["a"])({history:Object(h["b"])(),routes:z}),Z=G,$=n("5502"),ee=Object($["a"])({state:{},mutations:{},actions:{},modules:{}}),te=(n("1a1c"),n("5a0c")),ne=n.n(te),ce=n("d772"),ae=n.n(ce),ie=n("4208"),re=n.n(ie);ne.a.extend(ae.a),ne.a.extend(re.a);var oe={install:function(e,t){e.provide("dayjs",ne.a)}},se=n("ecee"),le=n("c074"),ue=n("42b9"),de=n("ad3d");se["c"].add(le["c"],le["b"],le["a"],ue["a"]);var be={install:function(e,t){e.component("FaIcon",de["a"])}},fe=n("7b37"),pe={install:function(e,t){e.use(fe["c"],{}),e.component("Calendar",fe["a"]),e.component("DatePicker",fe["b"])}},ve=n("bc3a"),je=n.n(ve),Oe=n("2106"),me=n.n(Oe),ge=Object(c["d"])(g);ge.use(me.a,je.a),ge.use(oe),ge.use(be),ge.use(pe),ge.use(Z),ge.use(ee),ge.mount("#app")},"7f07":function(e,t,n){},"8b03":function(e,t,n){e.exports=n.p+"img/logo_footer.f789a37c.svg"},"9b19":function(e,t,n){e.exports=n.p+"img/logo.177c514a.svg"},bf9f:function(e,t,n){},d66c:function(e,t,n){"use strict";n("ed15")},ed15:function(e,t,n){},f35a:function(e,t,n){"use strict";n("3a9f")},f867:function(e,t,n){"use strict";n("7f07")}});
//# sourceMappingURL=app.c6eaf1cf.js.map