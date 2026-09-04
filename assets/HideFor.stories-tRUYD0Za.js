import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{u as m}from"./useRoleAccess-qqWYhqRf.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";function b({roles:i,userRoles:t,children:u,fallback:p}){return m(t,{hiddenFor:i})?r.jsx(r.Fragment,{children:u}):p??null}const x={title:"Components/RoleAccess/HideFor",component:b},e={args:{roles:["colaborador"],userRoles:["cliente"],children:r.jsx("div",{style:{padding:"1rem",background:"#e8f5e9",borderRadius:8},children:"Visível porque não é colaborador"})}},o={args:{roles:["colaborador"],userRoles:["colaborador"],children:r.jsx("div",{children:"Não deve aparecer"}),fallback:r.jsx("div",{style:{padding:"1rem",background:"#fff3e0",borderRadius:8},children:"Oculto para colaboradores"})}};var a,s,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    roles: ["colaborador"],
    userRoles: ["cliente"],
    children: <div style={{
      padding: "1rem",
      background: "#e8f5e9",
      borderRadius: 8
    }}>Visível porque não é colaborador</div>
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var n,c,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    roles: ["colaborador"],
    userRoles: ["colaborador"],
    children: <div>Não deve aparecer</div>,
    fallback: <div style={{
      padding: "1rem",
      background: "#fff3e0",
      borderRadius: 8
    }}>Oculto para colaboradores</div>
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const j=["Permitido","Bloqueado"];export{o as Bloqueado,e as Permitido,j as __namedExportsOrder,x as default};
