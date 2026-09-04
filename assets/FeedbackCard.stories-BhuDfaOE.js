import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as N}from"./CardWithIcon-CLusfjor.js";import{C as O}from"./CardFeedback-COFDFkJr.js";import{G as d}from"./Grid-BVJC4bVA.js";import{F as R}from"./FixedBottomAction-DRj8Xxss.js";import{B as b}from"./Button-Dxbb01wm.js";import{T as _}from"./Typography-BfVW8ghT.js";import"./CardFeedbackIcons-MBRbMbmt.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";const q="_card_1agh7_1",z={card:q};function B({title:c,description:w,primaryLabel:F,primaryLoading:m,onPrimary:A,variant:T,secondaryLabel:l,onSecondary:p,children:u,"data-testid":o="feedback-card"}){return a.jsxs(d,{container:!0,children:[a.jsxs(d,{offset:{xs:0,md:1,lg:1},size:{xs:6,md:5,lg:5},children:[a.jsx("div",{className:z.card,children:a.jsx(O,{variant:T,title:c,description:w,"data-testid":`${o}-card`,layout:"stacked"})}),a.jsx("form",{onSubmit:D=>{D.preventDefault(),!m&&A()},children:a.jsxs(R,{"data-testid":`${o}-actions`,children:[a.jsx(b,{type:"submit",label:F,variant:"primary",loading:m,autoFocus:!0,"data-testid":`${o}-primary`,fullWidth:!0}),l&&p?a.jsx(b,{type:"button",label:l,variant:"text",onClick:p,"data-testid":`${o}-secondary`,fullWidth:!0}):null]})})]}),u?a.jsx(d,{offset:{xs:0,md:7,lg:7},size:{xs:6,md:4,lg:4},children:u}):null]})}const Y={title:"Components/FeedbackCard",component:B,parameters:{layout:"fullscreen",docs:{description:{component:"Em mobile, os botões ficam fixos no rodapé com fundo branco sólido (via `FixedBottomAction`). Com dois botões: primário em cima, secundário text full width embaixo (padding vertical), gap de 0.5rem. Em desktop, os botões ficam lado a lado com gap de 1.5rem, bloco de ações com 96px e 32px abaixo do card."}}}},e=c=>a.jsx("div",{style:{padding:"2rem 1rem"},children:a.jsx(c,{})}),r={decorators:[e],args:{variant:"success",title:"Permissão de acesso enviada.",description:"Enviamos um e-mail com a permissão de acesso aos imóveis associados ao 12.345.678/0001-90.",primaryLabel:"Ir pra minhas contas",onPrimary:()=>{},"data-testid":"feedback-success"}},s={decorators:[e],args:{variant:"error",title:"Não foi possível conceder o acesso solicitado",description:"O e-mail informado ainda não está cadastrado em nosso sistema. Solicite que o responsável pelo e-mail realize o cadastro e logo após será possível conceder o acesso.",primaryLabel:"Voltar pra página inicial",onPrimary:()=>{},"data-testid":"feedback-error"}},i={name:"Warning com descrição rica",decorators:[e],args:{variant:"warning",title:"Não conseguimos dar permissão pra todos os colaboradores",description:a.jsxs(a.Fragment,{children:["Alguns e-mails informados cadastrados na Agência Virtual. Solicite que seus colaboradores criem seus cadastros e tente novamente mais tarde.",a.jsx("br",{}),a.jsx("br",{}),"E-mails não cadastrados:",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"exemplo@dominio.com"})]}),primaryLabel:"Voltar pra página inicial",onPrimary:()=>{},"data-testid":"feedback-warning"}},n={name:"Mobile — ações fixas no rodapé",decorators:[e],parameters:{viewport:{defaultViewport:"mobile1"}},args:{variant:"success",title:"Permissão de acesso enviada.",description:"Enviamos um e-mail com a permissão de acesso aos imóveis associados ao 12.345.678/0001-90.",primaryLabel:"Ir pra minhas contas",secondaryLabel:"Voltar pra página inicial",onPrimary:()=>{},onSecondary:()=>{},"data-testid":"feedback-mobile"}},t={name:"Com painel lateral (children)",decorators:[e],args:{variant:"error",title:"Ops, não encontramos imóveis pra adicionar",description:"Revise as informações e tente novamente.",primaryLabel:"Tentar novamente",secondaryLabel:"Voltar pra página inicial",onPrimary:()=>{},onSecondary:()=>{},"data-testid":"feedback-not-found",children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx(_,{variant:"subtitle-2",children:"Você também pode:"}),a.jsx(N,{title:"Solicitar ligação nova",description:"Solicite a primeira ligação de energia em um imóvel.",href:"#",variant:"outlined",showChevron:!0})]})}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    variant: "success",
    title: "Permissão de acesso enviada.",
    description: "Enviamos um e-mail com a permissão de acesso aos imóveis associados ao 12.345.678/0001-90.",
    primaryLabel: "Ir pra minhas contas",
    onPrimary: () => {},
    "data-testid": "feedback-success"
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,y,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [decorator],
  args: {
    variant: "error",
    title: "Não foi possível conceder o acesso solicitado",
    description: "O e-mail informado ainda não está cadastrado em nosso sistema. Solicite que o responsável pelo e-mail realize o cadastro e logo após será possível conceder o acesso.",
    primaryLabel: "Voltar pra página inicial",
    onPrimary: () => {},
    "data-testid": "feedback-error"
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,S,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Warning com descrição rica",
  decorators: [decorator],
  args: {
    variant: "warning",
    title: "Não conseguimos dar permissão pra todos os colaboradores",
    description: <>
        Alguns e-mails informados cadastrados na Agência Virtual. Solicite que
        seus colaboradores criem seus cadastros e tente novamente mais tarde.
        <br />
        <br />
        E-mails não cadastrados:
        <br />
        <br />
        <strong>exemplo@dominio.com</strong>
      </>,
    primaryLabel: "Voltar pra página inicial",
    onPrimary: () => {},
    "data-testid": "feedback-warning"
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var P,C,V;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Mobile — ações fixas no rodapé",
  decorators: [decorator],
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    variant: "success",
    title: "Permissão de acesso enviada.",
    description: "Enviamos um e-mail com a permissão de acesso aos imóveis associados ao 12.345.678/0001-90.",
    primaryLabel: "Ir pra minhas contas",
    secondaryLabel: "Voltar pra página inicial",
    onPrimary: () => {},
    onSecondary: () => {},
    "data-testid": "feedback-mobile"
  }
}`,...(V=(C=n.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var E,L,W;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Com painel lateral (children)",
  decorators: [decorator],
  args: {
    variant: "error",
    title: "Ops, não encontramos imóveis pra adicionar",
    description: "Revise as informações e tente novamente.",
    primaryLabel: "Tentar novamente",
    secondaryLabel: "Voltar pra página inicial",
    onPrimary: () => {},
    onSecondary: () => {},
    "data-testid": "feedback-not-found",
    children: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
        <Typography variant="subtitle-2">Você também pode:</Typography>
        <CardWithIcon title="Solicitar ligação nova" description="Solicite a primeira ligação de energia em um imóvel." href="#" variant="outlined" showChevron />
      </div>
  }
}`,...(W=(L=t.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const Z=["Success","Error","WarningWithRichDescription","MobileFixedActions","WithSidePanel"];export{s as Error,n as MobileFixedActions,r as Success,i as WarningWithRichDescription,t as WithSidePanel,Z as __namedExportsOrder,Y as default};
