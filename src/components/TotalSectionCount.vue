<script setup>
  const props = defineProps(['label', 'total']);
</script>

<template>
  <div class="flex mb-8">
    <section class="w-1/2">
      <p class="text-md text-white font-bold">{{ props.label }}</p>
      <span class="text-sm text-darkGrayCyan font-bold"> / person</span>
    </section>
    <h2 class="w-1/2 text-4xl text-right text-customCyan font-bold">
      ${{ props.total }}
    </h2>
  </div>
</template>
