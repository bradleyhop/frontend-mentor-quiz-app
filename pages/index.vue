<script setup>
import { useRoute } from "nuxt/app";
import AppButton from "@/components/AppButton.vue";

const texter = "click me";
const route = useRoute();
</script>

<template>
  <div>
    <h1>Hello, Nuxt</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>

  <AppButton :buttonText="texter" />
</template>
