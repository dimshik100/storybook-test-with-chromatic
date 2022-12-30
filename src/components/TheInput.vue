<template>
  <div :class="size">
    <div class="full-name caption">{{ title }}</div>
    <div class="input-field-light">
      <div class="input-field">
        <div class="default text">{{ placeholder }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed } from "vue";

defineProps({
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

// const wrapperClass = computed(() => {
//   if (props.size === "stretched") {
//     return "stretched";
//   } else {
//     return "small";
//   }
// });
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

.full-name {
  align-self: stretch;
  color: var(--cloud-burst);
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
  background-color: var(--blueberry);
  border-radius: 5px;
  display: flex;
  flex: 1;
  gap: 5px;
  padding: 10px;
}

.default {
  color: var(--storm-gray);
  flex: 1;
  font-weight: 400;
  line-height: normal;
  margin-top: -1px;
}
</style>
