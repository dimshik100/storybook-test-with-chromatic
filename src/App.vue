<script setup>
import ThePaymentForm from "./components/ThePaymentForm.vue";
</script>

<template>
  <div class="middle">
    <ThePaymentForm :theme="'light'" />
  </div>
</template>

<style scoped>
.middle {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  min-height: 100vh;
  padding: 16px;
}
</style>
