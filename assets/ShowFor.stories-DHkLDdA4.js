import{j as e}from"./iframe-rZQACVej.js";import{u as p}from"./useRoleAccess-D4XYn_hz.js";import"./preload-helper-C1FmrZbK.js";function g({roles:t,userRoles:l,children:m,fallback:u}){return p(l,{showFor:t})?e.jsx(e.Fragment,{children:m}):u??null}const R={title:"Components/RoleAccess/ShowFor",component:g},r={args:{roles:["administrador"],userRoles:["administrador"],children:e.jsx("div",{style:{padding:"1rem",background:"#e8f5e9",borderRadius:8},children:"Conteúdo visível para administradores"})}},s={args:{roles:["administrador"],userRoles:["cliente"],children:e.jsx("div",{children:"Não deve aparecer"}),fallback:e.jsx("div",{style:{padding:"1rem",background:"#ffebee",borderRadius:8},children:"Acesso negado (fallback)"})}},h=["Admin","Negado"];var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    roles: ["administrador"],
    userRoles: ["administrador"],
    children: <div style={{
      padding: "1rem",
      background: "#e8f5e9",
      borderRadius: 8
    }}>Conteúdo visível para administradores</div>
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,i,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    roles: ["administrador"],
    userRoles: ["cliente"],
    children: <div>Não deve aparecer</div>,
    fallback: <div style={{
      padding: "1rem",
      background: "#ffebee",
      borderRadius: 8
    }}>Acesso negado (fallback)</div>
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};export{r as Admin,s as Negado,h as __namedExportsOrder,R as default};
