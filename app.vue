<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/stores/authStore.js";

const auth = useAuthStore()
onBeforeMount(() => {
  auth.validate()
})
</script>