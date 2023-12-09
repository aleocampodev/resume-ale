<script setup>
import { reactive } from 'vue'
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const aside = reactive({
	city: 'Medellín',
	country: 'Colombia',
	email: 'aleocampo.dev@gmail.com',
	school: 'Instituto Tecnológico Metropolitano',
	graduationDate: '2017',
	profesion: t('profesion'),
	courses: t('courses'),
	education: t('education'),
	studyprogram: [
    	{
			id:1,
      		course: 'Responsive Web Design',
      		school: 'Freecodecamp',
      		date: '2023',
    	} ,
    	{
			id:2,
      		course: 'JavaScript Algorithms and Data Structures',
      		school: 'Freecodecamp',
      		date: '2023'
    	},
    	{
			id:3,
			course: 'Front End Development Libraries',
			school: 'Freecodecamp',
			date:'2023'
    	},
		{
			id:4,
			course: 'Back End Development and APIs',
			school:'Freecodecamp',
			date:'2023',
		},
		{
			id:5,
      		course: 'Curso Profesional de JavaScript',
			school: 'Código facilito',
			date: '2020'
        },
        {
			id:6,
			course:'Curso Profesional de React',
			school:'Código facilito',
			date:'2020'
    	},
		{
			id:7,
			course:'HTML,CSS & JavaScript -Certification Course for Begginers ',
			school:'Udemy',
			date:'2020'
		},
		{
			id:8,
			course:'Vue 2',
			school:'Udemy',
			date:'2018'
		} 
   ],
   links: [
    	{
			id:1,
      		label: 'GitHub',
      		link: 'https://github.com/aleocampodev'
        },
        {
			id:2,
      		label: 'LinkedIn',
      	    link: 'https://www.linkedin.com/in/aleocampodev/'
    	},
    ],
    skills: [
		{
			id:1,
			skill: 'JavaScript'
		},
		{
			id:2,
			skill: 'TypeScript'
		},
		{
			id:3,
			skill: 'ReactJs'
		},
		{
			id:4,
			skill: 'Firebase'
		},
		{
			id:5,
			skill: 'NextJs'
		},
		{
			id:6,
			skill: 'Vue'
		},
		{
			id:7,
			skill: 'NuxtJs'
		},
		{
			id:8,
			skill: 'Bootstrap'
		},
		{
			id:9,
			skill: 'Tailwind'
		},      
    ],
    languages: [
		{
			id:1,
			language: 'Spanish'
		},
		{
			id:1,
			language: 'English B1'
		}
	],
})

</script>

<template>
	<div class="col personal-details me-4 col-4">
        <div class="row list-item me-5">
            <div class="col-auto">
                <animatable-component autoplay animation="heartBeat" easing="ease-in" duration="1200">
                  <div class="icon d-flex justify-content-center">
                    <i class="bi bi-geo-alt-fill" role="img" aria-label="Location"></i>
                  </div>
                </animatable-component>
            </div>
            <div class="col" style="white-space: pre-line;">
                <p>{{ `${aside.city}, ${aside.country} `}}</p>
            </div>
        </div>
        <div class="row list-item me-5">
            <div class="col-auto align-self-center">
                <animatable-component autoplay animation="flip" easing="ease-in" duration="1200">
                  <div class="icon d-flex justify-content-center">
                    <i class="bi bi-envelope-fill" role="img" aria-label="Email"></i>
                  </div>
                </animatable-component>
            </div>
            <div class="col">
                <a v-bind:href="'mailto:'+ email" class="text-decoration-none">
                  <p>{{ aside.email }}</p>
                </a>
            </div>
        </div>
        <div class="row mt-5 me-5">
            <div class="col">
                <p class="title">{{ aside.education }}</p>
                <p>{{aside.school}} </p>
                <p> {{aside.pofesion}}</p>
                <p> {{ aside.graduationDate}}</p>
                <p class="fw-bold text-uppercase">
                  {{ aside.courses }}
                </p>
            </div>
        </div>
        <div>
              
        </div>
        <div class="row record" v-for="e in aside.studyprogram" :key="e.id"> 
            <div class="col-auto bullet">
                <i class="bi bi-record-circle"></i>
            </div>
            <div class="col">
                <p class="fw-bold ">
                  {{ e.course }}
                </p>
                <p>{{e.school}}</p>
                <p>{{ e.date}}</p>
            </div> 
        </div>
        <div class="row mt-5 me-5">
            <div class="col p-0">
                <p class="title">Links</p>
            </div>
        </div>
        <div class="row record me-4" v-for="l in aside.links"  :key="l.id">
            <div class="col-auto bullet mb-5">
                <i class="bi bi-record-circle"></i>
            </div>
            <div class="col">
                <p>
                  {{ l.label }}:
                  <a class="text-reset" target="_blank" v-bind:href.prop="l.link">
                    {{ l.link }}
                  </a>
                </p>
            </div>
        </div>
        <div class="row mt-5 me-5">
            <div class="col p-0">
                <p class="title">Skills</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul class="ms-2">
                  <li class="pb-2" v-for="skill in aside.skills" :key="skill.id">
                    {{ skill.skill }}
                  </li>
                </ul>
            </div>
        </div>
        <div class="row mt-5 me-5">
            <div class="col p-0">
            <p class="title">Languages</p>
        </div>
            </div>
            <div class="row">
              <div class="col">
                <ul class="ms-2">
                  <li class="pb-2" v-for="language in aside.languages" :key="language.id">
                    {{ language.language }}
                  </li>
                </ul>
			  </div>
            </div>
    </div>

</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
</style>