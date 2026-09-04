import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./iframe-Dq7yb4X6.js";import{r as B}from"./index-Tcpqm9on.js";import{T as P}from"./Typography-BfVW8ghT.js";import"./preload-helper-C1FmrZbK.js";const Y="_backdrop_13qxl_1",ee="_tooltip_13qxl_8",te="_header_13qxl_26",ne="_title_13qxl_38",oe="_closeButton_13qxl_44",re="_body_13qxl_69",se="_bodyContent_13qxl_79",ae="_actions_13qxl_85",ie="_actionButton_13qxl_94",le="_arrow_13qxl_124",de="_arrowBottom_13qxl_134",i={backdrop:Y,tooltip:ee,header:te,title:ne,closeButton:oe,body:re,bodyContent:se,actions:ae,actionButton:ie,arrow:le,arrowBottom:de},ce=768,k=20,c=16,L=29,E=12;function ue(n,s){try{return n.getItem(s)}catch{return null}}function me(n,s,r){try{n.setItem(s,r)}catch{}}function x({targetRef:n,storageKey:s,storageType:r="session",title:K,content:V,isOpen:_,onClose:m}){const[u,f]=o.useState(!1),[G,C]=o.useState({top:0,left:0,visibility:"hidden",pointerEvents:"none"}),[j,S]=o.useState("left"),[J,R]=o.useState(void 0),b=o.useRef(null),M=o.useId(),d=o.useCallback(()=>{if(r!=="none"){const e=r==="local"?localStorage:sessionStorage;me(e,s,"true")}f(!1),m==null||m()},[r,s,m]);if(o.useEffect(()=>{if(!_){f(!1);return}if(r!=="none"){const e=r==="local"?localStorage:sessionStorage;if(ue(e,s)){f(!1);return}}f(!0)},[_,s,r]),o.useEffect(()=>{const e=n==null?void 0:n.current;if(u&&e){const a=e.style.position,l=e.style.zIndex,v=e.style.background,I=e.style.borderRadius,w=e.style.padding;return window.getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.style.zIndex="9999",e.style.isolation="isolate",e.style.background="var(--color-neutral-000)",e.style.borderRadius="0.5rem",e.style.padding="1.5rem",e.addEventListener("click",d),()=>{e.style.position=a,e.style.zIndex=l,e.style.background=v,e.style.borderRadius=I,e.style.padding=w,e.removeEventListener("click",d)}}},[u,n,d]),o.useEffect(()=>{const e=()=>{if(!n.current||!b.current)return;const a=n.current.getBoundingClientRect(),l=b.current.getBoundingClientRect(),v=a.left-l.width-k>=c;if((window.innerWidth<=ce||!v?"top":"left")==="top"){const $=Math.max(c,window.innerWidth-l.width-c),O=Math.min($,Math.max(c,a.left+a.width/2-l.width/2)),Q=Math.max(c,a.top-l.height-k),U=Math.max(E,l.width-L-E),X=Math.min(U,Math.max(E,a.left+a.width/2-O-L/2));S("top"),R({left:X}),C({top:Q,left:O,visibility:"visible",pointerEvents:"auto"});return}const w=Math.max(c,a.left-l.width-k),Z=Math.max(c,Math.min(a.top,window.innerHeight-l.height-c));S("left"),R(void 0),C({top:Z,left:w,visibility:"visible",pointerEvents:"auto"})};return u&&(setTimeout(e,0),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0)),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[u,n]),o.useEffect(()=>{if(!u)return;const e=a=>{a.key==="Escape"&&(a.preventDefault(),d())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[u,d]),!u)return null;const g=typeof document<"u"?document.body:null;return g?t.jsxs(t.Fragment,{children:[B.createPortal(t.jsx("div",{className:i.backdrop,onClick:e=>{e.target===e.currentTarget&&d()},"aria-hidden":"true","data-testid":"coachmark-backdrop"}),g),B.createPortal(t.jsxs("div",{ref:b,className:i.tooltip,style:G,role:"dialog","aria-modal":"true","aria-labelledby":M,"data-placement":j,"data-testid":"coachmark-tooltip",children:[t.jsxs("div",{className:i.header,children:[t.jsx(P,{variant:"subtitle-2",bold:!0,id:M,className:i.title,children:K}),t.jsx("button",{type:"button",className:i.closeButton,onClick:d,"aria-label":"Fechar","data-testid":"coachmark-close",children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:t.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),t.jsx("div",{className:i.body,children:t.jsx(P,{variant:"body-medium-2",as:"div",className:i.bodyContent,children:V})}),t.jsx("div",{className:i.actions,children:t.jsx("button",{type:"button",className:i.actionButton,onClick:d,"data-testid":"coachmark-action",children:"Entendi"})}),t.jsx("div",{className:j==="top"?`${i.arrow} ${i.arrowBottom}`:i.arrow,style:J,"aria-hidden":"true","data-testid":"coachmark-arrow",children:t.jsx("svg",{width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("rect",{width:"20",height:"20",transform:"translate(14.1421) rotate(45)",fill:"white"})})})]}),g)]}):null}const be={title:"Components/CoachMark",component:x},p={render:()=>{const n=o.useRef(null),[s,r]=o.useState(!0);return t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",padding:"4rem",minHeight:"24rem"},children:[t.jsx(x,{targetRef:n,storageKey:"story-default",storageType:"none",title:"Informe os dados",content:"Informe o CPF/CNPJ e o estado em que o imóvel se encontra",isOpen:s,onClose:()=>r(!1)}),t.jsx("div",{ref:n,style:{width:"min(28rem, 100%)",padding:"1.5rem",background:"#ffffff",borderRadius:"1rem",boxShadow:"0 3px 30px rgba(33, 33, 33, 0.15)"},children:"Elemento alvo (formulário)"})]})}},h={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>{const n=o.useRef(null),[s,r]=o.useState(!0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end",minHeight:"40rem",padding:"1rem"},children:[t.jsx(x,{targetRef:n,storageKey:"story-mobile",storageType:"none",title:"Informe os dados",content:"Informe o CPF/CNPJ e o estado em que o imóvel se encontra",isOpen:s,onClose:()=>r(!1)}),t.jsx("div",{ref:n,style:{width:"100%",padding:"1.5rem",background:"#ffffff",borderRadius:"0.5rem",boxShadow:"0 3px 30px rgba(33, 33, 33, 0.15)"},children:"Elemento alvo (formulário)"})]})}},y={render:()=>{const n=o.useRef(null),[s,r]=o.useState(!1);return t.jsxs("div",{style:{padding:"4rem"},children:[t.jsx("button",{type:"button",onClick:()=>r(!0),children:"Mostrar dica"}),t.jsx("div",{ref:n,style:{display:"inline-block",padding:"1rem 2rem",background:"#ebebeb",borderRadius:"0.5rem",marginTop:"2rem"},children:"Elemento alvo"}),t.jsx(x,{targetRef:n,storageKey:"story-controlled",storageType:"none",title:"Dica controlada",content:"Esta dica só aparece quando você clica no botão.",isOpen:s,onClose:()=>r(!1)})]})}};var q,N,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(true);
    return <div style={{
      display: "flex",
      justifyContent: "flex-end",
      padding: "4rem",
      minHeight: "24rem"
    }}>
        <CoachMark targetRef={ref} storageKey="story-default" storageType="none" title="Informe os dados" content="Informe o CPF/CNPJ e o estado em que o imóvel se encontra" isOpen={open} onClose={() => setOpen(false)} />
        <div ref={ref} style={{
        width: "min(28rem, 100%)",
        padding: "1.5rem",
        background: "#ffffff",
        borderRadius: "1rem",
        boxShadow: "0 3px 30px rgba(33, 33, 33, 0.15)"
      }}>
          Elemento alvo (formulário)
        </div>
      </div>;
  }
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var T,F,H;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(true);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      minHeight: "40rem",
      padding: "1rem"
    }}>
        <CoachMark targetRef={ref} storageKey="story-mobile" storageType="none" title="Informe os dados" content="Informe o CPF/CNPJ e o estado em que o imóvel se encontra" isOpen={open} onClose={() => setOpen(false)} />
        <div ref={ref} style={{
        width: "100%",
        padding: "1.5rem",
        background: "#ffffff",
        borderRadius: "0.5rem",
        boxShadow: "0 3px 30px rgba(33, 33, 33, 0.15)"
      }}>
          Elemento alvo (formulário)
        </div>
      </div>;
  }
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var A,W,z;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: "4rem"
    }}>
        <button type="button" onClick={() => setOpen(true)}>
          Mostrar dica
        </button>
        <div ref={ref} style={{
        display: "inline-block",
        padding: "1rem 2rem",
        background: "#ebebeb",
        borderRadius: "0.5rem",
        marginTop: "2rem"
      }}>
          Elemento alvo
        </div>
        <CoachMark targetRef={ref} storageKey="story-controlled" storageType="none" title="Dica controlada" content="Esta dica só aparece quando você clica no botão." isOpen={open} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...(z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const ge=["Default","Mobile","Controlled"];export{y as Controlled,p as Default,h as Mobile,ge as __namedExportsOrder,be as default};
