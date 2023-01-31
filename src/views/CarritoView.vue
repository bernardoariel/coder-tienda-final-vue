<template>

        <div  class="grid m-5">
            
            <div class="col-6">
                <h1>Carrito de compras</h1>
                
                <DataTable :value="cursos" class="w-full">
                    <Column field="nombrecurso" header="Nombre"></Column>
                    <Column field="precio" header="Precio"></Column>
                    <Column :exportable="false" header="Accion" >
                        <template #body="slotProps">
                            
                            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="" />
                        </template>
                    </Column>
  
                </DataTable>
           
            </div>
            
            <div class="col-6">
               
                <h1>Total a Pagar: ${{ 50000 }}</h1>
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
       <!--  <div v-else>
            <h2 class="m-5">No hay items en el carrito</h2>
        </div> -->
        
</template>

<script setup>

    import { ref, onMounted,computed, watch  } from 'vue';
    import mockApi from "@/api/mockapiApiCompras"

    let tarjeta = ref('')
    let vencimiento = ref('')
    let codigo = ref('')
    let errorCurso = ref(false)
    let cursos = ref([])
    
onMounted(async () => {

try{

    let {data} = await mockApi.get(`/compras/`)
    cursos.value = data.filter(carrito =>  carrito.idcliente===2 && carrito.pagado==false)
    
}catch(error){

    console.log('error::: ', error);
    
}


})
const pagar = () =>{
    cursos.value.forEach(async(curso, index) => {
        
        let compra = {
            ...curso,
            pagado: true,
        }

        await mockApi.put(`/compras/${curso.id}`,compra)
		cursos.value =[]
	});
}  

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
watch(cursos, (newValue, oldValue) => {
  console.log(`Valor antiguo de cursos: ${oldValue}`);
  console.log(`Nuevo valor de cursos: ${newValue}`);
});
</script>

<style lang="scss" scoped>

</style>