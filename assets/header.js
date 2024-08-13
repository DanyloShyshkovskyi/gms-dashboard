import{c as w,r as n,j as a,S as $,a as v,y as T,U as F,L as q,z as B,A as z}from"./main2.js";import{S as H}from"./index4.js";import{D as O,a as U,b as G,c as K,e as V,d as W}from"./dropdown-menu.js";import{I as J}from"./input.js";import"./chevron-right.js";import"./check.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=w("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=w("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function Y(e,t=[]){let r=[];function s(l,c){const i=n.createContext(c),d=r.length;r=[...r,c];function u(f){const{scope:m,children:x,...p}=f,k=(m==null?void 0:m[e][d])||i,D=n.useMemo(()=>p,Object.values(p));return a.jsx(k.Provider,{value:D,children:x})}function j(f,m){const x=(m==null?void 0:m[e][d])||i,p=n.useContext(x);if(p)return p;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${l}\``)}return u.displayName=l+"Provider",[u,j]}const o=()=>{const l=r.map(c=>n.createContext(c));return function(i){const d=(i==null?void 0:i[e])||l;return n.useMemo(()=>({[`__scope${e}`]:{...i,[e]:d}}),[i,d])}};return o.scopeName=e,[s,Z(o,...t)]}function Z(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const s=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const c=s.reduce((i,{useScope:d,scopeName:u})=>{const f=d(l)[`__scope${u}`];return{...i,...f}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return r.scopeName=t.scopeName,r}function ee(e){const t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...r)=>{var s;return(s=t.current)==null?void 0:s.call(t,...r)},[])}var S=globalThis!=null&&globalThis.document?n.useLayoutEffect:()=>{},te=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],g=te.reduce((e,t)=>{const r=n.forwardRef((s,o)=>{const{asChild:l,...c}=s,i=l?$:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(i,{...c,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),h="Avatar",[ae,ue]=Y(h),[re,N]=ae(h),A=n.forwardRef((e,t)=>{const{__scopeAvatar:r,...s}=e,[o,l]=n.useState("idle");return a.jsx(re,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:l,children:a.jsx(g.span,{...s,ref:t})})});A.displayName=h;var b="AvatarImage",y=n.forwardRef((e,t)=>{const{__scopeAvatar:r,src:s,onLoadingStatusChange:o=()=>{},...l}=e,c=N(b,r),i=se(s),d=ee(u=>{o(u),c.onImageLoadingStatusChange(u)});return S(()=>{i!=="idle"&&d(i)},[i,d]),i==="loaded"?a.jsx(g.img,{...l,ref:t,src:s}):null});y.displayName=b;var C="AvatarFallback",L=n.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:s,...o}=e,l=N(C,r),[c,i]=n.useState(s===void 0);return n.useEffect(()=>{if(s!==void 0){const d=window.setTimeout(()=>i(!0),s);return()=>window.clearTimeout(d)}},[s]),c&&l.imageLoadingStatus!=="loaded"?a.jsx(g.span,{...o,ref:t}):null});L.displayName=C;function se(e){const[t,r]=n.useState("idle");return S(()=>{if(!e){r("error");return}let s=!0;const o=new window.Image,l=c=>()=>{s&&r(c)};return r("loading"),o.onload=l("loaded"),o.onerror=l("error"),o.src=e,()=>{s=!1}},[e]),t}var M=A,E=y,R=L;const I=n.forwardRef(({className:e,...t},r)=>a.jsx(M,{ref:r,className:v("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));I.displayName=M.displayName;const _=n.forwardRef(({className:e,...t},r)=>a.jsx(E,{ref:r,className:v("aspect-square h-full w-full",e),...t}));_.displayName=E.displayName;const P=n.forwardRef(({className:e,...t},r)=>a.jsx(R,{ref:r,className:v("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));P.displayName=R.displayName;const me=()=>{const{isAuthenticated:e,user:t,isLoading:r,loginWithRedirect:s,logout:o}=T();return a.jsxs("header",{className:"flex items-center justify-between px-5 py-7",children:[a.jsxs("div",{className:"relative w-full max-w-sm overflow-hidden rounded-full bg-white p-1 shadow-sidebar",children:[a.jsx(J,{placeholder:"Search...",className:" rounded-full border-none bg-transparent pr-10 text-xs focus-visible:border-none focus-visible:ring-blue-600 focus-visible:ring-offset-2"}),a.jsx(X,{className:"absolute right-4 top-4 size-4 text-blue-700"})]}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(H,{orientation:"vertical",className:"w-0.5"}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"rounded-full border bg-white p-3",children:a.jsx(Q,{className:"size-5"})}),a.jsxs("div",{className:"flex flex-col justify-center",children:[a.jsx("div",{className:"text-sm font-semibold",children:(t==null?void 0:t.nickname)||"Anonymous"}),a.jsx("div",{className:"text-xs text-blue-700",children:"Executive Producer"})]}),a.jsxs(O,{children:[a.jsx(U,{children:a.jsxs(I,{className:"size-16 border p-2",children:[a.jsx(_,{src:e?t==null?void 0:t.picture:F,className:"rounded-full"}),a.jsx(P,{children:"AP"})]})}),a.jsx(G,{children:r?a.jsx(q,{className:"min-h-20",children:a.jsx(B,{className:"stroke-indigo-800"})}):a.jsxs(a.Fragment,{children:[a.jsx(K,{children:"My Account"}),a.jsx(V,{}),a.jsx(W,{onClick:()=>e?o({logoutParams:{returnTo:z}}):s(),children:e?"Logout":"Login"})]})})]})]})]})]})};export{me as default};
