import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{F as t}from"./FixedBottomAction-DRj8Xxss.js";import{B as r}from"./Button-Dxbb01wm.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BVJC4bVA.js";import"./Typography-BfVW8ghT.js";const g={title:"Components/FixedBottomAction",component:t,parameters:{docs:{description:{component:"Em mobile, barra fixa no rodapé com fundo branco sólido, grid de 6 colunas e padding vertical de 48px. Com dois botões, gap de 0.5rem. Em desktop, um botão ocupa 200px; com dois botões, ficam lado a lado com gap de 1.5rem."}}}},e={render:()=>o.jsx(t,{children:o.jsx(r,{label:"Continuar",variant:"primary"})})},a={name:"Mobile — fixo no rodapé",parameters:{viewport:{defaultViewport:"mobile1"},layout:"fullscreen"},render:()=>o.jsxs("div",{style:{minHeight:"100dvh",padding:"1.5rem"},children:[o.jsx("p",{children:"Conteúdo da página acima da barra fixa."}),o.jsxs(t,{children:[o.jsx(r,{label:"Continuar",variant:"primary"}),o.jsx(r,{label:"Voltar",variant:"text"})]})]})};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <FixedBottomAction>
      <Button label="Continuar" variant="primary" />
    </FixedBottomAction>
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,s,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Mobile — fixo no rodapé",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    minHeight: "100dvh",
    padding: "1.5rem"
  }}>
      <p>Conteúdo da página acima da barra fixa.</p>
      <FixedBottomAction>
        <Button label="Continuar" variant="primary" />
        <Button label="Voltar" variant="text" />
      </FixedBottomAction>
    </div>
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const B=["Default","MobileFixed"];export{e as Default,a as MobileFixed,B as __namedExportsOrder,g as default};
