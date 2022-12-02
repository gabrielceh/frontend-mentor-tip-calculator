<script setup>
  import { useCalculatorStore } from '../store/calculatorStore';
  import TotalSectionCount from './TotalSectionCount.vue';

  const calculatorStore = useCalculatorStore();
</script>

<template>
  <section
    class="bg-darkCyan p-6 pt-8 rounded-xl w-full md:w-6/12 flex flex-col justify-between overflow-hidden">
    <div>
      <TotalSectionCount
        label="Tip Amount"
        :total="calculatorStore.tipAmount.toFixed(2)" />
      <TotalSectionCount
        label="Total"
        :total="calculatorStore.total.toFixed(2)" />
    </div>

    <button
      class="bg-customCyan hover:bg-lightGrayCyan font-bold w-full py-2 rounded-md text-xl text-darkCyan transition-colors"
      @click="calculatorStore.reset">
      RESET
    </button>
  </section>
</template>
