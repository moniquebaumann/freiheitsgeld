import{s as j,a as b,f as v,c as k,g,h as y,z as L,d as _,j as S,i as d,v as T,o as q,l as D,m as I,n as V}from"../chunks/scheduler.42392044.js";import{S as z,i as B,b as w,d as x,m as H,a as p,t as $,c as E,e as M,g as P}from"../chunks/index.5f6fbe0c.js";import{S as O}from"../chunks/Seo.91d418da.js";import{F as W,a as A}from"../chunks/FreedomTreasuriesOffChain.4bf83f27.js";import{a as G}from"../chunks/helpers.9fa9be29.js";function F(c){let t,a=c[0].treasuries+"",e,f,n,s,l,r;const i=[K,J],o=[];function C(u,m){return u[2]&&Q?0:1}return s=C(c),l=o[s]=i[s](c),{c(){t=v("h2"),e=D(a),f=b(),n=v("div"),l.c(),this.h()},l(u){t=g(u,"H2",{});var m=y(t);e=I(m,a),m.forEach(_),f=k(u),n=g(u,"DIV",{class:!0});var h=y(n);l.l(h),h.forEach(_),this.h()},h(){S(n,"class","content svelte-gu7t45")},m(u,m){d(u,t,m),T(t,e),d(u,f,m),d(u,n,m),o[s].m(n,null),r=!0},p(u,m){(!r||m&1)&&a!==(a=u[0].treasuries+"")&&V(e,a);let h=s;s=C(u),s===h?o[s].p(u,m):(P(),$(o[h],1,1,()=>{o[h]=null}),E(),l=o[s],l?l.p(u,m):(l=o[s]=i[s](u),l.c()),p(l,1),l.m(n,null))},i(u){r||(p(l),r=!0)},o(u){$(l),r=!1},d(u){u&&(_(t),_(f),_(n)),o[s].d()}}}function J(c){let t,a,e,f="<br/>",n;return t=new W({props:{texts:c[0]}}),{c(){w(t.$$.fragment),a=b(),e=v("p"),e.innerHTML=f},l(s){x(t.$$.fragment,s),a=k(s),e=g(s,"P",{"data-svelte-h":!0}),L(e)!=="svelte-jq895e"&&(e.innerHTML=f)},m(s,l){H(t,s,l),d(s,a,l),d(s,e,l),n=!0},p(s,l){const r={};l&1&&(r.texts=s[0]),t.$set(r)},i(s){n||(p(t.$$.fragment,s),n=!0)},o(s){$(t.$$.fragment,s),n=!1},d(s){s&&(_(a),_(e)),M(t,s)}}}function K(c){let t,a;return t=new A({props:{texts:c[0]}}),{c(){w(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,f){H(t,e,f),a=!0},p(e,f){const n={};f&1&&(n.texts=e[0]),t.$set(n)},i(e){a||(p(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function N(c){let t,a,e,f,n,s="<br/>",l;t=new O({props:{title:"Freedom Treasuries"}});let r=c[1]&&F(c);return{c(){w(t.$$.fragment),a=b(),e=v("div"),r&&r.c(),f=b(),n=v("p"),n.innerHTML=s,this.h()},l(i){x(t.$$.fragment,i),a=k(i),e=g(i,"DIV",{class:!0});var o=y(e);r&&r.l(o),f=k(o),n=g(o,"P",{"data-svelte-h":!0}),L(n)!=="svelte-pntvnr"&&(n.innerHTML=s),o.forEach(_),this.h()},h(){S(e,"class","text-center")},m(i,o){H(t,i,o),d(i,a,o),d(i,e,o),r&&r.m(e,null),T(e,f),T(e,n),l=!0},p(i,[o]){i[1]?r?(r.p(i,o),o&2&&p(r,1)):(r=F(i),r.c(),p(r,1),r.m(e,f)):r&&(P(),$(r,1,1,()=>{r=null}),E())},i(i){l||(p(t.$$.fragment,i),p(r),l=!0)},o(i){$(t.$$.fragment,i),$(r),l=!1},d(i){i&&(_(a),_(e)),M(t,i),r&&r.d()}}}let Q=!1;function R(c,t,a){let e={},f=!1,n;return q(async()=>{a(0,e=G()),typeof window.ethereum>"u"?a(2,n=!1):a(2,n=!0),a(1,f=!0)}),[e,f,n]}class te extends z{constructor(t){super(),B(this,t,R,N,j,{})}}export{te as component};
