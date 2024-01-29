<template>
  <dialog :id="dialogName" className="modal">
    <div className="modal-box bg-white">
      <div class="flex justify-between items-center text-3xl">
        <span class="text-black">{{ title }}</span>
        <font-awesome-icon
          v-if="onCloseModal"
          icon="fas fa-times"
          class="cursor-pointer"
          v-on:click="onCloseModal"
        />
      </div>
      <div class="my-5">
        <slot></slot>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const { dialogName, onCloseModal, title } = defineProps({
  dialogName: String,
  title: String,
  onCloseModal: Function,
});
</script>
