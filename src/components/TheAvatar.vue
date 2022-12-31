<template>
  <div class="avatar-wrapper">
    <img class="image" :src="src" alt="" />
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
.avatar-wrapper {
  justify-content: center;
  align-self: stretch;
  display: flex;
}
.image {
  height: 54px;
  margin-bottom: -3px;
  margin-top: -3px;
}
</style>
