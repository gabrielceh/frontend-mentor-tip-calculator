<script setup>
  import { inject } from 'vue';
  import { useCalculatorStore } from '../store/calculatorStore.js';

  const calculatorStore = useCalculatorStore();
  const customTip = inject('customTip');
  const error = inject('error');

  const handleChange = () => {
    console.log(customTip.value);
    if (!customTip) {
      return (error.value = "Can't be empty");
    }

    if (
      typeof customTip.value === 'NaN' ||
      typeof customTip.value === 'string'
    ) {
      return (error.value = 'Not a number');
    }

    if (customTip.value <= 0) {
      return (error.value = "Can't be zero or less");
    }
    error.value = '';
    calculatorStore.tipPercent = parseFloat(customTip.value) / 100;
    calculatorStore.calculateTipCustomTip(calculatorStore.tipPercent);
  };
</script>

<template>
  <input
    type="number"
    placeholder="Custom"
    name="customTip"
    v-model="customTip"
    class="bg-veryLightGrayCyan rounded-md border-2 text-veryDarkCyan font-bold text-xl p-2 text-right focus:outline-customCyan"
    @input="handleChange" />
</template>
