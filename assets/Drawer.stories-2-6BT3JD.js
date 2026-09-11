import{j as a}from"./iframe-DHiQjgKA.js";import{D as H}from"./Drawer-BczEd-He.js";import{B as L}from"./Button-CRyfCmRi.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-BXurbrW6.js";import"./Grid-DNZiLZ5i.js";const I={title:"Components/Drawer",component:H},n={args:{open:!0,onClose:()=>{},width:320,title:"Drawer de exemplo",children:"Conteúdo do drawer."}},e={args:{open:!0,onClose:()=>{},width:480,title:"Termo",children:a.jsx("iframe",{title:"Termo",srcDoc:"<p>Conteúdo do termo</p>",width:"100%",height:"100%",style:{display:"block",border:0}})}},o={args:{open:!0,onClose:()=>{},width:480,title:"Drawer com footer",children:"Conteúdo do drawer.",footerSlot:a.jsx("button",{type:"button",children:"Confirmar"})}},r={args:{open:!0,onClose:()=>{},width:613,side:"right",layout:"panel",title:"Histórico",children:"Conteúdo do painel em largura total."}},t={args:{open:!0,onClose:()=>{},width:"100%",variant:"bottom",height:"calc(100dvh - 3.5rem)",title:"Termo",children:"Conteúdo do drawer."}},s={args:{open:!0,onClose:()=>{},variant:"bottom",width:"100%",title:"Filtrar por",footerSlot:a.jsx(L,{type:"button",children:"Aplicar filtro",fullWidth:!0}),children:a.jsx("div",{children:Array.from({length:12},(q,i)=>a.jsxs("p",{style:{margin:"0 0 1rem"},children:["Opção de filtro ",i+1,". O sheet abre em metade da página; arraste o handle ou toque nele para expandir até o topo."]},i))})}},J=["Default","ConteudoAlturaTotal","ComFooter","LayoutPanel","BottomAlturaCustomizada","Bottom"];var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 320,
    title: "Drawer de exemplo",
    children: "Conteúdo do drawer."
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u,h,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 480,
    title: "Termo",
    children: <iframe title="Termo" srcDoc="<p>Conteúdo do termo</p>" width="100%" height="100%" style={{
      display: "block",
      border: 0
    }} />
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Conteúdo com altura relativa ocupa toda a altura disponível do drawer.",...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var C,x,f,w,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 480,
    title: "Drawer com footer",
    children: "Conteúdo do drawer.",
    footerSlot: <button type="button">Confirmar</button>
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Com footer: o corpo estica e o footer mantém a altura do conteúdo.",...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var b,A,F,D,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 613,
    side: "right",
    layout: "panel",
    title: "Histórico",
    children: "Conteúdo do painel em largura total."
  }
}`,...(F=(A=r.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Layout panel: largura total e padding uniforme (ex.: Histórico).",...(v=(D=r.parameters)==null?void 0:D.docs)==null?void 0:v.description}}};var S,E,T,j,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: "100%",
    variant: "bottom",
    height: "calc(100dvh - 3.5rem)",
    title: "Termo",
    children: "Conteúdo do drawer."
  }
}`,...(T=(E=t.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:"Variant bottom com altura definida pelo consumidor.",...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var O,_,k;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    variant: "bottom",
    width: "100%",
    title: "Filtrar por",
    footerSlot: <Button type="button" children="Aplicar filtro" fullWidth />,
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
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};export{s as Bottom,t as BottomAlturaCustomizada,o as ComFooter,e as ConteudoAlturaTotal,n as Default,r as LayoutPanel,J as __namedExportsOrder,I as default};
