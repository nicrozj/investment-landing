<script setup>
    defineProps(['title', 'placeholder', 'class', 'autocomplete'])
    const inputValue = defineModel();
    const inputFocused = ref('');
    const isActivated = ref(false);

    function onBlur() {
        inputFocused.value = false;
        isActivated.value = true;
    }

</script>
<template>
    <div class="relative w-full">
        <label
            :class="[
                'absolute left-2 transition-all bg-white px-1 pointer-events-none font-light',
                inputFocused || inputValue ? 'text-xs -top-2 left-2 text-gray-400' : 'text-base top-2 text-gray-400',
            ]"
        >
            {{ title }}
        </label>

        <input
            type="text"
            v-model="inputValue"
            @focus="inputFocused = true"
            @blur="onBlur"
            :class="[
                'block w-full px-4 py-1.5 font-light border rounded-md focus:outline-none',
                !inputValue && isActivated ? 'border-red-500' : 'border-gray-400',
            ]"
        />
        <p v-if="!inputValue && isActivated" class="text-red-500 text-xs font-light">Поле необходимо заполнить</p>
    </div>
</template>
