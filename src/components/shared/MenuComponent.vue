<script setup>
import { storeToRefs } from 'pinia';
import { reactive, computed, ref, nextTick} from 'vue';
import { useRouter } from "vue-router"
import { useCarritoStore } from '../../stores/carritoStore';
import { useUsuarioStore } from '../../stores/usuarioStore';
import mockApi from "@/api/mockapiApiCompras"
import mockApiUsuarios from "@/api/mockapiApi"

/* store */
const usuarioStore = useUsuarioStore();

// const {email,tipo,foto,nombre} = storeToRefs(usuarioStore)


// existeUsuario()
const carritoStore = useCarritoStore();
const { cursoStore } = storeToRefs(carritoStore)
const cursos = computed(() => cursoStore.value);


const cursosCantidad = computed(() => cursoStore.value.length);
// console.log('cursoStore::: ', cursoStore);

const op = ref();
const route = useRouter()
let items = ref([])
let splitButtonMenu = ref([])
let linkTodos = [
				{
					label:'Home',
					icon:'pi pi-fw pi-file',
					path: '/',
					command: () => {
						route.push({name:'defaultUser'})
					}
				},
				{
					label:'Tienda',
					path:'default/tienda',
					command: () => {
						route.push({name:'tiendaUser'})
					}
				}
		    ]
let linkAdmin = [
	{
		label:'Dashboard',
		path:'dashboard/default',
		command: () => {
			route.push({path:'/dashboard/default'})
		}
	}
]		
let linksplit =[
	{
		label: 'Carrito de Compras',
		icon: 'pi pi-edit',
		command: () => {
			route.push({name:'carrito'})
		}
	}
	
]
let linkSalir = [
	{
		label: 'Salir',
		icon: 'pi pi-times',
		command: () => {
			route.push({name:'salir'})
		}
	}
]

if(usuarioStore.tipo=='admin'){

	items.value = linkTodos.concat(linkAdmin);
	splitButtonMenu.value = linkSalir
}else{
	splitButtonMenu.value = linksplit.concat(linkSalir)
	items.value = linkTodos
}


const toggle = (event) => {
	
  	
    op.value.toggle(event);

};	

const moverme = (ruta) =>{
	
	
	route.push({name:ruta})
}

const pagar = async () =>{

	let {data} = await mockApi.get(`/compras/`)
	// console.log('data::: ', data);
	
	cursos.value.forEach(async(curso, index) => {
		// console.log('curso::: ', curso.id);
	
		
 		/* usuarios */
		const {data:datauser} = await mockApiUsuarios.get('/usuarios')
		let usuario = datauser.find(item => item.email == usuarioStore.email);
		// console.log('usuario::: ', usuario);

		let cursoExistente = data.find(item => item.idcliente===usuario.id && item.idcurso==curso.id);

		// console.log('cursoExistente::: ', cursoExistente);
		if(!cursoExistente){

			let pago = {
				idcliente:usuario.id,
				idcurso:curso.id,
				nombrecurso:curso.nombre,
				precio:curso.precio,
				pagado:false
			}
			await mockApi.post(`/compras/`,pago) 
			
		}
	});
	carritoStore.borrarCarrito()
	op.value.hide();
	route.push({name:'carrito'})
}
</script>
<template>
  <Menubar :model="items" class="bg-white">
	<template #start>
		<img alt="logo" src="../../assets/graduate.png" height="60" class="mr-2">
	</template>
	<template #item="{item}">
		<li class="p-menuitem-content">
        <a v-if="item.label === 'Quit'" @click="salir" class="p-menuitem-link">{{ item.label }}</a>
        <a v-else class="p-menuitem-link">{{ item.label }}</a>
      </li>
	</template>
			<template #end>
				<div class="flex">
					
					<Button v-if="cursosCantidad>=1" type="button" icon="pi pi-cart-plus" @click="toggle"
					 class="mr-3 p-button p-component p-button-rounded p-button-warning" />
					<Button v-if="!usuarioStore.nombre" label="Ingresar" 
					class="p-button-outlined p-button-secondary" @click="moverme('login')" icon="pi pi-user" />

					
					<template v-else>
						<SplitButton :label="usuarioStore.nombre" 
						:model="splitButtonMenu" 
						class="p-button-secondary p-splitbutton-defaultbutton">
						</SplitButton>
					
						<Avatar  :image="usuarioStore.foto" class="ml-5 mr-2"  shape="circle" />
					</template>
					<OverlayPanel ref="op">

						<DataTable :value="cursos">
							<Column field="nombre" header="Nombre"></Column>
							<Column field="precio" header="Precio"></Column>
						</DataTable>
						<Button
							label="Pagar"
							class="p-button-primary w-full"
							type="button" icon="pi pi-wallet"
							@click="pagar()"
						/>

					</OverlayPanel>
				</div>
				
			</template>
			

			</Menubar>
</template>


<style lang="scss" scoped>

</style>