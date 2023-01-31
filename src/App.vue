<script setup>
import { useUsuarioStore } from './stores/usuarioStore';

const usuarioStore = useUsuarioStore();
const {existeUsuario} = usuarioStore
existeUsuario()
</script>

<template>
  
<RouterView />

</template>

<style scoped>

</style>
