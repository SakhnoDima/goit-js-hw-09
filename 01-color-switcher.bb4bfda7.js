!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.body},n=null;function a(){t.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}t.btnStart.addEventListener("click",(function(o){n=setInterval(a,1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(a){t.btnStart.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.bb4bfda7.js.map