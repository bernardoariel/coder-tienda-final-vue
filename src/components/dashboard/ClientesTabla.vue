<template>
    <Panel :header="props.titulo" class="w-5 m-5" :toggleable="true" >
        <DataTable :value="datos" responsiveLayout="scroll"  :paginator="true" :rows="3">
            <Column field="nombre" header="Nombre"></Column>
            <Column field="email" header="Email"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.image" width="100" :alt="slotProps.data.image" class="product-image" />
                </template>
            </Column>
            <Column field="tipousuario" header="Tipo Usuario">
                <template #body="{data}">
                    
                    <Badge v-if="data.tipousuario==true" severity="danger">Admin</Badge>
                    <Badge v-else severity="success">Usuario</Badge>
                    
                </template>
                
            </Column>
            <Column :exportable="false" style="min-width:8rem">
                    <template #body="{data}">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(data.id)" />
                        <Button v-if="data.id !=1" icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(data.id)" />
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
    datos.value = data.filter(item => item.id !== "1");
})
let confirmDeleteProduct = async(id)=>{
   
    let respuesta = await mockApi.delete(`/${props.datos}/${id}`)
    console.log('respuesta::: ', respuesta);
}
let editProduct = async(id)=>{
    console.log('id::: ', id);
    
    router.push({path:`/editarusuario/${id}`})
}
</script>

<style lang="scss" scoped>

</style>