<template>
  <button
    :style="cssProps"
    type="button"
    class="button text"
    @click="log('Confirm Payment clicked')"
  >
    {{ title }}
  </button>
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

const emit = defineEmits(["click"]);

const log = (value) => {
  emit("click");
  console.log(value);
};

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
.button {
  color: #ffffff;
  font-weight: 400;
  line-height: normal;
  border: none;
  width: 100%;
  background-color: var(--button_test-1-background-color);
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  /* STEP3 - Unused CSS declaration - aligns the text in the middle of the button */
  vertical-align: middle;
}
</style>
