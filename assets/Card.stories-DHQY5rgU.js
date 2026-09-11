import{j as e}from"./iframe-BmjDsDSI.js";import{B}from"./Button-DW5od6O8.js";import"./preload-helper-C1FmrZbK.js";const N="_card_1xft7_1",S="_txt_1xft7_16",v="_title_1xft7_28",T="_description_1xft7_39",k="_actions_1xft7_50",s={card:N,txt:S,title:v,description:T,actions:k};function E({title:r,description:n,children:c,className:j,"data-testid":g,width:i}){const h=!!(r||n),D=i?{width:i}:void 0;return e.jsxs("div",{className:[s.card,j].filter(Boolean).join(" "),"data-testid":g,style:D,children:[h&&e.jsxs("div",{className:s.txt,children:[r&&e.jsx("h3",{className:s.title,children:r}),n&&e.jsx("p",{className:s.description,children:n})]}),c&&e.jsx("div",{className:s.actions,children:c})]})}const b={title:"Components/Card",component:E},t={args:{title:"Título do card",description:"Descrição do card"}},a={args:{title:"Card sem descrição"}},o={name:"Com ação (children)",args:{title:"Deseja continuar?",description:"Esta ação não poderá ser desfeita."},render:r=>e.jsx(E,{...r,children:e.jsx(B,{children:"Confirmar",onClick:()=>{}})})},q=["Default","SemDescricao","ComChildren"];var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Título do card",
    description: "Descrição do card"
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var x,p,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Card sem descrição"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,_,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Com ação (children)",
  args: {
    title: "Deseja continuar?",
    description: "Esta ação não poderá ser desfeita."
  },
  render: args => <Card {...args}>
      <Button children="Confirmar" onClick={() => {}} />
    </Card>
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};export{o as ComChildren,t as Default,a as SemDescricao,q as __namedExportsOrder,b as default};
