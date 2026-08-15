import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{G as x}from"./Grid-BZrYB5Jr.js";const k="_root_1wxfd_3",C="_variantBlock_1wxfd_36",g="_variantRounded_1wxfd_40",w="_variantCircle_1wxfd_44",n={root:k,variantBlock:C,variantRounded:g,variantCircle:w};function r(t){return typeof t=="number"?`${t}px`:t}const j={block:n.variantBlock,rounded:n.variantRounded,circle:n.variantCircle};function y({width:t,height:e,minHeight:a,variant:p="rounded",gridSize:s,className:i,"data-testid":_,"aria-hidden":f=!0}){const d={...t!==void 0&&{width:r(t)},...e!==void 0&&{height:r(e)},...a!==void 0&&{minHeight:r(a)}},h=`${n.root} ${j[p]}${i?` ${i}`:""}`.trim(),c=l.jsx("span",{className:h,style:Object.keys(d).length?d:void 0,"data-testid":_,"aria-hidden":f});return s!==void 0?l.jsx(x,{size:s,children:c}):c}const B={title:"Components/Skeleton",component:y},o={args:{width:240,height:32}};var u,v,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    width: 240,
    height: 32
  }
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const b=["Default"];export{o as Default,b as __namedExportsOrder,B as default};
