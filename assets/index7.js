import{l as D,D as y,r as h,R as S,j as n,f as L,d as p,e as T,b as V,N as z,E as W}from"./main2.js";import{C as U}from"./chevron-right.js";var $=function(e){return e.join("/").replace(/\/\/+/g,"/")},H=/^:\w+$/,q=3,G=2,J=1,K=10,Q=-2,N=function(e){return e==="*"};function X(t,e){var r=t.split("/"),s=r.length;return r.some(N)&&(s+=Q),e&&(s+=G),r.filter(function(a){return!N(a)}).reduce(function(a,c){return H.test(c)?a+q:c===""?a+J:a+K},s)}function Y(t,e){var r=t.length===e.length&&t.slice(0,-1).every(function(s,a){return s===e[a]});return r?t[t.length-1]-e[e.length-1]:0}function R(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"";return t.forEach(function(a,c){var o;if(typeof a.path!="string"&&!a.index&&!(!((o=a.children)===null||o===void 0)&&o.length))throw new Error("useBreadcrumbs: `path` or `index` must be provided in every route object");if(a.path&&a.index)throw new Error("useBreadcrumbs: `path` and `index` cannot be provided at the same time");var i={relativePath:a.path||"",childrenIndex:c,route:a};if(i.relativePath.charAt(0)==="/"){if(!i.relativePath.startsWith(s))throw new Error("useBreadcrumbs: The absolute path of the child route must start with the parent path");i.relativePath=i.relativePath.slice(s.length)}var u=$([s,i.relativePath]),l=r.concat(i);if(a.children&&a.children.length>0){if(a.index)throw new Error("useBreadcrumbs: Index route cannot have child routes");R(a.children,e,l,u)}e.push({path:u,score:X(u,a.index),routesMeta:l})}),e}function Z(t){return t.sort(function(e,r){return e.score!==r.score?r.score-e.score:Y(e.routesMeta.map(function(s){return s.childrenIndex}),r.routesMeta.map(function(s){return s.childrenIndex}))})}var x=Symbol("NO_BREADCRUMB"),w=function(e){return e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[-_\s]+/g," ").replace(/^[a-z]/,function(r){return r.toUpperCase()})},P=function(e){var r=e.breadcrumb,s=e.match,a=e.location,c=e.props,o=Object.assign({match:s,location:a,key:s.pathname},c||{});return Object.assign(Object.assign({},o),{breadcrumb:typeof r=="string"?h.createElement("span",{key:o.key},r):S.createElement(r,Object.assign({},o))})},_=function(e){var r=e.currentSection,s=e.location,a=e.pathSection,c=e.defaultFormatter,o=y({end:!0,path:a},a);return P({breadcrumb:c?c(r):w(r),match:o,location:s})},ee=function(e){var r=e.currentSection,s=e.disableDefaults,a=e.excludePaths,c=e.defaultFormatter,o=e.location,i=e.pathSection,u=e.branches,l,f=function(d){return y({path:d,end:!0},i)!=null};return a&&a.some(f)?x:(u.some(function(b){var d=b.path,m=b.routesMeta,g=m[m.length-1].route,v=g.breadcrumb;if(!v&&g.index){var j=m[m.length-2];j&&j.route.breadcrumb&&(v=j.route.breadcrumb)}var O=g.caseSensitive,A=g.props,B=y({path:d,end:!0,caseSensitive:O},i);return B&&v===null?(l=x,!0):B?!v&&s?(l=x,!0):(l=P({breadcrumb:v||(c?c(r):w(r)),match:Object.assign(Object.assign({},B),{route:g}),location:o,props:A}),!0):!1}),l||(s?x:_({pathSection:i,currentSection:i==="/"?"Home":r,location:o,defaultFormatter:c})))},re=function(e){var r=e.routes,s=e.location,a=e.options,c=a===void 0?{}:a,o=s.pathname,i=Z(R(r)),u=[];return o.split("?")[0].split("/").reduce(function(l,f,b){var d=f?"".concat(l,"/").concat(f):"/";if(d==="/"&&b!==0)return"";var m=ee(Object.assign({currentSection:f,location:s,pathSection:d,branches:i},c));return m!==x&&u.push(m),d==="/"?"":d},""),u},te=function(e,r){return re({routes:e||[],location:D(),options:r})};class me extends S.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){var e;return this.state.error?this.props.errorComponent?this.props.errorComponent:n.jsx("div",{className:"bg-red-100",children:n.jsxs("div",{className:"container m-auto pb-20 pl-3 pr-3 pt-20 text-red-950",children:[n.jsx("p",{className:"text-2xl font-bold",children:"There seems to be a problem:"}),n.jsx("p",{className:"text-xl",children:(e=this.state.error.stack)==null?void 0:e.split("Error:")[1].split(`
`)[0]}),this.props.optionalMessage&&n.jsx("div",{className:"mt-10 text-right text-lg",dangerouslySetInnerHTML:{__html:this.props.optionalMessage}})]})}):this.props.children}}const ae=({className:t,children:e,autoAnimate:r})=>{const[s]=L();return!t&&!r?n.jsx(n.Fragment,{children:e}):n.jsx("div",{ref:r?s:null,className:t,children:e})},ne=t=>{if(t)return"items"in t?t.items:t},se=({array:t,children:e,Separator:r=null,communicate:s=null,className:a=void 0,autoAnimate:c=!1})=>{const o=ne(t);return!o||!o.length?n.jsx(n.Fragment,{children:s}):n.jsx(ae,{className:a,autoAnimate:c,children:o.map((i,u)=>n.jsxs(h.Fragment,{children:[n.jsx(e,{...i,key_field:i.key,index:u,array_length:o.length}),r&&u<o.length-1&&n.jsx(r,{})]},i.id||u))})},oe=T("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ie({className:t,variant:e,...r}){return n.jsx("div",{className:p(oe({variant:e}),t),...r})}const E=h.forwardRef(({...t},e)=>n.jsx("nav",{ref:e,"aria-label":"breadcrumb",...t}));E.displayName="Breadcrumb";const C=h.forwardRef(({className:t,...e},r)=>n.jsx("ol",{ref:r,className:p("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",t),...e}));C.displayName="BreadcrumbList";const M=h.forwardRef(({className:t,...e},r)=>n.jsx("li",{ref:r,className:p("inline-flex items-center gap-1.5",t),...e}));M.displayName="BreadcrumbItem";const k=h.forwardRef(({asChild:t,className:e,...r},s)=>{const a=t?V:"a";return n.jsx(a,{ref:s,className:p("transition-colors hover:text-foreground",e),...r})});k.displayName="BreadcrumbLink";const I=h.forwardRef(({className:t,...e},r)=>n.jsx("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:p("font-normal text-foreground",t),...e}));I.displayName="BreadcrumbPage";const F=({children:t,className:e,...r})=>n.jsx("li",{role:"presentation","aria-hidden":"true",className:p("[&>svg]:size-3.5",e),...r,children:t??n.jsx(U,{})});F.displayName="BreadcrumbSeparator";const ce=({match:t,breadcrumb:e,index:r,array_length:s})=>n.jsx(M,{children:r===s-1?n.jsx(I,{className:"font-semibold text-blue-600",children:e}):n.jsx(k,{asChild:!0,children:n.jsx(z,{to:t.url,className:"font-semibold text-blue-600",children:e})})}),ue=()=>n.jsx(F,{children:"/"}),he=t=>({title:r="",badge:s=null,children:a=null,...c})=>{const o=te(W),i=o[o.length-1];return n.jsxs(n.Fragment,{children:[n.jsxs("header",{className:"mb-5",children:[n.jsx(E,{className:"mb-2 w-full",children:n.jsx(C,{className:"gap-1 sm:gap-1.5",children:n.jsx(se,{array:o,children:ce,Separator:ue})})}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("h1",{className:"scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",children:r||(i==null?void 0:i.breadcrumb)}),s&&n.jsx(ie,{...s.props,children:s.label}),a]})]}),n.jsx(t,{...c})]})};export{se as M,he as w};
