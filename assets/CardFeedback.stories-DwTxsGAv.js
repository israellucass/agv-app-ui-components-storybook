import{j as o}from"./iframe-Dxi-B2vT.js";import{C as A}from"./CardFeedback-D-aG1uxN.js";import{B as r}from"./Button-pwV01CRw.js";import"./preload-helper-C1FmrZbK.js";import"./CardFeedbackIcons-L_UUmxSe.js";const P={title:"Components/CardFeedback",component:A,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["error","warning","success","info"]}}},a=y=>o.jsx("div",{style:{width:"100%",maxWidth:560},children:o.jsx(y,{})}),e={args:{variant:"info",title:"Atenção!",description:"Agora, a sua conta contrato também é chamada de unidade consumidora. Fique atento(a): os números podem ser diferentes."},decorators:[a]},n={name:"Error (stacked)",args:{variant:"error",layout:"stacked",title:"Ops, dados não encontrados",description:"Não conseguimos localizar seu acesso com as informações digitadas."},decorators:[a]},t={name:"Warning (compact) com link",args:{variant:"warning",layout:"compact",title:"Você possui contas vencidas",description:"Confira seu histórico de faturas e regularize sua situação o mais rápido possível para evitar interrupções.",children:o.jsx(r,{children:"Ir pra histórico de faturas",color:"link",type:"button",onClick:()=>{}})},decorators:[a]},s={name:"Error com ações (children)",args:{variant:"error",title:"CPF não corresponde à conta contrato",description:"O CPF do documento informado não corresponde ao CPF do titular da conta contrato.",children:o.jsxs(o.Fragment,{children:[o.jsx(r,{children:"Tentar novamente",color:"secondary",onClick:()=>{}}),o.jsx(r,{children:"Atualizar cadastro",color:"tertiary",onClick:()=>{}})]})},decorators:[a]},c={name:"Success com ações (children)",args:{variant:"success",title:"Pagamento confirmado!",description:"Seu pagamento foi processado. Você pode baixar o comprovante.",children:o.jsxs(o.Fragment,{children:[o.jsx(r,{children:"Baixar comprovante",color:"secondary",onClick:()=>{}}),o.jsx(r,{children:"Voltar ao início",color:"tertiary",onClick:()=>{}})]})},decorators:[a]},z=["Info","ErrorStacked","WarningCompact","ErrorWithActions","SuccessWithActions"];var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,g,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Warning (compact) com link",
  args: {
    variant: "warning",
    layout: "compact",
    title: "Você possui contas vencidas",
    description: "Confira seu histórico de faturas e regularize sua situação o mais rápido possível para evitar interrupções.",
    children: <Button children="Ir pra histórico de faturas" color="link" type="button" onClick={() => {}} />
  },
  decorators: [decorator]
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var E,f,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Error com ações (children)",
  args: {
    variant: "error",
    title: "CPF não corresponde à conta contrato",
    description: "O CPF do documento informado não corresponde ao CPF do titular da conta contrato.",
    children: <>
        <Button children="Tentar novamente" color="secondary" onClick={() => {}} />
        <Button children="Atualizar cadastro" color="tertiary" onClick={() => {}} />
      </>
  },
  decorators: [decorator]
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,k,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Success com ações (children)",
  args: {
    variant: "success",
    title: "Pagamento confirmado!",
    description: "Seu pagamento foi processado. Você pode baixar o comprovante.",
    children: <>
        <Button children="Baixar comprovante" color="secondary" onClick={() => {}} />
        <Button children="Voltar ao início" color="tertiary" onClick={() => {}} />
      </>
  },
  decorators: [decorator]
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};export{n as ErrorStacked,s as ErrorWithActions,e as Info,c as SuccessWithActions,t as WarningCompact,z as __namedExportsOrder,P as default};
