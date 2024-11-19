<script setup>
const inputValue = defineModel();
</script>
<template>
    <div>
        <div class="flex gap-4 items-center">
            <input
                type="checkbox"
                class="size-6"
                v-model="inputValue"
            />
            <p class="font-light">Я подтверждаю согласие на обработку <a href='#' class="text-accent">персональных данных</a></p>
        </div>
        <p v-if="!inputValue" class="text-red-500 text-xs font-light">Поле необходимо заполнить</p>
    </div>


</template>
