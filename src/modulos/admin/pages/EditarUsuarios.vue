<template>
    <h1 v-if="errorValidacion">Hay un error en los datos ingresados</h1>
    
    <Panel header="Editar usuario" class="w-6 m-5">
    
    <div class="grid">
    
        <div class="col-6">
        
            <label for="Nombre">Ingrese el Nombre</label>
        </div>
        <div class="col-6">
            <InputText type="text" class="w-10" v-model="nombre" />

        </div>   
        <div class="col-6">
        
            <label for="Nombre">Ingrese el email</label>
            </div>
        <div class="col-6">
            <InputText type="text" class="w-10" v-model="email" />
        
        </div>   
        <div class="col-6">
        
            <label for="Nombre">Ingrese el password</label>
            </div>

        <div class="col-6">
            <InputText type="text" class="w-10" v-model="password" />
    
        </div>  
        <div class="col-6">
        
            <label for="Nombre">Ingrese la imagen</label>
        </div>

        <div class="col-6">
            <InputText class="w-10" type="text" v-model="imagen" />
    
        </div>  
        <div class="col-6">
        
        <label for="Nombre">Tipo de Usuario</label>
        </div>
  
        <div class="col-6" >
            <Dropdown v-model="selectedTipo" class="w-10" :options="usuarios" optionLabel="name"  :placeholder="selectedTipo"/>
        </div>
        <div class="col-6">
            <Button label="Cancelar" class="w-full p-button-secondary" icon="pi pi-fast-backward"  @click="salir()"/>
        </div>
        <div class="col-6">
            <Button label="Guardar" icon="pi pi-user" class="w-full" @click.prevent="validateForm"></Button>
        </div>
        
        
    </div>
    </Panel>
</template>

<script setup>
 import { ref ,computed, onMounted  } from 'vue';
 import mockApi from "@/api/mockapiApi"  
 import { useRoute, useRouter } from 'vue-router';
 let selectedTipo = ref()
 let usuarios = ref([
    {name: 'Admin', code: 'admin'},
	{name: 'Usuario', code: 'usuario'},
 ])
	

let nombre = ref('')
let email = ref('')
let password = ref('')
let imagen = ref('')
let errorValidacion = ref(false)
const { params, path } = useRoute();
const router = useRouter();
onMounted(async () => {
    
    console.log('${param.id}::: ', params.id);
    const {data} = await mockApi.get(`/usuarios/${params.id}`)
    // console.log('data::: ', data);
    nombre.value = data.nombre
    email.value = data.email
    password.value = data.password
    imagen.value = data.image
    selectedTipo.value =  (data.tipousuario)? 'Admin':'Usuario'
    
})


const isFormValid = computed(() => {
    return (
        nombre.value.trim() !== '' &&
        email.value.trim() !== '' &&
        imagen.value.trim() !== '' &&
        password.value.trim() !== ''
    );
});

const validateForm = () => {
    if (!isFormValid.value) {
        errorValidacion.value= true
    }else{
        errorValidacion.value= false
        guardar()
    }
};

const guardar = async () =>{
   
    let usuario ={
        nombre:nombre.value,
        email:email.value,
        password:password.value,
        image:imagen.value,
        tipousuario: (selectedTipo.value.name=='Admin')? true: false
    }
 


   await mockApi.put(`/usuarios/${params.id}`,usuario)
    router.push({path:'/dashboard/default'}) 

}  

let salir =()=>{
        router.push({path:'/dashboard/default'})
    }
</script>

<style lang="scss" scoped>

</style>