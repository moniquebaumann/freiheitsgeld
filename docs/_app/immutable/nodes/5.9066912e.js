import{s as M,f as d,l as k,a as g,g as h,h as v,m as x,d as _,c as b,j as w,i as $,v as u,o as B,z as P}from"../chunks/scheduler.22f6464b.js";import{S as H,i as L,b as W,d as E,m as S,a as T,t as A,e as C}from"../chunks/index.6399d545.js";import{L as I}from"../chunks/LogBook.1661f176.js";import{a as O}from"../chunks/helpers.1004723c.js";function y(l){let e,s="<br/><br/><br/>";return{c(){e=d("p"),e.innerHTML=s},l(a){e=h(a,"P",{"data-svelte-h":!0}),P(e)!=="svelte-1o6ybbu"&&(e.innerHTML=s)},m(a,i){$(a,e,i)},d(a){a&&_(e)}}}function j(l){let e,s,a=l[2].logBook+"",i,c,r,p,m;r=new I({props:{texts:l[2],visitorWithMobile:l[1]}});let t=!l[0]&&y();return{c(){e=d("div"),s=d("h2"),i=k(a),c=g(),W(r.$$.fragment),p=g(),t&&t.c(),this.h()},l(o){e=h(o,"DIV",{class:!0});var n=v(e);s=h(n,"H2",{});var f=v(s);i=x(f,a),f.forEach(_),c=b(n),E(r.$$.fragment,n),p=b(n),t&&t.l(n),n.forEach(_),this.h()},h(){w(e,"class","text-center content svelte-gu7t45")},m(o,n){$(o,e,n),u(e,s),u(s,i),u(e,c),S(r,e,null),u(e,p),t&&t.m(e,null),m=!0},p(o,[n]){const f={};n&2&&(f.visitorWithMobile=o[1]),r.$set(f),o[0]?t&&(t.d(1),t=null):t||(t=y(),t.c(),t.m(e,null))},i(o){m||(T(r.$$.fragment,o),m=!0)},o(o){A(r.$$.fragment,o),m=!1},d(o){o&&_(e),C(r),t&&t.d()}}}function q(l,e,s){let a=O,i=!1,c=!1;return B(async()=>{typeof window.ethereum>"u"?s(0,i=!1):s(0,i=!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&s(1,c=!0)}),[i,c,a]}class G extends H{constructor(e){super(),L(this,e,q,j,M,{})}}export{G as component};
