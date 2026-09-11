import{r as D,j as i}from"./iframe-DkUHeXHM.js";import{T as I,a as j}from"./Toast-DsHqRomE.js";import{B as q}from"./Button-DePeqEeh.js";import"./preload-helper-C1FmrZbK.js";import"./CardFeedbackIcons-8UEJrnHL.js";const W={title:"Components/Toast",component:I,tags:["autodocs"],parameters:{usage:{purpose:"Confirmação breve depois de uma ação (envio, cópia, falha de rede).",when:["Feedback global e temporário (sucesso, aviso, erro de rede).","No máximo uma ação (“Desfazer”, “Ver solicitação”)."],whenNot:["Erro de formulário: use error no Input / InputSelect.","Mensagem que precisa ficar na página: use CardFeedback ou ToastCard.","Não empilhe vários toasts como conversa."],how:["Mostre o toast logo após a ação concluir; deixe ele auto-fechar (temporário).","Limite a uma ação por toast — mais de uma vira fluxo, não toast.","Não mostre toast para erro que precisa de correção no formulário: aponte o campo.","Se a mensagem precisa permanecer até a pessoa agir, use ToastCard persistente.","Não empilhe toasts; uma mensagem por vez."],a11y:["Toast temporário: aria-live polite (assertive só em error).","Não move o foco do campo.","persistent / ToastCard: o usuário fecha; live region desligada."],references:[{system:"Shopify Polaris",component:"Toast",url:"https://polaris.shopify.com/components/feedback-indicators/toast",why:"Feedback curto depois da ação; uma ação no máximo; não empilhar como conversa."},{system:"GOV.UK",component:"Notification banner",url:"https://design-system.service.gov.uk/components/notification-banner/",why:"Erro de campo fica no formulário, não no banner/toast."},{system:"Atlassian",component:"Inline message",url:"https://atlassian.design/components/inline-message",why:"Mensagem que precisa ficar na página ≠ toast; use CardFeedback/ToastCard."},{system:"USWDS",component:"Alert",url:"https://designsystem.digital.gov/components/alert/",why:"Papel do alerta persistente vs. confirmação temporária."},{system:"IBM Carbon",component:"Notification",url:"https://carbondesignsystem.com/components/notification/usage/",why:"Toast/snackbar não rouba foco; live region polite, assertive só em erro."}]}}},e={args:{title:"Operação realizada",description:"Sua solicitação foi enviada com sucesso.",variant:"success",persistent:!0}},o={args:{title:"Erro na operação",description:"Não foi possível processar sua solicitação.",variant:"error",persistent:!0}},a={args:{title:"Atenção",description:"Esta ação não poderá ser desfeita.",variant:"warning",persistent:!0}},r={args:{title:"Informação",description:"Seu cadastro foi atualizado.",variant:"info",persistent:!0}},s={name:"Fecha sozinho (5s)",render:()=>{const[N,A]=D.useState(0);return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[i.jsx(I,{title:"Solicitação enviada",description:"Esta mensagem fecha sozinha em 5 segundos.",variant:"success"},N),i.jsx(q,{color:"secondary",onClick:()=>A(O=>O+1),children:"Mostrar de novo"})]})}},t={name:"Com uma ação",args:{title:"Link copiado",description:"O código Pix foi copiado.",variant:"success",persistent:!0,action:{label:"Desfazer",onClick:()=>{}}}},n={render:()=>i.jsx(j,{title:"Confirme o e-mail",description:"Enviamos um código para validar o cadastro. Esta mensagem permanece até você fechar.",variant:"info"})},U=["Success","Error","Warning","Info","AutoClose","ComAcao","Card"];var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Operação realizada",
    description: "Sua solicitação foi enviada com sucesso.",
    variant: "success",
    persistent: true
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Erro na operação",
    description: "Não foi possível processar sua solicitação.",
    variant: "error",
    persistent: true
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Atenção",
    description: "Esta ação não poderá ser desfeita.",
    variant: "warning",
    persistent: true
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,E,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Informação",
    description: "Seu cadastro foi atualizado.",
    variant: "info",
    persistent: true
  }
}`,...(h=(E=r.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var C,y,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Fecha sozinho (5s)",
  /**
   * O toast fecha sozinho: nada aqui desmonta ele. O botão só remonta para
   * repetir a demonstração — antes desta correção a story ficava com o toast
   * no ar para sempre, porque o componente só armava o timer quando recebia
   * \`onClose\`, e a story não passava nenhum.
   */
  render: () => {
    const [rodada, setRodada] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center"
    }}>
        <Toast key={rodada} title="Solicitação enviada" description="Esta mensagem fecha sozinha em 5 segundos." variant="success" />
        <Button color="secondary" onClick={() => setRodada(n => n + 1)}>
          Mostrar de novo
        </Button>
      </div>;
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,k,z;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var T,w,F;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ToastCard title="Confirme o e-mail" description="Enviamos um código para validar o cadastro. Esta mensagem permanece até você fechar." variant="info" />
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};export{s as AutoClose,n as Card,t as ComAcao,o as Error,r as Info,e as Success,a as Warning,U as __namedExportsOrder,W as default};
