<script setup>
const props = defineProps({
  header: String,
  image_url: String,
  icon: Object,
  description: String,
  technologies: Array,
})
</script>

<template>
  <div class='max-w-5xl w-screen p-5 flex flex-col lg:flex-row gap-2 lg:gap-6 rounded-xl overflow-hidden'>
    <h1 class='text-3xl font-bold block lg:hidden motion-safe:slide-in-header'>{{ props.header }}</h1>
    <component v-if='icon' :is='icon' class='hidden lg:block lg:w-1/2 rounded-xl h-96 object-fit motion-safe:pop-in'/>
    <img v-if='image_url' class='hidden lg:block lg:w-1/2 rounded-xl h-96 object-fit motion-safe:pop-in' :src='image_url' alt=''>
    <div class='relative lg:w-1/2 lg:h-96 bg-surface rounded-xl p-4 motion-safe:pop-in motion-safe:lg:slide-in-project-description'>
      <h1 class='text-3xl font-bold mb-2 hidden lg:block'>{{ props.header }}</h1>
      <p class='text-on-surface-variant text-xl lg:text-lg xl:text-xl overflow-hidden text-clip'>
        {{ props.description }}
      </p>
      <div class='lg:absolute bottom-4 left-4 m-auto flex flex-wrap gap-2 mt-2'>
        <div v-for='tech in technologies' class='py-1 px-2 bg-surface-highest rounded-full text-sm'>{{ tech }}</div>
      </div>
    </div>
  </div>
</template>
