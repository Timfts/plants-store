var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(e,i)=>{for(var l in i||(i={}))n.call(i,l)&&r(e,l,i[l]);if(t)for(var l of t(i))o.call(i,l)&&r(e,l,i[l]);return e};function l(e,t){if(!e&&"string"!=typeof e)throw new TypeError("fragment name is required");const n=document.querySelectorAll(`[data-fragment=${e}]`)||[],o=Array.from(n);return()=>{o.forEach((e=>{t({root:e,on:function(t,n){e.addEventListener(t,n)},query:function(t){return e.querySelector(t)},queryAll:function(t){return e.querySelectorAll(t)},emit:function(t,n={}){const o=new CustomEvent(t,{bubbles:!0,detail:i({},n)});e.dispatchEvent(o)}})}))}}var a=l("body",(({root:e})=>{console.log(e)}));const s=window.matchMedia("(max-width: 768px)").matches;var c=l("section-hero",(({root:e,on:t})=>{t("mousemove",(function(t){if(!s){const n=2,o=(window.innerWidth-t.pageX*n)/100,r=(window.innerWidth-t.pageY)/100,i=e=>`${e}px`;e.style.setProperty("--mouse-x",i(o)),e.style.setProperty("--mouse-y",i(r))}})),window.addEventListener("load",(function(){e.classList.add("section-hero--animate")}))}));const u={};var d=l("section-filters",(({on:e,root:t})=>{function n(){const e=setTimeout((()=>{t.classList.add("section-filters--animate"),clearTimeout(e)}),1950);window.removeEventListener("load",n)}e("selectChange",(e=>{var t,n;u[null==(t=null==e?void 0:e.detail)?void 0:t.slug]=null==(n=null==e?void 0:e.detail)?void 0:n.value,console.log(u)})),s||window.addEventListener("load",n)}));l("select",(({on:e,root:t,query:n,emit:o})=>{const r="app-select__virtual-option",i="app-select--open",l=n(".app-select__select-input"),a=n(".app-select__custom-options"),s=n(".app-select__label");function c(){t.classList.remove(i)}function u(e){var n;const r=null==(n=null==t?void 0:t.dataset)?void 0:n.fieldSlug;o("selectChange",{slug:r,value:e})}e("click",(function(e){const n=e.target;if(!(n instanceof HTMLElement))return;const o=Array.from(n.classList);o.includes(r)?function(e){const t=e.dataset.value,n=e.innerHTML;s&&(s.innerHTML=n);const o=String(t);l instanceof HTMLSelectElement&&(l.value=o);u(o),c()}(n):t.classList.add(i)})),e("blur",c),e("change",(function({target:e}){u(null==e?void 0:e.value)})),function(){if(l instanceof HTMLElement){const e=l.children,t=Array.from(e).map((e=>e instanceof HTMLOptionElement?`<li class="${r}" data-value="${e.value}">${e.innerHTML}</li>`:"")).filter((e=>!!e)).join("\n");a instanceof HTMLElement&&(a.innerHTML=t)}}()}))(),a(),c(),d();
