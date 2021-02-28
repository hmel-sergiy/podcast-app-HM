(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n* Sidebar CSS\r\n*/\r\n\r\n#sidebar {\r\n    background-color: #2196F3;\r\n    padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #sidebar {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 180px;\r\n        height: 100%;\r\n        padding-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n/**\r\n* Content CSS\r\n*/\r\n@media (min-width: 768px) {\r\n    #content {\r\n        margin-left: 180px;\r\n    }\r\n}\r\n\r\n.author {\r\n    font-size: .8rem; \r\n}\r\n\r\n\r\n.floating-btn {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    right: 50px;\r\n  }\r\n  \r\n  .modal {\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    margin: 100px auto;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n  }\r\n  \r\n  .modal > h1 {\r\n    text-align: center;\r\n  }\r\n  \r\n  .modal .modal-content {\r\n    padding: 1rem;\r\n  }\r\n  \r\n  .error {\r\n    color: red;\r\n  }",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var s=e[o],d=n.base?s[0]+n.base:s[0],l=t[d]||0,c="".concat(d," ").concat(l);t[d]=l+1;var u=a(c),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:c,updater:h(f,n),references:1}),r.push(c)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,c=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=d(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=s(e,n),l=0;l<t.length;l++){var c=a(t[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}t=d}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(28);function o(e){return e.length>=10}function i(e,n){const t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`\n      <h1>${e}</h1>\n      <div class="modal-content">${n}</div>\n    `,mui.overlay("on",t)}n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;class a{static create(e){return fetch("https://podcast-you-app-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((n=>(e.id=n.name,e))).then(s).then(a.renderList)}static fetch(e){return e?fetch(`https://podcast-you-app-default-rtdb.firebaseio.com/questions.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((n=>({...e[n],id:n}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=d(),n=e.length?e.map(l).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.getElementById("list").innerHTML=n}static listToHTML(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>Запитань пока немає</p>"}}function s(e){const n=d();n.push(e),localStorage.setItem("questions",JSON.stringify(n))}function d(){return JSON.parse(localStorage.getItem("questions")||"[]")}function l(e){return`\n      <div class="mui--text-black-54">\n        ${new Date(e.date).toLocaleDateString()}\n        ${new Date(e.date).toLocaleTimeString()}\n      </div>\n      <div>${e.text}</div>\n      <br>\n    `}const c=document.getElementById("form"),u=document.getElementById("modal-btn"),f=c.querySelector("#question-input"),p=c.querySelector("#submit");function m(e){e.preventDefault();const n=e.target.querySelector("button"),t=e.target.querySelector("#email").value,r=e.target.querySelector("#password").value;n.disabled=!0,function(e,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNeBWre_qhRn-Mf2rrqfiRjkeowIw-9jo",{method:"POST",body:JSON.stringify({email:e,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,r).then(a.fetch).then(h).then((()=>n.disabled=!1))}function h(e){"string"==typeof e?i("Ошибка!",e):i("Список вопросов",a.listToHTML(e))}window.addEventListener("load",a.renderList),c.addEventListener("submit",(function(e){if(e.preventDefault(),o(f.value)){const e={text:f.value.trim(),date:(new Date).toJSON()};p.disabled=!0,a.create(e).then((()=>{f.value="",f.className="",p.disabled=!1}))}})),u.addEventListener("click",(function(){i("Авторизація",'\n    <form class="mui-form" id="auth-form">\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="email" id="email" required>\n            <label for="email">Email</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n        <input type="password" id="password" required>\n        <label for="password">Пароль</label>\n        </div>\n        <button \n            type="submit" \n            class="mui-btn mui-btn--raised mui-btn--primary"\n        >\n            Вхід\n        </button>\n    </form> \n    '),document.getElementById("auth-form").addEventListener("submit",m,{once:!0})})),f.addEventListener("input",(()=>{p.disabled=!o(f.value)}))})()})();