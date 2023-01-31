<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
const route = useRouter()
const props = defineProps({
    productos:Array,
    titulo:String
});
const navegar = (id) =>{
    console.log(id)
    route.push({path:`/producto/${id}`})
}
</script>
<template>
    <Carousel 
        :value="props.productos" :numVisible="5" 
        :numScroll="1" :responsiveOptions="responsiveOptions" 
        class="custom-carousel" :circular="true" :autoplayInterval="5000">
        <template #header>
            <h5>{{props.titulo}}</h5>
        </template>
        <template #item="slotProps">
            <div class="border-2 border-dotted surface-border w-6 dp-4">
                <div class="product-item-content">
                    <div class="mb-3">
                        <Image :src="slotProps.data.foto" :alt="slotProps.data.nombre"
                        class="product-image" width="150" heigth="300" />
            
                    </div>
                    <div>
                        <h4 class="mb-1">{{slotProps.data.nombre}}</h4>
                        <h6 class="mt-0 mb-3">${{slotProps.data.precio}}</h6>
                        <div class="car-buttons mt-5">
                            <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                            <Button label="Ver Curso" @click="navegar(slotProps.data.id)" icon="pi pi-star-fill" class="p-button-success  mr-2" />
                            <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Carousel>
</template>


<style lang="scss" scoped>

</style>