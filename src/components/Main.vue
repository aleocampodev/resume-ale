<script setup>
import { reactive } from 'vue'
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const main = reactive({
	aboutme: t('aboutme'),
	professionalSummary: t('resume'),
	employmentHistory: [
		{
			id:1,
			jobTitle: 'Frontend developer',
			startDate: 'Mar 2022',
			endDate: 'Present',
			employer: 'Efilm',
			city: 'Remote',
			workExperience:t('workExperience'),
			achievements: t('achievements'),
			achievementsJob: [
				{
					id:1,
					text: 'Implement new features that drive innovation and value for the company.'
				},
				{
					id:2,
					text: 'Enhance and add new styles as needed for the design of the applications.'
				},
				{
					id:3,
					text:'The technologies I used were React, NextJs, Jest(testing), Bootstrap.'
				}
			]
		},
		{
			id:2,
			jobTitle: 'Freelance ',
			startDate: 'Aug 2021',
			endDate: 'Dec 2021',
			employer: 'Freelance',
			city: 'Remote',
			achievementsJob: [
				{
					id: 1,
					text: 'I develop custom web applications tailored to the clients needs, leveraging cutting-edge technologies to provide effective solutions'
				},
				{
					id:2,
					text:'My skill set includes the use of technologies such as Gatsby, and React to build modern, responsive web applications that meet client expectations and deliver an exceptional user experience.'
				},
				{
					id:3,
					text:'The technologies I used were Gatsby and React'
				}	
			]
		},
		{
			id:3,
			jobTitle: 'Frontend developer',
			startDate: 'Jul 2020',
			endDate: 'Sep 2020',
			employer: 'Xprende',
			city: 'Remote',
			achievementsJob: [
				{
					id:1,
					text: 'I had a strong command of web page layout using the Vue.js framework, making improvements to any front-end element, based on atomic component-based development. This approach was adaptable for mobile device loading.'
				},
				{
					id:2,
					text:'The technologies I used were Vue and Nuxtjs'
				}
			]
		},
  	],
})
</script>

<template>
 	<div class="col col-8">
        <animatable-component
            autoplay
            animation="fade-in-right"
            easing="ease-in-out"
            duration="1200"
        >
            <div class="row bullet">
              	<div class="col-auto pt-2">
               		 <i class="bi bi-circle-fill"></i>
              	</div>
              	<div class="col">
               		<p class="title">{{ main.aboutme}}</p>
              	</div>
            </div>
        </animatable-component>
        <animatable-component
            autoplay
            animation="fade-in-right"
            easing="ease-in-out"
            duration="1200"
        >
            <div class="row record bullet">
               <div class="col-auto">
                	<i class="bi bi-record-circle"></i>
              	</div>
              	<div class="col">
                	<p style="white-space: pre-line;">{{ main.professionalSummary }}</p>
              	</div>
            </div>
        </animatable-component>
        <div class="row mt-5">
            <div class="col-auto bullet pt-2">
            	<i class="bi bi-circle-fill"></i>
            </div>
            <div class="col">
                <p class="title">{{main.workExperience}}</p>
            </div>
            <div class="row record mb-4 bullet" v-for="employment in main.employmentHistory" :key="employment.id">
                <div class="col-auto">
                   <i class="bi bi-record-circle"></i>
                </div>
              	<div class="col">
					<p class="text-uppercase fw-bold position-relative">
					{{ employment.jobTitle }}
					<span>&nbsp;|&nbsp;{{ employment.startDate }} - {{ employment.endDate }}</span>
					</p>
					<p class="text-lowercase fst-italic fw-bold">
					{{ employment.employer }}, {{ employment.city }}
					</p>
					<p class="mb-0" v-for="achievement in employment.achievementsJob" :key="achievement.id">
					• {{ achievement.text }}
					</p>
                </div>
            </div>
        </div>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
</style>