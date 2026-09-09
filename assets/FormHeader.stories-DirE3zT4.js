import{j as o}from"./iframe-Bbh348EC.js";import{F as c}from"./FormHeader-DpyQA_tj.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-DUvY-LSD.js";const C={title:"Components/FormHeader",component:c,tags:["autodocs"],parameters:{layout:"padded",usage:{purpose:"Abertura de formulário do Super App: overline (“Cadastro”) + h1 + texto de apoio.",when:["Primeira tela de um fluxo (Identificação, e-mail, senha).","Título + subtítulo + um ou dois parágrafos."],whenNot:["O botão primário fica no FixedBottomAction, não no corpo.","Link no texto é exceção (“Não sou cliente”), não CTA.","Telas de Religação que ainda montam título com Typography solto: não migrar nesta leva."],how:["Use um h1 por tela; o subtítulo completa o título, não repete.","Limite o texto de apoio a um ou dois parágrafos curtos.","Mantenha a ação primária no FixedBottomAction, fora do header.","Reserve o link no corpo para exceções (“Não sou cliente”), não para o CTA principal.","Não use este componente para montar o título de telas que ainda usam Typography solto."],references:[{system:"GOV.UK",component:"Question pages",url:"https://design-system.service.gov.uk/patterns/question-pages/",why:"Um h1 por tela; texto de apoio curto; ação primária fora do lead."},{system:"USWDS",component:"Form",url:"https://designsystem.digital.gov/components/form/",why:"Título + ajuda antes dos campos; não misturar CTA no parágrafo."},{system:"Twilio Paste",component:"Help text",url:"https://paste.twilio.design/components/help-text",why:"Texto de apoio explica o campo/fluxo; não substitui o botão."},{system:"Shopify Polaris",component:"Form",url:"https://polaris.shopify.com/components/selection-and-input/form",why:"Abertura do formulário separada das ações de submit."}]}}},e={args:{title:"Cadastro",subtitle:"Informe o seu CPF",children:o.jsx("p",{children:"Se você já possui uma unidade consumidora, informe seu CPF/CNPJ e selecione o estado para localizarmos os dados em nosso sistema."})}},s={args:{title:"Cadastro",subtitle:"Informe o seu CPF",children:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Se você já possui uma unidade consumidora, informe seu CPF/CNPJ e selecione o estado para localizarmos os dados em nosso sistema."}),o.jsxs("p",{children:["Ainda não é cliente Equatorial?"," ",o.jsx("button",{type:"button",style:{background:"none",border:0,padding:0,color:"inherit",textDecoration:"underline",cursor:"pointer"},children:"Não sou cliente"})]})]})}},t={args:{subtitle:"Confirme seus dados"}},b=["Default","ComLinkNoCorpo","SomenteSubtitulo"];var a,r,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: "Cadastro",
    subtitle: "Informe o seu CPF",
    children: <p>
        Se você já possui uma unidade consumidora, informe seu CPF/CNPJ e selecione o estado
        para localizarmos os dados em nosso sistema.
      </p>
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Cadastro",
    subtitle: "Informe o seu CPF",
    children: <>
        <p>
          Se você já possui uma unidade consumidora, informe seu CPF/CNPJ e selecione o estado
          para localizarmos os dados em nosso sistema.
        </p>
        <p>
          Ainda não é cliente Equatorial?{" "}
          <button type="button" style={{
          background: "none",
          border: 0,
          padding: 0,
          color: "inherit",
          textDecoration: "underline",
          cursor: "pointer"
        }}>
            Não sou cliente
          </button>
        </p>
      </>
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    subtitle: "Confirme seus dados"
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{s as ComLinkNoCorpo,e as Default,t as SomenteSubtitulo,b as __namedExportsOrder,C as default};
