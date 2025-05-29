<script setup>
import Layout from '@/components/Layout.vue'
import ContactForm from '@/components/ContactForm.vue';
import MailIcon from '@/assets/MailIcon.vue';
import GitHubIcon from '@/assets/GitHubIcon.vue';
import LinkedInIcon from '@/assets/LinkedInIcon.vue';
</script>


<template>
  <Layout/>
  <section class='flex mx-auto p-4 max-w-6xl overflow-hidden items-center justify-center'>
    <div class='max-w-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-[0.75fr_1fr_1fr_auto] lg:grid-rows-none gap-5 text-on-surface'>
      <!-- Contact Email -->
      <a href='mailto:lennartbenninghaus@googlemail.com' class='bg-surface-low rounded-xl flex items-center justify-center gap-2 h-auto overflow-hidden motion-safe:pop-in motion-safe:lg:slide-in-mail-box hover:bg-surface-high transition ease-in-out'>
          <MailIcon class='fill-primary w-8 h-8'/>
          <p class='text-lg'>Send me a mail directly!</p>
      </a>
      <!-- LinkedIn -->
      <a href='https://www.linkedin.com/in/lennart-benninghaus-942887235/' class='bg-surface-low lg:row-span-2 rounded-xl items-center justify-center min-h-auto lg:min-h-96 cursor-pointer hover:bg-surface-high flex lg:flex-col overflow-hidden motion-safe:pop-in motion-safe:lg:slide-in-linkedin-box transition ease-in-out'>
        <LinkedInIcon class='fill-on-surface-variant pr-4 lg:pr-0'/>
        <p class='text-3xl font-bold pb-1'>LinkedIn</p>
      </a>
      <!-- Github -->
      <a href='https://github.com/Lennywinks' class='bg-surface-low rounded-xl flex flex-col items-center justify-center h-auto cursor-pointer hover:bg-surface-high overflow-hidden motion-safe:pop-in motion-safe:lg:slide-in-github-box transition ease-in-out'>
        <GitHubIcon class='fill-on-surface-variant w-18 h-18 pt-2'/>
        <div class='text-3xl font-bold pb-1'>Github Profile</div>
        <p class='text-xl text-on-surface-variant pb-2'>Find more of my repositories</p>
      </a>
      <!-- Contact Me Form -->
      <ContactForm class='col-span-1 lg:col-span-2 pt-4 motion-safe:pop-in motion-safe:lg:slide-in-contact-form'/>
    </div>
  </section>
</template>

