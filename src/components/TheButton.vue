<template>
  <div class="frame-2594" :style="cssProps">
    <div class="button_test">
      <div class="button_test-1">
        <div class="button valign-text-middle text">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

const cssProps = computed(() => {
  if (props.theme === "light") {
    return {
      "--button_test-1-background-color": "#4c84ff",
    };
  } else {
    return {
      "--button_test-1-background-color": "#19a7ff",
    };
  }
});
</script>

<style scoped>

.button_test-1 {
  align-items: center;
  background-color: var(--button_test-1-background-color);
  border-radius: 8px;
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: center;
  padding: 8px 16px;
}

.button {
  color: #ffffff;
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
