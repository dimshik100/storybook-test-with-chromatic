<template>
  <div :class="size" :style="cssProps">
    <div class="title caption">{{ title }}</div>
    <div class="input-field-light">
      <div class="input-field">
        <div class="default text">{{ placeholder }}</div>
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
  placeholder: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: "stretched",
  },
});

const cssProps = computed(() => {
  if (props.theme === "light") {
    return {
      "--input-field-background-color": "#4c84ff1a",
      "--title-color": "#1b2e49",
      "--default-color": "#676f8a80",
    };
  } else {
    return {
      "--input-field-background-color": "#00000033",
      "--title-color": "#e0e5f5",
      "--default-color": "#b9c5e680",
    };
  }
});
</script>

<style scoped>
.stretched {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
}

.small {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
  position: relative;
}

.title {
  align-self: stretch;
  color: var(--title-color);
  font-weight: 600;
  line-height: normal;
  margin-top: -1px;
}

.input-field-light {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  position: relative;
}

.input-field {
  align-items: center;
  background-color: var(--input-field-background-color);
  border-radius: 5px;
  display: flex;
  flex: 1;
  gap: 5px;
  padding: 10px;
}

.default {
  color: var(--default-color);
  flex: 1;
  font-weight: 400;
  line-height: normal;
  margin-top: -1px;
}
</style>
