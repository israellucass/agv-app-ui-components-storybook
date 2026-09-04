import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{G as n,a as U,S as X}from"./Grid-BVJC4bVA.js";const $={title:"Components/Grid",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}},s=({children:i,color:V="#497bfd"})=>e.jsx("div",{style:{background:V,color:"white",padding:"20px",textAlign:"center",borderRadius:"8px"},children:i}),r={render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(n,{container:!0,spacing:4,children:[e.jsx(n,{size:3,children:e.jsx(s,{children:"Size 3 (1/4 md/lg, 1/2 xs)"})}),e.jsx(n,{size:3,children:e.jsx(s,{children:"Size 3"})}),e.jsx(n,{size:3,children:e.jsx(s,{children:"Size 3"})}),e.jsx(n,{size:3,children:e.jsx(s,{children:"Size 3"})})]})})},d={render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(n,{container:!0,spacing:4,children:[e.jsx(n,{size:{xs:6,md:4,lg:3},children:e.jsx(s,{children:"Responsive Item"})}),e.jsx(n,{size:{xs:6,md:8,lg:9},children:e.jsx(s,{children:"Responsive Item"})})]})})},a={name:"Responsivo (xs, sm, md, lg)",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(n,{container:!0,spacing:4,children:[e.jsx(n,{size:{xs:6,sm:4,md:3,lg:2},children:e.jsx(s,{children:"xs=6 · sm=4 · md=3 · lg=2"})}),e.jsx(n,{size:{xs:6,sm:4,md:3,lg:2},children:e.jsx(s,{children:"xs=6 · sm=4 · md=3 · lg=2"})}),e.jsx(n,{size:{xs:6,sm:4,md:3,lg:2},children:e.jsx(s,{children:"xs=6 · sm=4 · md=3 · lg=2"})})]})})},t={render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(n,{container:!0,spacing:4,children:[e.jsx(n,{size:6,children:e.jsxs(s,{color:"#555",children:["Lado Esquerdo (6/12)",e.jsx("div",{style:{marginTop:"10px"},children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{size:6,children:e.jsx(s,{color:"#777",children:"Sub 6"})}),e.jsx(n,{size:6,children:e.jsx(s,{color:"#777",children:"Sub 6"})})]})})]})}),e.jsx(n,{size:6,children:e.jsx(s,{children:"Lado Direito (6/12)"})})]})})},c={name:"GridRow (atalho container)",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(U,{spacing:4,children:[e.jsx(n,{size:4,children:e.jsx(s,{children:"4/12"})}),e.jsx(n,{size:4,children:e.jsx(s,{children:"4/12"})}),e.jsx(n,{size:4,children:e.jsx(s,{children:"4/12"})})]})})},o={name:"SubGrid (grade aninhada)",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(U,{spacing:4,children:[e.jsx(n,{size:8,children:e.jsxs(s,{color:"#555",children:["Coluna 8/12",e.jsxs(X,{spacing:2,children:[e.jsx(n,{size:6,children:e.jsx(s,{color:"#777",children:"Sub 6/12"})}),e.jsx(n,{size:6,children:e.jsx(s,{color:"#777",children:"Sub 6/12"})})]})]})}),e.jsx(n,{size:4,children:e.jsx(s,{children:"Coluna 4/12"})})]})})},l={name:"Escala de spacing (0–8)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:"20px"},children:[0,1,2,3,4,6,8].map(i=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:4,fontSize:12},children:["spacing=",i]}),e.jsxs(n,{container:!0,spacing:i,children:[e.jsx(n,{size:4,children:e.jsx(s,{children:"A"})}),e.jsx(n,{size:4,children:e.jsx(s,{children:"B"})}),e.jsx(n,{size:4,children:e.jsx(s,{children:"C"})})]})]},i))})},m={name:"Offset (colunas 2–5)",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{container:!0,spacing:4,children:e.jsx(n,{offset:1,size:4,children:e.jsx(s,{children:"offset=1 size=4 (cols 2–5)"})})})})},p={name:"Offset responsivo",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{container:!0,spacing:4,children:e.jsx(n,{offset:{xs:0,md:2,lg:3},size:{xs:6,md:8,lg:6},children:e.jsx(s,{children:"offset/size por breakpoint"})})})})},x={name:"Full width (nova linha)",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsxs(n,{container:!0,spacing:4,children:[e.jsx(n,{size:4,children:e.jsx(s,{children:"A (4/12)"})}),e.jsx(n,{size:4,children:e.jsx(s,{children:"B (4/12)"})}),e.jsx(n,{fullWidth:!0,children:e.jsx(s,{color:"#555",children:"fullWidth — ocupa todas as colunas"})}),e.jsx(n,{size:6,children:e.jsx(s,{children:"C (6/12)"})})]})})},h={name:"Centralizado (offset + size)",render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{container:!0,spacing:4,children:e.jsx(n,{offset:{md:1},size:{xs:6,md:10},children:e.jsx(s,{children:"10/12 centralizado (offset md=1)"})})})})};var g,G,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(G=r.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var u,z,I;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var f,v,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Responsivo (xs, sm, md, lg)",
  render: () => <div style={{
    padding: "20px"
  }}>
      <Grid container spacing={4}>
        <Grid size={{
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }}>
          <Item>xs=6 · sm=4 · md=3 · lg=2</Item>
        </Grid>
        <Grid size={{
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }}>
          <Item>xs=6 · sm=4 · md=3 · lg=2</Item>
        </Grid>
        <Grid size={{
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }}>
          <Item>xs=6 · sm=4 · md=3 · lg=2</Item>
        </Grid>
      </Grid>
    </div>
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var y,R,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(R=t.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var C,w,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,W,D;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(W=o.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,A,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var F,L,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var N,T,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,P,Q;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const ee=["Default","Responsive","ResponsiveWithSm","Nested","GridRowStory","SubGridStory","SpacingScale","OffsetBasic","OffsetResponsive","FullWidth","CenteredSteps"];export{h as CenteredSteps,r as Default,x as FullWidth,c as GridRowStory,t as Nested,m as OffsetBasic,p as OffsetResponsive,d as Responsive,a as ResponsiveWithSm,l as SpacingScale,o as SubGridStory,ee as __namedExportsOrder,$ as default};
