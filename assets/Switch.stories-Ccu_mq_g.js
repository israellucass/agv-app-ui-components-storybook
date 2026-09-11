import{j as p}from"./iframe-BmjDsDSI.js";import"./preload-helper-C1FmrZbK.js";const N="_track_1fknz_1",w="_primary_1fknz_16",C="_disabled_1fknz_20",j="_tab_1fknz_25",z="_tabActive_1fknz_61",t={track:N,primary:w,disabled:C,tab:j,tabActive:z};function O({value:l,onChange:u,options:x,variant:A="primary",disabled:r=!1,"aria-label":D,"data-testid":o}){const[a,e]=x,b=()=>{r||u(l===a.value?e.value:a.value)},m=(n,E)=>{if(r)return;const d=E.value===a.value;n.key==="ArrowRight"&&d&&(n.preventDefault(),u(e.value)),n.key==="ArrowLeft"&&!d&&(n.preventDefault(),u(a.value))};return p.jsxs("div",{className:`${t.track} ${t[A]} ${r?t.disabled:""}`.trim(),role:"radiogroup","aria-label":D,"data-testid":o,children:[p.jsx("button",{type:"button",role:"radio","aria-checked":l===a.value,"aria-label":a.label,disabled:r,className:`${t.tab} ${l===a.value?t.tabActive:""}`.trim(),onClick:b,onKeyDown:n=>m(n,a),"data-testid":o?`${o}-option-${a.value}`:void 0,children:a.label}),p.jsx("button",{type:"button",role:"radio","aria-checked":l===e.value,"aria-label":e.label,disabled:r,className:`${t.tab} ${l===e.value?t.tabActive:""}`.trim(),onClick:b,onKeyDown:n=>m(n,e),"data-testid":o?`${o}-option-${e.value}`:void 0,children:e.label})]})}const K={title:"Components/Switch",component:O},s={args:{value:"pt",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}},i={args:{value:"en",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}},c={args:{value:"sms",onChange:()=>{},options:[{value:"sms",label:"SMS"},{value:"email",label:"Email"}],"aria-label":"Notificações",disabled:!0}},L=["DuasOpcoes","SegundaOpcaoAtiva","Disabled"];var v,f,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var _,k,h;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: "en",
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
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,S,$;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: "sms",
    onChange: () => {},
    options: [{
      value: "sms",
      label: "SMS"
    }, {
      value: "email",
      label: "Email"
    }],
    "aria-label": "Notificações",
    disabled: true
  }
}`,...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};export{c as Disabled,s as DuasOpcoes,i as SegundaOpcaoAtiva,L as __namedExportsOrder,K as default};
