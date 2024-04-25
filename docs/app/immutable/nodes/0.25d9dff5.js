import{s as R,r as J,f as k,g as b,h as H,d as g,j as $,u as G,i as E,v as F,w as K,x as Q,y as X,a as M,c as S,z as Z,A as N,B as ne,l as x,m as ee,C as T}from"../chunks/scheduler.9b9a6449.js";import{S as j,i as B,a as v,t as d,g as P,c as V,b as I,d as z,m as D,e as O}from"../chunks/index.d955b059.js";import{e as A}from"../chunks/each.e59479a4.js";import{p as ae}from"../chunks/stores.bbebcc4b.js";const re=!0,Le=Object.freeze(Object.defineProperty({__proto__:null,prerender:re},Symbol.toStringTag,{value:"Module"}));function oe(n){let t,l,e;const s=n[3].default,a=J(s,n,n[2],null);return{c(){t=k("li"),l=k("a"),a&&a.c(),this.h()},l(i){t=b(i,"LI",{class:!0});var h=H(t);l=b(h,"A",{href:!0,class:!0});var m=H(l);a&&a.l(m),m.forEach(g),h.forEach(g),this.h()},h(){$(l,"href",n[0]),$(l,"class","nav-item svelte-bs8x38"),G(l,"active",n[1]),$(t,"class","svelte-bs8x38")},m(i,h){E(i,t,h),F(t,l),a&&a.m(l,null),e=!0},p(i,[h]){a&&a.p&&(!e||h&4)&&K(a,s,i,i[2],e?X(s,i[2],h,null):Q(i[2]),null),(!e||h&1)&&$(l,"href",i[0]),(!e||h&2)&&G(l,"active",i[1])},i(i){e||(v(a,i),e=!0)},o(i){d(a,i),e=!1},d(i){i&&g(t),a&&a.d(i)}}}function ie(n,t,l){let{$$slots:e={},$$scope:s}=t,{path:a}=t,{active:i=!1}=t;return n.$$set=h=>{"path"in h&&l(0,a=h.path),"active"in h&&l(1,i=h.active),"$$scope"in h&&l(2,s=h.$$scope)},[a,i,s,e]}class te extends j{constructor(t){super(),B(this,t,ie,oe,R,{path:0,active:1})}}function W(n,t,l){const e=n.slice();return e[3]=t[l][0],e[4]=t[l][1],e}function q(n,t,l){const e=n.slice();return e[3]=t[l][0],e[4]=t[l][1],e}function ce(n){let t=n[4]+"",l;return{c(){l=x(t)},l(e){l=ee(e,t)},m(e,s){E(e,l,s)},p:T,d(e){e&&g(l)}}}function U(n){let t,l;return t=new te({props:{path:n[3],active:n[3]==="/"?n[0].url.pathname==="/":n[0].url.pathname.includes(n[3]),$$slots:{default:[ce]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,s){D(t,e,s),l=!0},p(e,s){const a={};s&1&&(a.active=e[3]==="/"?e[0].url.pathname==="/":e[0].url.pathname.includes(e[3])),s&512&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){O(t,e)}}}function fe(n){let t=n[4]+"",l,e;return{c(){l=x(t),e=M()},l(s){l=ee(s,t),e=S(s)},m(s,a){E(s,l,a),E(s,e,a)},p:T,d(s){s&&(g(l),g(e))}}}function Y(n){let t,l;return t=new te({props:{path:n[3],active:n[3]==="/"?n[0].url.pathname==="/":n[0].url.pathname.includes(n[3]),$$slots:{default:[fe]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,s){D(t,e,s),l=!0},p(e,s){const a={};s&1&&(a.active=e[3]==="/"?e[0].url.pathname==="/":e[0].url.pathname.includes(e[3])),s&512&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||(v(t.$$.fragment,e),l=!0)},o(e){d(t.$$.fragment,e),l=!1},d(e){O(t,e)}}}function ue(n){let t,l,e,s,a,i,h='<a href="/" class="logo svelte-s0hk1x"><img alt="Freedom Cash Logo" src="/libertas-favicon/icon.ico" class="svelte-s0hk1x"/></a>',m,c,p=A(n[1]),u=[];for(let o=0;o<p.length;o+=1)u[o]=U(q(n,p,o));const le=o=>d(u[o],1,1,()=>{u[o]=null});let y=A(n[2]),_=[];for(let o=0;o<y.length;o+=1)_[o]=Y(W(n,y,o));const se=o=>d(_[o],1,1,()=>{_[o]=null});return{c(){t=k("header"),l=k("div"),e=k("nav"),s=k("ul");for(let o=0;o<u.length;o+=1)u[o].c();a=M(),i=k("li"),i.innerHTML=h,m=M();for(let o=0;o<_.length;o+=1)_[o].c();this.h()},l(o){t=b(o,"HEADER",{class:!0});var f=H(t);l=b(f,"DIV",{class:!0});var r=H(l);e=b(r,"NAV",{class:!0});var L=H(e);s=b(L,"UL",{class:!0});var w=H(s);for(let C=0;C<u.length;C+=1)u[C].l(w);a=S(w),i=b(w,"LI",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-d6vcvk"&&(i.innerHTML=h),m=S(w);for(let C=0;C<_.length;C+=1)_[C].l(w);w.forEach(g),L.forEach(g),r.forEach(g),f.forEach(g),this.h()},h(){$(i,"class","svelte-s0hk1x"),$(s,"class","svelte-s0hk1x"),$(e,"class","svelte-s0hk1x"),$(l,"class","container"),$(t,"class","svelte-s0hk1x")},m(o,f){E(o,t,f),F(t,l),F(l,e),F(e,s);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null);F(s,a),F(s,i),F(s,m);for(let r=0;r<_.length;r+=1)_[r]&&_[r].m(s,null);c=!0},p(o,[f]){if(f&3){p=A(o[1]);let r;for(r=0;r<p.length;r+=1){const L=q(o,p,r);u[r]?(u[r].p(L,f),v(u[r],1)):(u[r]=U(L),u[r].c(),v(u[r],1),u[r].m(s,a))}for(P(),r=p.length;r<u.length;r+=1)le(r);V()}if(f&5){y=A(o[2]);let r;for(r=0;r<y.length;r+=1){const L=W(o,y,r);_[r]?(_[r].p(L,f),v(_[r],1)):(_[r]=Y(L),_[r].c(),v(_[r],1),_[r].m(s,null))}for(P(),r=y.length;r<_.length;r+=1)se(r);V()}},i(o){if(!c){for(let f=0;f<p.length;f+=1)v(u[f]);for(let f=0;f<y.length;f+=1)v(_[f]);c=!0}},o(o){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)d(u[f]);_=_.filter(Boolean);for(let f=0;f<_.length;f+=1)d(_[f]);c=!1},d(o){o&&g(t),N(u,o),N(_,o)}}}function _e(n,t,l){let e;return ne(n,ae,i=>l(0,e=i)),[e,[["/freedomWallets","Wallets"],["/freedomTreasuries","Schätze"]],[["/freedomInvestments","Einsatz"],["/philosophy","Philosophie"]]]}class he extends j{constructor(t){super(),B(this,t,_e,ue,R,{})}}function me(n){let t,l='<div class="container svelte-pir2t"><span><a class="underline" href="https://github.com/FreiheitsGeld/freiheitsgeld" target="_blank" rel="noopener">GitHub Code</a></span> <span>•</span> <span>Freedom</span> <span>•</span> <span><a href="https://polygonscan.com/address/0x1Dc4E031e7737455318C77f7515F8Ea8bE280a93" target="_blank">Smart Contract</a></span></div>';return{c(){t=k("footer"),t.innerHTML=l,this.h()},l(e){t=b(e,"FOOTER",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1o65uwn"&&(t.innerHTML=l),this.h()},h(){$(t,"class","svelte-pir2t")},m(e,s){E(e,t,s)},p:T,i:T,o:T,d(e){e&&g(t)}}}function pe(n){return new Date().getFullYear(),[]}class ge extends j{constructor(t){super(),B(this,t,pe,me,R,{})}}function ve(n){let t,l,e,s,a,i;t=new he({});const h=n[1].default,m=J(h,n,n[0],null);return a=new ge({}),{c(){I(t.$$.fragment),l=M(),e=k("main"),m&&m.c(),s=M(),I(a.$$.fragment),this.h()},l(c){z(t.$$.fragment,c),l=S(c),e=b(c,"MAIN",{class:!0});var p=H(e);m&&m.l(p),p.forEach(g),s=S(c),z(a.$$.fragment,c),this.h()},h(){$(e,"class","container svelte-40n5a")},m(c,p){D(t,c,p),E(c,l,p),E(c,e,p),m&&m.m(e,null),E(c,s,p),D(a,c,p),i=!0},p(c,[p]){m&&m.p&&(!i||p&1)&&K(m,h,c,c[0],i?X(h,c[0],p,null):Q(c[0]),null)},i(c){i||(v(t.$$.fragment,c),v(m,c),v(a.$$.fragment,c),i=!0)},o(c){d(t.$$.fragment,c),d(m,c),d(a.$$.fragment,c),i=!1},d(c){c&&(g(l),g(e),g(s)),O(t,c),m&&m.d(c),O(a,c)}}}function $e(n,t,l){let{$$slots:e={},$$scope:s}=t;return n.$$set=a=>{"$$scope"in a&&l(0,s=a.$$scope)},[s,e]}class ye extends j{constructor(t){super(),B(this,t,$e,ve,R,{})}}export{ye as component,Le as universal};