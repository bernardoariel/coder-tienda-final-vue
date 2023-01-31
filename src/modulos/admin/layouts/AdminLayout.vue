<script setup>
import MenuComponent from "@/components/shared/MenuComponent.vue"
import FooterComponent from "@/components/shared/FooterComponent.vue"
import ClientesTabla from "../../../components/dashboard/ClientesTabla.vue";
import CursosTabla from "../../../components/dashboard/CursosTabla.vue";

</script>

<template>
    <MenuComponent/>
    
    <router-view></router-view>  
    <div class="flex">
        <ClientesTabla titulo="Tabla de usuarios" datos="usuarios"/>
        <CursosTabla titulo="Tabla de Cursos" datos="productos"/>
        <!-- <ClientesTabla titulo="otra tabla" datos="compras"/> -->
    </div> 
    <FooterComponent/>
</template>


<style lang="scss" scoped>

</style>