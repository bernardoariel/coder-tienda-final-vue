<script setup>
import { useRouter } from "vue-router";
import { useUsuarioStore } from "../../stores/usuarioStore";

const route = useRouter()
const usuarioStore = useUsuarioStore();
const {borrarUsuario} =usuarioStore
borrarUsuario()
localStorage.removeItem('user');

route.push({name:'defaultUser'})
</script>
<template>
    <div>

    </div>
</template>


<style lang="scss" scoped>

</style>