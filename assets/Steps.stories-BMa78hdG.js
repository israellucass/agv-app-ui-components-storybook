import{j as s}from"./jsx-runtime-BjG_zV1W.js";const T="_container_1gjqs_1",V="_mobileHeader_1gjqs_14",z="_progressbar_1gjqs_20",A="_progressBar_1gjqs_27",I="_steps_1gjqs_51",Q="_step_1gjqs_51",w="_stepCompleted_1gjqs_74",O="_stepPending_1gjqs_78",W="_mobileLabel_1gjqs_101",k="_mobileCounter_1gjqs_110",e={container:T,mobileHeader:V,progressbar:z,progressBar:A,steps:I,step:Q,stepCompleted:w,stepPending:O,mobileLabel:W,mobileCounter:k};function G({steps:m,currentStep:t,"data-testid":F}){var u;const o=m.length,R=((u=m[t])==null?void 0:u.label)??"",$=(()=>{if(o<=1)return"0%";const a=o<=5?10:5;return`${a+(100-a)*(t/(o-1))}%`})();return s.jsxs("div",{className:e.container,"data-testid":F,children:[s.jsxs("div",{className:e.mobileHeader,children:[s.jsx("span",{className:e.mobileLabel,children:R}),s.jsxs("span",{className:e.mobileCounter,children:["Passo ",t+1," de ",o]})]}),s.jsx("div",{className:e.steps,children:m.map((a,r)=>s.jsxs("span",{className:`${e.step} ${r<=t?e.stepCompleted:e.stepPending}`,"data-testid":a["data-testid"]||`step-${r}`,children:[r+1,". ",a.label]},r))}),s.jsx("div",{className:e.progressbar,children:s.jsx("div",{className:e.progressBar,style:{width:$}})})]})}const K={title:"Components/Steps",component:G,parameters:{layout:"padded"},tags:["autosteps"],argTypes:{currentStep:{control:{type:"range",min:0,max:5,step:1}}}},g=[{label:"Dados Pessoais"},{label:"Documentação"},{label:"Validação"},{label:"Revisão"}],n={args:{steps:g,currentStep:0}},l={args:{steps:g,currentStep:1}},c={args:{steps:g,currentStep:3}},p={args:{steps:[{label:"Primeiro"},{label:"Segundo"}],currentStep:0}},i={args:{steps:[{label:"Início"},{label:"Passo 2"},{label:"Passo 3"},{label:"Passo 4"},{label:"Fim"}],currentStep:2}},d={args:{steps:[{label:"Cadastro do Consumidor"},{label:"Análise Técnica"},{label:"Vistoria"},{label:"Proposta"},{label:"Homologação"}],currentStep:1}};var b,_,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 0
  }
}`,...(S=(_=n.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var j,P,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 1
  }
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var f,h,q;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentStep: 3
  }
}`,...(q=(h=c.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var x,N,L;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Primeiro"
    }, {
      label: "Segundo"
    }],
    currentStep: 0
  }
}`,...(L=(N=p.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var v,D,H;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(H=(D=i.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var y,B,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const M=["Default","StepEmProgresso","QuaseFinalizado","DoisSteps","CincoSteps","RotasLongas"];export{i as CincoSteps,n as Default,p as DoisSteps,c as QuaseFinalizado,d as RotasLongas,l as StepEmProgresso,M as __namedExportsOrder,K as default};
