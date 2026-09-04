import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{D as L}from"./Drawer-DVHfqVIN.js";import{B as q}from"./Button-Dxbb01wm.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";import"./index-Tcpqm9on.js";import"./Typography-BfVW8ghT.js";import"./Grid-BVJC4bVA.js";const K={title:"Components/Drawer",component:L},n={args:{open:!0,onClose:()=>{},width:320,title:"Drawer de exemplo",children:"Conteúdo do drawer."}},o={args:{open:!0,onClose:()=>{},width:480,title:"Termo",children:a.jsx("iframe",{title:"Termo",srcDoc:"<p>Conteúdo do termo</p>",width:"100%",height:"100%",style:{display:"block",border:0}})}},e={args:{open:!0,onClose:()=>{},width:480,title:"Drawer com footer",children:"Conteúdo do drawer.",footerSlot:a.jsx("button",{type:"button",children:"Confirmar"})}},r={args:{open:!0,onClose:()=>{},width:613,side:"right",layout:"panel",title:"Histórico",children:"Conteúdo do painel em largura total."}},t={args:{open:!0,onClose:()=>{},width:"100%",variant:"bottom",height:"calc(100dvh - 3.5rem)",title:"Termo",children:"Conteúdo do drawer."}},i={args:{open:!0,onClose:()=>{},variant:"bottom",width:"100%",title:"Filtrar por",footerSlot:a.jsx(q,{type:"button",variant:"primary",label:"Aplicar filtro",fullWidth:!0}),children:a.jsx("div",{children:Array.from({length:12},(z,s)=>a.jsxs("p",{style:{margin:"0 0 1rem"},children:["Opção de filtro ",s+1,". O sheet abre em metade da página; arraste o handle ou toque nele para expandir até o topo."]},s))})}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 320,
    title: "Drawer de exemplo",
    children: "Conteúdo do drawer."
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,u,h,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Conteúdo com altura relativa ocupa toda a altura disponível do drawer.",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var C,f,w,y,b;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 480,
    title: "Drawer com footer",
    children: "Conteúdo do drawer.",
    footerSlot: <button type="button">Confirmar</button>
  }
}`,...(w=(f=e.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"Com footer: o corpo estica e o footer mantém a altura do conteúdo.",...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var x,v,D,S,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: 613,
    side: "right",
    layout: "panel",
    title: "Histórico",
    children: "Conteúdo do painel em largura total."
  }
}`,...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.source},description:{story:"Layout panel: largura total e padding uniforme (ex.: Histórico).",...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var T,j,B,O,F;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    width: "100%",
    variant: "bottom",
    height: "calc(100dvh - 3.5rem)",
    title: "Termo",
    children: "Conteúdo do drawer."
  }
}`,...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source},description:{story:"Variant bottom com altura definida pelo consumidor.",...(F=(O=t.parameters)==null?void 0:O.docs)==null?void 0:F.description}}};var _,k,H;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(k=i.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const M=["Default","ConteudoAlturaTotal","ComFooter","LayoutPanel","BottomAlturaCustomizada","Bottom"];export{i as Bottom,t as BottomAlturaCustomizada,e as ComFooter,o as ConteudoAlturaTotal,n as Default,r as LayoutPanel,M as __namedExportsOrder,K as default};
