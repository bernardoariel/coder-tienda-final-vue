<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
const route = useRouter()
const props = defineProps({
    productos:Array,
    titulo:String
});
const navegar = (id) =>{
    console.log('id::: ', id);
    
    route.push({path:`/producto/${id}`})
}
</script>
<template>
    <div class="flex justify-content-start flex-wrap">
        <Card class=" w-3 m-3" v-for="item of productos" :key="item.id">
            <template #header>
                <img alt="user header" :src="item.foto"  height="250">
            </template>
            <template #title>
                {{item.nombre}}  
            </template>
            <template #content>
            {{ item.descripcion }}
            <hr>
            Importe $: {{ item.precio  }}
            </template>
            <template #footer>
                
                <Button label="Ver Curso" @click="navegar(item.id)" icon="pi pi-star-fill" class="p-button-success  mr-2" />
                
            </template>
        </Card>
    </div>
    
</template>


<style scoped>

</style>
