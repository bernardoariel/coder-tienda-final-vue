<script setup>
import MenuComponent from "@/components/shared/MenuComponent.vue"

import FooterComponent from "@/components/shared/FooterComponent.vue"
</script>

<template>
    <MenuComponent/>
    
    <router-view></router-view>   
    <FooterComponent/>
</template>


<style lang="scss" scoped>

</style>