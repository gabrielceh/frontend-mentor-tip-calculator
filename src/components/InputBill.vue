<script setup>
  import { computed, ref } from 'vue';
  import { useCalculatorStore } from '../store/calculatorStore.js';
  import LabelSections from './LabelSections.vue';

  const calculatorStore = useCalculatorStore();

  const error = ref('');
  const isInputFocus = ref(false);

  const hanldeChange = () => {
    if (!calculatorStore.totalBill) {
      return (error.value = "Can't be empty");
    }

    if (
      typeof calculatorStore.totalBill === 'NaN' ||
      typeof calculatorStore.totalBill === 'string'
    ) {
      return (error.value = 'Not a number');
    }

    if (calculatorStore.totalBill <= 0) {
      return (error.value = "Can't be zero or less");
    }
    error.value = '';
    calculatorStore.calculateTipBill(calculatorStore.totalBill);
  };

  const isFocus = () => {
    isInputFocus.value = true;
  };
  const isBlur = () => {
    isInputFocus.value = false;
  };

  const boxOutline = computed(() => {
    if (isInputFocus.value) {
      return 'border-customCyan';
    } else {
      return 'border-veryLightGrayCyan';
    }
  });
</script>

<template>
  <div>
    <LabelSections
      label="Bill"
      :error="error" />

    <div
      class="bg-veryLightGrayCyan w-full flex rounded-md border-2"
      :class="boxOutline">
      <div class="w-2/12 flex items-center pl-4">
        <img src="../assets/images/icon-dollar.svg" />
      </div>
      <input
        type="number"
        name="bill"
        placeholder="0"
        id="bill"
        class="bg-veryLightGrayCyan text-veryDarkCyan font-bold text-xl p-2 text-right outline-none w-10/12"
        v-model="calculatorStore.totalBill"
        @input="hanldeChange"
        @focus="isFocus"
        @blur="isBlur" />
    </div>
  </div>
</template>
