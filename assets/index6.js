import{r as d,j as l,b as c}from"./main2.js";var m=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],u=m.reduce((r,o)=>{const a=d.forwardRef((t,e)=>{const{asChild:i,...s}=t,n=i?c:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(n,{...s,ref:e})});return a.displayName=`Primitive.${o}`,{...r,[o]:a}},{}),f="Separator",p="horizontal",N=["horizontal","vertical"],v=d.forwardRef((r,o)=>{const{decorative:a,orientation:t=p,...e}=r,i=O(t)?t:p,n=a?{role:"none"}:{"aria-orientation":i==="vertical"?i:void 0,role:"separator"};return l.jsx(u.div,{"data-orientation":i,...n,...e,ref:o})});v.displayName=f;function O(r){return N.includes(r)}var E=v;export{E as R,v as S};