<script setup>
const { form, formErrors, validateForm } = useApplicationForm();

</script>

<template>
  <div class="rounded-xl bg-white p-8">
    <h1 class="text-2xl">Заявка на открытие вклада</h1>
    <div class="flex flex-col gap-8 mt-10">
      <div>
        <UInput type="text" placeholder="Фамилия" v-model="form.name"></UInput>
        <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
      </div>

      <div>
        <UInput type="text" placeholder="Имя" v-model="form.surname"></UInput>
        <p v-if="formErrors.surname" class="text-red-500 text-sm mt-1">{{ formErrors.surname }}</p>
      </div>

      <div>
        <UInput type="text" placeholder="Отчество" v-model="form.patrynomic"></UInput>
        <p v-if="formErrors.patrynomic" class="text-red-500 text-sm mt-1">{{ formErrors.patrynomic }}</p>
      </div>

      <div>
        <UInput type="birthdate" placeholder="Дата рождения" v-model="form.birthDate"></UInput>
        <p v-if="formErrors.birthDate" class="text-red-500 text-sm mt-1">{{ formErrors.birthDate }}</p>
      </div>

      <div>
        <UInput type="tel" placeholder="Телефон" v-model="form.phone"></UInput>
        <p v-if="formErrors.phone" class="text-red-500 text-sm mt-1">{{ formErrors.phone }}</p>
      </div>

      <div>
        <div class="flex gap-3">
            <input type="checkbox" class="size-6 rounded-xl" v-model="form.personalData" />
            <p class="font-light">
            Я подтверждаю согласие на обработку 
            <a href="#" class="text-accent">персональных данных</a>
            </p>
        </div>
        <p v-if="formErrors.personalData" class="text-red-500 text-sm mt-1">{{ formErrors.personalData }}</p>
      </div>
      

      <UYellowButton @click="validateForm">Оставить заявку</UYellowButton>
    </div>
  </div>
</template>
