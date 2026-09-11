import{j as e}from"./iframe-Bq76-nc5.js";import{F as r}from"./FixedBottomAction-DFodZXKz.js";import{B as o}from"./Button-DWjlDg70.js";import"./preload-helper-C1FmrZbK.js";import"./useHideShadowAtScrollEnd-DvPuI_eN.js";import"./Grid-EKVyzfVW.js";const V={title:"Components/FixedBottomAction",component:r,tags:["autodocs"],parameters:{usage:{purpose:"Barra de ação do fluxo no rodapé (mobile). Reserva espaço para o conteúdo não ficar atrás dos botões. A sombra some no fim do scroll.",when:["1 ação primária (Continuar) ou primária + textual (Voltar).","Telas de formulário do Super App."],whenNot:["Não é bottom sheet: sem gesto, sem overlay, sem lista extra.","Não empilhe 3+ ações — quebre o fluxo."],how:["Use uma ação primária (Continuar); a secundária é textual (Voltar), nunca outro primary.","Reserve o espaço da barra para o conteúdo não ficar escondido atrás dela.","Mantenha os botões sempre visíveis e acessíveis durante o scroll.","Não use gesto de arrastar nem overlay — isso é bottom sheet, outro componente.","Acima de duas ações, reorganize o fluxo em vez de empilhar botões."],references:[{system:"Microsoft Fluent 2",component:"Toolbar",url:"https://fluent2.microsoft.design/components/web/react/toolbar/usage",why:"Barra de ações do fluxo, 1–2 comandos, não um painel extra."},{system:"Material 3",component:"Bottom sheets",url:"https://m3.material.io/components/bottom-sheets",why:"Contraste: sheet arrasta e tem overlay; FixedBottomAction não."},{system:"GOV.UK",component:"Button",url:"https://design-system.service.gov.uk/components/button/",why:"Uma primária; a segunda é textual (Voltar), não outro primary."},{system:"IBM Carbon",component:"Button",url:"https://carbondesignsystem.com/components/button/usage/",why:"Hierarquia de ações no rodapé do formulário."}]}}},t={render:()=>e.jsx(r,{children:e.jsx(o,{children:"Continuar"})})},n={name:"Mobile — fixo no rodapé",parameters:{viewport:{defaultViewport:"mobile1"},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{minHeight:"100dvh",padding:"1.5rem"},children:[e.jsx("p",{children:"Conteúdo da página acima da barra fixa."}),e.jsxs(r,{children:[e.jsx(o,{children:"Continuar"}),e.jsx(o,{children:"Voltar",color:"link"})]})]})},a={name:"Duas ações",render:()=>e.jsxs(r,{children:[e.jsx(o,{children:"Continuar",fullWidth:!0}),e.jsx(o,{children:"Voltar pra Home",color:"link",fullWidth:!0})]})},s={name:"Conteúdo longo — sombra some no fim",parameters:{viewport:{defaultViewport:"mobile"},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{padding:"1.5rem 1.5rem 0"},children:[Array.from({length:24},(B,i)=>e.jsxs("p",{children:["Linha ",i+1," do conteúdo acima da barra."]},i)),e.jsx(r,{children:e.jsx(o,{children:"Continuar",fullWidth:!0})})]})},M=["Default","MobileFixed","DuasAcoes","ConteudoLongo"];var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <FixedBottomAction>
      <Button children="Continuar" />
    </FixedBottomAction>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Mobile — fixo no rodapé",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    minHeight: "100dvh",
    padding: "1.5rem"
  }}>
      <p>Conteúdo da página acima da barra fixa.</p>
      <FixedBottomAction>
        <Button children="Continuar" />
        <Button children="Voltar" color="link" />
      </FixedBottomAction>
    </div>
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Duas ações",
  render: () => <FixedBottomAction>
      <Button children="Continuar" fullWidth />
      <Button children="Voltar pra Home" color="link" fullWidth />
    </FixedBottomAction>
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Conteúdo longo — sombra some no fim",
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    },
    layout: "fullscreen"
  },
  render: () => <div style={{
    padding: "1.5rem 1.5rem 0"
  }}>
      {Array.from({
      length: 24
    }, (_, index) => <p key={index}>Linha {index + 1} do conteúdo acima da barra.</p>)}
      <FixedBottomAction>
        <Button children="Continuar" fullWidth />
      </FixedBottomAction>
    </div>
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};export{s as ConteudoLongo,t as Default,a as DuasAcoes,n as MobileFixed,M as __namedExportsOrder,V as default};
