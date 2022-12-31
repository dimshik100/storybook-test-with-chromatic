<script setup>
import TheAvatar from "./TheAvatar.vue";
import TheInput from "./TheInput.vue";
import TheButton from "./TheButton.vue";

import { computed } from "vue";

const props = defineProps({
  theme: {
    type: String,
    required: false,
    default: "light",
  },
  texts: {
    type: Object,
    required: false,
    default: () => {
      return {
        fullName: "Full Name",
        creditCardInfo: "Credit Card Info",
        expDate: "Exp Date",
        cvv: "CVV",
        zipCode: "Zip Code",
        confirmPayment: "Confirm Payment",
        placeholder: "Place holder",
      };
    },
  },
});

const emit = defineEmits(["submit"]);

const submit = () => {
  console.log("submit");
  emit("submit");
};

const cssProps = computed(() => {
  if (props.theme === "light") {
    return {
      "--screen-background-color": "#ffffff",
    };
  } else {
    return {
      "--screen-background-color": "#2e364a",
    };
  }
});

const avatarSrc = "ellipse-227-1@2x.png";
</script>

<template>
  <div class="screen" :style="cssProps">
    <TheAvatar :src="avatarSrc" :theme="theme" />
    <TheInput
      :title="props.texts.fullName"
      :placeholder="props.texts.placeholder"
      :theme="theme"
    />
    <TheInput
      :title="props.texts.creditCardInfo"
      :placeholder="props.texts.placeholder"
      :theme="theme"
    />

    <div class="frame-2602">
      <TheInput
        :title="props.texts.expDate"
        :placeholder="'MM/YY'"
        :theme="theme"
        :size="'small'"
      />
      <TheInput
        :title="props.texts.cvv"
        :placeholder="'***'"
        :theme="theme"
        :size="'small'"
      />
    </div>
    <TheInput
      :title="props.texts.zipCode"
      :placeholder="props.texts.placeholder"
      :theme="theme"
    />
    <TheButton
      :title="props.texts.confirmPayment"
      @click="submit()"
      :theme="theme"
    />
  </div>
</template>

<style scoped>
.screen {
  align-items: flex-start;
  background-color: var(--screen-background-color);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* height: 100vh; */
  /* min-height: 481px; */
  min-width: 380px;
  max-width: 380px;
  padding: 20px;
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}

.frame-2602 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 20px;
  position: relative;
}
</style>
