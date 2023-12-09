<script setup>
import { reactive } from 'vue'
import image from '../assets/img/picture.png'
import { useI18n } from "vue-i18n";

const { t } = useI18n();


const header = reactive({
  firstName: 'Alejandra',
  lastName: 'Ocampo',
  jobTitle: t('jobTitle'),
  photo: image
});
</script>

<template>
  <header class="header position-relative">
    <animatable-component autoplay animation="fadeInDownBig"  easing="ease-in-out" duration="1200">
      <div class="headLine position-absolute"></div>
    </animatable-component>
    <div class="row">
      <div class="col">
        <animatable-component
          autoplay
          animation="fadeInLeft"
          easing="ease-in-out"
          duration="1200"
        >
          <h1 class="firstName text-break">
            {{ header.firstName }}
          </h1>
        </animatable-component>
        <animatable-component
          autoplay
          animation="fadeInDown"
          easing="ease-in-out"
          duration="1200"
        >
          <h2 class="lastName text-nowrap">
            {{ header.lastName }}
          </h2>
        </animatable-component>
        <animatable-component
          autoplay
          animation="fade-in-left"
          easing="ease-in-out"
          duration="1200"
        >
          <p class="jobTitle">
            <i class="bi bi-circle-fill"></i>
            <span class="text-break">
              {{ header.jobTitle }}
            </span>
          </p>
        </animatable-component>
      </div>
      <div v-if="!!header.photo" class="col-auto d-none d-lg-block d-print-block">
        <animatable-component autoplay animation="rotateIn" easing="ease-in" duration="1200">
          <img v-bind:src.prop="header.photo" class="photo border border-2 border-dark rounded-circle img-fluid float-end img-thumbnail">
        </animatable-component>
      </div>
    </div>
    <animatable-component autoplay animation="fadeInUpBig"  easing="ease-in-out" duration="1200">
      <div class="middleLine position-absolute"></div>
    </animatable-component>
  </header>
</template>



<style lang="scss">
@import "../assets/css/style.scss";
</style>