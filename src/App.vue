<script setup>
import { VApp } from 'vuetify/components';
</script>

<template>
  <VApp>
    <!--<Navbar />-->
    <main>
      <router-view></router-view>
    </main>
    <!--<Footer />-->
  </VApp>
</template>
<style scoped>
#app{
  background-color: #C6BAAF;
}
</style>