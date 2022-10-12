<template>
  <div class="border-2 border-gray-200 rounded-md">
    <input
      type="text"
      :name="name"
      :v-model="model"
      :placeholder="placeholder"
      class="py-1 pl-3"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    placeholder: String,
    name: String,
    model: null,
  },
};
</script>
