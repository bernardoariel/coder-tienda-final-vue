<script setup>
import MenuComponent from "@/components/shared/MenuComponent.vue"
import FooterComponent from "@/components/shared/FooterComponent.vue"
</script>

<template>
    <MenuComponent/>
    
    <router-view></router-view>   
    <FooterComponent class="footer"/>
</template>


<style  scoped>
footer {
 
 position: absolute !important;
 bottom: 0;
 width: 100%;
 
}
</style>