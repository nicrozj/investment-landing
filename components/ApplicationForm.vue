<template>
    <div class="rounded-xl bg-white p-8">
        <h1 class="text-2xl">Заявка на открытие вклада</h1>
        <div class="flex flex-col gap-8 mt-10">
            <UInput placeholder="Фамилия"></UInput>
            <UInput placeholder="Имя"></UInput>
            <UInput placeholder="Отчество"></UInput>
            <UInput placeholder="Дата рождения"></UInput>
            <UInput placeholder="Номер телефона"></UInput>
            <div class="flex gap-3">
                <input type="checkbox" class="size-6 rounded-xl">
                <p class="font-light">Я подтверждаю согласие на обработку <a href="#" class="text-accent">персональных данных</a></p>
            </div>
            <UYellowButton>Оставить заявку</UYellowButton>
        </div>
    </div>
</template>