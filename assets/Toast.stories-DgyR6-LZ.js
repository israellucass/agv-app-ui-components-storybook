import{j as N}from"./iframe-X1Gumu8i.js";import{T as A,a as F}from"./Toast-CdbAbSVo.js";import"./preload-helper-C1FmrZbK.js";import"./CardFeedbackIcons-BGSaUzQt.js";const P={title:"Components/Toast",component:A,tags:["autodocs"],parameters:{usage:{purpose:"Confirmação breve depois de uma ação (envio, cópia, falha de rede).",when:["Feedback global e temporário (sucesso, aviso, erro de rede).","No máximo uma ação (“Desfazer”, “Ver solicitação”)."],whenNot:["Erro de formulário: use error no Input / InputSelect.","Mensagem que precisa ficar na página: use CardFeedback ou ToastCard.","Não empilhe vários toasts como conversa."],how:["Mostre o toast logo após a ação concluir; deixe ele auto-fechar (temporário).","Limite a uma ação por toast — mais de uma vira fluxo, não toast.","Não mostre toast para erro que precisa de correção no formulário: aponte o campo.","Se a mensagem precisa permanecer até a pessoa agir, use ToastCard persistente.","Não empilhe toasts; uma mensagem por vez."],a11y:["Toast temporário: aria-live polite (assertive só em error).","Não move o foco do campo.","persistent / ToastCard: o usuário fecha; live region desligada."],references:[{system:"Shopify Polaris",component:"Toast",url:"https://polaris.shopify.com/components/feedback-indicators/toast",why:"Feedback curto depois da ação; uma ação no máximo; não empilhar como conversa."},{system:"GOV.UK",component:"Notification banner",url:"https://design-system.service.gov.uk/components/notification-banner/",why:"Erro de campo fica no formulário, não no banner/toast."},{system:"Atlassian",component:"Inline message",url:"https://atlassian.design/components/inline-message",why:"Mensagem que precisa ficar na página ≠ toast; use CardFeedback/ToastCard."},{system:"USWDS",component:"Alert",url:"https://designsystem.digital.gov/components/alert/",why:"Papel do alerta persistente vs. confirmação temporária."},{system:"IBM Carbon",component:"Notification",url:"https://carbondesignsystem.com/components/notification/usage/",why:"Toast/snackbar não rouba foco; live region polite, assertive só em erro."}]}}},e={args:{title:"Operação realizada",description:"Sua solicitação foi enviada com sucesso.",variant:"success",persistent:!0}},a={args:{title:"Erro na operação",description:"Não foi possível processar sua solicitação.",variant:"error",persistent:!0}},o={args:{title:"Atenção",description:"Esta ação não poderá ser desfeita.",variant:"warning",persistent:!0}},s={args:{title:"Informação",description:"Seu cadastro foi atualizado.",variant:"info",persistent:!0}},r={name:"Fecha sozinho (5s)",args:{title:"Solicitação enviada",description:"Esta mensagem fecha automaticamente.",variant:"success",persistent:!1}},t={name:"Com uma ação",args:{title:"Link copiado",description:"O código Pix foi copiado.",variant:"success",persistent:!0,action:{label:"Desfazer",onClick:()=>{}}}},n={render:()=>N.jsx(F,{title:"Confirme o e-mail",description:"Enviamos um código para validar o cadastro. Esta mensagem permanece até você fechar.",variant:"info"})},j=["Success","Error","Warning","Info","AutoClose","ComAcao","Card"];var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Operação realizada",
    description: "Sua solicitação foi enviada com sucesso.",
    variant: "success",
    persistent: true
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Erro na operação",
    description: "Não foi possível processar sua solicitação.",
    variant: "error",
    persistent: true
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,g,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Atenção",
    description: "Esta ação não poderá ser desfeita.",
    variant: "warning",
    persistent: true
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,E,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Informação",
    description: "Seu cadastro foi atualizado.",
    variant: "info",
    persistent: true
  }
}`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var h,C,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Fecha sozinho (5s)",
  args: {
    title: "Solicitação enviada",
    description: "Esta mensagem fecha automaticamente.",
    variant: "success",
    persistent: false
  }
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,y,T;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Com uma ação",
  args: {
    title: "Link copiado",
    description: "O código Pix foi copiado.",
    variant: "success",
    persistent: true,
    action: {
      label: "Desfazer",
      onClick: () => {}
    }
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var k,w,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ToastCard title="Confirme o e-mail" description="Enviamos um código para validar o cadastro. Esta mensagem permanece até você fechar." variant="info" />
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};export{r as AutoClose,n as Card,t as ComAcao,a as Error,s as Info,e as Success,o as Warning,j as __namedExportsOrder,P as default};
