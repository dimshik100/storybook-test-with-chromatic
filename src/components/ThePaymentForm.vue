<script setup>
import TheAvatar from "./TheAvatar.vue";
import TheInput from "./TheInput.vue";
import TheButton from "./TheButton.vue";
defineProps({
  theme: {
    type: String,
    required: false,
    default: "light",
  },
});

const avatarSrc =
  "https://anima-uploads.s3.amazonaws.com/projects/63ac4c88fe60ff9f4fab274f/releases/63ac4fd31d3fc5f7ea8baa63/img/ellipse-227-1@2x.png";
</script>

<template>
  <div class="light screen">
    <TheAvatar :src="avatarSrc" :theme="theme" />
    <TheInput
      :title="'Full Name'"
      :placeholder="'Place holder'"
      :theme="theme"
    />
    <TheInput
      :title="'Credit Card Info'"
      :placeholder="'Place holder'"
      :theme="theme"
    />

    <div class="frame-2602">
      <TheInput
        :title="'Exp Date'"
        :placeholder="'MM/YY'"
        :theme="theme"
        :size="'small'"
      />
      <TheInput
        :title="'CVV'"
        :placeholder="'***'"
        :theme="theme"
        :size="'small'"
      />
    </div>
    <TheInput
      :title="'Zip Code'"
      :placeholder="'Place holder'"
      :theme="theme"
    />
    <TheButton :title="'Confirm Payment'" :theme="theme" />
  </div>
</template>

<style scoped>
.light {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  min-height: 481px;
  min-width: 380px;
  padding: 20px;
  position: relative;
  width: 100%;
}

.frame-2602 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 20px;
  position: relative;
}
</style>
