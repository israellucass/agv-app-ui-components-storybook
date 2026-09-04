import{j as M}from"./jsx-runtime-BjG_zV1W.js";const L="_wrapper_1w0d1_1",j="_maxWidthSm_1w0d1_8",z="_maxWidthMd_1w0d1_12",G="_maxWidthLg_1w0d1_16",X="_maxWidthXl_1w0d1_20",b="_maxWidthNone_1w0d1_24",D="_gutters_1w0d1_28",a={wrapper:L,maxWidthSm:j,maxWidthMd:z,maxWidthLg:G,maxWidthXl:X,maxWidthNone:b,gutters:D},E={sm:a.maxWidthSm,md:a.maxWidthMd,lg:a.maxWidthLg,xl:a.maxWidthXl,false:a.maxWidthNone};function v({as:g="div",children:_,maxWidth:w="xl",disableGutters:S=!1,className:f,"data-testid":N}){const C=[a.wrapper,E[String(w)],!S&&a.gutters,f].filter(Boolean).join(" ");return M.jsx(g,{className:C,"data-testid":N,children:_})}const B={title:"Components/Wrapper",component:v},t={args:{children:"Conteúdo centralizado com max-width xl (1280px)"}},e={args:{maxWidth:"sm",children:"Conteúdo centralizado com max-width sm (640px)"}},r={args:{maxWidth:!1,children:"Wrapper sem max-width (apenas margin auto)"}},s={args:{disableGutters:!0,children:"Wrapper sem padding lateral"}};var d,o,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Conteúdo centralizado com max-width xl (1280px)"
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    maxWidth: "sm",
    children: "Conteúdo centralizado com max-width sm (640px)"
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    maxWidth: false,
    children: "Wrapper sem max-width (apenas margin auto)"
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var h,W,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disableGutters: true,
    children: "Wrapper sem padding lateral"
  }
}`,...(u=(W=s.parameters)==null?void 0:W.docs)==null?void 0:u.source}}};const O=["Default","Small","NoMaxWidth","NoGutters"];export{t as Default,s as NoGutters,r as NoMaxWidth,e as Small,O as __namedExportsOrder,B as default};
