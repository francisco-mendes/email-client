<template>
<div class = "antialiased bg-background w-screen h-screen">
  <div class = "max-w-8xl mx-auto h-full divide grid justify-between">
    <side-menu />
    <div class = "bg-back-base"></div>
  </div>
</div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: auto 1fr;
}
</style>

<script setup lang = "ts">
import SideMenu from "@/components/SideMenu.vue";
</script>
