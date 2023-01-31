<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import mockApi from "@/api/mockapiApi"
import { useUsuarioStore } from '../../stores/usuarioStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const email = ref('@hotmail.com')
const password = ref('')
const checked = ref(false)

let login = async () => {
    const {data} = await mockApi.get('/usuarios')
   
    // const { data } = await getUsuario();
    const user = data.find(user => user.email === email.value && user.password === password.value);
    // console.log('user::: ', user);

    if (user) {
        
        localStorage.setItem('user', JSON.stringify({ email: user.email }))
        // console.log('user.email::: ', user.email);
        /* store */
       const usuarioStore = useUsuarioStore();
        const {agregarUsuario} = usuarioStore
     
        agregarUsuario(user)
        //enviar layout de admin
        if(user.id===1 || user.tipo == true){

            router.push({path:'/dashboard/default'})

        }else{

            router.push({path:'/dashboard/default'})

        }

      } else {
        alert('Email o contraseña inválidos')
      }
}
let irRegistro = () =>{
    router.push({name:'registro'})
}
</script>
<template>
    <div class="flex justify-content-center  flex-wrap card-container green-container">
        <div class="surface-card p-4 shadow-2 border-round w-6 center mt-5">
    <div class="text-center mb-5">
        
        <div class="text-900 text-3xl font-medium mb-3">Bienvenido a BernyCursos</div>
        <span class="text-600 font-medium line-height-3">No tienes cuenta?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="irRegistro">Crear una cuenta ahora!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" v-model="email" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" v-model="password"/>

        <!-- <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Recordar </label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Olvidé mi password?</a>
        </div> -->

        <Button label="Ingresar" icon="pi pi-user" class="w-full" @click.prevent="login"></Button>
    </div>
</div>
    </div>
</template>


<style scoped>

</style>