<script setup>
  const props = defineProps(['label', 'error']);
</script>

<template>
  <div class="flex justify-between">
    <label
      for="bill"
      class="text-md text-grayCyan font-bold pb-2"
      >{{ props.label }}</label
    >
    <span class="text-sm text-red-400 font-bold">{{ props.error }} </span>
  </div>
</template>
