import{s as B,a as h,e as w,c as d,i as u,C as M,d as c,o as T,f as _,g as p,z as b,j as v,G as W,H as k,D as y}from"./scheduler.60a7b53b.js";import{S as C,i as L}from"./index.c80f7444.js";import{c as I}from"./helpers.4d5150f2.js";function D(o){let i,n=o[0].useBIB+"",a,l,s="<br/>";return{c(){i=new k(!1),a=h(),l=_("p"),l.innerHTML=s,this.h()},l(e){i=y(e,!1),a=d(e),l=p(e,"P",{"data-svelte-h":!0}),b(l)!=="svelte-pntvnr"&&(l.innerHTML=s),this.h()},h(){i.a=a},m(e,t){i.m(n,e,t),u(e,a,t),u(e,l,t)},p(e,t){t&1&&n!==(n=e[0].useBIB+"")&&i.p(n)},d(e){e&&(i.d(),c(a),c(l))}}}function P(o){let i,n=o[0].useBW+"",a,l,s="<br/>";return{c(){i=new k(!1),a=h(),l=_("p"),l.innerHTML=s,this.h()},l(e){i=y(e,!1),a=d(e),l=p(e,"P",{"data-svelte-h":!0}),b(l)!=="svelte-pntvnr"&&(l.innerHTML=s),this.h()},h(){i.a=a},m(e,t){i.m(n,e,t),u(e,a,t),u(e,l,t)},p(e,t){t&1&&n!==(n=e[0].useBW+"")&&i.p(n)},d(e){e&&(i.d(),c(a),c(l))}}}function H(o){let i,n=`You can buy and sell Geo Cash via <a href="https://app.uniswap.org/swap" target="_blank">uniswap</a>.
		<p><br/></p>
		Please do not invest big amounts so that Geo Cash emerges as a decentralized freedom currency.`,a,l,s,e,t,r="<br/>";return{c(){i=_("div"),i.innerHTML=n,a=h(),l=_("embed"),e=h(),t=_("p"),t.innerHTML=r,this.h()},l(f){i=p(f,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1vh6g0h"&&(i.innerHTML=n),a=d(f),l=p(f,"EMBED",{src:!0,width:!0,height:!0}),e=d(f),t=p(f,"P",{"data-svelte-h":!0}),b(t)!=="svelte-pntvnr"&&(t.innerHTML=r),this.h()},h(){v(i,"class","content"),W(l.src,s="https://geld-wandern.de")||v(l,"src",s),v(l,"width","100%"),v(l,"height","810")},m(f,m){u(f,i,m),u(f,a,m),u(f,l,m),u(f,e,m),u(f,t,m)},d(f){f&&(c(i),c(a),c(l),c(e),c(t))}}}function V(o){let i,n;function a(t,r){if(!t[3]&&!t[1])return P;if(!t[3]&&t[1])return D}let l=a(o),s=l&&l(o),e=o[2]&&H();return{c(){s&&s.c(),i=h(),e&&e.c(),n=w()},l(t){s&&s.l(t),i=d(t),e&&e.l(t),n=w()},m(t,r){s&&s.m(t,r),u(t,i,r),e&&e.m(t,r),u(t,n,r)},p(t,[r]){l===(l=a(t))&&s?s.p(t,r):(s&&s.d(1),s=l&&l(t),s&&(s.c(),s.m(i.parentNode,i))),t[2]?e||(e=H(),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:M,o:M,d(t){t&&(c(i),c(n)),s&&s.d(t),e&&e.d(t)}}}function x(o,i,n){let{texts:a}=i,{visitorWithMobile:l}=i,s="",e=!1,t=!1;return T(async()=>{if(typeof window.ethereum>"u")n(3,t=!1);else{if(n(3,t=!0),s===""){const r=await I();r.provider,r.contract,s=r.publicWalletAddressOfVisitor}n(2,e=!0)}}),o.$$set=r=>{"texts"in r&&n(0,a=r.texts),"visitorWithMobile"in r&&n(1,l=r.visitorWithMobile)},[a,l,e,t]}class z extends C{constructor(i){super(),L(this,i,x,V,B,{texts:0,visitorWithMobile:1})}}export{z as I};