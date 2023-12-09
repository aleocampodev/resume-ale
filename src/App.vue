<script setup>
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
</script>

<template>
  <section class="container-fluid">
    <Header />
    <div class="col d-flex">
        <Aside />
        <Main />
    </div>
  </section>
</template>

<style lang="scss">
@import "./assets/css/style.scss";
</style>
