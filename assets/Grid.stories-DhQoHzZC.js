import{G as e,a as J,S as M}from"./Grid-BZrYB5Jr.js";import"./jsx-runtime-BjG_zV1W.js";const U={title:"Components/Grid",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}},n=({children:t,color:K="#497bfd"})=>React.createElement("div",{style:{background:K,color:"white",padding:"20px",textAlign:"center",borderRadius:"8px"}},t),r={render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{size:3},React.createElement(n,null,"Size 3 (1/4 md/lg, 1/2 xs)")),React.createElement(e,{size:3},React.createElement(n,null,"Size 3")),React.createElement(e,{size:3},React.createElement(n,null,"Size 3")),React.createElement(e,{size:3},React.createElement(n,null,"Size 3"))))},a={render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{size:{xs:6,md:4,lg:3}},React.createElement(n,null,"Responsive Item")),React.createElement(e,{size:{xs:6,md:8,lg:9}},React.createElement(n,null,"Responsive Item"))))},i={render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{size:6},React.createElement(n,{color:"#555"},"Lado Esquerdo (6/12)",React.createElement("div",{style:{marginTop:"10px"}},React.createElement(e,{container:!0,spacing:2},React.createElement(e,{size:6},React.createElement(n,{color:"#777"},"Sub 6")),React.createElement(e,{size:6},React.createElement(n,{color:"#777"},"Sub 6")))))),React.createElement(e,{size:6},React.createElement(n,null,"Lado Direito (6/12)"))))},c={name:"GridRow (atalho container)",render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(J,{spacing:4},React.createElement(e,{size:4},React.createElement(n,null,"4/12")),React.createElement(e,{size:4},React.createElement(n,null,"4/12")),React.createElement(e,{size:4},React.createElement(n,null,"4/12"))))},s={name:"SubGrid (grade aninhada)",render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(J,{spacing:4},React.createElement(e,{size:8},React.createElement(n,{color:"#555"},"Coluna 8/12",React.createElement(M,{spacing:2},React.createElement(e,{size:6},React.createElement(n,{color:"#777"},"Sub 6/12")),React.createElement(e,{size:6},React.createElement(n,{color:"#777"},"Sub 6/12"))))),React.createElement(e,{size:4},React.createElement(n,null,"Coluna 4/12"))))},d={name:"Escala de spacing (0–8)",render:()=>React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:"20px"}},[0,1,2,3,4,6,8].map(t=>React.createElement("div",{key:t},React.createElement("div",{style:{marginBottom:4,fontSize:12}},"spacing=",t),React.createElement(e,{container:!0,spacing:t},React.createElement(e,{size:4},React.createElement(n,null,"A")),React.createElement(e,{size:4},React.createElement(n,null,"B")),React.createElement(e,{size:4},React.createElement(n,null,"C"))))))},l={name:"Offset (colunas 2–5)",render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{offset:1,size:4},React.createElement(n,null,"offset=1 size=4 (cols 2–5)"))))},o={name:"Offset responsivo",render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{offset:{xs:0,md:2,lg:3},size:{xs:6,md:8,lg:6}},React.createElement(n,null,"offset/size por breakpoint"))))},m={name:"Full width (nova linha)",render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{size:4},React.createElement(n,null,"A (4/12)")),React.createElement(e,{size:4},React.createElement(n,null,"B (4/12)")),React.createElement(e,{fullWidth:!0},React.createElement(n,{color:"#555"},"fullWidth — ocupa todas as colunas")),React.createElement(e,{size:6},React.createElement(n,null,"C (6/12)"))))},p={name:"Centralizado (offset + size)",render:()=>React.createElement("div",{style:{padding:"20px"}},React.createElement(e,{container:!0,spacing:4},React.createElement(e,{offset:{md:1},size:{xs:6,md:10}},React.createElement(n,null,"10/12 centralizado (offset md=1)"))))};var u,R,G;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid size={3}>
          <Item>Size 3 (1/4 md/lg, 1/2 xs)</Item>
        </Grid>
        <Grid size={3}>
          <Item>Size 3</Item>
        </Grid>
        <Grid size={3}>
          <Item>Size 3</Item>
        </Grid>
        <Grid size={3}>
          <Item>Size 3</Item>
        </Grid>
      </Grid>
    </div>
}`,...(G=(R=r.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var E,g,z;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid size={{
        xs: 6,
        md: 4,
        lg: 3
      }}>
          <Item>Responsive Item</Item>
        </Grid>
        <Grid size={{
        xs: 6,
        md: 8,
        lg: 9
      }}>
          <Item>Responsive Item</Item>
        </Grid>
      </Grid>
    </div>
}`,...(z=(g=a.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var f,I,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid size={6}>
          <Item color="#555">
            Lado Esquerdo (6/12)
            <div style={{
            marginTop: "10px"
          }}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Item color="#777">Sub 6</Item>
                </Grid>
                <Grid size={6}>
                  <Item color="#777">Sub 6</Item>
                </Grid>
              </Grid>
            </div>
          </Item>
        </Grid>
        <Grid size={6}>
          <Item>Lado Direito (6/12)</Item>
        </Grid>
      </Grid>
    </div>
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,x,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "GridRow (atalho container)",
  render: () => <div style={{
    padding: "20px"
  }}>
      <GridRow spacing={4}>
        <Grid size={4}>
          <Item>4/12</Item>
        </Grid>
        <Grid size={4}>
          <Item>4/12</Item>
        </Grid>
        <Grid size={4}>
          <Item>4/12</Item>
        </Grid>
      </GridRow>
    </div>
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,h,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "SubGrid (grade aninhada)",
  render: () => <div style={{
    padding: "20px"
  }}>
      <GridRow spacing={4}>
        <Grid size={8}>
          <Item color="#555">
            Coluna 8/12
            <SubGrid spacing={2}>
              <Grid size={6}>
                <Item color="#777">Sub 6/12</Item>
              </Grid>
              <Grid size={6}>
                <Item color="#777">Sub 6/12</Item>
              </Grid>
            </SubGrid>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>Coluna 4/12</Item>
        </Grid>
      </GridRow>
    </div>
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var w,O,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Escala de spacing (0–8)",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: "20px"
  }}>
      {([0, 1, 2, 3, 4, 6, 8] as const).map(s => <div key={s}>
          <div style={{
        marginBottom: 4,
        fontSize: 12
      }}>spacing={s}</div>
          <Grid container spacing={s}>
            <Grid size={4}>
              <Item>A</Item>
            </Grid>
            <Grid size={4}>
              <Item>B</Item>
            </Grid>
            <Grid size={4}>
              <Item>C</Item>
            </Grid>
          </Grid>
        </div>)}
    </div>
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,W,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Offset (colunas 2–5)",
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid offset={1} size={4}>
          <Item>offset=1 size=4 (cols 2–5)</Item>
        </Grid>
      </Grid>
    </div>
}`,...(k=(W=l.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var A,F,L;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Offset responsivo",
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid offset={{
        xs: 0,
        md: 2,
        lg: 3
      }} size={{
        xs: 6,
        md: 8,
        lg: 6
      }}>
          <Item>offset/size por breakpoint</Item>
        </Grid>
      </Grid>
    </div>
}`,...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var q,N,T;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Full width (nova linha)",
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Item>A (4/12)</Item>
        </Grid>
        <Grid size={4}>
          <Item>B (4/12)</Item>
        </Grid>
        <Grid fullWidth>
          <Item color="#555">fullWidth — ocupa todas as colunas</Item>
        </Grid>
        <Grid size={6}>
          <Item>C (6/12)</Item>
        </Grid>
      </Grid>
    </div>
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var _,j,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Centralizado (offset + size)",
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid offset={{
        md: 1
      }} size={{
        xs: 6,
        md: 10
      }}>
          <Item>10/12 centralizado (offset md=1)</Item>
        </Grid>
      </Grid>
    </div>
}`,...(H=(j=p.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const V=["Default","Responsive","Nested","GridRowStory","SubGridStory","SpacingScale","OffsetBasic","OffsetResponsive","FullWidth","CenteredSteps"];export{p as CenteredSteps,r as Default,m as FullWidth,c as GridRowStory,i as Nested,l as OffsetBasic,o as OffsetResponsive,a as Responsive,d as SpacingScale,s as SubGridStory,V as __namedExportsOrder,U as default};
