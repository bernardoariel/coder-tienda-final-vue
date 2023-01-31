<script setup>
import { storeToRefs } from 'pinia';
import { reactive, computed, ref, nextTick} from 'vue';
import { useRouter } from "vue-router"
import { useCarritoStore } from '../../stores/carritoStore';
import { useUsuarioStore } from '../../stores/usuarioStore';
import mockApi from "@/api/mockapiApiCompras"

/* store */
const usuarioStore = useUsuarioStore();
const {existeUsuario} = usuarioStore;
const {email,tipo,foto,nombre} = storeToRefs(usuarioStore)


existeUsuario()
const carritoStore = useCarritoStore();
const { cursoStore } = storeToRefs(carritoStore)
const cursos = computed(() => cursoStore.value);


const cursosCantidad = computed(() => cursoStore.value.length);
console.log('cursoStore::: ', cursoStore);

const op = ref();
const route = useRouter()
let items = ref([])
let visitante = [
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
			console.log('tipo::: ', tipo);
if(tipo.value=='admin'){
	visitante.push(
		{
					label:'Dashboard',
					path:'dashboard/default',
					command: () => {
						route.push({path:'/dashboard/default'})
					}
				}
	)
	
	items.value= visitante
}
items.value = visitante
let splitButtonMenu =[
	{
		label: 'Cambiar Contraseña',
		icon: 'pi pi-edit',
		command: () => {
			console.log('cambiar contraseña')
		}
	},
	{
		label: 'Salir',
		icon: 'pi pi-times',
		command: () => {
			route.push({name:'salir'})
		}
	},
]

const toggle = (event) => {
	
  	
    op.value.toggle(event);

};	

const moverme = (ruta) =>{
	
	console.log('ingrese::: ');
	route.push({name:ruta})
}

const pagar = async () =>{

	let {data} = await mockApi.get(`/compras/`)
	console.log('data::: ', data);
	
	cursos.value.forEach(async(curso, index) => {
		console.log('curso::: ', curso.id);
		//! aca lo tengo que tomar del cliente que esta comprando
		let cursoExistente = data.find(item => item.idcliente===2 && item.idcurso==curso.id);

		console.log('cursoExistente::: ', cursoExistente);
		if(!cursoExistente){

			let pago = {
				idcliente:2,
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
					
					<Button v-if="cursosCantidad>=1" type="button" icon="pi pi-cart-plus" @click="toggle" class="mr-3 p-button p-component p-button-rounded p-button-warning" />
					<Button v-if="!nombre" label="Ingresar" 
					class="p-button-outlined p-button-secondary" @click="moverme('login')" icon="pi pi-user" />

					
					<template v-else>
						<SplitButton :label="nombre" 
						:model="splitButtonMenu" 
						class="p-button-secondary p-splitbutton-defaultbutton">
						</SplitButton>
					
						<Avatar  :image="foto" class="ml-5 mr-2"  shape="circle" />
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