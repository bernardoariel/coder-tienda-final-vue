import{r as t,A as C,u as I,g as B,a as p,o as V,c as w,d as s,h as A,e as a,k as F,F as T,b as e,v as c,w as R,m as D}from"./index-c3973217.js";const E={key:0},P={class:"grid"},G=e("div",{class:"col-6"},[e("label",{for:"Nombre"},"Ingrese el Nombre")],-1),H={class:"col-6"},L=e("div",{class:"col-6"},[e("label",{for:"Nombre"},"Ingrese el email")],-1),M={class:"col-6"},j=e("div",{class:"col-6"},[e("label",{for:"Nombre"},"Ingrese el password")],-1),q={class:"col-6"},z=e("div",{class:"col-6"},[e("label",{for:"Nombre"},"Ingrese la imagen")],-1),J={class:"col-6"},K=e("div",{class:"col-6"},[e("label",{for:"Nombre"},"Tipo de Usuario")],-1),O={class:"col-6"},Q={class:"col-6"},S={class:"col-6"},Y={__name:"NuevoUsuario",setup(W){let n=t(),h=t([{name:"Admin",code:"admin"},{name:"Usuario",code:"usuario"}]),d=t(""),r=t(""),u=t(""),i=t(""),_=t(!1);C();const v=I(),g=B(()=>d.value.trim()!==""&&r.value.trim()!==""&&i.value.trim()!==""&&u.value.trim()!==""),N=()=>{g.value?(_.value=!1,k()):_.value=!0},k=async()=>{let f={nombre:d.value,email:r.value,password:u.value,image:i.value,tipousuario:n.value.name=="Admin"};await D.post("/usuarios",f),v.push({path:"/dashboard/default"})};let x=()=>{v.push({path:"/dashboard/default"})};return(f,l)=>{const m=p("InputText"),y=p("Dropdown"),b=p("Button"),U=p("Panel");return V(),w(T,null,[s(_)?(V(),w("h1",E,"Hay un error en los datos ingresados")):A("",!0),a(U,{header:"Editar usuario",class:"w-6 m-5"},{default:F(()=>[e("div",P,[G,e("div",H,[a(m,{type:"text",class:"w-10",modelValue:s(d),"onUpdate:modelValue":l[0]||(l[0]=o=>c(d)?d.value=o:d=o)},null,8,["modelValue"])]),L,e("div",M,[a(m,{type:"text",class:"w-10",modelValue:s(r),"onUpdate:modelValue":l[1]||(l[1]=o=>c(r)?r.value=o:r=o)},null,8,["modelValue"])]),j,e("div",q,[a(m,{type:"text",class:"w-10",modelValue:s(u),"onUpdate:modelValue":l[2]||(l[2]=o=>c(u)?u.value=o:u=o)},null,8,["modelValue"])]),z,e("div",J,[a(m,{class:"w-10",type:"text",modelValue:s(i),"onUpdate:modelValue":l[3]||(l[3]=o=>c(i)?i.value=o:i=o)},null,8,["modelValue"])]),K,e("div",O,[a(y,{modelValue:s(n),"onUpdate:modelValue":l[4]||(l[4]=o=>c(n)?n.value=o:n=o),class:"w-10",options:s(h),optionLabel:"name",placeholder:s(n)},null,8,["modelValue","options","placeholder"])]),e("div",Q,[a(b,{label:"Cancelar",class:"w-full p-button-secondary",icon:"pi pi-fast-backward",onClick:l[5]||(l[5]=o=>s(x)())})]),e("div",S,[a(b,{label:"Guardar",icon:"pi pi-user",class:"w-full",onClick:R(N,["prevent"])},null,8,["onClick"])])])]),_:1})],64)}}};export{Y as default};
