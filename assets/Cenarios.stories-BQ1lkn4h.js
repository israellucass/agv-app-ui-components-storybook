import{L as ue}from"./Login-BEHNA_th.js";import"./iframe-OieEdo9G.js";import"./preload-helper-C1FmrZbK.js";import"./data-BMGy2SwX.js";import"./chrome-aonV9Fk_.js";import"./useHideShadowAtScrollEnd-DrUAA1ch.js";import"./Menu-CP9cZUfn.js";import"./logo-4d3YAuGj.js";import"./Button-BZ_R4YZM.js";import"./Typography-A_HYg4Re.js";import"./Steps-EgjY1Ton.js";import"./FormHeader-CAYvTuwu.js";import"./Toast-kyLDjzJi.js";import"./CardFeedbackIcons-DwSZAG6-.js";import"./Checkbox-D187CKeQ.js";import"./Check-DWFbHS9Z.js";import"./Input-BY1dQ4Rg.js";import"./input-hint-Df5FGfdI.js";import"./warning-BDZVGyA5.js";import"./Tooltip-DyCA4ISA.js";import"./InputMask-BW75uZs9.js";import"./Divider-vbGfrMsf.js";import"./InputSelect-Cze2IIgG.js";import"./Breadcrumb-CLxjlaZi.js";import"./Breadcrumb.module-DW62jzuC.js";import"./CardFeedback-D5VFNEJa.js";const Ve={title:"Pages/Super App/Login/Cenários",component:ue,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile"},docs:{description:{component:`Uma story por jornada real do cliente.

Cenário aqui é o estado do cliente ao entrar, não o erro e não o histórico:
erro é regra dentro do cenário, e ter cadastrado antes ou ter feito logout
também não cria jornada própria. Cada story abre no ponto de partida daquela
jornada e o caminho completo aparece no painel de docs.

Fonte: \`Documentos/Cenarios-Login.md\` (14 jornadas) e \`04- Login.docx\`
(US01–US12 + CA01–CA48 + RN01–RN14).

As stories são literais, não vêm de uma função: o indexador do Storybook faz
análise estática e só enxerga o \`name\` declarado inline.`}}}},e={name:"1-ContaComVinculo",args:{initialStep:"welcome",vinculoInicial:"automatico"},parameters:{docs:{description:{story:`O usuário já tem conta e já tem uma ou mais unidades ligadas a ela. Ele entra com e-mail e senha e o vínculo acontece sozinho. Se tiver mais de uma unidade, escolhe com qual quer entrar; se tiver só uma, vai direto para a home dela.

Fonte: CA32.`}}}},i={name:"2-ContaSemVinculo",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`O usuário tem conta, mas nenhuma unidade ligada. O app pede o CPF ou CNPJ do titular e o estado, e o e-mail da conta precisa ser o mesmo do cadastro. Sendo, ele informa quantas unidades tem: com mais de uma, escolhe qual abrir; com uma só, vai direto para a home.

Fonte: CA33, CA34, CA43.`}}}},t={name:"3-EmailDivergente",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`O usuário tem conta, não tem unidade ligada e o e-mail da conta é diferente do que está no cadastro. Antes de vincular qualquer coisa, o app pede uma prova de identidade: documento com foto e selfie. Aprovada, o e-mail é atualizado e as unidades entram na conta.
Se o reconhecimento falhar, se o CPF não bater ou se ele preferir continuar depois, o app o leva aos Serviços Simplificados.

Na demo, informe um CPF/CNPJ contendo 999 para o e-mail divergir.

Fonte: CA35 a CA38.`}}}},s={name:"4-NaoSeIdentifica",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`O usuário tem conta, não tem unidade ligada e não informa o CPF/CNPJ, ou informa um estado onde não tem unidade nenhuma. Em vez de travar, o app o leva para os Serviços Simplificados, que funcionam sem unidade vinculada.

Fonte: CA39, CA46, RN04.`}}}},a={name:"5-SemContaEmailExistente",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`É o primeiro acesso de quem já é cliente. Ele informa CPF/CNPJ e estado, o app encontra o cadastro dele e mostra o e-mail que já existe, mascarado. Usando esse e-mail, ele confirma por código o e-mail e o celular, cria a senha, aceita os termos e volta ao login para vincular as unidades.

Fonte: CA01, CA02, CA03, CA05, CA07, CA08, CA09, CA10.`}}}},m={name:"6-SemContaAlteraEmail",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`Parecido com o anterior, mas aqui o usuário prefere outro e-mail. O app avisa que a identidade dele será conferida no próximo login e o cadastro segue normalmente até a volta ao login.

Fonte: CA04, US02.`}}}},d={name:"7-NaoECliente",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`O app não encontra cadastro de unidade para o CPF/CNPJ informado. Mesmo assim o usuário cria a conta: informa um e-mail próprio, confirma e-mail e celular por código, cria a senha e aceita os termos.

Fonte: US02, CA01.`}}}},c={name:"8-CadastroRedeSocial",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`Em vez de CPF e senha, o usuário cria a conta com Google, Facebook ou Apple. Ele autentica na rede, aceita os termos e a conta fica pronta. Se o e-mail da rede for diferente do e-mail do CPF dele, o app pede a verificação de identidade no login, como no cenário 3.

Fonte: US02 + Figma (divergência D5). Sem CA próprio: os critérios da US02 vão de CA01 a CA10 e nenhum cita rede social. O CA12 do épico é o login por rede social, não o cadastro.`}}}},o={name:"9-NaoETitular",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`O usuário entra sem vínculo e informa o CPF/CNPJ, mas quem responde pela unidade é outra pessoa. O próprio app oferece os Serviços Simplificados, que ele pode usar sem unidade vinculada.

Fonte: US10, CA39.`}}}},p={name:"10-SemUnidadesNoEstado",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`O CPF/CNPJ tem unidades, mas não no estado que ele informou. Sem unidade para vincular ali, o app o encaminha aos Serviços Simplificados.

Fonte: CA39, RN04.
Pendência: no código este caminho é o mesmo do cenário 9 (mesmo botão). A distinção depende da consulta de unidades, ainda não implementada.`}}}},n={name:"11-BiometriaAtiva",args:{initialStep:"welcome",biometriaAtivaInicial:!0},parameters:{docs:{description:{story:`O usuário já ativou a biometria. Ele abre o app, valida a digital ou o rosto e entra sem digitar senha. Se a leitura falhar ou ele cancelar, o app oferece o caminho de e-mail e senha.

Fonte: CA27, CA28.`}}}},u={name:"12-SemBiometria",args:{initialStep:"consentimento",aparelhoComBiometria:!1,vinculoInicial:"automatico"},parameters:{docs:{description:{story:`O aparelho não tem biometria configurada. Toque em Aceitar tudo e repare: a oferta de biometria não aparece, a jornada segue direto para o vínculo das unidades. A oferta só é feita quando o aparelho tem biometria configurada (CA24).
O caminho com a oferta está na story \`OfertaBiometria\`.

Fonte: CA24.`}}}},r={name:"13-Consentimento",args:{initialStep:"welcome"},parameters:{docs:{description:{story:`No primeiro acesso, o app pergunta com quais empresas do grupo o usuário autoriza compartilhar os dados dele. Ele pode aceitar tudo, escolher empresa por empresa ou não autorizar nenhuma. Precisa responder, mesmo que a resposta seja não autorizar ninguém. A escolha não bloqueia o uso do app e pode ser revista depois em Meus consentimentos.

Fonte: CA15 a CA19, RN13.`}}}},l={name:"14-ServicoBloqueado",args:{initialStep:"home"},parameters:{docs:{description:{story:`Na home, um serviço de empresa que ele não autorizou aparece com o selo Liberar. Ao tocar, o app mostra quais órgãos e dados aquela empresa acessa e pede a autorização. Autorizando, o serviço libera na hora. Se voltar sem autorizar, ele continua bloqueado.

Fonte: CA20, CA21, CA22, RN14.`}}}},Ge=["Cenario01ContaComVinculo","Cenario02ContaSemVinculo","Cenario03EmailDivergente","Cenario04NaoSeIdentifica","Cenario05SemContaEmailExistente","Cenario06SemContaAlteraEmail","Cenario07NaoECliente","Cenario08CadastroRedeSocial","Cenario09NaoETitular","Cenario10SemUnidadesNoEstado","Cenario11BiometriaAtiva","Cenario12SemBiometria","Cenario13Consentimento","Cenario14ServicoBloqueado"];var C,E,S,x,g;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "1-ContaComVinculo",
  args: {
    initialStep: "welcome",
    vinculoInicial: "automatico"
  },
  parameters: {
    docs: {
      description: {
        story: "O usuário já tem conta e já tem uma ou mais unidades ligadas a ela. Ele entra com e-mail e senha e o vínculo acontece sozinho. Se tiver mais de uma unidade, escolhe com qual quer entrar; se tiver só uma, vai direto para a home dela.\\n\\nFonte: CA32."
      }
    }
  }
}`,...(S=(E=e.parameters)==null?void 0:E.docs)==null?void 0:S.source},description:{story:"Grupo 1 · Já tem conta (faz login)",...(g=(x=e.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var A,v,f;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "2-ContaSemVinculo",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "O usuário tem conta, mas nenhuma unidade ligada. O app pede o CPF ou CNPJ do titular e o estado, e o e-mail da conta precisa ser o mesmo do cadastro. Sendo, ele informa quantas unidades tem: com mais de uma, escolhe qual abrir; com uma só, vai direto para a home.\\n\\nFonte: CA33, CA34, CA43."
      }
    }
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var F,h,q;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "3-EmailDivergente",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "O usuário tem conta, não tem unidade ligada e o e-mail da conta é diferente do que está no cadastro. Antes de vincular qualquer coisa, o app pede uma prova de identidade: documento com foto e selfie. Aprovada, o e-mail é atualizado e as unidades entram na conta.\\nSe o reconhecimento falhar, se o CPF não bater ou se ele preferir continuar depois, o app o leva aos Serviços Simplificados.\\n\\nNa demo, informe um CPF/CNPJ contendo 999 para o e-mail divergir.\\n\\nFonte: CA35 a CA38."
      }
    }
  }
}`,...(q=(h=t.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var N,P,y;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "4-NaoSeIdentifica",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "O usuário tem conta, não tem unidade ligada e não informa o CPF/CNPJ, ou informa um estado onde não tem unidade nenhuma. Em vez de travar, o app o leva para os Serviços Simplificados, que funcionam sem unidade vinculada.\\n\\nFonte: CA39, CA46, RN04."
      }
    }
  }
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var b,O,w,z,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "5-SemContaEmailExistente",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "É o primeiro acesso de quem já é cliente. Ele informa CPF/CNPJ e estado, o app encontra o cadastro dele e mostra o e-mail que já existe, mascarado. Usando esse e-mail, ele confirma por código o e-mail e o celular, cria a senha, aceita os termos e volta ao login para vincular as unidades.\\n\\nFonte: CA01, CA02, CA03, CA05, CA07, CA08, CA09, CA10."
      }
    }
  }
}`,...(w=(O=a.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:"Grupo 2 · Não tem conta (primeiro acesso)",...(B=(z=a.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};var U,j,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "6-SemContaAlteraEmail",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "Parecido com o anterior, mas aqui o usuário prefere outro e-mail. O app avisa que a identidade dele será conferida no próximo login e o cadastro segue normalmente até a volta ao login.\\n\\nFonte: CA04, US02."
      }
    }
  }
}`,...(J=(j=m.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var R,D,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "7-NaoECliente",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "O app não encontra cadastro de unidade para o CPF/CNPJ informado. Mesmo assim o usuário cria a conta: informa um e-mail próprio, confirma e-mail e celular por código, cria a senha e aceita os termos.\\n\\nFonte: US02, CA01."
      }
    }
  }
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,G,L;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "8-CadastroRedeSocial",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "Em vez de CPF e senha, o usuário cria a conta com Google, Facebook ou Apple. Ele autentica na rede, aceita os termos e a conta fica pronta. Se o e-mail da rede for diferente do e-mail do CPF dele, o app pede a verificação de identidade no login, como no cenário 3.\\n\\nFonte: US02 + Figma (divergência D5). Sem CA próprio: os critérios da US02 vão de CA01 a CA10 e nenhum cita rede social. O CA12 do épico é o login por rede social, não o cadastro."
      }
    }
  }
}`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var T,M,k,_,H;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "9-NaoETitular",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "O usuário entra sem vínculo e informa o CPF/CNPJ, mas quem responde pela unidade é outra pessoa. O próprio app oferece os Serviços Simplificados, que ele pode usar sem unidade vinculada.\\n\\nFonte: US10, CA39."
      }
    }
  }
}`,...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.source},description:{story:"Grupo 3 · Não vai se identificar",...(H=(_=o.parameters)==null?void 0:_.docs)==null?void 0:H.description}}};var K,Q,W;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "10-SemUnidadesNoEstado",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "O CPF/CNPJ tem unidades, mas não no estado que ele informou. Sem unidade para vincular ali, o app o encaminha aos Serviços Simplificados.\\n\\nFonte: CA39, RN04.\\nPendência: no código este caminho é o mesmo do cenário 9 (mesmo botão). A distinção depende da consulta de unidades, ainda não implementada."
      }
    }
  }
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z,$,ee;n.parameters={...n.parameters,docs:{...(X=n.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "11-BiometriaAtiva",
  args: {
    initialStep: "welcome",
    biometriaAtivaInicial: true
  },
  parameters: {
    docs: {
      description: {
        story: "O usuário já ativou a biometria. Ele abre o app, valida a digital ou o rosto e entra sem digitar senha. Se a leitura falhar ou ele cancelar, o app oferece o caminho de e-mail e senha.\\n\\nFonte: CA27, CA28."
      }
    }
  }
}`,...(Z=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Grupo 4 · Acessos seguintes",...(ee=($=n.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,oe,ne;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "12-SemBiometria",
  args: {
    initialStep: "consentimento",
    aparelhoComBiometria: false,
    vinculoInicial: "automatico"
  },
  parameters: {
    docs: {
      description: {
        story: "O aparelho não tem biometria configurada. Toque em Aceitar tudo e repare: a oferta de biometria não aparece, a jornada segue direto para o vínculo das unidades. A oferta só é feita quando o aparelho tem biometria configurada (CA24).\\nO caminho com a oferta está na story \`OfertaBiometria\`.\\n\\nFonte: CA24."
      }
    }
  }
}`,...(ne=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,ie,te,se,me;r.parameters={...r.parameters,docs:{...(re=r.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "13-Consentimento",
  args: {
    initialStep: "welcome"
  },
  parameters: {
    docs: {
      description: {
        story: "No primeiro acesso, o app pergunta com quais empresas do grupo o usuário autoriza compartilhar os dados dele. Ele pode aceitar tudo, escolher empresa por empresa ou não autorizar nenhuma. Precisa responder, mesmo que a resposta seja não autorizar ninguém. A escolha não bloqueia o uso do app e pode ser revista depois em Meus consentimentos.\\n\\nFonte: CA15 a CA19, RN13."
      }
    }
  }
}`,...(te=(ie=r.parameters)==null?void 0:ie.docs)==null?void 0:te.source},description:{story:"Grupo 5 · Consentimento e serviços bloqueados",...(me=(se=r.parameters)==null?void 0:se.docs)==null?void 0:me.description}}};var de,ce,pe;l.parameters={...l.parameters,docs:{...(de=l.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "14-ServicoBloqueado",
  args: {
    initialStep: "home"
  },
  parameters: {
    docs: {
      description: {
        story: "Na home, um serviço de empresa que ele não autorizou aparece com o selo Liberar. Ao tocar, o app mostra quais órgãos e dados aquela empresa acessa e pede a autorização. Autorizando, o serviço libera na hora. Se voltar sem autorizar, ele continua bloqueado.\\n\\nFonte: CA20, CA21, CA22, RN14."
      }
    }
  }
}`,...(pe=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};export{e as Cenario01ContaComVinculo,i as Cenario02ContaSemVinculo,t as Cenario03EmailDivergente,s as Cenario04NaoSeIdentifica,a as Cenario05SemContaEmailExistente,m as Cenario06SemContaAlteraEmail,d as Cenario07NaoECliente,c as Cenario08CadastroRedeSocial,o as Cenario09NaoETitular,p as Cenario10SemUnidadesNoEstado,n as Cenario11BiometriaAtiva,u as Cenario12SemBiometria,r as Cenario13Consentimento,l as Cenario14ServicoBloqueado,Ge as __namedExportsOrder,Ve as default};
