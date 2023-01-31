<template>

        <div  class="grid m-5">
            
            <div class="col-6">
                <h1>Carrito de compras</h1>
                
                <DataTable :value="cursos" class="w-full">
                    <Column field="nombrecurso" header="Nombre"></Column>
                    <Column field="precio" header="Precio"></Column>
                    <Column :exportable="false" header="Accion" >
                        <template #body="slotProps">
                            
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="eliminarCurso(slotProps.data.id)" />
                        </template>
                    </Column>
  
                </DataTable>
           
            </div>
            
            <div class="col-6" v-if="sumaPrecios!=0">
               
                <h1>Total a Pagar: ${{ sumaPrecios }}</h1>
                <h3 v-if="errorCurso" class="text-red-500">Falta completar algunos campos</h3>
                
                <div class="col-4">
                    <label>Tarjeta de credito</label>
                    <InputMask v-model="tarjeta" mask="9999-9999-9999-9999" />
                </div>
               
                <div class="col-3">
                    
                    <label>Fecha de Vencimiento</label>
                    <InputMask v-model="vencimiento" mask="99-99" />
                
                </div>

                <div class="col-3">
                    
                    <label>Codigo de seguridad</label>
                    <InputText v-model="codigo"/>
                
                </div>
             
                <div class="col-6">
                    <Button label="Pagar" class="w-full" @click.prevent="validateForm"/>
                </div>
            </div>
            
        </div>
     <!--   <div v-else class="flex justify-content-center">
            <h2 class="m-5">No hay items en el carrito</h2>
        </div> -->
        
</template>

<script setup>

import { ref, onMounted,computed, watch  } from 'vue';
import mockApi from "@/api/mockapiApiCompras"
import mockApiUsuarios from "@/api/mockapiApi"
import { useUsuarioStore } from '../stores/usuarioStore';
import router from '../router';
    
    let tarjeta = ref('')
    let vencimiento = ref('')
    let codigo = ref('')
    let errorCurso = ref(false)
    let cursos = ref([])
    let sumaPrecios  = ref(0)
    /* store */
    const usuarioStore = useUsuarioStore();

    let eliminarCurso = async(id) =>{
        console.log('id::: ', id);
        let respuesta = await mockApi.delete(`/compras/${id}`)
        cargarGrilla()
        
    }
    let cargarGrilla = async() =>{
        const {data:datauser} = await mockApiUsuarios.get('/usuarios')
	let usuario = datauser.find(item => item.email == usuarioStore.email);
        let {data} = await mockApi.get(`/compras/`)
        cursos.value = data.filter(carrito =>  carrito.idcliente===usuario.id && carrito.pagado==false)
        sumaPrecios = cursos.value.reduce((total, carrito) => total + parseFloat(carrito.precio), 0)
    }
onMounted(async () => {

try{
    

    cargarGrilla()

}catch(error){

    console.log('error::: ', error);
    
}


})
const pagar = async () => {
    const promises = cursos.value.map(async (curso, index) => {
        let compra = {
            ...curso,
            pagado: true,
        }

        await mockApi.put(`/compras/${curso.id}`,compra)
    });
    await Promise.all(promises);
    cursos.value = [];
    router.push({path:'/default'})
};


const isFormValid = computed(() => {
    return (
        tarjeta.value.trim() !== '' &&
        vencimiento.value.trim() !== '' &&
        codigo.value.trim() !== ''
    );
});

const validateForm = () => {
    if (!isFormValid.value) {
        errorCurso.value= true
    }else{
        errorCurso.value= false
        pagar()
    }
};
/* watch(cursos, (newValue, oldValue) => {
  console.log(`Valor antiguo de cursos: ${oldValue}`);
  console.log(`Nuevo valor de cursos: ${newValue}`);
}); */
</script>

<style lang="scss" scoped>

</style>