import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./iframe-Dq7yb4X6.js";import{C as o}from"./CardSelectOption-BlTCdVPs.js";import"./preload-helper-C1FmrZbK.js";import"./Check-i9q2TnIs.js";import"./Typography-BfVW8ghT.js";const g={title:"Components/CardSelectOption",component:o},e={render:()=>{const[r,n]=p.useState(null);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"30.25rem"},children:[a.jsx(o,{inputType:"radio",name:"titular",value:"razao1",title:"Razão social 1",description:"12.345.678/0001-90",selected:r==="razao1",onChange:()=>n("razao1"),"data-testid":"card-razao1"}),a.jsx(o,{inputType:"radio",name:"titular",value:"nome",title:"Nome Sobrenome",description:"123.456.789-00",selected:r==="nome",onChange:()=>n("nome"),"data-testid":"card-nome"})]})}},t={args:{inputType:"checkbox",title:"Selecionar opção",description:"Texto complementar",selected:!1,onChange:()=>{},"data-testid":"card-checkbox"}};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      maxWidth: "30.25rem"
    }}>
        <CardSelectOption inputType="radio" name="titular" value="razao1" title="Razão social 1" description="12.345.678/0001-90" selected={selected === "razao1"} onChange={() => setSelected("razao1")} data-testid="card-razao1" />
        <CardSelectOption inputType="radio" name="titular" value="nome" title="Nome Sobrenome" description="123.456.789-00" selected={selected === "nome"} onChange={() => setSelected("nome")} data-testid="card-nome" />
      </div>;
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    inputType: "checkbox",
    title: "Selecionar opção",
    description: "Texto complementar",
    selected: false,
    onChange: () => {},
    "data-testid": "card-checkbox"
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["RadioDefault","CheckboxDefault"];export{t as CheckboxDefault,e as RadioDefault,y as __namedExportsOrder,g as default};
