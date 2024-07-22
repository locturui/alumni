<template>
  <div class="p-4 mt-[6rem]">
    <h1 class="text-4xl font-bold text-center font-montserrat" style="color: #40BA21">All Projects</h1>
<!--    <div class="mt-7 container flex flex-wrap gap-5 justify-around mx-auto">-->
<!--      <UICard v-for="project in projects" :key="project.ID" image="/inno.png" :header="project.Name"-->
<!--        :description="project.Description" :project="project" @clicked="(id) => clickHandle(id)"/>-->
<!--    </div>-->
    {{ projects }}
  </div>
</template>



<script setup>
import { useProjectStore } from '/stores/projectStore.js'
const store = useProjectStore()

onBeforeMount(() => {
  store.fetchProjects()
})

const { projects } = storeToRefs(store)
const router = useRouter();
const clickHandle = (id) => {
  console.log(id)
  router.push('/projects/' + id)
}

</script>

<style lang="sass" scoped>


</style>