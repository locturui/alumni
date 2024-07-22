<script setup>
import {useProjectStore} from "~/stores/projectStore.js";
import {useAuthStore} from "~/stores/authStore.js";
import ProposalForm from "~/components/ProposalForm.vue";

const store = useProjectStore()
const auth = useAuthStore()
const projects = store.getProjects.filter(project => project.user.ID === auth.user.ID)

</script>

<template>
  <div class="p-4 mt-[6rem]">
    <h1 class="text-4xl font-bold text-center font-montserrat" style="color: #40BA21">All Projects</h1>
    <div class="mt-7 container flex justify-around mx-auto">
      <div class="wrapper">
        <ProposalForm />
      </div>
      <div class="flex flex-col">
        <div v-for="project in projects">
          <span>{{project.title}}</span>
          <span>{{project.desc}}</span>
          <span>{{project.Status}}</span>
        </div>
      </div>
    </div>
  </div>
<div class="container flex">

</div>
</template>

<style scoped lang="sass">

</style>