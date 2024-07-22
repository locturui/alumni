<script setup>
import {useProjectStore} from "~/stores/projectStore.js";
import {useAuthStore} from "~/stores/authStore.js";
import ProposalForm from "~/components/ProposalForm.vue";

const store = useProjectStore()
const auth = useAuthStore()
const projects = store.getProjectByUserId(auth.user.ID)

</script>

<template>
  <div class="p-4 mt-[6rem]">
    <h1 class="text-4xl font-bold text-center font-montserrat" style="color: #40BA21">My Projects</h1>
    <div class="mt-7 container flex justify-around mx-auto">
      <div class="wrapper w-1/2">
        <ProposalForm />
      </div>
      <div v-if="projects.length > 0" class="wrapper flex flex-col w-1/2">
        <div v-for="project in projects">
          <span>{{project.title}}</span>
          <span>{{project.desc}}</span>
          <span>{{project.Status}}</span>
        </div>
      </div>
      <div v-else class="wrapper ml-5">
        <span class="text-xl font-ibm" style="color: #40BA21">No projects yet</span>
      </div>
    </div>
  </div>
<div class="container flex">

</div>
</template>

<style scoped lang="sass">
.wrapper
  background-color: white
  padding: 2rem
  border-radius: 0.5rem
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1)
</style>