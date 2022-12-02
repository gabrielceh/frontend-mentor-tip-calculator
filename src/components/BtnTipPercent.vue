<script setup>
  import { computed } from 'vue';
  import { useCalculatorStore } from '../store/calculatorStore';

  const calculatorStore = useCalculatorStore();

  const props = defineProps(['label', 'percent']);

  const handleClick = () => {
    calculatorStore.tipPercent = parseFloat(props.percent);
    calculatorStore.calculateTipCustomTip(calculatorStore.tipPercent);
  };

  const isSelect = computed(() => {
    if (calculatorStore.tipPercent === props.percent) {
      return 'bg-mint text-veryDarkCyan';
    } else {
      return 'bg-veryDarkCyan text-white ';
    }
  });
</script>

<template>
  <button
    class="text-2xl font-bold py-3 rounded-lg hover:bg-mint hover:text-veryDarkCyan transition-colors focus:bg-mint focus:text-veryDarkCyan"
    :class="isSelect"
    @click="handleClick">
    {{ props.label }}
  </button>
</template>
