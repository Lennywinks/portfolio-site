<script setup>
import JavaScriptIcon from '@/assets/JavaScriptIcon.vue';
import PythonIcon from '@/assets/PythonIcon.vue';
import PHPIcon from '@/assets/PHPIcon.vue';
import JavaIcon from '@/assets/JavaIcon.vue';
import TailwindCSSIcon from '@/assets/TailwindCSSIcon.vue';
import MySQLIcon from '@/assets/MySQLIcon.vue';
import LaravelIcon from '@/assets/LaravelIcon.vue';
import MongoDBIcon from '@/assets/MongoDBIcon.vue';
import VueIcon from '@/assets/VueIcon.vue';
import TensorflowIcon from '@/assets/TensorflowIcon.vue';
import PandasIcon from '@/assets/PandasIcon.vue';
import sklearnIcon from '@/assets/sklearnIcon.vue';

const props = defineProps({
  name: String
})

const icons = {
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  PHP: PHPIcon,
  Java: JavaIcon,
  TailwindCSS: TailwindCSSIcon,
  MySQL: MySQLIcon,
  MongoDB: MongoDBIcon,
  Laravel: LaravelIcon,
  'Vue.js': VueIcon,
  Tensorflow: TensorflowIcon,
  Pandas: PandasIcon,
  'scikit-learn': sklearnIcon
}
</script>

<template>
  <div class="group relative flex flex-col items-center">
    <component class='mx-auto fill-primary h-12 w-12 my-4' :is='icons[props.name]'/>
    <div
        class="absolute top-[-2.5rem] opacity-0 group-hover:opacity-100 text-md text-on-primary bg-primary px-2 py-1 rounded-xl transition-opacity transition-discrete duration-200 ease-out pointer-events-none whitespace-nowrap"
    >
      {{ props.name }}
    </div>
  </div>
</template>
