import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D,M as o}from"./Menu-DkmAIzuk.js";import{l as _}from"./logo-4d3YAuGj.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";import"./index-Tcpqm9on.js";const T=[{text:"Serviços de energia",children:[{text:"Informar falta de luz",destination:"/falta-luz"},{text:"Ligação nova",destination:"/ligacao-nova"}]},{text:"Contas e consumo",children:[{text:"Fatura",destination:"/fatura"},{text:"Consumo",destination:"/consumo"}]},{text:"Consultas",children:[{text:"Segunda via",destination:"/segunda-via"}]},{text:"Fale com a gente",children:[{text:"Ouvidoria",destination:"/ouvidoria"}]},{text:"Site Antigo",destination:"/legacy"}],{userEvent:N,within:P}=__STORYBOOK_MODULE_TEST__,a=T,s=()=>e.jsx("img",{src:_,alt:"Equatorial Energia"}),G={title:"Components/Menu",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{story:{inline:!0}}},argTypes:{homeHref:{control:"text"},showSearch:{control:"boolean"},notificationBadge:{control:"boolean"},isLoggedIn:{control:"boolean"},userDisplayName:{control:"text"}}},t={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:120},children:e.jsx(o,{...n,logo:e.jsx(s,{}),menuItems:a,showSearch:n.showSearch??!0,onSearchClick:()=>window.alert("Pesquisar")})}),args:{homeHref:D,showSearch:!0,isLoggedIn:!1}},r={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:120},children:e.jsx(o,{...n,logo:e.jsx(s,{}),menuItems:a,showSearch:n.showSearch??!0,onSearchClick:()=>window.alert("Pesquisar")})}),args:{homeHref:D,showSearch:!0,isLoggedIn:!0,userDisplayName:"Matheus"}},i={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:120},children:e.jsx(o,{...n,logo:e.jsx(s,{}),menuItems:a,showSearch:!0,onSearchClick:()=>{}})}),globals:{viewport:{value:"mobile1",isRotated:!1}}},d={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:640},children:e.jsx(o,{...n,logo:e.jsx(s,{}),menuItems:[{...a[0],children:[...a[0].children??[],{text:"Solicitar indenização por danos elétricos",destination:"/servicos/indenizacao"}]},...a.slice(1)],showSearch:!1,"data-testid":"menu"})}),parameters:{docs:{description:{story:"Dropdown desktop (≥1280px): container #EFF3FF com border-radius 32px e max-width 400px. Links em Body Medium B com quebra de linha. Hover/focus aplica pill azul (#497bfd) com border-radius 16px 16px 40px 16px."}}},globals:{viewport:{value:"desktop",isRotated:!1}},play:async({canvasElement:n})=>{const B=await P(n).findByRole("button",{name:/Serviços de energia/i});await N.click(B)}},l={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:160},children:e.jsx(o,{...n,logo:e.jsx(s,{}),menuItems:a,showSearch:!0,isLoggedIn:!0,userDisplayName:"Raquel",onSearchClick:()=>{},onUserClick:()=>window.alert("Menu usuário"),onNotificationClick:()=>{},notificationBadge:!0})}),globals:{viewport:{value:"desktop",isRotated:!1}}},c={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:120},children:e.jsx(o,{...n,logo:e.jsx("span",{style:{color:"#fff"},children:"Logo"}),menuItems:[{text:"Público",destination:"/"},{text:"Site externo",destination:"https://example.com",openInNewTab:!0},{text:"Admin",destination:"/admin",permissions:["admin"]},{text:"Beta",destination:"/beta",featureFlags:["beta"]}],userRoles:["admin"],enabledFeatureFlags:["beta"]})}),globals:{viewport:{value:"desktop",isRotated:!1}}},m={render:n=>e.jsx("div",{style:{padding:16,background:"#f0f0f0",minHeight:120},children:e.jsx(o,{...n,logo:e.jsx(s,{}),menuItems:a,showSearch:!0,onSearchClick:()=>{},children:e.jsx("span",{style:{padding:"8px 1rem",fontSize:14},children:"Faixa superior: Bandeira tarifária • Links • Switch PT/EN"})})}),globals:{viewport:{value:"desktop",isRotated:!1}}};var u,g,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 120
  }}>
      <Menu {...args} logo={<Logo />} menuItems={sampleItems} showSearch={args.showSearch ?? true} onSearchClick={() => window.alert("Pesquisar")} />
    </div>,
  args: {
    homeHref: DEFAULT_HOME_HREF,
    showSearch: true,
    isLoggedIn: false
  }
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 120
  }}>
      <Menu {...args} logo={<Logo />} menuItems={sampleItems} showSearch={args.showSearch ?? true} onSearchClick={() => window.alert("Pesquisar")} />
    </div>,
  args: {
    homeHref: DEFAULT_HOME_HREF,
    showSearch: true,
    isLoggedIn: true,
    userDisplayName: "Matheus"
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,w,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 120
  }}>
      <Menu {...args} logo={<Logo />} menuItems={sampleItems} showSearch onSearchClick={() => {}} />
    </div>,
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,k,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 640
  }}>
      <Menu {...args} logo={<Logo />} menuItems={[{
      ...sampleItems[0],
      children: [...(sampleItems[0].children ?? []), {
        text: "Solicitar indenização por danos elétricos",
        destination: "/servicos/indenizacao"
      }]
    }, ...sampleItems.slice(1)]} showSearch={false} data-testid="menu" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Dropdown desktop (≥1280px): container #EFF3FF com border-radius 32px e max-width 400px. Links em Body Medium B com quebra de linha. Hover/focus aplica pill azul (#497bfd) com border-radius 16px 16px 40px 16px."
      }
    }
  },
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: /Serviços de energia/i
    });
    await userEvent.click(trigger);
  }
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,L,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 160
  }}>
      <Menu {...args} logo={<Logo />} menuItems={sampleItems} showSearch isLoggedIn userDisplayName="Raquel" onSearchClick={() => {}} onUserClick={() => window.alert("Menu usuário")} onNotificationClick={() => {}} notificationBadge />
    </div>,
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var E,M,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 120
  }}>
      <Menu {...args} logo={<span style={{
      color: "#fff"
    }}>Logo</span>} menuItems={[{
      text: "Público",
      destination: "/"
    }, {
      text: "Site externo",
      destination: "https://example.com",
      openInNewTab: true
    }, {
      text: "Admin",
      destination: "/admin",
      permissions: ["admin"]
    }, {
      text: "Beta",
      destination: "/beta",
      featureFlags: ["beta"]
    }]} userRoles={["admin"]} enabledFeatureFlags={["beta"]} />
    </div>,
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...(j=(M=c.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var F,C,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 16,
    background: "#f0f0f0",
    minHeight: 120
  }}>
      <Menu {...args} logo={<Logo />} menuItems={sampleItems} showSearch onSearchClick={() => {}}>
        <span style={{
        padding: "8px 1rem",
        fontSize: 14
      }}>
          Faixa superior: Bandeira tarifária • Links • Switch PT/EN
        </span>
      </Menu>
    </div>,
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const J=["Default","Logado","Mobile","DropdownDesktop","Desktop","ComPermissoes","ComTopBar"];export{c as ComPermissoes,m as ComTopBar,t as Default,l as Desktop,d as DropdownDesktop,r as Logado,i as Mobile,J as __namedExportsOrder,G as default};
