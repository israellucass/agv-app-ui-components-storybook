import{j as c}from"./iframe-OieEdo9G.js";import{B as V}from"./BarChart-KuAx5Kju.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-A_HYg4Re.js";const B={title:"Components/BarChart",component:V},n=["Out 25","Nov 25","Dez 25","Jan 26","Fev 26","Mar 26","Abr 26","Mai 26","Jun 26"],m=[{consumo:370,faturamento:370},{consumo:410,faturamento:410},{consumo:440,faturamento:440},{consumo:410,faturamento:410},{consumo:370,faturamento:370},{consumo:490,faturamento:490},{consumo:510,faturamento:510},{consumo:530,faturamento:530},{consumo:500,faturamento:500}],e={consumo:{label:"Consumo",color:"#3B6DEF"},faturamento:{label:"Faturamento",color:"#F28C2E"}},a={args:{labels:n,items:m,series:e,maxValue:600,yAxisLabel:"Kw/h"}},s={args:{title:"Histórico de consumo e faturamento",labels:n.slice(0,3),items:m.slice(0,3),series:e,maxValue:600,yAxisLabel:"Kw/h"}},o={args:{labels:n.slice(0,3),items:m.slice(0,3),series:e,maxValue:600,yAxisLabel:"Kw/h"}},L=["Jun 25","Jul 25","Ago 25","Set 25","Out 25","Nov 25","Dez 25","Jan 26","Fev 26","Mar 26","Abr 26","Mai 26","Jun 26"],K=L.map((l,i)=>({consumo:320+i%5*40,faturamento:320+i%5*40})),t={name:"Muitos meses (mais que o Figma de 9) — gap encolhe / rola",args:{labels:L,items:K,series:e,maxValue:600,yAxisLabel:"Kw/h"},decorators:[l=>c.jsx("div",{style:{width:342},children:c.jsx(l,{})})]},r={args:{title:"Histórico de consumo e faturamento",labels:n.slice(0,3),items:m.slice(0,3),series:e,maxValue:600,showSecondaryYAxis:!0}},E=["Default","WithTitle","FewMonths","ManyMonths","WithSecondaryAxis"];var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labels,
    items: sampleData,
    series,
    maxValue: 600,
    yAxisLabel: "Kw/h"
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,x,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Histórico de consumo e faturamento",
    labels: labels.slice(0, 3),
    items: sampleData.slice(0, 3),
    series,
    maxValue: 600,
    yAxisLabel: "Kw/h"
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,f,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    labels: labels.slice(0, 3),
    items: sampleData.slice(0, 3),
    series,
    maxValue: 600,
    yAxisLabel: "Kw/h"
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var M,A,w;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Muitos meses (mais que o Figma de 9) — gap encolhe / rola",
  args: {
    labels: manyMonthsLabels,
    items: manyMonthsData,
    series,
    maxValue: 600,
    yAxisLabel: "Kw/h"
  },
  decorators: [Story => <div style={{
    width: 342
  }}>
        <Story />
      </div>]
}`,...(w=(A=t.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var D,S,F;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Histórico de consumo e faturamento",
    labels: labels.slice(0, 3),
    items: sampleData.slice(0, 3),
    series,
    maxValue: 600,
    showSecondaryYAxis: true
  }
}`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};export{a as Default,o as FewMonths,t as ManyMonths,r as WithSecondaryAxis,s as WithTitle,E as __namedExportsOrder,B as default};
