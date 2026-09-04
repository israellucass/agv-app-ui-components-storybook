import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{I as L,s as e}from"./ImovelPropertyInfoSkeleton-BmolM6Mi.js";import{T as C}from"./Tag-BUfc2zIm.js";import{T as c}from"./Typography-BfVW8ghT.js";import"./Skeleton-CIvGj1t6.js";import"./Grid-BVJC4bVA.js";function T({unidadeConsumidora:o,endereco:r,tipoUnidade:S,layout:i="inline",isLoading:j=!1,className:v,"data-testid":d="imovel-property-info"}){if(j)return a.jsx(L,{"data-testid":`${d}-skeleton`});const k=i==="inline"&&!!(o&&r);if(!!!(o||r))return null;const I=[e.root,i==="stack"?e.stack:e.inline,v].filter(Boolean).join(" ");return a.jsxs("div",{className:I,"data-testid":d,"data-layout":i,children:[a.jsxs("div",{className:e.infoGroup,children:[S==="geradora"?a.jsx(C,{label:"Geradora",variant:"alert"}):null,o?a.jsxs(c,{variant:"body-medium-1",as:"p",className:e.ucText,children:["Unidade consumidora ",o]}):null]}),k?a.jsx("span",{className:e.separator,"aria-hidden":"true"}):null,r?a.jsx(c,{variant:"body-medium-2",as:"p",className:e.enderecoText,children:r}):null]})}const q={title:"Components/ImovelPropertyInfo",component:T},n={args:{unidadeConsumidora:"2.120.200.300.200-12",endereco:"Rua do Carmo, nº 92 / apto 265 - Centro, São Luís - MA",layout:"inline"}},s={name:"Stack — alinhado à esquerda",args:{unidadeConsumidora:"2.120.200.300.200-12",endereco:"Endereço da conta",layout:"stack"},decorators:[o=>a.jsx("div",{style:{width:"24rem"},children:a.jsx(o,{})})]},t={args:{isLoading:!0}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    unidadeConsumidora: "2.120.200.300.200-12",
    endereco: "Rua do Carmo, nº 92 / apto 265 - Centro, São Luís - MA",
    layout: "inline"
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,x,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const A=["Inline","Stack","Loading"];export{n as Inline,t as Loading,s as Stack,A as __namedExportsOrder,q as default};
