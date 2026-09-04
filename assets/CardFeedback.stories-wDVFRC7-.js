import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as F}from"./CardFeedback-COFDFkJr.js";import{B as o}from"./Button-Dxbb01wm.js";import"./CardFeedbackIcons-MBRbMbmt.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-BfVW8ghT.js";const w={title:"Components/CardFeedback",component:F,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["error","warning","success","info"]}}},r=T=>a.jsx("div",{style:{width:"100%",maxWidth:560},children:a.jsx(T,{})}),e={args:{variant:"info",title:"Atenção!",description:"Agora, a sua conta contrato também é chamada de unidade consumidora. Fique atento(a): os números podem ser diferentes."},decorators:[r]},n={name:"Error (stacked)",args:{variant:"error",layout:"stacked",title:"Ops, dados não encontrados",description:"Não conseguimos localizar seu acesso com as informações digitadas."},decorators:[r]},t={name:"Warning (compact) com link",args:{variant:"warning",layout:"compact",title:"Você possui contas vencidas",description:"Confira seu histórico de faturas e regularize sua situação o mais rápido possível para evitar interrupções.",children:a.jsx(o,{label:"Ir pra histórico de faturas",variant:"text-sm",feedbackTheme:"warning",type:"button",onClick:()=>{}})},decorators:[r]},s={name:"Error com ações (children)",args:{variant:"error",title:"CPF não corresponde à conta contrato",description:"O CPF do documento informado não corresponde ao CPF do titular da conta contrato.",children:a.jsxs(a.Fragment,{children:[a.jsx(o,{label:"Tentar novamente",variant:"outline",feedbackTheme:"error",onClick:()=>{}}),a.jsx(o,{label:"Atualizar cadastro",variant:"ghost",feedbackTheme:"error",onClick:()=>{}})]})},decorators:[r]},c={name:"Success com ações (children)",args:{variant:"success",title:"Pagamento confirmado!",description:"Seu pagamento foi processado. Você pode baixar o comprovante.",children:a.jsxs(a.Fragment,{children:[a.jsx(o,{label:"Baixar comprovante",variant:"outline",feedbackTheme:"success",onClick:()=>{}}),a.jsx(o,{label:"Voltar ao início",variant:"ghost",feedbackTheme:"success",onClick:()=>{}})]})},decorators:[r]};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Atenção!",
    description: "Agora, a sua conta contrato também é chamada de unidade consumidora. Fique atento(a): os números podem ser diferentes."
  },
  decorators: [decorator]
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Error (stacked)",
  args: {
    variant: "error",
    layout: "stacked",
    title: "Ops, dados não encontrados",
    description: "Não conseguimos localizar seu acesso com as informações digitadas."
  },
  decorators: [decorator]
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Warning (compact) com link",
  args: {
    variant: "warning",
    layout: "compact",
    title: "Você possui contas vencidas",
    description: "Confira seu histórico de faturas e regularize sua situação o mais rápido possível para evitar interrupções.",
    children: <Button label="Ir pra histórico de faturas" variant="text-sm" feedbackTheme="warning" type="button" onClick={() => {}} />
  },
  decorators: [decorator]
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,k,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Error com ações (children)",
  args: {
    variant: "error",
    title: "CPF não corresponde à conta contrato",
    description: "O CPF do documento informado não corresponde ao CPF do titular da conta contrato.",
    children: <>
        <Button label="Tentar novamente" variant="outline" feedbackTheme="error" onClick={() => {}} />
        <Button label="Atualizar cadastro" variant="ghost" feedbackTheme="error" onClick={() => {}} />
      </>
  },
  decorators: [decorator]
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var C,x,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Success com ações (children)",
  args: {
    variant: "success",
    title: "Pagamento confirmado!",
    description: "Seu pagamento foi processado. Você pode baixar o comprovante.",
    children: <>
        <Button label="Baixar comprovante" variant="outline" feedbackTheme="success" onClick={() => {}} />
        <Button label="Voltar ao início" variant="ghost" feedbackTheme="success" onClick={() => {}} />
      </>
  },
  decorators: [decorator]
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const z=["Info","ErrorStacked","WarningCompact","ErrorWithActions","SuccessWithActions"];export{n as ErrorStacked,s as ErrorWithActions,e as Info,c as SuccessWithActions,t as WarningCompact,z as __namedExportsOrder,w as default};
