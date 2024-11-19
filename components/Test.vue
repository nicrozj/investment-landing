<template>
  <div class="relative w-full">
    <label
      :class="[
        'absolute left-2 transition-all bg-white px-1 pointer-events-none',
        inputFocused || inputValue ? 'text-xs -top-2 left-2 text-gray-400' : 'text-base top-2 text-gray-400'
      ]"
    >
      Фамилия
    </label>

    <input
      type="text"
      v-model="inputValue"
      @focus="inputFocused = true"
      @blur="inputFocused = false"
      class="block w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref(""); // Отслеживаем значение input
const inputFocused = ref(false); // Отслеживаем фокус input
</script>
