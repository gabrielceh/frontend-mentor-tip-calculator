import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCalculatorStore = defineStore('calculatorStore', () => {
  const totalBill = ref(0);
  const tipPercent = ref(0.1);
  const totalPeople = ref(1);
  const tipAmount = ref(0.0);
  const total = ref(0.0);

  function calculateTip() {
    console.log(`
        totalBill: ${totalBill.value}
        tipPercent: ${tipPercent.value}
        totalPeopel: ${totalPeople.value}
        tipAmount: ${tipAmount.value}
        total: ${total.value}
    `);
  }

  function calculateTipBill(customBill) {
    tipAmount.value = (customBill * tipPercent.value) / totalPeople.value;
    total.value = customBill * tipPercent.value;
  }

  function calculateTipCustomTip(customTip) {
    tipAmount.value = (totalBill.value * customTip) / totalPeople.value;
    total.value = totalBill.value * customTip;
  }

  function calculateTipPeople(customPeople) {
    tipAmount.value = (totalBill.value * tipPercent.value) / customPeople;
    total.value = totalBill.value * tipPercent.value;
  }

  function reset() {
    totalBill.value = 0;
    tipPercent.value = 0.1;
    totalPeople.value = 1;
    tipAmount.value = 0;
    total.value = 0;
  }

  return {
    totalBill,
    totalPeople,
    tipPercent,
    total,
    tipAmount,
    calculateTip,
    reset,
    calculateTipBill,
    calculateTipCustomTip,
    calculateTipPeople,
  };
});
