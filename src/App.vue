<script setup>
import SimpleForm from './components/SimpleForm.vue';
import TailForm from './components/TailForm.vue';
import TailFormReUsable from './components/TailFormReUsable.vue';
</script>
<template>
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="flex">
      <TailForm />
      
      <TailFormReUsable />
    </div>
    <div
      class="flex items-center justify-center py-3 my-10 font-bold text-red-500 border-4 border-dashed rounded-2xl border-green-400/40 bg-blue-300/30">
      The divider
    </div>
    <SimpleForm />
  </div>
</template>