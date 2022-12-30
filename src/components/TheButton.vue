<template>
  <div class="frame-2594">
    <div class="button_test">
      <div class="button_test-1">
        <div class="button valign-text-middle text">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

</script>

<style scoped>

.button_test-1 {
  align-items: center;
  background-color: #4c84ff;
  border-radius: 8px;
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: center;
  padding: 8px 16px;
}

.button {
  color: var(--white);
  font-weight: 400;
  line-height: normal;
  margin-top: -1px;
  text-align: center;
  width: fit-content;
}
.button_test {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  position: relative;
}

.frame-2594 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
}
</style>
