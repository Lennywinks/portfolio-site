<script setup>
import Layout from '@/components/Layout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <Layout />
  <div class="flex flex-col items-center justify-center min-h-[80vh] text-on-surface">
    <h1 class="text-6xl font-bold mb-4">404</h1>
    <p class="text-on-surface-variant text-xl mb-8">Oops! Page not found</p>
    <button 
      @click="goHome"
      class="bg-primary text-on-primary px-6 py-3 rounded-xl hover:opacity-80 active:opacity-70 transition-colors duration-300 ease-in-out"
    >
      Back to Home
    </button>
  </div>
</template>