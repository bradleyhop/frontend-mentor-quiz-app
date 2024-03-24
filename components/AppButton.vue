<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button>
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
button {
  color: $white;
  background-color: $purple;
  min-width: 200px;
  min-height: 92px;
  border-radius: 24px;

  // typography
  text-align: center;
  text-transform: uppercase;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
    opacity: 0.5; // fix
  }
}
</style>
