import{j as s}from"./iframe-CCWtu-R3.js";import{C as g}from"./Card-fcC_D2Fr.js";import{B as h}from"./Button-BMXOaMPe.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Components/Card",component:g},r={args:{title:"Título do card",description:"Descrição do card"}},e={args:{title:"Card sem descrição"}},a={name:"Com ação (children)",args:{title:"Deseja continuar?",description:"Esta ação não poderá ser desfeita."},render:f=>s.jsx(g,{...f,children:s.jsx(h,{children:"Confirmar",onClick:()=>{}})})},o={name:"Com onClick (card clicável)",args:{title:"Ver detalhes",description:"Clique para mais informações",onClick:()=>alert("Card clicado!")}},O=["Default","SemDescricao","ComChildren","ComOnClick"];var n,t,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "Título do card",
    description: "Descrição do card"
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <Button children="Confirmar" onClick={() => {}} />
    </Card>
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var u,x,E;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Com onClick (card clicável)",
  args: {
    title: "Ver detalhes",
    description: "Clique para mais informações",
    onClick: () => alert("Card clicado!")
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{a as ComChildren,o as ComOnClick,r as Default,e as SemDescricao,O as __namedExportsOrder,B as default};
