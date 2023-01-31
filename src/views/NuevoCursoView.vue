<template>
   <h1 v-if="errorCurso" class="text-red-500 ml-5 mt-5">Por favor complete todos los campos</h1>
   <Panel header="Crear un Nuevo curso" class="w-6 m-5">
    <form @submit.prevent="validateForm">

        <div class="grid">

            <div class="col-6">
                <label for="nombre" class="mr-5">Curso</label>
            </div>   

            <div class="col-6">
            <InputText type="text" v-model="curso.nombre"
                placeholder="Ingrese el nombre del curso" class="w-10"/>
            </div>   
            
            <div class="col-6">
                <label  class="mr-5">Seleccione Frontend/Backend</label>
            </div>

            <div class="col-6">
                <ToggleButton v-model="toogleFrontend" 
                    inputClass="success"
                    onLabel="Frontend" 
                    offLabel="Backend" 
                    onIcon="pi pi-arrow-up" 
                    offIcon="pi pi-arrow-down" 
                    class="w-full sm:w-15rem mt-1"
                    :class="toogleFrontend ? 'bg-green-500 border-green-500 text-white': 'bg-red-500 border-red-500 text-white'"
                    aria-label="do you confirm" />
            </div>

            <div class="col-6">
                <label for="descripcion">Ingrese una descripcion:</label>
            </div>

            <div class="col-6">
                <Textarea v-model="curso.descripcion" rows="3" cols="46" />
            </div>   
            <div class="col-6">
                <label for="nombre" class="mr-5 w-6">Foto</label>
            </div>
            <div class="col-6">
                <InputText  type="text" v-model="curso.foto" 
                placeholder="Ingrese la url de la foto del curso" class="w-10"/>
            </div>
            <div class="col-6">
                <label for="nombre" class="mr-5 ">Precio</label>
            </div>
            <div class="col-6">
                <InputText type="text" v-model="curso.precio" placeholder="Ingrese la url de la foto del curso" class="w-10"/>
            </div>

            
            <div class="col-6">
            <Button label="Cancelar" class="w-full p-button-secondary" icon="pi pi-fast-backward"  @click="salir()"/>
        </div>
        <div class="col-6">
            <Button label="Guardar" class="w-full"   icon="pi pi-check" :loading="isLoading" @click="validateForm()"/>
        </div>    
            </div>
        </form>
   </Panel>
    


</template>

<script setup>
import mockApi from "@/api/mockapiApi"
import { ref , onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/loginStore';
import { useUsuarioStore } from '@/stores/usuarioStore';
import { storeToRefs } from 'pinia';
const router = useRouter()
const { params, path } = useRoute();
/* store */
const {cargarUser} = useLoginStore();
const usuarioStore = useUsuarioStore();
const {existeUsuario} = usuarioStore;
const {email,tipo,foto,nombre} = storeToRefs( usuarioStore)   
/* ----- */
const toogleFrontend = ref(true) 

const isLoading = ref(false)
const isLoadingDel = ref(false)
const errorCurso = ref(false)

    
/* curso */
let curso = ref({
    id:0,
    nombre:'',
    categoria:(toogleFrontend)?'frontend':'backend',
    descripcion:'',
    foto:'',
    precio:0,
})

onMounted(async () => {

    cargarUser(existeUsuario())

})

let guardar = async() =>{
    
    try {
        
        
        isLoading.value = true
        let respuesta = await mockApi.post(`/productos/`,curso.value)
        
        isLoading.value = false

        router.push({path:'/dashboard/default'})

    }catch(error){

        throw(error)
        

    }
}
const isFormValid = computed(() => {
    return (
        curso.value.nombre.trim() !== '' &&
        curso.value.descripcion.trim() !== '' &&
        curso.value.foto.trim() !== '' &&
        curso.value.precio !== 0
    );
});

const validateForm = () => {
    if (!isFormValid.value) {
        errorCurso.value= true
    }else{
        errorCurso.value= false
        guardar()
    }
};
let salir =()=>{
        router.push({path:'/dashboard/default'})
    }

  
</script>

<style lang="scss" scoped>

</style>