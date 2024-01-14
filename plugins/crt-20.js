"use strict";var l=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var I=(r,t)=>{for(var n in t)l(r,n,{get:t[n],enumerable:!0})},$=(r,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of S(t))!w.call(r,o)&&o!==n&&l(r,o,{get:()=>t[o],enumerable:!(e=d(t,o))||e.enumerable});return r};var D=r=>$(l({},"__esModule",{value:!0}),r);var A={};I(A,{centerText:()=>u,fixEncoding:()=>x,format:()=>y,splitWords:()=>f,wrapText:()=>g});module.exports=D(A);var{formatDate:E,zeroPrefix:T}=require("../helpers.js");function m(r,t){let n=T(t[2],3),e=E(...t,".",!0);return`<------------------>
<- Strona nr: 000 ->
<------------------>
    TEKST NR ${n}
 PSALM RESPONSORYJNY
     ${e}





<------------------>
<- Strona nr: 001 ->
<------------------>
${r}
<------------------>
<- Strona nr: 002 ->
<------------------>
`}function y({psalmChorus:r},t){let n=r.toUpperCase().transform(f).transform(g).transform(u).transform(x);return m(n,t).replace(/\r?\n/g,`\r
`)}function f(r){var s,a;let t=r.split(/\s+/),n=0,e=0;for(let c of t){let p=((s=c.toUpperCase().match(/[AĄEĘIOÓUY]/g))==null?void 0:s.length)||0,h=((a=c.toUpperCase().match(/(IA)|(IE)|(IĄ)|(IĘ)|(IU)|(IO)/g))==null?void 0:a.length)||0;if(n+=p-h,n>=5){e=r.indexOf(c)+c.length;break}}let o=r.substring(0,e).trim(),i=r.substring(e).trim();return[o,i].join(`
`)}function g(r,t=20){let n=new RegExp(`(.{1,${t}})\\s`,"g"),e=[...`${r}
`.match(n)||[]];return e=e==null?void 0:e.map((o,i)=>{let s=new RegExp(/\S+(s+)?$/),a=o,[c]=a.match(s)||["error"];return c.trim().length===1&&(e[i+1]=`${c} ${e[i+1]}`,a=a.replace(s,"")),a.replace(/\s+/," ").trim()}),e.join(`
`)}function u(r,t=20,n=8){let e=r.split(`
`).map(s=>{let a=Math.ceil((t-s.length)/2);return" ".repeat(a)+s}),o=Math.floor((n-e.length)/2),i=n-o-e.length;return[...Array(o).fill(""),...e,...Array(i).fill("")].join(`
`)}function x(r){return r.split("").map(t=>{switch(t){case"\u0104":return"\xA5";case"\u0106":return"\xC6";case"\u0118":return"\xCA";case"\u0141":return"\xA3";case"\u0143":return"\xD1";case"\u015A":return"\x8C";case"\u0179":return"\x8F";case"\u017B":return"\xAF";default:return t}}).join("")}0&&(module.exports={centerText,fixEncoding,format,splitWords,wrapText});
