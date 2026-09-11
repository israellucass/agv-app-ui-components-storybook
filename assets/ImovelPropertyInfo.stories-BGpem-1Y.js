import{j as a}from"./iframe-BmjDsDSI.js";import{I as E,s as e}from"./ImovelPropertyInfoSkeleton-R_iEcMAH.js";import{T as L}from"./Tag-BC73-slV.js";import{T as c}from"./Typography-CukSYaFg.js";import"./preload-helper-C1FmrZbK.js";import"./Skeleton-982v4l38.js";import"./Grid-DmJrO9xk.js";function C({unidadeConsumidora:o,endereco:r,tipoUnidade:S,layout:i="inline",isLoading:j=!1,className:v,"data-testid":d="imovel-property-info"}){if(j)return a.jsx(E,{"data-testid":`${d}-skeleton`});const k=i==="inline"&&!!(o&&r);if(!!!(o||r))return null;const I=[e.root,i==="stack"?e.stack:e.inline,v].filter(Boolean).join(" ");return a.jsxs("div",{className:I,"data-testid":d,"data-layout":i,children:[a.jsxs("div",{className:e.infoGroup,children:[S==="geradora"?a.jsx(L,{label:"Geradora",variant:"alert"}):null,o?a.jsxs(c,{variant:"body-medium-1",as:"p",className:e.ucText,children:["Unidade consumidora ",o]}):null]}),k?a.jsx("span",{className:e.separator,"aria-hidden":"true"}):null,r?a.jsx(c,{variant:"body-medium-2",as:"p",className:e.enderecoText,children:r}):null]})}const q={title:"Components/ImovelPropertyInfo",component:C},n={args:{unidadeConsumidora:"2.120.200.300.200-12",endereco:"Rua do Carmo, nº 92 / apto 265 - Centro, São Luís - MA",layout:"inline"}},s={name:"Stack — alinhado à esquerda",args:{unidadeConsumidora:"2.120.200.300.200-12",endereco:"Endereço da conta",layout:"stack"},decorators:[o=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(o,{})})]},t={args:{isLoading:!0}},G=["Inline","Stack","Loading"];var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    unidadeConsumidora: "2.120.200.300.200-12",
    endereco: "Rua do Carmo, nº 92 / apto 265 - Centro, São Luís - MA",
    layout: "inline"
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,x,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Stack — alinhado à esquerda",
  args: {
    unidadeConsumidora: "2.120.200.300.200-12",
    endereco: "Endereço da conta",
    layout: "stack"
  },
  decorators: [Story => <div style={{
    width: "24rem"
  }}>
        <Story />
      </div>]
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,y,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};export{n as Inline,t as Loading,s as Stack,G as __namedExportsOrder,q as default};
