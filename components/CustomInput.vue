<script setup>
    defineProps(['title', 'type', 'placeholder', 'class', 'autocomplete', 'value'])
    const model = defineModel({ default: 10000 });
</script>
<template>
    <div class="relative flex flex-col gap-1">
        <label v-if="title" for="description" class="block text-sm font-light text-secondary">{{ title }}</label>
        <input 
            :autocomplete="autocomplete"
            :type="type" 
            :class="class"
            id="description" 
            v-model="model"
            :placeholder="placeholder"
            class="border border-secondary text-gray-900 rounded-lg text-xl focus:ring-accent focus:border-accent w-full py-1.5 px-5" 
            required />
        <input 
            id="default-range" 
            type="range" 
            v-model="model" 
            min="10000"
            max="10000000"
            class="w-[95%] h-1 bg-accent accent-accent rounded-lg appearance-none cursor-pointer absolute bottom-0 left-0 right-0 mx-auto">
    </div>
</template>