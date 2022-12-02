<script setup>
  import { provide, ref } from 'vue';
  import BtnTipPercent from './BtnTipPercent.vue';
  import CustomTip from './CustomTip.vue';
  import LabelSections from './LabelSections.vue';

  const customTip = ref('');
  const error = ref('');
  provide('customTip', customTip);
  provide('error', error);

  const handleSelectTip = () => {
    customTip.value = '';
  };
</script>

<template>
  <div>
    <LabelSections
      label="Select Tip %"
      :error="error" />

    <div class="grid w-full mx-auto grid-cols-3 gap-4">
      <BtnTipPercent
        label="5%"
        :percent="0.05"
        @click="handleSelectTip" />
      <BtnTipPercent
        label="10%"
        :percent="0.1"
        @click="handleSelectTip" />
      <BtnTipPercent
        label="15%"
        :percent="0.15"
        @click="handleSelectTip" />
      <BtnTipPercent
        label="25%"
        :percent="0.25"
        @click="handleSelectTip" />
      <BtnTipPercent
        label="50%"
        :percent="0.5"
        @click="handleSelectTip" />
      <CustomTip />
    </div>
  </div>
</template>
