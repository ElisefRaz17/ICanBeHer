"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 83475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = exports.Z = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ }),

/***/ 9482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = exports.Z = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');

/***/ }),

/***/ 58031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gm: () => (/* binding */ Te)
/* harmony export */ });
/* unused harmony exports MiddleTruncate, Truncate */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/**
 * name: @re-dev/react-truncate
 * version: v0.4.1
 * description: Provides `Truncate`, `MiddleTruncate` and `ShowMore` React components for truncating multi-line spans and adding an ellipsis.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://truncate.js.org
 * license: MIT
 */
var _=e=>e?.offsetWidth,G=e=>e.replace(/\s+$/,""),ee=(e,t,n)=>{if(t===n.length-1)return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{key:t},e);{let o=react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",{key:`${t}br`});return e?[react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{key:t},e),o]:o}},te=(e,t)=>{let n=document.createElement("div"),o="innerText"in window.HTMLElement.prototype?"innerText":"textContent";n.innerHTML=e?.innerHTML.replace(/\r\n|\r|\n/g,t)||"";let i=n[o],s=document.createElement("div");return s.innerHTML="foo<br/>bar",s[o]?.replace(/\r\n|\r/g,`
`)!==`foo
bar`&&(n.innerHTML=n.innerHTML.replace(/<br.*?[/]?>/gi,`
`),i=n[o]),i||""},ne=({end:e,lastLineText:t,fullText:n,targetWidth:o,ellipsisWidth:i,measureWidth:s})=>{let a=t.length,g=Math.abs(e),l=g>a?0:a-g,c=t.slice(0,l),f=l===0?-a:e,h=n.slice(f),v=s(c)+s(h)+i;for(;v>o;)c=c.slice(0,c.length-1),v=s(c)+s(h)+i;return{startFragment:c,endFragment:h}};var X=({children:e,ellipsis:t="...",lines:n=1,trimWhitespace:o=!1,width:i=0,separator:s=" ",middle:a=!1,end:g=5,onTruncate:l,...c})=>{let[f,h]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[v,F]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[m,M]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[k,z]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{u&&u.current&&u.current.parentNode&&u.current.parentNode.removeChild(u.current)},[m]);let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(!y.current?.parentElement)return;let r=i||Math.floor(y.current.parentElement.getBoundingClientRect().width);if(!r)return window.requestAnimationFrame(()=>b());let p=window.getComputedStyle(y.current),P=[p.fontWeight,p.fontStyle,p.fontSize,p.fontFamily].join(" ");f&&(f.font=P),M(r)},[f,i]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let r=document.createElement("canvas");h(r.getContext("2d"))},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),window.cancelAnimationFrame(k)}),[b,k]);let j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(r=>{typeof l=="function"&&z(window.requestAnimationFrame(()=>{l(r)}))},[l]),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(r=>f?.measureText(r).width||0,[f]),Q=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>!Number.isSafeInteger(n)||n<0?0:n,[n]),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>a?1:Q,[Q,a]),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{let r=Math.abs(g),p=Number.isFinite(r)?Math.floor(r):0;return p>0?-p:p},[g]),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{let r=[],p=te(u.current,s),P=p.split(`
`).map(S=>S.split(s)),Y=_(L.current)||0,Z=!0;for(let S=1;S<=C;S++){let H=P[0];if(H.length===0){r.push(),P.shift(),S--;continue}let N=H.join(s)||"";if(W(N)<=m&&P.length===1){Z=!1,r.push(N);break}if(S===C){let d=H.join(s),T=0,E=d.length-1;for(;T<=E;){let x=Math.floor((T+E)/2),V=d.slice(0,x+1);W(V)+Y<=m?T=x+1:E=x-1}let w=d.slice(0,T);if(o)for(w=G(w);!w.length&&r.length;){let x=r.pop();x&&typeof x=="string"&&(w=G(x))}if(a&&D!==0){let{startFragment:x,endFragment:V}=ne({end:D,lastLineText:w,fullText:p,targetWidth:m,ellipsisWidth:Y,measureWidth:W});N=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,x,t,V)}else N=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,w,t)}else{let d=0,T=H.length-1;for(;d<=T;){let E=Math.floor((d+T)/2),w=H.slice(0,E+1).join(s);W(w)<=m?d=E+1:T=E-1}if(d===0){S=C-1;continue}N=H.slice(0,d).join(s),P[0].splice(0,d)}r.push(N)}return j(Z),r},[s,j,C,W,m,o,D,a,t]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let r=!!(y.current&&m);typeof window<"u"&&r&&(C>0?F(U().map(ee)):(F(e),j(!1)))},[e,C,m,U,j]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{...c,ref:y},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,v),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{ref:u},e),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{ref:L,style:{position:"fixed",visibility:"hidden",top:0,left:0}},t))};var pe=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({children:e,onTruncate:t,...n},o)=>{let{width:i,middle:s,lines:a,...g}=n,[l,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(h=>{h!==l&&c(h)},[l]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{typeof t=="function"&&t(l)},[t,l]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:o,style:{width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{...g,middle:!0,onTruncate:f},e))});pe.displayName="MiddleTruncate";var K=({type:e,label:t,className:n,toggleLines:o})=>{let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>e==="more"?"... ":" ",[e]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)?t:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,i,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#",className:n,onClick:o},t))};var Te=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({lines:e=3,more:t="Expand",less:n="Collapse",anchorClass:o,onToggle:i,children:s,...a},g)=>{let{width:l,middle:c,end:f,ellipsis:h,...v}=a,[F,m]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[M,k]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>M?0:e,[M,e]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(L=>{L!==F&&m(L)},[F]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(L=>{L.preventDefault(),k(b=>!b)},[]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(g,()=>({toggleLines:u})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{typeof i=="function"&&i(M)},[M,i]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{...v,lines:z,ellipsis:react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{type:"more",label:t,className:o,toggleLines:u}),onTruncate:y},s),!F&&M&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,{type:"less",label:n,className:o,toggleLines:u}))});Te.displayName="ShowMore";


/***/ })

};
;