<script setup>
  import TotalSection from './TotalSection.vue';
  import InputBill from './InputBill.vue';
  import GridTip from './GridTip.vue';
  import InputPeople from './InputPeople.vue';
</script>

<template>
  <main
    class="bg-white min-h-[400px] mx-auto rounded-t-3xl md:rounded-3xl md:w-3/4 p-8 flex flex-col gap-8 md:flex-row justify-between">
    <section class="w-full md:w-6/12 flex flex-col justify-between gap-8">
      <InputBill />
      <GridTip />
      <InputPeople />
    </section>
    <TotalSection />
  </main>
</template>
