var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var i=n("iQIUW");i.Notify.init({width:"300px",timeout:3e3,position:"center-center"});const r={form:document.querySelector(".form")};let l=1;function s(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.currentTarget.elements;let r=Number(t.value);const u=Number(o.value);for(let e=0;e<n.value;e+=1)s(l,r).then((({position:e,delay:t})=>i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((({position:e,delay:t})=>i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))),r+=u,l+=1;l=1}));
//# sourceMappingURL=03-promises.4bb03605.js.map
