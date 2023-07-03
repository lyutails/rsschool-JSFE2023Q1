(()=>{"use strict";var n={669:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),s=t(645),i=t.n(s)()(o());i.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const a=i},392:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),s=t(645),i=t.n(s)()(o());i.push([n.id,".buttons_wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n.source_letter {\n  width: 30px;\n  aspect-ratio: 1 / 1;\n  border: 1px solid #fc38de;\n  border-radius: 5px;\n  color: #fc38de;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.4s ease-in-out;\n  user-select: none;\n  opacity: 0.8;\n  margin-right: 0.5vw;\n  margin-bottom: 0.5vw;\n}\n\n.source_letter:hover {\n  cursor: pointer;\n  border: 1px solid #30ffe0;\n  color: #30ffe0;\n}\n\n.all_sources_button {\n  width: 30px;\n  aspect-ratio: 1 / 1;\n  border: 1px solid #fc38de;\n  border-radius: 5px;\n  color: #fc38de;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.4s ease-in-out;\n  user-select: none;\n  opacity: 0.8;\n  margin-right: 0.5vw;\n  margin-bottom: 0.5vw;\n}\n\n.all_sources_button:hover {\n  cursor: pointer;\n  border: 1px solid #30ffe0;\n  color: #30ffe0;\n}\n",""]);const a=i},501:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),s=t(645),i=t.n(s)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([n.id,".main {\n    width: 90vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.sources.buttons {\n    width: 100%;\n    height: 260px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    font-family: 'Roboto', sans-serif;\n    font-size: 2rem;\n    text-align: center;\n}\n\n.sources.buttons::-webkit-scrollbar {\n    width: 15px;\n}\n\n.sources.buttons::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);\n    border-radius: 10px;\n}\n\n.sources.buttons::-webkit-scrollbar-thumb {\n    background: linear-gradient(#30ffe0, #fc38de);\n    outline: none;\n    border-radius: 20px;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30ffe0;\n    border-radius: 5px;\n    font-size: 1.2rem;\n    line-height: 1;\n    margin: 1vw;\n    padding: 0.6rem 1.2rem;\n    color: #30ffe0;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #fc38de;\n    color: #fc38de;\n    box-shadow: 0 0.5em 0.5em -0.4em #fc38de;\n    transform: translateY(-0.2rem);\n}\n\n.source__item-name {\n    white-space: nowrap;\n}\n",""]);const a=i},767:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),s=t(645),i=t.n(s)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    scroll-behavior: smooth;\n}\n\nbody {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\n.body_wrapper {\n    width: 90vw;\n    margin: 0 auto;\n}\n\nbody::-webkit-scrollbar {\n    width: 15px;\n}\n\n.body::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);\n    border-radius: 10px;\n}\n\n.body::-webkit-scrollbar-thumb {\n    background: linear-gradient(#30ffe0, #fc38de);\n    outline: none;\n    border-radius: 20px;\n}\n\nheader {\n    width: 100%;\n    height: 100px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n}\n\nheader h1 {\n    position: relative;\n    font-size: 40px;\n    font-weight: 800;\n    user-select: none;\n    filter: blur(0.05rem);\n    text-transform: uppercase;\n    white-space: nowrap;\n    text-shadow: 0 0 0.8rem #0fb2e8;\n    animation: shake 4s linear forwards;\n}\n\n.inner_text {\n    position: absolute;\n    top: 0;\n    left: 180px;\n    transform: translate(-50%, -50%);\n    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);\n    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);\n    text-shadow: 0 0 0.8rem #0fb2e8;\n}\n\nh1::before,\nh1::after {\n    content: attr(data-text);\n    position: absolute;\n    top: 0;\n    left: 180px;\n    text-shadow: 0 0 0.8rem #0fb2e8;\n}\n\nh1::before {\n    animation: crack1 4s linear forwards;\n    -webkit-clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);\n    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);\n}\n\nh1::after {\n    animation: crack2 4s linear forwards;\n    -webkit-clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);\n    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);\n}\n\n@keyframes shake {\n    5%,\n    15%,\n    25%,\n    35%,\n    65%,\n    75%,\n    95% {\n        filter: blur(0.05rem);\n        transform: translateY(0.05rem) rotate(0deg);\n    }\n\n    10%,\n    30%,\n    40%,\n    50%,\n    70%,\n    80%,\n    90% {\n        filter: blur(0.04rem);\n        transform: translateY(-0.05rem) rotate(0deg);\n    }\n\n    20%,\n    60% {\n        filter: blur(0.03rem);\n        transform: translate(-0.02rem, 0.02rem) rotate(0deg);\n    }\n\n    45%,\n    85% {\n        filter: blur(0.03rem);\n        transform: translate(0.02rem, -0.02rem) rotate(0deg);\n    }\n\n    100% {\n        filter: blur(0.01rem);\n        transform: translate(0) rotate(-0.5deg);\n    }\n}\n\n@keyframes crack1 {\n    0%,\n    95% {\n        transform: translate(-50%, -50%);\n    }\n\n    100% {\n        transform: translate(-51%, -48%);\n    }\n}\n\n@keyframes crack2 {\n    0%,\n    95% {\n        transform: translate(-50%, -50%);\n    }\n\n    100% {\n        transform: translate(-49%, -53%);\n    }\n}\n\nfooter {\n    width: 100%;\n    height: 100px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\nfooter .copyright {\n    font-size: 1rem;\n    color: #333;\n    text-align: center;\n    text-decoration: none;\n}\n\nfooter .copyright a:hover {\n    color: #555;\n}\n\nfooter .copyright:before {\n    content: '©';\n}\n\n.newsapi {\n    color: #444;\n    text-decoration: none;\n    font-size: 1.2rem;\n}\n\n.school {\n    color: #30ffe0;\n    opacity: 0.8;\n    text-decoration: none;\n    font-size: 1.2rem;\n    transition: all 0.4s ease-in-out;\n}\n\n.school:hover {\n    color: #fc38de;\n    opacity: 0.8;\n    text-shadow: 0 0 10px #fc38de;\n}\n\n.author {\n    color: #30ffe0;\n    opacity: 0.8;\n    text-decoration: none;\n    font-size: 1.2rem;\n    transition: all 0.4s ease-in-out;\n}\n\n.author:hover {\n    color: #fc38de;\n    opacity: 0.8;\n    text-shadow: 0 0 10px #fc38de;\n}\n",""]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},242:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(379),o=t.n(r),s=t(795),i=t.n(s),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),f=t.n(u),p=t(589),m=t.n(p),h=t(669),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),o()(h.Z,w);const _=h.Z&&h.Z.locals?h.Z.locals:void 0},650:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(379),o=t.n(r),s=t(795),i=t.n(s),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),f=t.n(u),p=t(589),m=t.n(p),h=t(392),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),o()(h.Z,w);const _=h.Z&&h.Z.locals?h.Z.locals:void 0},595:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(379),o=t.n(r),s=t(795),i=t.n(s),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),f=t.n(u),p=t(589),m=t.n(p),h=t(501),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),o()(h.Z,w);const _=h.Z&&h.Z.locals?h.Z.locals:void 0},427:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(379),o=t.n(r),s=t(795),i=t.n(s),a=t(569),c=t.n(a),l=t(565),d=t.n(l),u=t(216),f=t.n(u),p=t(589),m=t.n(p),h=t(767),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=f(),o()(h.Z,w);const _=h.Z&&h.Z.locals?h.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},i=[],a=0;a<n.length;a++){var c=n[a],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<s.length;i++){var a=t(s[i]);e[a].references--}for(var c=r(n,o),l=0;l<s.length;l++){var d=t(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},717:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(t(842)),s=t(527);e.default=class{constructor(){this.controller=new o.default,this.view=new s.AppView}start(){const n=document.querySelector(".sources");if(!(n instanceof HTMLDivElement))throw new Error("no news sources out there");n.addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n))))),this.controller.getSources((n=>this.view.drawSources(n)))}}},853:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(t(24)),s=t(112);class i extends o.default{constructor(){super(s.BASE_URL,{apiKey:"a381b3a9a2f3442b8c51e466153652fa"})}}e.default=i},842:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(t(853));class s extends o.default{getSources(n){super.getResp({endpoint:"sources"},n)}getNews(n,e){let t=n.target;const r=n.currentTarget;for(;t!==r;)if(null!==t&&t instanceof HTMLElement&&null!==r&&r instanceof HTMLElement){if(t.classList.contains("source__item")){const n=t.getAttribute("data-source-id");if(!n)throw new Error("no source found out there");return void(r.getAttribute("data-source")!==n&&(r.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}t=t.parentNode}}}e.default=s},24:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=t(230);e.default=class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(n){if(!n.ok)throw n.status!==r.ErrorCodes.unauthorized&&n.status!==r.ErrorCodes.notFound||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let r=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{r+=`${n}=${t[n]}&`})),r.slice(0,-1)}load(n,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}}},527:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.AppView=void 0;const o=r(t(798)),s=r(t(53));class i{constructor(){this.news=new o.default,this.sources=new s.default}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)}}e.AppView=i,e.default=i},798:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),t(242),e.default=class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");if(!(r instanceof HTMLTemplateElement))throw new Error("no news out there");e.forEach(((n,e)=>{const o=r.content.cloneNode(!0);if(!(o instanceof DocumentFragment))throw new Error("no such news");if(e%2){const n=o.querySelector(".news__item");if(!n)throw new Error("no news item out there");n.classList.add("alt")}const s=o.querySelector(".news__meta-photo");if(!s)throw new Error("no photo out there");s.style.backgroundImage=`url(${n.urlToImage||"/assets/placeholder.png"})`;const i=o.querySelector(".news__meta-author");if(!i)throw new Error("no author found");i.textContent=n.author||n.source.name;const a=o.querySelector(".news__meta-date");if(!a)throw new Error("no meta date out there");a.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-");const c=o.querySelector(".news__description-title");if(!c)throw new Error("no title out there");c.textContent=n.title;const l=o.querySelector(".news__description-source");if(!l)throw new Error("no description source found");l.textContent=n.source.name;const d=o.querySelector(".news__description-content");if(!d)throw new Error("no description content out there");d.textContent=n.description;const u=o.querySelector(".news__read-more a");if(!u)throw new Error("nothing to read more out there");u.setAttribute("href",n.url),t.append(o)}));const o=document.querySelector(".news");if(!o)throw new Error("no news out there");o.innerHTML="";const s=document.querySelector(".news");if(!s)throw new Error("no even some news out there");s.appendChild(t)}}},53:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),t(595),t(650),e.default=class{constructor(){this._data=[]}set data(n){this._data=n}get data(){return this._data}filter(){const n=document.querySelector(".sources"),e=document.createElement("div");if(e.classList.add("buttons_wrapper"),!n)throw new Error("no sources found out there");n.insertAdjacentElement("afterend",e);const t=this.data.map((n=>n.name.charAt(0))).filter(((n,e,t)=>t.indexOf(n)===e)),r=[];for(let n=0;n<t.length;n++){const o=document.createElement("div");o.classList.add("source_letter"),o.textContent=`${t[n]}`,r.push(o),e.append(o)}const o=document.createElement("div");o.classList.add("all_sources_button"),o.textContent="All",r.push(o),e.append(o),r.forEach((n=>n.addEventListener("click",(()=>{var e,t;const r=document.querySelectorAll(".source__item-name");for(let o=0;o<r.length;o++){const s=r[o].parentElement;if(!s)throw new Error("nothing to remove display none from");if(s.style.display="block",(null===(e=r[o].textContent)||void 0===e?void 0:e.slice(0,1))!==(null===(t=n.textContent)||void 0===t?void 0:t.slice(0,1))){if(!s)throw new Error("no parent element out there");s.style.display="none"}"All"===n.textContent&&(s.style.display="block")}}))))}draw(n){this.data=n,this.filter();const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");if(!t)throw new Error("no new item out there");n.forEach((n=>{const r=t.content.cloneNode(!0);if(!(r instanceof DocumentFragment))throw new Error("incorrect source");const o=r.querySelector(".source__item-name");if(!o)throw new Error("no item name provided");o.textContent=n.name;const s=r.querySelector(".source__item");if(!s)throw new Error("no item source found");s.setAttribute("data-source-id",n.id),e.append(r)}));const r=document.querySelector(".sources");if(!r)throw new Error("no sources out there");r.append(e)}}},112:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BASE_URL=void 0,e.BASE_URL="https://newsapi.org/v2/"},607:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(t(717));t(427),(new o.default).start()},230:function(n,e,t){var r=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(e,t);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,o)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||r(e,n,t)};Object.defineProperty(e,"__esModule",{value:!0}),o(t(604),e)},604:(n,e)=>{var t,r;Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorCodes=void 0,function(n){n.ok="ok",n.error="error"}(t||(t={})),function(n){n[n.unauthorized=401]="unauthorized",n[n.notFound=404]="notFound"}(r||(e.ErrorCodes=r={}))}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return n[r].call(s.exports,s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0,t(607)})();