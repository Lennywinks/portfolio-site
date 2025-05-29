<script setup>
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue';

const iconNames = [
    'Python', 'JavaScript', 'PHP',
    'Java', 'MySQL', 'MongoDB',
    'Vue.js', 'TailwindCSS', 'Laravel',
    'Pandas', 'scikit-learn', 'Tensorflow'
];
</script>


<template>
  <Layout/>
  <main class='flex justify-center my-1 text-on-surface font-inter'>
    <div class='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1.5fr_1fr_1r_1.5fr] gap-5 px-8'>

      <!-- Who am i -->
      <div class='order-3 lg:order-1 lg:col-span-2 lg:row-span-1 bg-surface-low rounded-2xl p-4 overflow-hidden motion-safe:pop-in motion-safe:lg:slide-in-who-am-i'>
        <h2 class='text-3xl font-bold mb-2'>Who am I?</h2>
        <p class='text-lg'>Hey! <br> My name is Lennart. I'm a Data Engineer
          currently studying Computer Science in Germany. I'm passionate about
          all things data -especially machine learning- and love building smart, effective solutions.
          If you have a project that you would like to work on, feel free to get in touch!</p>
      </div>

      <!-- Image -->
      <div class='lg:order-2 bg-cover bg-center rounded-2xl lg:col-span-1 lg:row-span-2 hidden lg:block motion-safe:pop-in motion-safe:lg:slide-in-picture' style='background-image: url("https://media.istockphoto.com/id/532378051/photo/night-sky-with-stars-and-clouds.jpg?s=612x612&w=0&k=20&c=M6HA8A8tq5cbJsAU0y39Qx6dTyoIti-CaYMi9WWbB_U=");'></div>

      <!-- Title -->
      <div class='overflow-hidden order-2 lg:order-3 bg-primary p-4 rounded-2xl flex items-center justify-center lg:col-span-1 lg:row-span-1 motion-safe:pop-in motion-safe:lg:slide-in-title'>
        <div class='text-on-primary font-bold text-3xl text-center'>Student & <br> Data Engineer</div>
      </div>

      <!-- Github Link -->
      <div class='order-1 lg:order-4 bg-surface-low p-4 rounded-2xl text-center lg:col-span-1 lg:row-span-2 flex justify-center items-center overflow-hidden'>
        <div class='flex flex-col gap-2 justify-center items-center mb-2'>
          <img src='https://avatars.githubusercontent.com/u/137425298?v=4' class='w-16 h-16 rounded-full flex items-center justify-center' alt='Github Profile Image'>
          <a href='https://github.com/Lennywinks' class='font-semibold text-3xl text-blue-400'>Lennart Benninghaus</a>
        </div>
      </div>

      <!-- Technologies -->
      <div class='order-5 lg:order-5 bg-surface-low p-4 rounded-2xl lg:col-span-1 lg:row-span-2 overflow-hidden motion-safe:pop-in motion-safe:lg:slide-in-technologies'>
        <h2 class='font-bold mb-2 text-3xl'>Technologies I have worked with</h2>
        <div class='grid grid-cols-3 gap-4 place-content-center'>
          <Icon
            v-for='(icon, i) in iconNames'
            :key='icon'
            :name='icon'
            class='motion-safe:pop-in'
            :style='{ animationDelay: `${i * 150 + 500}ms` }'
          />
        </div>
      </div>

      <!-- Quote -->
      <div class='lg:order-6 bg-primary p-4 rounded-2xl flex items-center justify-center lg:col-span-1 lg:row-span-1 hidden lg:flex motion-safe:pop-in motion-safe:lg:slide-in-quote'>
        <div class='text-on-primary font-bold text-3xl text-center'>"If you do what you love, you'll never work a day in your life."</div>
      </div>

      <!-- CV -->
      <div class='order-4 lg:order-7 bg-surface-low p-4 rounded-2xl lg:col-span-2 lg:row-span-1 height-auto overflow-hidden motion-safe:pop-in motion-safe:lg:slide-in-education'>
        <h2 class='font-bold mb-2 text-3xl'>Résumé</h2>
        <div class='flex flex-col lg:flex-col gap-2'>
          <div class="flex flex-wrap items-center">
            <h3 class='text-xl inline'>Data Engineer - PAQATO GmbH</h3>
            <span class='text-sm text-on-surface-variant ml-1'>(2022-Today)</span>
            <p class="text-lg text-on-surface-variant">I'm currently employed as a student assistant, primarily focused on internal projects related to data analytics, data engineering and general backend development.</p>
          </div>

          <div class="flex flex-wrap items-center">
            <h3 class='text-xl inline'>Master of Science - Fernuniversität Hagen</h3>
            <span class='text-sm text-on-surface-variant ml-1'>(2024 - Today)</span>
            <p class="text-lg text-on-surface-variant">I'm currently pursuing a Master's degree in Computer Science.</p>
          </div>

          <div class="flex flex-wrap items-center">
            <h3 class='text-xl inline'>Bachelor of Science - Hochschule Hamm-Lippstadt</h3>
            <span class='text-sm text-on-surface-variant ml-1'>(2020-2024)</span>
            <p class="text-lg text-on-surface-variant">I finished my Bachelor's degree called Technical Management and Marketing with a focus on business informatics.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

