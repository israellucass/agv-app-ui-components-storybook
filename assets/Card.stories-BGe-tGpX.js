import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{C as k}from"./Card-CGg9fVb8.js";import{B as h}from"./Button-Dxbb01wm.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-BfVW8ghT.js";const O={title:"Components/Card",component:k},r={args:{title:"Título do card",description:"Descrição do card"}},e={args:{title:"Card sem descrição"}},a={name:"Com ação (children)",args:{title:"Deseja continuar?",description:"Esta ação não poderá ser desfeita."},render:D=>s.jsx(k,{...D,children:s.jsx(h,{label:"Confirmar",variant:"primary",onClick:()=>{}})})},o={name:"Com onClick (card clicável)",args:{title:"Ver detalhes",description:"Clique para mais informações",onClick:()=>alert("Card clicado!")}};var n,t,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "Título do card",
    description: "Descrição do card"
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Card sem descrição"
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,C;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Com ação (children)",
  args: {
    title: "Deseja continuar?",
    description: "Esta ação não poderá ser desfeita."
  },
  render: args => <Card {...args}>
      <Button label="Confirmar" variant="primary" onClick={() => {}} />
    </Card>
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Com onClick (card clicável)",
  args: {
    title: "Ver detalhes",
    description: "Clique para mais informações",
    onClick: () => alert("Card clicado!")
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const b=["Default","SemDescricao","ComChildren","ComOnClick"];export{a as ComChildren,o as ComOnClick,r as Default,e as SemDescricao,b as __namedExportsOrder,O as default};
