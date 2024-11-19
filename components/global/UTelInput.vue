<script setup>
const {title} = defineProps(['title', 'placeholder', 'class', 'autocomplete'])
const inputFocused = ref('');
const inputValue = defineModel();
const isActivated = ref(false);

function onBlur() {
    inputFocused.value = false;
    isActivated.value = true;
}
</script>
<template>
    <div class="relative w-full">
        <label
            class='absolute left-2 -top-2 text-xs transition-all bg-white px-1 pointer-events-none font-light text-gray-400'
        >
            {{ title }}
        </label>
        <input
            type="text"
            v-model="inputValue"
            @focus="inputFocused = true"
            @blur="onBlur"
            v-mask="'+7 (###) ### ## ##'"
            placeholder="+7 (900) 000 00 00"
            :class="[
                'block w-full px-4 py-1.5 font-light border rounded-md focus:outline-none',
                !inputValue && isActivated ? 'border-red-500' : 'border-gray-400',
            ]"
        />
        <p v-if="!inputValue && isActivated" class="text-red-500 text-xs font-light">Поле необходимо заполнить</p>
    </div>
</template>
