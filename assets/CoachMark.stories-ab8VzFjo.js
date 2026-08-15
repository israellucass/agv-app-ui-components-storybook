import{r as o}from"./iframe-CA6sfyuY.js";import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-DmVH2652.js";import{T as I}from"./Typography-BktXbSm7.js";import"./preload-helper-C1FmrZbK.js";const T="_backdrop_1jj5o_1",N="_tooltip_1jj5o_8",P="_header_1jj5o_26",z="_title_1jj5o_35",q="_content_1jj5o_40",F="_closeButton_1jj5o_44",H="_actionButton_1jj5o_68",l={backdrop:T,tooltip:N,header:P,title:z,content:q,closeButton:F,actionButton:H};function K(t,r){try{return t.getItem(r)}catch{return null}}function V(t,r,n){try{t.setItem(r,n)}catch{}}function k({targetRef:t,storageKey:r,storageType:n="session",title:L,content:D,isOpen:h,onClose:d}){const[c,u]=o.useState(!1),[O,M]=o.useState({top:0,left:0,visibility:"hidden",pointerEvents:"none"}),f=o.useRef(null),E=o.useId(),s=o.useCallback(()=>{if(n!=="none"){const e=n==="local"?localStorage:sessionStorage;V(e,r,"true")}u(!1),d==null||d()},[n,r,d]);if(o.useEffect(()=>{if(!h){u(!1);return}if(n!=="none"){const e=n==="local"?localStorage:sessionStorage;if(K(e,r)){u(!1);return}}u(!0)},[h,r,n]),o.useEffect(()=>{const e=t==null?void 0:t.current;if(c&&e){const i=e.style.position,y=e.style.zIndex,j=e.style.background,g=e.style.borderRadius,v=e.style.padding;return window.getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.style.zIndex="9999",e.style.isolation="isolate",e.style.background="var(--color-neutral-000)",e.style.borderRadius="1rem",e.style.padding="1.5rem",e.addEventListener("click",s),()=>{e.style.position=i,e.style.zIndex=y,e.style.background=j,e.style.borderRadius=g,e.style.padding=v,e.removeEventListener("click",s)}}},[c,t,s]),o.useEffect(()=>{const e=()=>{if(!t.current||!f.current)return;const i=t.current.getBoundingClientRect(),y=f.current.getBoundingClientRect(),g=i.bottom+12,v=i.left+i.width/2-y.width/2;M({top:g,left:v,visibility:"visible",pointerEvents:"auto"})};return c&&(setTimeout(e,0),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0)),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[c,t]),o.useEffect(()=>{if(!c)return;const e=i=>{i.key==="Escape"&&(i.preventDefault(),s())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[c,s]),!c)return null;const b=typeof document<"u"?document.body:null;return b?a.jsxs(a.Fragment,{children:[x.createPortal(a.jsx("div",{className:l.backdrop,onClick:e=>{e.target===e.currentTarget&&s()},"aria-hidden":"true","data-testid":"coachmark-backdrop"}),b),x.createPortal(a.jsxs("div",{ref:f,className:l.tooltip,style:O,role:"dialog","aria-modal":"true","aria-labelledby":E,"data-testid":"coachmark-tooltip",children:[a.jsxs("div",{className:l.header,children:[a.jsx(I,{variant:"subtitle-1",bold:!0,id:E,className:l.title,children:L}),a.jsx("button",{type:"button",className:l.closeButton,onClick:s,"aria-label":"Fechar","data-testid":"coachmark-close",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M15 5L5 15M5 5l10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),a.jsx("div",{className:l.content,children:D}),a.jsx("button",{type:"button",className:l.actionButton,onClick:s,"data-testid":"coachmark-action",children:"Entendi"})]}),b)]}):null}const Q={title:"Components/CoachMark",component:k},p={render:()=>{const t=o.useRef(null),[r,n]=o.useState(!0);return React.createElement("div",{style:{padding:"4rem"}},React.createElement("div",{ref:t,style:{display:"inline-block",padding:"1rem 2rem",background:"#ebebeb",borderRadius:"0.5rem"}},"Elemento alvo"),React.createElement(k,{targetRef:t,storageKey:"story-default",storageType:"none",title:"Dica importante",content:"Preencha os campos abaixo para continuar.",isOpen:r,onClose:()=>n(!1)}))}},m={render:()=>{const t=o.useRef(null),[r,n]=o.useState(!1);return React.createElement("div",{style:{padding:"4rem"}},React.createElement("button",{type:"button",onClick:()=>n(!0)},"Mostrar dica"),React.createElement("div",{ref:t,style:{display:"inline-block",padding:"1rem 2rem",background:"#ebebeb",borderRadius:"0.5rem",marginTop:"2rem"}},"Elemento alvo"),React.createElement(k,{targetRef:t,storageKey:"story-controlled",storageType:"none",title:"Dica controlada",content:"Esta dica só aparece quando você clica no botão.",isOpen:r,onClose:()=>n(!1)}))}};var _,R,S;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(true);
    return <div style={{
      padding: "4rem"
    }}>
        <div ref={ref} style={{
        display: "inline-block",
        padding: "1rem 2rem",
        background: "#ebebeb",
        borderRadius: "0.5rem"
      }}>
          Elemento alvo
        </div>
        <CoachMark targetRef={ref} storageKey="story-default" storageType="none" title="Dica importante" content="Preencha os campos abaixo para continuar." isOpen={open} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...(S=(R=p.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,C,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const U=["Default","Controlled"];export{m as Controlled,p as Default,U as __namedExportsOrder,Q as default};
