var ee=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(ee(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},d=(t,e,s,r)=>(ee(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var p=(t,e,s)=>(ee(t,e,"access private method"),s);import{b as J,d as Fe,e as j,s as te,f as H,n as De,i as ye,g as me,t as Le,h as Te,k as Ue,l as xe,m as Re,r as x,o as Be,G as Pe,j as o,c as Ce,B as je}from"./main-l2mZ9PI0.js";import{M as we}from"./index-DHO6dEpk.js";import{R as ke}from"./index-ChAMWNXO.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=J("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=J("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=J("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=J("TableCellsMerge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var m,a,U,y,S,I,C,B,Q,F,O,E,k,D,M,T,P,se,A,ie,z,re,_,ae,V,ne,G,oe,q,le,K,Ne,ge,Ge=(ge=class extends Fe{constructor(e,s){super();u(this,M);u(this,P);u(this,A);u(this,z);u(this,_);u(this,V);u(this,G);u(this,q);u(this,K);u(this,m,void 0);u(this,a,void 0);u(this,U,void 0);u(this,y,void 0);u(this,S,void 0);u(this,I,void 0);u(this,C,void 0);u(this,B,void 0);u(this,Q,void 0);u(this,F,void 0);u(this,O,void 0);u(this,E,void 0);u(this,k,void 0);u(this,D,new Set);this.options=s,d(this,m,e),d(this,C,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,a).addObserver(this),be(i(this,a),this.options)?p(this,M,T).call(this):this.updateResult(),p(this,_,ae).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return he(i(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return he(i(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,p(this,V,ne).call(this),p(this,G,oe).call(this),i(this,a).removeObserver(this)}setOptions(e,s){const r=this.options,l=i(this,a);if(this.options=i(this,m).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof j(this.options.enabled,i(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");p(this,q,le).call(this),i(this,a).setOptions(this.options),r._defaulted&&!te(this.options,r)&&i(this,m).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,a),observer:this});const h=this.hasListeners();h&&ve(i(this,a),l,this.options,r)&&p(this,M,T).call(this),this.updateResult(s),h&&(i(this,a)!==l||j(this.options.enabled,i(this,a))!==j(r.enabled,i(this,a))||H(this.options.staleTime,i(this,a))!==H(r.staleTime,i(this,a)))&&p(this,P,se).call(this);const n=p(this,A,ie).call(this);h&&(i(this,a)!==l||j(this.options.enabled,i(this,a))!==j(r.enabled,i(this,a))||n!==i(this,k))&&p(this,z,re).call(this,n)}getOptimisticResult(e){const s=i(this,m).getQueryCache().build(i(this,m),e),r=this.createResult(s,e);return We(this,r)&&(d(this,y,r),d(this,I,this.options),d(this,S,i(this,a).state)),r}getCurrentResult(){return i(this,y)}trackResult(e,s){const r={};return Object.keys(e).forEach(l=>{Object.defineProperty(r,l,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(l),s==null||s(l),e[l])})}),r}trackProp(e){i(this,D).add(e)}getCurrentQuery(){return i(this,a)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=i(this,m).defaultQueryOptions(e),r=i(this,m).getQueryCache().build(i(this,m),s);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,s))}fetch(e){return p(this,M,T).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,y)))}createResult(e,s){var pe;const r=i(this,a),l=this.options,h=i(this,y),n=i(this,S),f=i(this,I),R=e!==r?e.state:i(this,U),{state:w}=e;let c={...w},L=!1,v;if(s._optimisticResults){const g=this.hasListeners(),$=!g&&be(e,s),Qe=g&&ve(e,r,s,l);($||Qe)&&(c={...c,...Ue(w.data,e.options)}),s._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:W,errorUpdatedAt:ue,status:N}=c;if(s.select&&c.data!==void 0)if(h&&c.data===(n==null?void 0:n.data)&&s.select===i(this,B))v=i(this,Q);else try{d(this,B,s.select),v=s.select(c.data),v=xe(h==null?void 0:h.data,v,s),d(this,Q,v),d(this,C,null)}catch(g){d(this,C,g)}else v=c.data;if(s.placeholderData!==void 0&&v===void 0&&N==="pending"){let g;if(h!=null&&h.isPlaceholderData&&s.placeholderData===(f==null?void 0:f.placeholderData))g=h.data;else if(g=typeof s.placeholderData=="function"?s.placeholderData((pe=i(this,F))==null?void 0:pe.state.data,i(this,F)):s.placeholderData,s.select&&g!==void 0)try{g=s.select(g),d(this,C,null)}catch($){d(this,C,$)}g!==void 0&&(N="success",v=xe(h==null?void 0:h.data,g,s),L=!0)}i(this,C)&&(W=i(this,C),v=i(this,Q),ue=Date.now(),N="error");const X=c.fetchStatus==="fetching",Y=N==="pending",Z=N==="error",de=Y&&X,fe=v!==void 0;return{status:N,fetchStatus:c.fetchStatus,isPending:Y,isSuccess:N==="success",isError:Z,isInitialLoading:de,isLoading:de,data:v,dataUpdatedAt:c.dataUpdatedAt,error:W,errorUpdatedAt:ue,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>R.dataUpdateCount||c.errorUpdateCount>R.errorUpdateCount,isFetching:X,isRefetching:X&&!Y,isLoadingError:Z&&!fe,isPaused:c.fetchStatus==="paused",isPlaceholderData:L,isRefetchError:Z&&fe,isStale:ce(e,s),refetch:this.refetch}}updateResult(e){const s=i(this,y),r=this.createResult(i(this,a),this.options);if(d(this,S,i(this,a).state),d(this,I,this.options),i(this,S).data!==void 0&&d(this,F,i(this,a)),te(r,s))return;d(this,y,r);const l={},h=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,f=typeof n=="function"?n():n;if(f==="all"||!f&&!i(this,D).size)return!0;const b=new Set(f??i(this,D));return this.options.throwOnError&&b.add("error"),Object.keys(i(this,y)).some(R=>{const w=R;return i(this,y)[w]!==s[w]&&b.has(w)})};(e==null?void 0:e.listeners)!==!1&&h()&&(l.listeners=!0),p(this,K,Ne).call(this,{...l,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&p(this,_,ae).call(this)}},m=new WeakMap,a=new WeakMap,U=new WeakMap,y=new WeakMap,S=new WeakMap,I=new WeakMap,C=new WeakMap,B=new WeakMap,Q=new WeakMap,F=new WeakMap,O=new WeakMap,E=new WeakMap,k=new WeakMap,D=new WeakMap,M=new WeakSet,T=function(e){p(this,q,le).call(this);let s=i(this,a).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(De)),s},P=new WeakSet,se=function(){p(this,V,ne).call(this);const e=H(this.options.staleTime,i(this,a));if(ye||i(this,y).isStale||!me(e))return;const r=Le(i(this,y).dataUpdatedAt,e)+1;d(this,O,setTimeout(()=>{i(this,y).isStale||this.updateResult()},r))},A=new WeakSet,ie=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,a)):this.options.refetchInterval)??!1},z=new WeakSet,re=function(e){p(this,G,oe).call(this),d(this,k,e),!(ye||j(this.options.enabled,i(this,a))===!1||!me(i(this,k))||i(this,k)===0)&&d(this,E,setInterval(()=>{(this.options.refetchIntervalInBackground||Te.isFocused())&&p(this,M,T).call(this)},i(this,k)))},_=new WeakSet,ae=function(){p(this,P,se).call(this),p(this,z,re).call(this,p(this,A,ie).call(this))},V=new WeakSet,ne=function(){i(this,O)&&(clearTimeout(i(this,O)),d(this,O,void 0))},G=new WeakSet,oe=function(){i(this,E)&&(clearInterval(i(this,E)),d(this,E,void 0))},q=new WeakSet,le=function(){const e=i(this,m).getQueryCache().build(i(this,m),this.options);if(e===i(this,a))return;const s=i(this,a);d(this,a,e),d(this,U,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},K=new WeakSet,Ne=function(e){Re.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(i(this,y))}),i(this,m).getQueryCache().notify({query:i(this,a),type:"observerResultsUpdated"})})},ge);function qe(t,e){return j(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function be(t,e){return qe(t,e)||t.state.data!==void 0&&he(t,e,e.refetchOnMount)}function he(t,e,s){if(j(e.enabled,t)!==!1){const r=typeof s=="function"?s(t):s;return r==="always"||r!==!1&&ce(t,e)}return!1}function ve(t,e,s,r){return(t!==e||j(r.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&ce(t,s)}function ce(t,e){return j(e.enabled,t)!==!1&&t.isStaleByTime(H(e.staleTime,t))}function We(t,e){return!te(t.getCurrentResult(),e)}var Se=x.createContext(!1),He=()=>x.useContext(Se);Se.Provider;function Ke(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Je=x.createContext(Ke()),Xe=()=>x.useContext(Je);function Ye(t,e){return typeof t=="function"?t(...e):!!t}var Ze=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},$e=t=>{x.useEffect(()=>{t.clearReset()},[t])},et=({result:t,errorResetBoundary:e,throwOnError:s,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&Ye(s,[t.error,r]),tt=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},st=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,it=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function rt(t,e,s){var R,w,c,L;const r=Be(),l=He(),h=Xe(),n=r.defaultQueryOptions(t);(w=(R=r.getDefaultOptions().queries)==null?void 0:R._experimental_beforeQuery)==null||w.call(R,n),n._optimisticResults=l?"isRestoring":"optimistic",tt(n),Ze(n,h),$e(h);const[f]=x.useState(()=>new e(r,n)),b=f.getOptimisticResult(n);if(x.useSyncExternalStore(x.useCallback(v=>{const W=l?()=>{}:f.subscribe(Re.batchCalls(v));return f.updateResult(),W},[f,l]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),x.useEffect(()=>{f.setOptions(n,{listeners:!1})},[n,f]),st(n,b))throw it(n,f,h);if(et({result:b,errorResetBoundary:h,throwOnError:n.throwOnError,query:r.getQueryCache().get(n.queryHash)}))throw b.error;return(L=(c=r.getDefaultOptions().queries)==null?void 0:c._experimental_afterQuery)==null||L.call(c,n,b),n.notifyOnChangeProps?b:f.trackResult(b)}function at(t,e){return rt(t,Ge)}const nt=()=>at({queryKey:["bids"],queryFn:()=>Pe("/bids.json")}),Oe=x.createContext({data:void 0,list:void 0,isLoading:!0,isError:!1,viewMode:"table",setViewMode:null,activeFilter:"all",setActiveFilter:null}),mt=({children:t})=>{var b;const{data:e,isLoading:s,isError:r}=nt(),[l,h]=x.useState("table"),[n,f]=x.useState("all");return o.jsx(Oe.Provider,{value:{data:e,list:(b=e==null?void 0:e.list)==null?void 0:b.filter(R=>n==="all"?!0:R.status===n),isLoading:s,isError:r,viewMode:l,setViewMode:h,activeFilter:n,setActiveFilter:f},children:t})},Ee=()=>{const t=x.useContext(Oe);if(t===void 0)throw new Error("useBidsContext must be used within a BidsProvider");return t},Me=t=>new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),Ie=x.forwardRef(({className:t,orientation:e="horizontal",decorative:s=!0,...r},l)=>o.jsx(ke,{ref:l,decorative:s,orientation:e,className:Ce("shrink-0 bg-border",e==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",t),...r}));Ie.displayName=ke.displayName;const ot=({client_name:t,client_code:e,project_name:s,qty:r,estimate:l})=>o.jsxs("div",{className:`group h-max cursor-pointer rounded-3xl bg-white p-6 pb-3 text-sm
    shadow-sidebar transition-colors ease-in-out hover:bg-blue-700
    hover:text-white
    `,children:[o.jsxs("div",{className:"mb-4 flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex h-5 items-center gap-2",children:[o.jsx("span",{className:"text-gray-500 transition-colors group-hover:text-white",children:e}),o.jsx(Ie,{orientation:"vertical"}),o.jsx("span",{children:t})]}),o.jsx(je,{className:"h-8 rounded-full text-xs transition-colors group-hover:bg-white group-hover:text-black",children:"Convert"})]}),o.jsxs("div",{className:"mb-5 flex flex-col",children:[o.jsx("h3",{className:"text-2xl font-bold",children:s}),o.jsx("div",{children:Me(r)})]}),o.jsxs("div",{className:"flex items-center gap-3 border-t pb-2 pt-4",children:[o.jsx(Ae,{className:"size-5"}),o.jsx("strong",{children:"Estimate"}),o.jsx("div",{className:`rounded-md bg-blue-700 px-1.5 py-0.5 text-xs text-white
        transition-colors group-hover:bg-white group-hover:text-black
        `,children:l})]})]}),lt=()=>{const{list:t}=Ee();return o.jsx(we,{autoAnimate:!0,array:t??[],children:ot,className:"grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"})},ht=[{label:"Client Name",key:"clientName",className:"col-span-4"},{label:"Project Name",key:"projectName",className:"col-span-3"},{label:"Date",key:"date",className:"col-span-2"},{label:"Estimate",key:"estimate",className:"col-span-1"},{label:"",key:"action",className:"col-span-2"}],ct=()=>{const{list:t,isLoading:e}=Ee();return o.jsxs("div",{className:"grid rounded-3xl bg-white p-10 text-sm font-medium",children:[o.jsx("div",{className:"grid h-max grid-cols-12 rounded-3xl bg-blue-100 px-8 py-4 font-bold",children:ht.map(({className:s,label:r},l)=>o.jsx("div",{className:Ce(s),children:r},l))}),o.jsx(we,{autoAnimate:!0,array:t,children:({client_name:s,client_code:r,project_name:l,qty:h,estimate:n})=>o.jsxs("div",{className:" grid h-max grid-cols-12 border-b px-8 py-3 transition-colors hover:bg-blue-50",children:[o.jsxs("div",{className:"col-span-4 flex flex-col justify-center",children:[o.jsx("strong",{children:s}),o.jsx("span",{className:"text-gray-500",children:r})]}),o.jsx("div",{className:"col-span-3 self-center",children:l}),o.jsx("div",{className:"col-span-2 self-center",children:Me(h)}),o.jsx("strong",{className:"col-span-1 self-center text-blue-700",children:n}),o.jsxs("div",{className:"col-span-2 flex items-center justify-end gap-4",children:[o.jsx(ze,{size:15}),o.jsx(je,{className:"h-8 rounded-full text-xs",children:"Convert"})]})]})})]})},xt=[{Icon:Ve,value:"table",Component:ct},{Icon:_e,value:"grid",Component:lt}];export{mt as B,Ae as C,_e as L,Ie as S,Ve as T,at as a,Me as f,Ee as u,xt as v};
