<script setup>
import { ref } from 'vue'
let display1 = ref(false)
</script>
<template>
    <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 Hot Ofertas!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Seguimos Creciendo poco a poco sumamos mas cursos.!</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <!-- <a class="text-white" href="#"><span class="underline font-bold">Este no es</span></a> -->
    </a>
    <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem " @click="display1=!display1">
        <i class="pi pi-times" ></i>
    </a>
  
</div>
<Dialog header="Aviso!" v-model:visible="display1" >
            Epaaaa ! no toques ahi
        </Dialog>

        </template>
 

<style  scoped>

</style>