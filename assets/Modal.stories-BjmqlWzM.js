import{r as d,i as ee,j as e,R as oe}from"./iframe-BFZ5i1hr.js";import{T}from"./Typography-B8HzaHFA.js";import"./preload-helper-C1FmrZbK.js";const ne="_backdrop_118un_3",te="_dialog_118un_15",re="_dialogWide_118un_31",ae="_backdropWideDesktop_118un_40",se="_header_118un_47",le="_body_118un_60",de="_bodyAlignCenter_118un_65",ce="_backdropMobileFullscreen_118un_90",ie="_headerCloseOnly_118un_137",ue="_closeButton_118un_141",pe="_description_118un_165",me="_footer_118un_185",fe="_dialogCompact_118un_193",o={backdrop:ne,dialog:te,dialogWide:re,backdropWideDesktop:ae,header:se,body:le,bodyAlignCenter:de,backdropMobileFullscreen:ce,headerCloseOnly:ie,closeButton:ue,description:pe,footer:me,dialogCompact:fe};function be(r){const a=["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","[tabindex]:not([tabindex='-1'])"].join(",");return Array.from(r.querySelectorAll(a)).filter(s=>s.getAttribute("aria-disabled")!=="true")}function C({open:r,onClose:a,title:s,ariaLabel:h,description:_,children:v,footerSlot:E,role:H="dialog",layout:y="default",contentAlign:J="start",mobileFullscreen:Q=!1,closeAriaLabel:V="Fechar","data-testid":X}){const k=d.useId(),D=d.useId(),i=d.useRef(null),j=d.useRef(null),w=d.useRef(null),x=X??"modal",c=!!(s!=null&&s.trim()),$=h==null?void 0:h.trim();if(!c&&!$)throw new Error("Modal: informe `title` ou `ariaLabel`.");const Z=n=>{if(n.key==="Escape"){n.preventDefault(),n.stopPropagation(),a();return}if(n.key!=="Tab")return;const u=i.current;if(!u)return;const t=be(u);if(t.length===0)return;const l=t[0],A=t[t.length-1],O=document.activeElement;n.shiftKey?O===l&&(n.preventDefault(),A.focus()):O===A&&(n.preventDefault(),l.focus())};d.useEffect(()=>{if(!r)return;w.current=document.activeElement;const n=document.body.style.overflow;document.body.style.overflow="hidden";const u=()=>{var t,l;(t=i.current)==null||t.focus(),document.activeElement!==i.current&&((l=j.current)==null||l.focus())};return window.requestAnimationFrame(u),()=>{var t,l;document.body.style.overflow=n,(l=(t=w.current)==null?void 0:t.focus)==null||l.call(t)}},[r]);const M=typeof document<"u"?document.body:null;return!M||!r?null:ee.createPortal(e.jsx("div",{className:`${o.backdrop}${Q?` ${o.backdropMobileFullscreen}`:""}${y==="wide"?` ${o.backdropWideDesktop}`:""}`,onClick:n=>{n.target===n.currentTarget&&a()},"data-testid":`${x}-backdrop`,children:e.jsxs("div",{ref:i,className:`${o.dialog}${y==="wide"?` ${o.dialogWide}`:""}${y==="compact"?` ${o.dialogCompact}`:""}`,role:H,"aria-modal":"true","aria-labelledby":c?k:void 0,"aria-label":c?void 0:$,"aria-describedby":_?D:void 0,"data-testid":x,tabIndex:-1,onKeyDown:Z,children:[e.jsxs("header",{className:`${o.header}${c?"":` ${o.headerCloseOnly}`}`,children:[c?e.jsx(T,{as:"h2",variant:"subtitle-1",id:k,children:s}):null,e.jsx("button",{ref:j,type:"button",className:o.closeButton,onClick:a,"aria-label":V,"data-testid":`${x}-close`,children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M15 5L5 15M5 5l10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),_?e.jsx("div",{className:o.description,children:e.jsx(T,{as:"p",variant:"body-medium-2",id:D,children:_})}):null,v?e.jsx("div",{className:`${o.body}${J==="center"?` ${o.bodyAlignCenter}`:""}`,children:v}):null,E?e.jsx("footer",{className:o.footer,children:E}):null]})}),M)}const{userEvent:ge,within:he}=__STORYBOOK_MODULE_TEST__,Ce={title:"Components/Modal",component:C},p={args:{open:!0,onClose:()=>{},title:"Título do modal",description:"Descrição opcional do modal para contexto."}},m={args:{open:!0,onClose:()=>{},title:"Confirmação"}},f={args:{open:!0,onClose:()=>{},title:"Detalhes"},render:r=>e.jsx(C,{...r,children:e.jsx("div",{style:{padding:"1rem 0"},children:e.jsx("p",{children:"Conteúdo personalizado dentro do modal."})})})},b={args:{open:!0,onClose:()=>{},ariaLabel:"Mensagem",description:"Esta é uma mensagem sem título."}},g={args:{open:!1,onClose:()=>{},title:"Modal interativo",description:"Clique no botão para abrir. Pressione Escape ou clique fora para fechar."},render:r=>{const[a,s]=oe.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>s(!0),"data-testid":"open-modal",children:"Abrir modal"}),e.jsx(C,{...r,open:a,onClose:()=>s(!1)})]})},play:async({canvasElement:r})=>{const a=he(r);await ge.click(a.getByTestId("open-modal"))}},ve=["Default","SemDescricao","ComChildren","ApenasDescricao","Interativo"];var R,S,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    title: "Título do modal",
    description: "Descrição opcional do modal para contexto."
  }
}`,...(B=(S=p.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var F,I,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    title: "Confirmação"
  }
}`,...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var N,q,K;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    title: "Detalhes"
  },
  render: args => <Modal {...args}>
      <div style={{
      padding: "1rem 0"
    }}>
        <p>Conteúdo personalizado dentro do modal.</p>
      </div>
    </Modal>
}`,...(K=(q=f.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var P,L,z;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    ariaLabel: "Mensagem",
    description: "Esta é uma mensagem sem título."
  }
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var U,Y,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    title: "Modal interativo",
    description: "Clique no botão para abrir. Pressione Escape ou clique fora para fechar."
  },
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)} data-testid="open-modal">
          Abrir modal
        </button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("open-modal"));
  }
}`,...(G=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};export{b as ApenasDescricao,f as ComChildren,p as Default,g as Interativo,m as SemDescricao,ve as __namedExportsOrder,Ce as default};
