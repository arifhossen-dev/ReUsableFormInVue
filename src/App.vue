<script setup>
import ComponentsForm from './views/ComponentsForm.vue';
import LoginForm from './views/LoginForm.vue';
import SimpleForm from './views/SimpleForm.vue';
</script>
<template>
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <LoginForm />
    <hr>
    <SimpleForm />
    <hr>
    <ComponentsForm/>
  </div>
</template>