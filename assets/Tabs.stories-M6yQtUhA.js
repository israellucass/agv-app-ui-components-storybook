import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{T as v}from"./Typography-BktXbSm7.js";const p="_list_1r0fk_1",h="_tab_1r0fk_13",y="_tabInner_1r0fk_38",g="_tabActive_1r0fk_56",k="_label_1r0fk_60",r={list:p,tab:h,tabInner:y,tabActive:g,label:k};function x({value:d,onChange:i,options:n,"aria-label":m,"data-testid":f}){const _=(e,l)=>{const t=n.length-1;if(t<=0)return;let a=null;e.key==="ArrowRight"?a=l===t?0:l+1:e.key==="ArrowLeft"?a=l===0?t:l-1:e.key==="Home"?a=0:e.key==="End"&&(a=t),a!==null&&(e.preventDefault(),i(n[a].value))};return n.length>1?s.jsx("div",{className:r.list,role:"tablist","aria-label":m,"data-testid":f,children:n.map((e,l)=>{const t=d===e.value;return s.jsx("button",{type:"button",role:"tab","aria-selected":t,className:`${r.tab} ${t?r.tabActive:""}`.trim(),onClick:()=>i(e.value),onKeyDown:a=>_(a,l),"data-testid":e["data-testid"],children:s.jsx("span",{className:r.tabInner,children:s.jsx(v,{as:"span",variant:"body-medium-1",className:r.label,children:e.label})})},e.value)})}):null}const w={title:"Components/Tabs",component:x},o={args:{value:"one",onChange:()=>{},options:[{value:"one",label:"Primeira"},{value:"two",label:"Segunda"},{value:"three",label:"Terceira"}],"aria-label":"Exemplo de abas"}};var c,b,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: "one",
    onChange: () => {},
    options: [{
      value: "one",
      label: "Primeira"
    }, {
      value: "two",
      label: "Segunda"
    }, {
      value: "three",
      label: "Terceira"
    }],
    "aria-label": "Exemplo de abas"
  }
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,w as default};
