import{D as m}from"./Drawer-mRotJ_yZ.js";import{B as d}from"./Button-u86QPzmD.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-CA6sfyuY.js";import"./preload-helper-C1FmrZbK.js";import"./index-DmVH2652.js";import"./Typography-BktXbSm7.js";import"./Grid-BZrYB5Jr.js";const x={title:"Components/Drawer",component:m},e={args:{open:!0,onClose:()=>{},width:320,title:"Drawer de exemplo",children:"Conteúdo do drawer."}},r={args:{open:!0,onClose:()=>{},variant:"bottom",width:"100%",title:"Filtrar por",footerSlot:React.createElement(d,{type:"button",variant:"primary",label:"Aplicar filtro",fullWidth:!0}),children:React.createElement("div",null,Array.from({length:12},(s,t)=>React.createElement("p",{key:t,style:{margin:"0 0 1rem"}},"Opção de filtro ",t+1,". O sheet abre em metade da página; arraste o handle ou toque nele para expandir até o topo.")))}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 320,
    title: "Drawer de exemplo",
    children: "Conteúdo do drawer."
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    variant: "bottom",
    width: "100%",
    title: "Filtrar por",
    footerSlot: <Button type="button" variant="primary" label="Aplicar filtro" fullWidth />,
    children: <div>
        {Array.from({
        length: 12
      }, (_, index) => <p key={index} style={{
        margin: "0 0 1rem"
      }}>
            Opção de filtro {index + 1}. O sheet abre em metade da página; arraste
            o handle ou toque nele para expandir até o topo.
          </p>)}
      </div>
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const v=["Default","Bottom"];export{r as Bottom,e as Default,v as __namedExportsOrder,x as default};
