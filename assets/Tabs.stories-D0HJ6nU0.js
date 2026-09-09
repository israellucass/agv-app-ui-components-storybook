import{j as s}from"./iframe-Dxi-B2vT.js";import{T as k}from"./Typography-CmicZeV1.js";import"./preload-helper-C1FmrZbK.js";const w="_list_1r0fk_1",S="_tab_1r0fk_13",T="_tabInner_1r0fk_38",C="_tabActive_1r0fk_56",j="_label_1r0fk_60",r={list:w,tab:S,tabInner:T,tabActive:C,label:j};function I({value:_,onChange:u,options:t,"aria-label":A,"data-testid":E}){const y=(a,n)=>{const l=t.length-1;if(l<=0)return;let e=null;a.key==="ArrowRight"?e=n===l?0:n+1:a.key==="ArrowLeft"?e=n===0?l:n-1:a.key==="Home"?e=0:a.key==="End"&&(e=l),e!==null&&(a.preventDefault(),u(t[e].value))};return t.length>1?s.jsx("div",{className:r.list,role:"tablist","aria-label":A,"data-testid":E,children:t.map((a,n)=>{const l=_===a.value;return s.jsx("button",{type:"button",role:"tab","aria-selected":l,className:`${r.tab} ${l?r.tabActive:""}`.trim(),onClick:()=>u(a.value),onKeyDown:e=>y(e,n),"data-testid":a["data-testid"],children:s.jsx("span",{className:r.tabInner,children:s.jsx(k,{as:"span",variant:"body-medium-1",className:r.label,children:a.label})})},a.value)})}):null}const N={title:"Components/Tabs",component:I},o={args:{value:"one",onChange:()=>{},options:[{value:"one",label:"Primeira"},{value:"two",label:"Segunda"},{value:"three",label:"Terceira"}],"aria-label":"Exemplo de abas"}},i={args:{value:"two",onChange:()=>{},options:[{value:"one",label:"Primeira"},{value:"two",label:"Segunda"},{value:"three",label:"Terceira"}],"aria-label":"Exemplo de abas"}},b={args:{value:"a",onChange:()=>{},options:[{value:"a",label:"Opção A"},{value:"b",label:"Opção B"}],"aria-label":"Exemplo de abas"}},B=["PrimeiraAtiva","SegundaAtiva","DuasAbas"];var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,v,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "two",
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
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,h,x;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: "a",
    onChange: () => {},
    options: [{
      value: "a",
      label: "Opção A"
    }, {
      value: "b",
      label: "Opção B"
    }],
    "aria-label": "Exemplo de abas"
  }
}`,...(x=(h=b.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};export{b as DuasAbas,o as PrimeiraAtiva,i as SegundaAtiva,B as __namedExportsOrder,N as default};
