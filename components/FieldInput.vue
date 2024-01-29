<template>
  <div class="border-2 border-gray-200 rounded-md">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { model, name, placeholder } = defineProps({
  placeholder: String,
  name: String,
  model: null,
});
</script>
