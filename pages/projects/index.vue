<template>
  <div class="p-4 mt-[6rem]">
    <h1 class="text-4xl font-bold text-center font-montserrat" style="color: #40BA21">All Projects</h1>
    <div class="mt-7 container flex flex-wrap gap-5 justify-around mx-auto">
      <UICard v-for="project in projects" :key="project.id" :image="project.url" :header="project.title"
              :description="project.desc" :project="project" @clicked="(id) => clickHandle(id)"/>
    </div>
  </div>
</template>



<script setup>
import { useProjectStore } from '/stores/projectStore.js'

const store = useProjectStore()
await store.fetchProjects()
const router = useRouter();
const clickHandle = (id) => {
  console.log(id)
  router.push('/projects/' + id)
}


const projects = store.getVerifiedProjects
</script>

<style lang="sass" scoped>

.wrapper
  background-color: white
  padding: 1.75rem
  border-radius: 0.5rem
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1)
  max-height: min-content
</style>