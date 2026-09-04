import{S as R}from"./Steps-ur6qaeMe.js";import"./jsx-runtime-BjG_zV1W.js";const z={title:"Components/Steps",component:R,parameters:{layout:"padded"},tags:["autosteps"],argTypes:{currentStep:{control:{type:"range",min:0,max:5,step:1}}}},n=[{label:"Dados Pessoais"},{label:"Documentação"},{label:"Validação"},{label:"Revisão"}],e={args:{steps:n,currentStep:0}},s={args:{steps:n,currentStep:1}},a={args:{steps:n,currentStep:3}},r={args:{steps:[{label:"Primeiro"},{label:"Segundo"}],currentStep:0}},o={args:{steps:[{label:"Início"},{label:"Passo 2"},{label:"Passo 3"},{label:"Passo 4"},{label:"Fim"}],currentStep:2}},t={args:{steps:[{label:"Cadastro do Consumidor"},{label:"Análise Técnica"},{label:"Vistoria"},{label:"Proposta"},{label:"Homologação"}],currentStep:1}};var l,p,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 0
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,i,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 1
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,S,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 3
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,P,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Primeiro"
    }, {
      label: "Segundo"
    }],
    currentStep: 0
  }
}`,...(f=(P=r.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var C,D,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var x,y,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const A=["Default","StepEmProgresso","QuaseFinalizado","DoisSteps","CincoSteps","RotasLongas"];export{o as CincoSteps,e as Default,r as DoisSteps,a as QuaseFinalizado,t as RotasLongas,s as StepEmProgresso,A as __namedExportsOrder,z as default};
