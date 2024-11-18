<script setup>
const { options } = defineProps({
  'options': {
    type: Array,
    required: true,
  },
});

const model = defineModel({ default: ''})

const selectButton = (value) => {
  model.value = value;
};

const getClasses = (button) => {
  if (model.value !== button) {
    return "border border-secondary bg-white text-muted font-light w-full rounded-lg whitespace-nowrap mt-3 px-6 py-2";
  }
  return "border border-accent bg-[#67A32C] bg-opacity-10 text-accent font-light w-full rounded-lg whitespace-nowrap mt-3 px-6 py-2";
};
</script>

<template>
  <div v-for="(button, id) in options" :key="id">
    <button :class="getClasses(button)" @click="selectButton(button)">
      {{ button }}
    </button>
  </div>
</template>
