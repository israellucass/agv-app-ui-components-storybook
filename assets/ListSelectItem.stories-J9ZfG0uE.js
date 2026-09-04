import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as k}from"./iframe-Dq7yb4X6.js";import{T as a}from"./Typography-BfVW8ghT.js";import{C as g}from"./Check-i9q2TnIs.js";import"./preload-helper-C1FmrZbK.js";const M="_root_1r1nc_1",B="_rootNoBorder_1r1nc_15",y="_disabled_1r1nc_19",T="_input_1r1nc_24",A="_left_1r1nc_36",W="_textBlock_1r1nc_45",$="_textContent_1r1nc_55",G="_header_1r1nc_65",P="_heading_1r1nc_74",R="_addressGroup_1r1nc_82",E="_mutedLine_1r1nc_92",F="_controlWrap_1r1nc_100",I="_radioMarker_1r1nc_110",q="_radioMarkerSelected_1r1nc_120",w="_interactive_1r1nc_125",e={root:M,rootNoBorder:B,disabled:y,input:T,left:A,textBlock:W,textContent:$,header:G,heading:P,addressGroup:R,mutedLine:E,controlWrap:F,radioMarker:I,radioMarkerSelected:q,interactive:w};function J({selected:n}){return o.jsx("span",{className:`${e.radioMarker} ${n?e.radioMarkerSelected:""}`,"aria-hidden":!0})}function j({inputType:n,unidadeConsumidora:c,endereco:r,localidade:t,documentoTipo:l,documento:m,selected:d,onChange:u,name:v,value:N,showBorder:S=!0,disabled:s=!1,className:f,"data-testid":p}){const _=k.useId(),b=()=>{s||u(n==="checkbox"?!d:!0)},L=[e.root,S?"":e.rootNoBorder,s?e.disabled:"",e.interactive,f].filter(Boolean).join(" ");return o.jsxs("label",{htmlFor:_,className:L,"data-testid":p,children:[o.jsx("input",{id:_,type:n,name:v,value:N,checked:d,onChange:b,disabled:s,className:e.input,"data-testid":p?`${p}-input`:void 0}),o.jsx("div",{className:e.left,children:o.jsx("div",{className:e.textBlock,children:o.jsxs("div",{className:e.textContent,children:[o.jsxs("div",{className:e.header,children:[o.jsx(a,{variant:"subtitle-2",bold:!0,as:"span",className:e.heading,children:"Unidade consumidora"}),o.jsx(a,{variant:"subtitle-2",bold:!0,as:"span",className:e.heading,children:c})]}),o.jsxs("div",{className:e.addressGroup,children:[o.jsx(a,{variant:"body-medium-2",as:"span",className:e.mutedLine,children:r}),o.jsx(a,{variant:"body-medium-2",as:"span",className:e.mutedLine,children:t})]}),o.jsxs(a,{variant:"body-medium-2",as:"span",className:e.mutedLine,children:[l,": ",m]})]})})}),o.jsx("span",{className:e.controlWrap,"aria-hidden":!0,children:n==="checkbox"?o.jsx(g,{checked:d,disabled:s}):o.jsx(J,{selected:d})})]})}const H={title:"Components/ListSelectItem",component:j},i={render:()=>{const[n,c]=k.useState([]),r=[{id:"1",unidadeConsumidora:"2.120.200.300.200-12",endereco:"Rua do Carmo, nº 92 / apto 265",localidade:"São Luís - MA",documentoTipo:"CNPJ",documento:"12.345.678/0001-90"},{id:"2",unidadeConsumidora:"2.120.200.300.200-13",endereco:"Alameda C, Quadra Sqs, 333",localidade:"São Luís - MA",documentoTipo:"CPF",documento:"123.456.789-00"}];return o.jsx("div",{style:{maxWidth:"30.25rem"},children:r.map((t,l)=>o.jsx(j,{inputType:"checkbox",unidadeConsumidora:t.unidadeConsumidora,endereco:t.endereco,localidade:t.localidade,documentoTipo:t.documentoTipo,documento:t.documento,selected:n.includes(t.id),onChange:m=>c(d=>m?[...d,t.id]:d.filter(u=>u!==t.id)),showBorder:l<r.length-1,"data-testid":`item-${t.id}`},t.id))})}};var h,x,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const items = [{
      id: "1",
      unidadeConsumidora: "2.120.200.300.200-12",
      endereco: "Rua do Carmo, nº 92 / apto 265",
      localidade: "São Luís - MA",
      documentoTipo: "CNPJ" as const,
      documento: "12.345.678/0001-90"
    }, {
      id: "2",
      unidadeConsumidora: "2.120.200.300.200-13",
      endereco: "Alameda C, Quadra Sqs, 333",
      localidade: "São Luís - MA",
      documentoTipo: "CPF" as const,
      documento: "123.456.789-00"
    }];
    return <div style={{
      maxWidth: "30.25rem"
    }}>
        {items.map((item, index) => <ListSelectItem key={item.id} inputType="checkbox" unidadeConsumidora={item.unidadeConsumidora} endereco={item.endereco} localidade={item.localidade} documentoTipo={item.documentoTipo} documento={item.documento} selected={selected.includes(item.id)} onChange={next => setSelected(current => next ? [...current, item.id] : current.filter(value => value !== item.id))} showBorder={index < items.length - 1} data-testid={\`item-\${item.id}\`} />)}
      </div>;
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const K=["CheckboxList"];export{i as CheckboxList,K as __namedExportsOrder,H as default};
