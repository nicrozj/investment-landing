<script setup>
    defineProps(['title', 'type', 'placeholder', 'class', 'autocomplete'])
    const model = defineModel();
</script>
<template>
    <div>
        <label v-if="title" for="description" class="block text-sm font-medium text-gray-900">{{ title }}</label>
        <input 
            v-if="type==='text'"
            :autocomplete="autocomplete"
            :type="type" 
            :class="class"
            id="description" 
            v-model="model"
            :placeholder="placeholder"
            class="border border-secondary text-secondary text-sm font-light rounded-md w-full p-2" 
            required />
        <input 
            v-if="type==='tel'"
            :autocomplete="autocomplete"
            :type="type" 
            :class="class"
            id="description" 
            v-model="model"
            v-mask="'+7 (9##) ### ## ##'"
            placeholder="+7 (___) ___ __ __"
            class="border border-secondary text-secondary text-sm font-light rounded-md w-full p-2" 
            required />
        <input 
            v-if="type==='birthdate'"
            :autocomplete="autocomplete"
            :type="type" 
            :class="class"
            id="description" 
            v-model="model"
            v-mask="'##.##.####'"
            placeholder="дд.мм.гггг"
            class="border border-secondary text-secondary text-sm font-light rounded-md w-full p-2" 
            required />
    </div>
</template>
