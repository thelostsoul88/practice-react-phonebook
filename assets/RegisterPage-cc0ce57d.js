import{r as m,u as x,j as e,B as t,a as n,L as a,T as p,b as h}from"./index-ac3abc29.js";import{B as g,I as f,V as j,a as b}from"./BasicModal-ab4815c7.js";import{T as l,F as w,I as y,O as v}from"./TextField-aab33381.js";import{I as C}from"./InputAdornment-d3699ca9.js";import"./InputBase-31eba11d.js";const k=()=>{const[s,i]=m.useState(!1),d=x(),c=o=>{o.preventDefault();const r=o.currentTarget;d(h({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()},u=()=>i(o=>!o);return e.jsx(g,{children:e.jsxs(t,{component:"form",onSubmit:c,sx:{width:"100%"},children:[e.jsxs(t,{component:"div",sx:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(l,{autoFocus:!0,autoComplete:"off",required:!0,name:"name",type:"text",label:"Name",placeholder:"John Wick",variant:"outlined",fullWidth:!0,margin:"normal",sx:{backgroundColor:"colors.accent"}}),e.jsx(l,{autoComplete:"off",required:!0,name:"email",type:"email",label:"Email",placeholder:"johnwick@gmail.com",variant:"outlined",fullWidth:!0,margin:"normal",sx:{backgroundColor:"colors.accent"}}),e.jsxs(w,{defaultValue:"",fullWidth:!0,variant:"outlined",required:!0,name:"password",sx:{backgroundColor:"colors.accent"},children:[e.jsx(y,{htmlFor:"outlined-adornment-password",children:"Password"}),e.jsx(v,{id:"outlined-adornment-password",type:s?"text":"password",name:"password",label:"Password",endAdornment:e.jsx(C,{position:"end",children:e.jsx(f,{"aria-label":"toggle password visibility",onClick:u,edge:"end",children:s?e.jsx(j,{}):e.jsx(b,{})})})})]}),e.jsxs(t,{component:"div",sx:{display:"flex",gap:3,justifyContent:"center"},children:[e.jsx(n,{type:"submit",color:"inherit",variant:"outlined",sx:{color:"colors.grey",outline:"none",fontSize:16,px:3,flex:.5,"&:hover":{backgroundColor:"colors.grey",color:"colors.aqua",border:"1px solid transparent"}},children:"Register"}),e.jsx(a,{to:"/",children:e.jsx(n,{color:"inherit",variant:"outlined",sx:{color:"colors.grey",outline:"none",fontSize:16,px:3,"&:hover":{backgroundColor:"colors.grey",color:"colors.aqua",border:"1px solid transparent"}},children:"Exit"})})]})]}),e.jsx(t,{component:"div",sx:{mt:2},children:e.jsxs(p,{variant:"h6",component:"p",sx:{fontSize:18,textAlign:"center",color:"colors.grey"},children:["Already have an account?",e.jsxs(a,{to:"/login",children:[""," Login."]})]})})]})})},q=()=>e.jsxs("main",{children:[e.jsx("title",{children:"Registration"}),e.jsx(k,{})]});export{q as default};
