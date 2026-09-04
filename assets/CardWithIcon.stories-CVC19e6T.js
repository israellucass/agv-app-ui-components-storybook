import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as s}from"./CardWithIcon-CLusfjor.js";const u={title:"Components/CardWithIcon",component:s},e={args:{title:"Serviço",description:"Descrição do serviço"},render:r=>a.jsx(s,{...r,icon:a.jsx("span",{"aria-hidden":!0,children:"★"})})},n={name:"Compact — título 14px/20px",args:{title:"Informar falta de luz",size:"compact"},render:r=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 173px)",gap:16},children:[a.jsx(s,{...r,icon:a.jsx("span",{"aria-hidden":!0,children:"★"})}),a.jsx(s,{...r,title:"Passar a conta pro seu nome",icon:a.jsx("span",{"aria-hidden":!0,children:"★"})})]})};var o,t,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Serviço",
    description: "Descrição do serviço"
  },
  render: args => <CardWithIcon {...args} icon={<span aria-hidden>★</span>} />
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Compact — título 14px/20px",
  args: {
    title: "Informar falta de luz",
    size: "compact"
  },
  render: args => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 173px)",
    gap: 16
  }}>
      <CardWithIcon {...args} icon={<span aria-hidden>★</span>} />
      <CardWithIcon {...args} title="Passar a conta pro seu nome" icon={<span aria-hidden>★</span>} />
    </div>
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const x=["Default","Compact"];export{n as Compact,e as Default,x as __namedExportsOrder,u as default};
