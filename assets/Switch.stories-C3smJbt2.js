import{j as m}from"./iframe-Dxi-B2vT.js";import"./preload-helper-C1FmrZbK.js";const P="_track_1fknz_1",T="_primary_1fknz_16",j="_disabled_1fknz_20",z="_tab_1fknz_25",M="_tabActive_1fknz_61",n={track:P,primary:T,disabled:j,tab:z,tabActive:M};function K({value:t,onChange:p,options:C,variant:D="primary",disabled:r=!1,"aria-label":w,"data-testid":s}){const[a,e]=C,b=()=>{r||p(t===a.value?e.value:a.value)},v=(l,O)=>{if(r)return;const d=O.value===a.value;l.key==="ArrowRight"&&d&&(l.preventDefault(),p(e.value)),l.key==="ArrowLeft"&&!d&&(l.preventDefault(),p(a.value))};return m.jsxs("div",{className:`${n.track} ${n[D]} ${r?n.disabled:""}`.trim(),role:"radiogroup","aria-label":w,"data-testid":s,children:[m.jsx("button",{type:"button",role:"radio","aria-checked":t===a.value,"aria-label":a.label,disabled:r,className:`${n.tab} ${t===a.value?n.tabActive:""}`.trim(),onClick:b,onKeyDown:l=>v(l,a),"data-testid":s?`${s}-option-${a.value}`:void 0,children:a.label}),m.jsx("button",{type:"button",role:"radio","aria-checked":t===e.value,"aria-label":e.label,disabled:r,className:`${n.tab} ${t===e.value?n.tabActive:""}`.trim(),onClick:b,onKeyDown:l=>v(l,e),"data-testid":s?`${s}-option-${e.value}`:void 0,children:e.label})]})}const R={title:"Components/Switch",component:K},o={args:{value:"pt",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}},i={args:{value:"email",onChange:()=>{},options:[{value:"sms",label:"SMS"},{value:"email",label:"Email"},{value:"push",label:"Push"}],"aria-label":"Notificações"}},c={args:{value:"en",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}},u={args:{value:"sms",onChange:()=>{},options:[{value:"sms",label:"SMS"},{value:"email",label:"Email"}],"aria-label":"Notificações",disabled:!0}},q=["DuasOpcoes","TresOpcoes","SegundaOpcaoAtiva","Disabled"];var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,S,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: "email",
    onChange: () => {},
    options: [{
      value: "sms",
      label: "SMS"
    }, {
      value: "email",
      label: "Email"
    }, {
      value: "push",
      label: "Push"
    }],
    "aria-label": "Notificações"
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,E,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(E=c.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var N,$,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=($=u.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};export{u as Disabled,o as DuasOpcoes,c as SegundaOpcaoAtiva,i as TresOpcoes,q as __namedExportsOrder,R as default};
