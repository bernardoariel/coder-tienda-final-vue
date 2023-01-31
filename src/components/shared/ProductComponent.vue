<template>
    <div class="flex justify-content-center w-full">
        <div class="flex flex-column  surface-card p-4 shadow-2 border-round w-4 m-4">
            <div class="flex justify-content-center text-3xl font-medium text-900 mb-3">{{producto.nombre}}</div>
            <div class="flex justify-content-center font-medium text-500 mb-3">{{producto.descripcion}}</div>
           
          
            <hr>
            
            <div class="flex justify-content-center font-medium text-500 mb-3">$ {{producto.precio}}</div>
 
            <div class="flex justify-content-center">
                <img :src="producto.foto" heigth="250" width="250" />
            </div>
            <!-- <Image :src="producto.foto"/> -->
           <div class="flex justify-content-center mt-3">
            <Button v-if="usuarioStore.tipo=='cliente'" 
                label="Seleccionar" class="flex justify-content-center p-button-success" 
                @click="agregarCurso(producto)"></Button>
            <Button v-if="usuarioStore.tipo=='admin'" label="Editar" 
            class="p-button-danger" @click="editar(producto.id)"></Button>
           </div>
           

        </div>
    </div>
    
    <div class="flex">
    <div class=" flex flex-column surface-card p-4 shadow-2 border-round w-3 m-4" 
        v-for="curso of cursos" :key="producto.id">
        
        <!-- <Image :src="curso.foto" h/> -->
        <div class="flex justify-content-center">
        <img :src="curso.foto" heigth="150" width="150">
        </div>
        <div class="text-3xl font-medium text-900 mb-3 flex justify-content-center">{{curso.nombre}}</div>
        <div class="font-medium text-500 mb-3 flex justify-content-center">{{curso.descripcion}}</div>
        <Button label="Chusmear el curso" @click="navegar(curso.id)"
         class="p-3 w-full p-button-outlined"></Button>    
    
    </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import mockApi from "@/api/mockapiApi"
import { useRoute, useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/loginStore';
import { useUsuarioStore } from '@/stores/usuarioStore';
import { storeToRefs } from 'pinia';
import { useCarritoStore } from '../../stores/carritoStore';
let producto = ref([]);
let cursos = ref([]);
let usuario = ref({})
const route = useRouter()
const { params, path } = useRoute();

/* store */
// corroborar User y cargar el store 
const {cargarUser} = useLoginStore();
const usuarioStore = useUsuarioStore();
const {existeUsuario} = usuarioStore;
const {email,tipo,foto,nombre} = storeToRefs(usuarioStore)        
console.log('tipo::: ', tipo);

const carritoStore = useCarritoStore();


onMounted(async () => {
  
    /* consulto si hay un usuario */
    const param = params.id;
    try{

        const {data} = await mockApi.get(`/productos/${param}`)
        producto.value = data
        console.log('producto.value::: ', producto.value);
        if(!data){
            route.push({ path: '/tienda' })
        }
    }catch(error){

        console.log('error::: ', error);
        route.push({ path: '/tienda' }); 
    }

    cargarUser(existeUsuario())
    const {data:data2} = await mockApi.get('/productos')
    cursos.value = data2.slice().sort(() => Math.random() - 0.5).slice(0, 4);
})
const navegar = (id) =>{

    console.log('est')
    if(!path.includes('otro')){

        route.push({path:`/producto/otro/${id}`})
    }else{
        route.push({path:`/producto/${id}`})
    }

}
const editar = (id) =>{



    route.push({path:`/editar/${id}`})


}
const agregarCurso = (curso) =>{
    
    carritoStore.agregarCursoCarrito(curso);
    
}


</script>

<style lang="scss" scoped>

</style>