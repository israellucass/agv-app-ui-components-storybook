import{j as c}from"./jsx-runtime-BjG_zV1W.js";const $="_track_1fknz_1",h="_primary_1fknz_16",g="_disabled_1fknz_20",w="_tab_1fknz_25",x="_tabActive_1fknz_61",r={track:$,primary:h,disabled:g,tab:w,tabActive:x};function A({value:l,onChange:s,options:f,variant:_="primary",disabled:n=!1,"aria-label":k,"data-testid":o}){const[a,e]=f,u=()=>{n||s(l===a.value?e.value:a.value)},b=(t,y)=>{if(n)return;const p=y.value===a.value;t.key==="ArrowRight"&&p&&(t.preventDefault(),s(e.value)),t.key==="ArrowLeft"&&!p&&(t.preventDefault(),s(a.value))};return c.jsxs("div",{className:`${r.track} ${r[_]} ${n?r.disabled:""}`.trim(),role:"radiogroup","aria-label":k,"data-testid":o,children:[c.jsx("button",{type:"button",role:"radio","aria-checked":l===a.value,"aria-label":a.label,disabled:n,className:`${r.tab} ${l===a.value?r.tabActive:""}`.trim(),onClick:u,onKeyDown:t=>b(t,a),"data-testid":o?`${o}-option-${a.value}`:void 0,children:a.label}),c.jsx("button",{type:"button",role:"radio","aria-checked":l===e.value,"aria-label":e.label,disabled:n,className:`${r.tab} ${l===e.value?r.tabActive:""}`.trim(),onClick:u,onKeyDown:t=>b(t,e),"data-testid":o?`${o}-option-${e.value}`:void 0,children:e.label})]})}const j={title:"Components/Switch",component:A},i={args:{value:"pt",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}};var v,d,m;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: "pt",
    onChange: () => {},
    options: [{
      value: "pt",
      label: "PT"
    }, {
      value: "en",
      label: "EN"
    }],
    "aria-label": "Idioma"
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["Default"];export{i as Default,z as __namedExportsOrder,j as default};
