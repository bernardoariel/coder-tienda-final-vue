import{r as i,f as I,i as M,g as N,a as p,o as h,c as g,b as t,e as l,k as w,d as n,t as U,h as y,v as k,w as A,m as S,D as j}from"./index-c3973217.js";import{m as V}from"./mockapiApiCompras-16788f73.js";const $={class:"grid m-5"},E={class:"col-6"},G=t("h1",null,"Carrito de compras",-1),R={key:0,class:"col-6"},q={key:0,class:"text-red-500"},z={class:"col-4"},H=t("label",null,"Tarjeta de credito",-1),J={class:"col-3"},K=t("label",null,"Fecha de Vencimiento",-1),L={class:"col-3"},O=t("label",null,"Codigo de seguridad",-1),Q={class:"col-6"},ee={__name:"CarritoView",setup(W){let c=i(""),u=i(""),d=i(""),_=i(!1),m=i([]),v=i(0);const x=I();let T=async s=>{await V.delete(`/compras/${s}`),C()},C=async()=>{const{data:s}=await S.get("/usuarios");let e=s.find(a=>a.email==x.email),{data:r}=await V.get("/compras/");m.value=r.filter(a=>a.idcliente===e.id&&a.pagado==!1),v=m.value.reduce((a,f)=>a+parseFloat(f.precio),0)};M(async()=>{try{C()}catch(s){console.log("error::: ",s)}});const B=async()=>{const s=m.value.map(async(e,r)=>{let a={...e,pagado:!0};await V.put(`/compras/${e.id}`,a)});await Promise.all(s),m.value=[],j.push({path:"/default"})},F=N(()=>c.value.trim()!==""&&u.value.trim()!==""&&d.value.trim()!==""),P=()=>{F.value?(_.value=!1,B()):_.value=!0};return(s,e)=>{const r=p("Column"),a=p("Button"),f=p("DataTable"),b=p("InputMask"),D=p("InputText");return h(),g("div",$,[t("div",E,[G,l(f,{value:n(m),class:"w-full"},{default:w(()=>[l(r,{field:"nombrecurso",header:"Nombre"}),l(r,{field:"precio",header:"Precio"}),l(r,{exportable:!1,header:"Accion"},{body:w(o=>[l(a,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:X=>n(T)(o.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),n(v)!=0?(h(),g("div",R,[t("h1",null,"Total a Pagar: $"+U(n(v)),1),n(_)?(h(),g("h3",q,"Falta completar algunos campos")):y("",!0),t("div",z,[H,l(b,{modelValue:n(c),"onUpdate:modelValue":e[0]||(e[0]=o=>k(c)?c.value=o:c=o),mask:"9999-9999-9999-9999"},null,8,["modelValue"])]),t("div",J,[K,l(b,{modelValue:n(u),"onUpdate:modelValue":e[1]||(e[1]=o=>k(u)?u.value=o:u=o),mask:"99-99"},null,8,["modelValue"])]),t("div",L,[O,l(D,{modelValue:n(d),"onUpdate:modelValue":e[2]||(e[2]=o=>k(d)?d.value=o:d=o)},null,8,["modelValue"])]),t("div",Q,[l(a,{label:"Pagar",class:"w-full",onClick:A(P,["prevent"])},null,8,["onClick"])])])):y("",!0)])}}};export{ee as default};
