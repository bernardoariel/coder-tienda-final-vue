import{f as H,n as I,s as Q,g as $,r as h,u as z,a as l,o as r,j as S,k as m,b as a,c as b,t as A,d as o,h as G,F as N,e as i,m as J,p as K,q as L,v as T,l as W}from"./index-c3973217.js";import{m as E}from"./mockapiApiCompras-16788f73.js";const X="/assets/graduate-735c9dbc.png",Y=a("img",{alt:"logo",src:X,height:"60",class:"mr-2"},null,-1),Z={class:"p-menuitem-content"},ee={key:1,class:"p-menuitem-link"},te={class:"flex"},pe={__name:"MenuComponent",setup(j){const e=H(),v=I(),{cursoStore:c}=Q(v),_=$(()=>c.value),y=$(()=>c.value.length),p=h(),u=z();let k=h([]),C=h([]),B=[{label:"Home",icon:"pi pi-fw pi-file",path:"/",command:()=>{u.push({name:"defaultUser"})}},{label:"Tienda",path:"default/tienda",command:()=>{u.push({name:"tiendaUser"})}}],M=[{label:"Dashboard",path:"dashboard/default",command:()=>{u.push({path:"/dashboard/default"})}}],P=[{label:"Carrito de Compras",icon:"pi pi-edit",command:()=>{u.push({name:"carrito"})}}],D=[{label:"Salir",icon:"pi pi-times",command:()=>{u.push({name:"salir"})}}];e.tipo=="admin"?(k.value=B.concat(M),C.value=D):(C.value=P.concat(D),k.value=B);const U=s=>{p.value.toggle(s)},V=s=>{u.push({name:s})},F=async()=>{let{data:s}=await E.get("/compras/");_.value.forEach(async(t,f)=>{const{data:x}=await J.get("/usuarios");let g=x.find(n=>n.email==e.email);if(!s.find(n=>n.idcliente===g.id&&n.idcurso==t.id)){let n={idcliente:g.id,idcurso:t.id,nombrecurso:t.nombre,precio:t.precio,pagado:!1};await E.post("/compras/",n)}}),v.borrarCarrito(),p.value.hide(),u.push({name:"carrito"})};return(s,t)=>{const f=l("Button"),x=l("SplitButton"),g=l("Avatar"),w=l("Column"),n=l("DataTable"),O=l("OverlayPanel"),R=l("Menubar");return r(),S(R,{model:o(k),class:"bg-white"},{start:m(()=>[Y]),item:m(({item:d})=>[a("li",Z,[d.label==="Quit"?(r(),b("a",{key:0,onClick:t[0]||(t[0]=(...q)=>s.salir&&s.salir(...q)),class:"p-menuitem-link"},A(d.label),1)):(r(),b("a",ee,A(d.label),1))])]),end:m(()=>[a("div",te,[o(y)>=1?(r(),S(f,{key:0,type:"button",icon:"pi pi-cart-plus",onClick:U,class:"mr-3 p-button p-component p-button-rounded p-button-warning"})):G("",!0),o(e).nombre?(r(),b(N,{key:2},[i(x,{label:o(e).nombre,model:o(C),class:"p-button-secondary p-splitbutton-defaultbutton"},null,8,["label","model"]),i(g,{image:o(e).foto,class:"ml-5 mr-2",shape:"circle"},null,8,["image"])],64)):(r(),S(f,{key:1,label:"Ingresar",class:"p-button-outlined p-button-secondary",onClick:t[1]||(t[1]=d=>V("login")),icon:"pi pi-user"})),i(O,{ref_key:"op",ref:p},{default:m(()=>[i(n,{value:o(_)},{default:m(()=>[i(w,{field:"nombre",header:"Nombre"}),i(w,{field:"precio",header:"Precio"})]),_:1},8,["value"]),i(f,{label:"Pagar",class:"p-button-primary w-full",type:"button",icon:"pi pi-wallet",onClick:t[2]||(t[2]=d=>F())})]),_:1},512)])]),_:1},8,["model"])}}},oe={class:"bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap"},ae=a("div",{class:"font-bold mr-8"},"🔥 Hot Ofertas!",-1),se=a("div",{class:"align-items-center hidden lg:flex"},[a("span",{class:"line-height-3"},"Seguimos Creciendo poco a poco sumamos mas cursos.!")],-1),ne=a("a",{class:"flex align-items-center ml-2 mr-8"},null,-1),le=a("i",{class:"pi pi-times"},null,-1),ie=[le],ue={__name:"FooterComponent",setup(j){let e=h(!1);return(v,c)=>{const _=l("Dialog"),y=K("ripple");return r(),b(N,null,[a("div",oe,[ae,se,ne,L((r(),b("a",{class:"flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple",style:{width:"2rem",height:"2rem"},onClick:c[0]||(c[0]=p=>T(e)?e.value=!o(e):e=!o(e))},ie)),[[y]])]),i(_,{header:"Aviso!",visible:o(e),"onUpdate:visible":c[1]||(c[1]=p=>T(e)?e.value=p:e=p)},{default:m(()=>[W(" Epaaaa ! no toques ahi ")]),_:1},8,["visible"])],64)}}};export{pe as _,ue as a};
