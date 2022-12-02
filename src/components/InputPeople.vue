<script setup>
  import { computed, ref } from 'vue';
  import { useCalculatorStore } from '../store/calculatorStore';
  import LabelSections from './LabelSections.vue';

  const calculatorStore = useCalculatorStore();

  const error = ref('');
  const isInputFocus = ref(false);

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

  const handleInput = () => {
    if (!calculatorStore.totalPeople) {
      return (error.value = "Can't be empty");
    }

    if (
      typeof calculatorStore.totalPeople === 'NaN' ||
      typeof calculatorStore.totalPeople === 'string'
    ) {
      return (error.value = 'Not a number');
    }

    if (calculatorStore.totalPeople <= 0) {
      return (error.value = "Can't be zero or less");
    }
    error.value = '';
    calculatorStore.totalPeople = Math.round(calculatorStore.totalPeople);
    calculatorStore.calculateTipPeople(calculatorStore.totalPeople);
  };
</script>

<template>
  <div>
    <LabelSections
      label="Number of people"
      :error="error" />

    <div
      class="bg-veryLightGrayCyan w-full flex rounded-md border-2"
      :class="boxOutline">
      <div class="w-2/12 flex items-center pl-4">
        <img src="../assets/images/icon-person.svg" />
      </div>
      <input
        type="number"
        class="bg-veryLightGrayCyan text-veryDarkCyan font-bold text-xl p-2 text-right outline-none w-10/12"
        v-model="calculatorStore.totalPeople"
        @focus="isFocus"
        @blur="isBlur"
        @input="handleInput" />
    </div>
  </div>
</template>
