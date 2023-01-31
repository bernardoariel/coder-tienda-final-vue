<template>
    <Panel :header="props.titulo" class="w-5 m-5" :toggleable="true" >
        <DataTable :value="datos" responsiveLayout="scroll"  :paginator="true" :rows="3">
            <Column field="nombre" header="Nombre"></Column>
            <Column field="categoria" header="Tipo"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.foto" width="100" :alt="slotProps.data.foto" class="product-image" />
                </template>
            </Column>
            
            <Column :exportable="false" style="min-width:8rem">
                    <template #body="{data}">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(data.id)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(data.id)" />
                    </template>
                </Column>
        </DataTable>
    </Panel>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import mockApi from "@/api/mockapiApi"
import { useRouter } from 'vue-router';


const router = useRouter();
const props = defineProps({
    datos:String,
    titulo:String
});

let datos = ref([])
onMounted(async () => {
    
    const {data} = await mockApi.get(`/${props.datos}`)
    // console.log('data::: ', data); 
    datos.value = data
})
let confirmDeleteProduct = async(id)=>{
   
    let respuesta = await mockApi.delete(`/${props.datos}/${id}`)
    // console.log('respuesta::: ', respuesta);
}
let editProduct = async(id)=>{
    // console.log('id::: ', id);
    
    router.push({path:`/editar/${id}`})
}
</script>

<style lang="scss" scoped>

</style>