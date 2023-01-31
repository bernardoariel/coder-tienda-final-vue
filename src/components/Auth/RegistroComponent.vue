<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import mockApi from "@/api/mockapiApi"


const router = useRouter();

const email = ref('')
const password = ref('')
const foto = ref('')
const nombre = ref('')
const errorValidacion = ref(false)

let registrarse = async () => {
    
    let usuario ={
        nombre:nombre.value,
        email:email.value,
        password:password.value,
        image:foto.value,
        tipousuario: false
    }

    await mockApi.post(`/usuarios`,usuario)
    irLogin()

}
let irLogin = () =>{
    router.push({name:'login'})
}

const isFormValid = computed(() => {
    return (
        nombre.value.trim() !== '' &&
        email.value.trim() !== '' &&
        foto.value.trim() !== '' &&
        password.value.trim() !== ''
    );
});

const validateForm = () => {
    if (!isFormValid.value) {
        errorValidacion.value= true
    }else{
        errorValidacion.value= false
        registrarse()
    }
};

</script>
<template>
    <div class="flex justify-content-center  flex-wrap card-container green-container">
        <div class="surface-card p-4 shadow-2 border-round w-6 center mt-5">
    <div class="text-center mb-5">
        
        <div class="text-900 text-3xl font-medium mb-3">Bienvenido a BernyCursos</div>
        <span class="text-600 font-medium line-height-3">Ya Tienes Cuenta?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="irLogin">Logueate</a>
    </div>
    <h3 v-if="errorValidacion" class="text-red-500">Existe un error en los datos ingresados</h3>
    <div>
        <label for="nombre" class="block text-900 font-medium mb-2">Nombre</label>
        <InputText id="nombre" type="text" class="w-full mb-3" v-model="nombre"/>

        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" v-model="email" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" v-model="password"/>
        
        <label for="avatar" class="block text-900 font-medium mb-2">Avatar</label>
        <InputText id="avatar" type="text" class="w-full mb-3" v-model="foto" />

        <Button label="Registrate" icon="pi pi-user-plus" class="w-full p-button-success" @click.prevent="validateForm"></Button>
    </div>
</div>
    </div>
</template>


<style scoped>

</style>