var C=Object.defineProperty;var E=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(E(t,typeof e!="symbol"?e+"":e,n),n);import{F as $,C as c,N as p,h as O,d as b,O as I,P as v,Q as N,R as x,S as P,T as R,U as w,V as U,W as V,X as j,Y as B,Z as F}from"./scheduler.42392044.js";const u=new Set;let d;function Z(){d={r:0,c:[],p:d}}function z(){d.r||$(d.c),d=d.p}function L(t,e){t&&t.i&&(u.delete(t),t.i(e))}function A(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function D(t){t&&t.c()}function G(t,e){t&&t.l(e)}function M(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(U).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function Q(t,e){const n=t.$$;n.fragment!==null&&(P(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){t.$$.dirty[0]===-1&&(V.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,a,i,f,l=null,S=[-1]){const o=R;w(t);const s=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&T(t,r)),g}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){B();const r=O(e.target);s.fragment&&s.fragment.l(r),r.forEach(b)}else s.fragment&&s.fragment.c();e.intro&&L(t.$$.fragment),M(t,e.target,e.anchor),F(),I()}w(o)}class J{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){Q(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!N(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(W);export{J as S,L as a,D as b,z as c,G as d,Q as e,Z as g,H as i,M as m,A as t};
