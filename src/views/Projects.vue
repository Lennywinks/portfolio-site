<script setup>
import Layout from '@/components/Layout.vue'
import ProjectContainer from '@/components/ProjectContainer.vue';
import PackageIcon from '@/assets/PackageIcon.vue';
</script>


<template>
  <Layout/>
  <div class='flex flex-col items-center justify-center gap-10 text-on-surface'>
    <ProjectContainer
        header='Delivery Time Prediction for E-Commerce Shipments'
        :icon='PackageIcon'
        description="
          This project was the subject of my bachelor thesis. It leverages machine learning to accurately predict delivery times for E-commerce orders.
          By analyzing historical shipping data, carrier performance, weekdays, and location patterns, several models were trained to estimate realistic delivery dates.
          The goal is to improve customer satisfaction and optimize logistics planning."
        :technologies='["Python", "Pandas", "scikit-learn", "XGBoost"]'
    />

    <ProjectContainer
        header='Coinviewer'
        image_url='https://raw.githubusercontent.com/Lennywinks/Coinviewer/main/app/Screenshots/Overview.png'
        description="
          Coinviewer is a basic Laravel application designed to view and manage cryptocurrencies.
          It collects data from Coinpaprika's API to provide recent information on various digital assets."
        :technologies='["VueJS", "TailwindCSS", "PHP", "Laravel", "MySQL"]'
    />

    <ProjectContainer
        class=''
        header='Clicky'
        image_url='https://raw.githubusercontent.com/Lennywinks/Clicky/main/img/clicky_screenshot.png'
        description="
          One of my first projects is Clicky. A lightweight auto-clicker application for Windows.
          It allows users to simulate mouse clicks by holding down or pressing a designated hotkey."
        :technologies='["Python", "NiceGUI"]'
    />
  </div>
</template>

