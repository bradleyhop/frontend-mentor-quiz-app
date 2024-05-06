<script setup>
import { useRoute } from "nuxt/app";
const route = useRoute();
</script>
<template>
  <h1>Hello, World!</h1>
  <p>Current route: {{ route.path }}</p>
  <NuxtLink to="/">Go back</NuxtLink>
</template>
