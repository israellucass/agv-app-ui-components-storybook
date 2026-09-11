import{j as r}from"./iframe-OieEdo9G.js";import{s}from"./Breadcrumb.module-DW62jzuC.js";import{S as a}from"./Skeleton-BoFbJhKE.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DH35sVU9.js";const k="_trail_10qw0_1",b="_backOnly_10qw0_6",n={trail:k,backOnly:b};function y({variant:p="trail","data-testid":i="breadcrumb-skeleton"}){return p==="backOnly"?r.jsxs("div",{className:`${s.root} ${n.backOnly}`,role:"status","aria-live":"polite","aria-busy":"true","data-testid":i,children:[r.jsx(a,{variant:"circle",width:"1.125rem",height:"1.125rem"}),r.jsx(a,{variant:"rounded",width:"4rem",minHeight:"1.5rem"})]}):r.jsxs("div",{className:`${s.rootTrail} ${n.trail}`,role:"status","aria-live":"polite","aria-busy":"true","data-testid":i,children:[r.jsx(a,{variant:"rounded",width:"3.5rem",minHeight:"1.5rem"}),r.jsx("span",{className:s.separator,"aria-hidden":"true"}),r.jsx(a,{variant:"rounded",width:"6rem",minHeight:"1.5rem"})]})}const j={title:"Components/BreadcrumbSkeleton",component:y},e={args:{variant:"trail"}},t={args:{variant:"backOnly"}},_=["Trail","BackOnly"];var o,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "trail"
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "backOnly"
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{t as BackOnly,e as Trail,_ as __namedExportsOrder,j as default};
