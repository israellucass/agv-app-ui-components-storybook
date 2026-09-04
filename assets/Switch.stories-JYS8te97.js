import{j as m}from"./jsx-runtime-BjG_zV1W.js";const P="_track_1fknz_1",T="_primary_1fknz_16",j="_disabled_1fknz_20",z="_tab_1fknz_25",M="_tabActive_1fknz_61",n={track:P,primary:T,disabled:j,tab:z,tabActive:M};function K({value:s,onChange:p,options:D,variant:w="primary",disabled:t=!1,"aria-label":x,"data-testid":r}){const[a,e]=D,b=()=>{t||p(s===a.value?e.value:a.value)},v=(l,O)=>{if(t)return;const d=O.value===a.value;l.key==="ArrowRight"&&d&&(l.preventDefault(),p(e.value)),l.key==="ArrowLeft"&&!d&&(l.preventDefault(),p(a.value))};return m.jsxs("div",{className:`${n.track} ${n[w]} ${t?n.disabled:""}`.trim(),role:"radiogroup","aria-label":x,"data-testid":r,children:[m.jsx("button",{type:"button",role:"radio","aria-checked":s===a.value,"aria-label":a.label,disabled:t,className:`${n.tab} ${s===a.value?n.tabActive:""}`.trim(),onClick:b,onKeyDown:l=>v(l,a),"data-testid":r?`${r}-option-${a.value}`:void 0,children:a.label}),m.jsx("button",{type:"button",role:"radio","aria-checked":s===e.value,"aria-label":e.label,disabled:t,className:`${n.tab} ${s===e.value?n.tabActive:""}`.trim(),onClick:b,onKeyDown:l=>v(l,e),"data-testid":r?`${r}-option-${e.value}`:void 0,children:e.label})]})}const R={title:"Components/Switch",component:K},o={args:{value:"pt",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}},i={args:{value:"email",onChange:()=>{},options:[{value:"sms",label:"SMS"},{value:"email",label:"Email"},{value:"push",label:"Push"}],"aria-label":"Notificações"}},c={args:{value:"en",onChange:()=>{},options:[{value:"pt",label:"PT"},{value:"en",label:"EN"}],"aria-label":"Idioma"}},u={args:{value:"sms",onChange:()=>{},options:[{value:"sms",label:"SMS"},{value:"email",label:"Email"}],"aria-label":"Notificações",disabled:!0}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,N,$;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var E,A,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const q=["DuasOpcoes","TresOpcoes","SegundaOpcaoAtiva","Disabled"];export{u as Disabled,o as DuasOpcoes,c as SegundaOpcaoAtiva,i as TresOpcoes,q as __namedExportsOrder,R as default};
