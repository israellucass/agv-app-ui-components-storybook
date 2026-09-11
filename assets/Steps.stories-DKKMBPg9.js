import{S as E}from"./Steps-AjjMWHaW.js";import"./iframe-rZQACVej.js";import"./preload-helper-C1FmrZbK.js";const F={title:"Components/Steps",component:E,parameters:{layout:"padded",usage:{purpose:"Progresso de um fluxo linear (cadastro, religação). Mostra onde a pessoa está; não é navegação.",when:["Sequência fixa de 2 a 5 passos (Identificação → Contato → Dados).","No mobile, só o passo atual + “Passo X de Y”."],whenNot:["Não transforme o passo em botão de voltar — use Breadcrumb ou o botão textual no FixedBottomAction.","Não use para abas ou filtros (Tabs).","Breadcrumb é histórico de páginas, não progresso de formulário."],how:["Mostre o fluxo completo em telas largas; no mobile, simplifique para “Passo X de Y”.","Destaque o passo atual; marque os concluídos; não deixe os futuros parecerem clicáveis.","Limite a 2–5 passos; se passar disso, agrupe ou quebre o fluxo.","Use como indicador de progresso, não como controle de navegação livre.","Rotule o passo com o que a pessoa está fazendo agora, não com o nome da tela de onde veio."],references:[{system:"USWDS",component:"Step indicator",url:"https://designsystem.digital.gov/components/step-indicator/",why:"Fluxo linear; passo atual vs. demais; no mobile, “Passo X de Y”."},{system:"IBM Carbon",component:"Progress indicator",url:"https://carbondesignsystem.com/components/progress-indicator/usage/",why:"Atual / concluído / futuro; não é navegação se o fluxo for obrigatório e linear."},{system:"Material 3",component:"Progress indicators",url:"https://m3.material.io/components/progress-indicators",why:"Indicador de progresso, não controle clicável."},{system:"GOV.UK",component:"Breadcrumbs",url:"https://design-system.service.gov.uk/components/breadcrumbs/",why:"Breadcrumb é histórico de páginas — não usar Steps no lugar."}]}},tags:["autodocs"],argTypes:{currentStep:{control:{type:"range",min:0,max:5,step:1}}}},n=[{label:"Dados Pessoais"},{label:"Documentação"},{label:"Validação"},{label:"Revisão"}],e={name:"Primeiro passo",args:{steps:n,currentStep:0}},s={args:{steps:n,currentStep:1}},o={args:{steps:n,currentStep:3}},a={args:{steps:[{label:"Primeiro"},{label:"Segundo"}],currentStep:0}},r={args:{steps:[{label:"Início"},{label:"Passo 2"},{label:"Passo 3"},{label:"Passo 4"},{label:"Fim"}],currentStep:2}},t={args:{steps:[{label:"Cadastro do Consumidor"},{label:"Análise Técnica"},{label:"Vistoria"},{label:"Proposta"},{label:"Homologação"}],currentStep:1}},I=["Default","StepEmProgresso","QuaseFinalizado","DoisSteps","CincoSteps","RotasLongas"];var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Primeiro passo",
  args: {
    steps: defaultSteps,
    currentStep: 0
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,m,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 1
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 3
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Primeiro"
    }, {
      label: "Segundo"
    }],
    currentStep: 0
  }
}`,...(P=(f=a.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var x,y,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Início"
    }, {
      label: "Passo 2"
    }, {
      label: "Passo 3"
    }, {
      label: "Passo 4"
    }, {
      label: "Fim"
    }],
    currentStep: 2
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,D,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Cadastro do Consumidor"
    }, {
      label: "Análise Técnica"
    }, {
      label: "Vistoria"
    }, {
      label: "Proposta"
    }, {
      label: "Homologação"
    }],
    currentStep: 1
  }
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};export{r as CincoSteps,e as Default,a as DoisSteps,o as QuaseFinalizado,t as RotasLongas,s as StepEmProgresso,I as __namedExportsOrder,F as default};
