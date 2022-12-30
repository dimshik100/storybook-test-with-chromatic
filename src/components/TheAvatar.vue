<template>
  <div class="frame-2598">
    <img class="ellipse-227" :src="src" alt="Ellipse 227" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.frame-2598 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  position: relative;
}
.ellipse-227 {
  height: 54px;
  margin-bottom: -3px;
  margin-top: -3px;
  min-width: 54px;
  object-fit: cover;
}
</style>
