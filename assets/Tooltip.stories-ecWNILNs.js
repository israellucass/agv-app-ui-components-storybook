import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{T as o}from"./Tooltip-B7sVnAoO.js";import"./iframe-Dq7yb4X6.js";import"./preload-helper-C1FmrZbK.js";import"./index-Tcpqm9on.js";const I={title:"Components/Tooltip",component:o},r={args:{title:"Mais informações",placement:"bottom"},render:e=>t.jsx(o,{...e,children:t.jsx("button",{type:"button",children:"Hover me"})})},n={args:{title:"Informação no topo",placement:"top"},render:e=>t.jsx(o,{...e,children:t.jsx("button",{type:"button",children:"Hover me (top)"})})},a={args:{title:"Informação à esquerda",placement:"left"},render:e=>t.jsx("div",{style:{marginLeft:"8rem"},children:t.jsx(o,{...e,children:t.jsx("button",{type:"button",children:"Hover me (left)"})})})},s={args:{title:"Informação à direita",placement:"right"},render:e=>t.jsx(o,{...e,children:t.jsx("button",{type:"button",children:"Hover me (right)"})})};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Mais informações",
    placement: "bottom"
  },
  render: args => <Tooltip {...args}>
      <button type="button">Hover me</button>
    </Tooltip>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Informação no topo",
    placement: "top"
  },
  render: args => <Tooltip {...args}>
      <button type="button">Hover me (top)</button>
    </Tooltip>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Informação à esquerda",
    placement: "left"
  },
  render: args => <div style={{
    marginLeft: "8rem"
  }}>
      <Tooltip {...args}>
        <button type="button">Hover me (left)</button>
      </Tooltip>
    </div>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Informação à direita",
    placement: "right"
  },
  render: args => <Tooltip {...args}>
      <button type="button">Hover me (right)</button>
    </Tooltip>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const L=["Bottom","Top","Left","Right"];export{r as Bottom,a as Left,s as Right,n as Top,L as __namedExportsOrder,I as default};
