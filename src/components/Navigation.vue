<script setup>
import {ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute()

const active = ref(route.name)

const navClass = (name) => {
  return [
      'px-3 py-1 rounded-lg',
      active.value === name
        ? 'bg-primary text-on-primary font-semibold w-24 m-2'
        : 'hover:text-gray-300 w-24 m-2'
  ]
}
</script>

<template>
  <nav class='z-40 py-6 mt-2 flex justify-center items-center sticky top-0'>
    <div class='bg-surface text-on-surface rounded-lg py-3 font-inter'>
      <RouterLink to='/' :class='navClass("Home")'>Home</RouterLink>
      <RouterLink to='/projects' :class='navClass("Projects")'>Projects</RouterLink>
      <RouterLink to='/contact' :class='navClass("Contact")'>Contact</RouterLink>
    </div>
  </nav>
</template>

