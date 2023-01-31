<template>
    <h1 v-if="errorCurso" class="text-red-500 ml-5 mt-5">Por favor complete todos los campos</h1>
    <Panel header="Crear un Nuevo curso" class="w-6 m-5">
     <form @submit.prevent="validateForm">
 
         <div class="grid">
 
             <div class="col-6">
                 <label for="nombre" class="mr-5">Curso</label>
             </div>   
 
             <div class="col-6"><InputText type="text" v-model="curso.nombre"
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
                <Button label="Guardar"  class="w-full" icon="pi pi-check" :loading="isLoading" @click="validateForm()"/>
             </div>

             
             <!-- <Button label="Eliminar este Curso" class="p-button p-component p-button-raised p-button-danger" icon="pi pi-trash" :loading="isLoadingDel" @click="eliminar()"/> -->
             
             </div>
         </form>
    </Panel>
     
 
</template>

<script setup>
import mockApi from "@/api/mockapiApi"
import { ref , onMounted, computed} from 'vue'
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
const toogleOferta = ref(true) 
const isLoading = ref(false)
const isLoadingDel = ref(false)
const errorCurso = ref(false)
    
    /* curso */
    let curso = ref({
        
    })
    const nombreCurso = ref('')
    const descripcionCurso = ref('') 
    const fotoCurso = ref('') 
    

    onMounted(async () => {

        cargarUser(existeUsuario())

        /* consulto si hay un usuario */
        const param = params.id;

        try{

             const {data} = await mockApi.get(`/productos/${params.id}`)
            if (!data) {
                router.push({ path: '/tienda' });
            } else {

                // if(toogleFrontend.value) toogleFrontend.value = !toogleFrontend.valueif
                
                if(data.categoria=='backend'){
                    toogleFrontend.value= false
                }
                // console.log('toogleFrontend.value::: ', toogleFrontend.value);
                curso.value = {
                    id:data.id,
                    nombre:data.nombre,
                    categoria:data.categoria,
                    descripcion:data.descripcion,
                    foto:data.foto,
                    precio:data.precio
                }
            }
        }catch(error){


            router.push({path:'/tienda'})


        }

        
        

    })

    let guardar = async() =>{
       
        try {
           
            isLoading.value = true
            curso.value.categoria = (toogleFrontend.value)?'frontend':'backend'
            // console.log('curso.value::: ', curso.value);
            let respuesta = await mockApi.put(`/productos/${params.id}`,curso.value)
           
            isLoading.value = false
            // router.push({path:'/tienda'})
            router.push({path:'/dashboard/default'}) 

        }catch(error){

            throw(error)
            

        }
    }

    let salir =()=>{
        router.push({path:'/dashboard/default'})
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

    </script>

<style lang="scss" scoped>

</style>