import{j as o}from"./iframe-BC7JAqda.js";import{B as r}from"./Button-DX4ky7rn.js";import"./preload-helper-C1FmrZbK.js";const ho=({className:e})=>o.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M19 12H5"}),o.jsx("path",{d:"m12 19-7-7 7-7"})]}),L=({className:e})=>o.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M5 12h14"}),o.jsx("path",{d:"m12 5 7 7-7 7"})]}),xo=({className:e})=>o.jsx("svg",{className:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",children:o.jsx("path",{d:"M12 5v14M5 12h14"})}),k=({className:e})=>o.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.jsx("path",{d:"m7 10 5 5 5-5"}),o.jsx("path",{d:"M12 15V3"})]}),po=({className:e})=>o.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("path",{d:"m21 21-4.3-4.3"})]}),Bo={title:"Components/Button",component:r,argTypes:{color:{control:"select",options:["primary","secondary","tertiary","link","link-gray"],description:"Hierarquia visual (DS Equatorial). `primary` = sólida da marca · `secondary` = borda + fundo claro · `tertiary` = sem fundo · `link` = texto na cor da marca (sublinha no hover) · `link-gray` = texto cinza (sublinha no hover)."},iconLeading:{control:!1,description:"Ícone exibido antes do texto. Aceita um componente FC<{className}> (recebe `data-icon` para estilização) ou um elemento ReactNode já pronto. Funciona em qualquer hierarquia."},iconTrailing:{control:!1,description:"Ícone exibido depois do texto (ex.: seta de navegação). Aceita FC<{className}> ou ReactNode. Funciona em qualquer hierarquia."},children:{control:!1,description:"Conteúdo do botão."},size:{control:"select",options:["xs","sm","md","lg","xl","compact","small","large"],description:"Tamanho. `md` (default) é o padrão. `compact`/`small`/`large` são aliases legados para `sm`/`lg`."},fullWidth:{control:"boolean",description:"Ocupa 100% da largura do container (comum em CTA mobile)."},noTextPadding:{control:"boolean",description:"Remove o padding horizontal interno do label (uso avançado)."},isLoading:{control:"boolean",description:"Mostra um spinner e desabilita o botão durante a operação."},isDisabled:{control:"boolean",description:"Desabilita o botão."},showTextWhileLoading:{control:"boolean",description:"Mantém o texto visível durante o carregamento (padrão: oculta)."},href:{control:"text",description:"Quando presente, o botão vira um `<a>` (híbrido link/botão, via React Aria `Link`)."}}},a=({children:e})=>o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center"},children:e}),go=["xs","sm","md","lg","xl"],yo=["primary","secondary","tertiary","link","link-gray"],n={name:"Sizes (xs → xl)",render:()=>o.jsx(a,{children:go.map(e=>o.jsx(r,{size:e,children:"Continuar"},e))})},i={args:{children:"Continuar"},parameters:{docs:{description:{story:"Primary — fundo sólido da marca (CTA principal). Cor da marca no hover e active; opacity-50 quando desabilitado."}}}},s={args:{children:"Copiar",color:"secondary"},parameters:{docs:{description:{story:"Secondary — borda + fundo claro, texto neutro escuro. Usado para ações de igual peso (ex.: 'Copiar', 'Pagar fatura')."}}}},t={args:{children:"Cancelar",color:"tertiary"},parameters:{docs:{description:{story:"Tertiary — sem fundo/borda (texto neutro), ganha um fill suave no hover. Ação de menor ênfase."}}}},c={name:"Link color",args:{children:"Esqueci minha senha",color:"link"},parameters:{docs:{description:{story:"Link color — texto na cor da marca, sem padding de botão. No hover sublinha e escurece a cor. O link de alerta (card de contas vencidas) é um 'link'."}}}},d={name:"Link gray",args:{children:"Trocar endereço de e-mail",color:"link-gray"},parameters:{docs:{description:{story:"Link gray — texto cinza, sem padding de botão. No hover sublinha e escurece. Uso secundário/destacado."}}}},l={name:"Todas as hierarquias",render:()=>o.jsx(a,{children:yo.map(e=>o.jsx(r,{color:e,children:e==="primary"?"Continuar":e==="secondary"?"Copiar":"Ação"},e))})},m={name:"Disabled (todas as hierarquias)",parameters:{docs:{description:{story:"`isDisabled` aplica opacity-50 / cursor-not-allowed de forma consistente em todas as hierarquias (sólida, borda, link)."}}},render:()=>o.jsxs(a,{children:[o.jsx(r,{isDisabled:!0,children:"Continuar"}),o.jsx(r,{isDisabled:!0,color:"secondary",children:"Copiar"}),o.jsx(r,{isDisabled:!0,color:"tertiary",children:"Cancelar"}),o.jsx(r,{isDisabled:!0,color:"link",children:"Esqueci minha senha"}),o.jsx(r,{isDisabled:!0,color:"link-gray",children:"Trocar e-mail"})]})},u={name:"Loading",parameters:{docs:{description:{story:"`isLoading` mostra um spinner, desabilita o botão e evita múltiplos envios. `showTextWhileLoading` mantém o texto visível."}}},render:()=>o.jsxs(a,{children:[o.jsx(r,{isLoading:!0,children:"Carregando"}),o.jsx(r,{isLoading:!0,color:"secondary",children:"Carregando"}),o.jsx(r,{isLoading:!0,showTextWhileLoading:!0,color:"secondary",children:"Enviando"})]})},p={name:"Icon leading",parameters:{docs:{description:{story:"`iconLeading` adiciona um ícone antes do texto, em qualquer hierarquia."}}},render:()=>o.jsxs(a,{children:[o.jsx(r,{iconLeading:xo,color:"primary",children:"Adicionar"}),o.jsx(r,{iconLeading:k,color:"secondary",children:"Baixar"}),o.jsx(r,{iconLeading:po,color:"tertiary",children:"Buscar"})]})},h={name:"Icon trailing",parameters:{docs:{description:{story:"`iconTrailing` adiciona um ícone depois do texto (ex.: seta de navegação)."}}},render:()=>o.jsxs(a,{children:[o.jsx(r,{iconTrailing:L,color:"primary",children:"Continuar"}),o.jsx(r,{iconTrailing:L,color:"secondary",children:"Ver mais"}),o.jsx(r,{iconTrailing:k,color:"tertiary",children:"Fatura"})]})},x={name:"Icon only",parameters:{docs:{description:{story:"Omita o texto e passe um ícone. Use `aria-label` para leitores de tela."}}},render:()=>o.jsxs(a,{children:[o.jsx(r,{iconLeading:po,color:"secondary","aria-label":"Buscar"}),o.jsx(r,{iconLeading:ho,color:"tertiary","aria-label":"Voltar"}),o.jsx(r,{iconLeading:k,color:"primary","aria-label":"Baixar"})]})},g={name:"Link buttons (híbrido)",parameters:{docs:{description:{story:"Passe `href` para transformar o botão num `<a>` (React Aria `Link`), mantendo a aparência e aceitando atributos de âncora. Use a hierarquia `link`/`link-gray` para links puros."}}},render:()=>o.jsxs(a,{children:[o.jsx(r,{href:"https://example.com",color:"primary",children:"Continuar"}),o.jsx(r,{href:"https://example.com",color:"secondary",children:"Ver detalhes"}),o.jsx(r,{href:"https://example.com",color:"link",children:"Esqueci minha senha"}),o.jsx(r,{href:"https://example.com",color:"link-gray",children:"Trocar e-mail"})]})},y={name:"Full width (CTA mobile)",args:{children:"Continuar",fullWidth:!0}},b={name:"Compact (alias sm)",args:{children:"Confirmar",size:"compact"}},Co=["Sizes","Primary","Secondary","Tertiary","LinkColor","LinkGray","AllHierarchies","Disabled","Loading","IconLeading","IconTrailing","IconOnly","LinkButtons","FullWidth","Compact"];var B,C,j;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Sizes (xs → xl)",
  render: () => <Row>
      {SIZES.map(size => <Button key={size} size={size}>
          Continuar
        </Button>)}
    </Row>
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var f,v,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Continuar"
  },
  parameters: {
    docs: {
      description: {
        story: "Primary — fundo sólido da marca (CTA principal). Cor da marca no hover e active; opacity-50 quando desabilitado."
      }
    }
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,T,I;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Copiar",
    color: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary — borda + fundo claro, texto neutro escuro. Usado para ações de igual peso (ex.: 'Copiar', 'Pagar fatura')."
      }
    }
  }
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var S,R,q;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Cancelar",
    color: "tertiary"
  },
  parameters: {
    docs: {
      description: {
        story: "Tertiary — sem fundo/borda (texto neutro), ganha um fill suave no hover. Ação de menor ênfase."
      }
    }
  }
}`,...(q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,D,W;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Link color",
  args: {
    children: "Esqueci minha senha",
    color: "link"
  },
  parameters: {
    docs: {
      description: {
        story: "Link color — texto na cor da marca, sem padding de botão. No hover sublinha e escurece a cor. O link de alerta (card de contas vencidas) é um 'link'."
      }
    }
  }
}`,...(W=(D=c.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var z,F,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Link gray",
  args: {
    children: "Trocar endereço de e-mail",
    color: "link-gray"
  },
  parameters: {
    docs: {
      description: {
        story: "Link gray — texto cinza, sem padding de botão. No hover sublinha e escurece. Uso secundário/destacado."
      }
    }
  }
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var H,M,N;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Todas as hierarquias",
  render: () => <Row>
      {HIERARCHIES.map(color => <Button key={color} color={color}>
          {color === "primary" ? "Continuar" : color === "secondary" ? "Copiar" : "Ação"}
        </Button>)}
    </Row>
}`,...(N=(M=l.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,U,V;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Disabled (todas as hierarquias)",
  parameters: {
    docs: {
      description: {
        story: "\`isDisabled\` aplica opacity-50 / cursor-not-allowed de forma consistente em todas as hierarquias (sólida, borda, link)."
      }
    }
  },
  render: () => <Row>
      <Button isDisabled>Continuar</Button>
      <Button isDisabled color="secondary">
        Copiar
      </Button>
      <Button isDisabled color="tertiary">
        Cancelar
      </Button>
      <Button isDisabled color="link">
        Esqueci minha senha
      </Button>
      <Button isDisabled color="link-gray">
        Trocar e-mail
      </Button>
    </Row>
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var G,Z,_;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Loading",
  parameters: {
    docs: {
      description: {
        story: "\`isLoading\` mostra um spinner, desabilita o botão e evita múltiplos envios. \`showTextWhileLoading\` mantém o texto visível."
      }
    }
  },
  render: () => <Row>
      <Button isLoading>Carregando</Button>
      <Button isLoading color="secondary">
        Carregando
      </Button>
      <Button isLoading showTextWhileLoading color="secondary">
        Enviando
      </Button>
    </Row>
}`,...(_=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var Q,J,K;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Icon leading",
  parameters: {
    docs: {
      description: {
        story: "\`iconLeading\` adiciona um ícone antes do texto, em qualquer hierarquia."
      }
    }
  },
  render: () => <Row>
      <Button iconLeading={PlusIcon} color="primary">
        Adicionar
      </Button>
      <Button iconLeading={DownloadIcon} color="secondary">
        Baixar
      </Button>
      <Button iconLeading={SearchIcon} color="tertiary">
        Buscar
      </Button>
    </Row>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Icon trailing",
  parameters: {
    docs: {
      description: {
        story: "\`iconTrailing\` adiciona um ícone depois do texto (ex.: seta de navegação)."
      }
    }
  },
  render: () => <Row>
      <Button iconTrailing={ArrowRightIcon} color="primary">
        Continuar
      </Button>
      <Button iconTrailing={ArrowRightIcon} color="secondary">
        Ver mais
      </Button>
      <Button iconTrailing={DownloadIcon} color="tertiary">
        Fatura
      </Button>
    </Row>
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var oo,ro,eo;x.parameters={...x.parameters,docs:{...(oo=x.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  name: "Icon only",
  parameters: {
    docs: {
      description: {
        story: "Omita o texto e passe um ícone. Use \`aria-label\` para leitores de tela."
      }
    }
  },
  render: () => <Row>
      <Button iconLeading={SearchIcon} color="secondary" aria-label="Buscar" />
      <Button iconLeading={ArrowLeftIcon} color="tertiary" aria-label="Voltar" />
      <Button iconLeading={DownloadIcon} color="primary" aria-label="Baixar" />
    </Row>
}`,...(eo=(ro=x.parameters)==null?void 0:ro.docs)==null?void 0:eo.source}}};var ao,no,io;g.parameters={...g.parameters,docs:{...(ao=g.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  name: "Link buttons (híbrido)",
  parameters: {
    docs: {
      description: {
        story: "Passe \`href\` para transformar o botão num \`<a>\` (React Aria \`Link\`), mantendo a aparência e aceitando atributos de âncora. Use a hierarquia \`link\`/\`link-gray\` para links puros."
      }
    }
  },
  render: () => <Row>
      <Button href="https://example.com" color="primary">
        Continuar
      </Button>
      <Button href="https://example.com" color="secondary">
        Ver detalhes
      </Button>
      <Button href="https://example.com" color="link">
        Esqueci minha senha
      </Button>
      <Button href="https://example.com" color="link-gray">
        Trocar e-mail
      </Button>
    </Row>
}`,...(io=(no=g.parameters)==null?void 0:no.docs)==null?void 0:io.source}}};var so,to,co;y.parameters={...y.parameters,docs:{...(so=y.parameters)==null?void 0:so.docs,source:{originalSource:`{
  name: "Full width (CTA mobile)",
  args: {
    children: "Continuar",
    fullWidth: true
  }
}`,...(co=(to=y.parameters)==null?void 0:to.docs)==null?void 0:co.source}}};var lo,mo,uo;b.parameters={...b.parameters,docs:{...(lo=b.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  name: "Compact (alias sm)",
  args: {
    children: "Confirmar",
    size: "compact"
  }
}`,...(uo=(mo=b.parameters)==null?void 0:mo.docs)==null?void 0:uo.source}}};export{l as AllHierarchies,b as Compact,m as Disabled,y as FullWidth,p as IconLeading,x as IconOnly,h as IconTrailing,g as LinkButtons,c as LinkColor,d as LinkGray,u as Loading,i as Primary,s as Secondary,n as Sizes,t as Tertiary,Co as __namedExportsOrder,Bo as default};
