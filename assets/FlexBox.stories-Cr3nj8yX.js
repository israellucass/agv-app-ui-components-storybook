import{j}from"./iframe-DHiQjgKA.js";import"./preload-helper-C1FmrZbK.js";const y="_flexBox_bt80q_1",g="_flexBoxGutters_bt80q_6",B="_flexBoxFlex_bt80q_11",m="_flexRow_bt80q_18",C="_flexColumn_bt80q_22",b="_alignStart_bt80q_26",p="_alignCenter_bt80q_30",S="_alignEnd_bt80q_34",q="_alignStretch_bt80q_38",E="_justifyStart_bt80q_42",w="_justifyCenter_bt80q_46",F="_justifyEnd_bt80q_50",h="_justifyBetween_bt80q_54",A="_justifyAround_bt80q_58",t={flexBox:y,flexBoxGutters:g,flexBoxFlex:B,flexRow:m,flexColumn:C,alignStart:b,alignCenter:p,alignEnd:S,alignStretch:q,justifyStart:E,justifyCenter:w,justifyEnd:F,justifyBetween:h,justifyAround:A},R={start:t.alignStart,center:t.alignCenter,end:t.alignEnd,stretch:t.alignStretch},G={start:t.justifyStart,center:t.justifyCenter,end:t.justifyEnd,between:t.justifyBetween,around:t.justifyAround};function D({as:r="div",children:i,direction:l="column",align:a="start",justify:x="center",disableGutters:f=!0,className:u,"data-testid":c}){const _=l==="row"?t.flexRow:t.flexColumn,d=[t.flexBox,!f&&t.flexBoxGutters,t.flexBoxFlex,_,R[a],G[x],u].filter(Boolean).join(" ");return j.jsx(r,{className:d,"data-testid":c,children:i})}const L={title:"Components/FlexBox",component:D},e={parameters:{docs:{description:{story:"Utilitário flex. Substitui o antigo Container."}}},args:{children:"Conteúdo do FlexBox"}},N=["Default"];var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Utilitário flex. Substitui o antigo Container.'
      }
    }
  },
  args: {
    children: "Conteúdo do FlexBox"
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};export{e as Default,N as __namedExportsOrder,L as default};
