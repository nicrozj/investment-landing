<script setup>
const { form, formErrors, validateForm } = useApplicationForm();
</script>

<template>
  <div class="rounded-xl bg-white p-8">
    <h1 class="text-2xl">Заявка на открытие вклада</h1>
    <div class="flex flex-col gap-8 mt-10">
      <div class="flex flex-col gap-9">
        <UTextInput title="Фамилия" v-model="form.surname" />
        <UTextInput title="Имя" v-model="form.name" />
        <UTextInput title="Отчество" v-model="form.patrynomic" />
        <UDateInput title="Дата рождения" v-model="form.birthDate" />
        <UTelInput title="Телефон" v-model="form.phone" />
        <UCheckBox v-model="form.personalData"/>
      </div>
      <UYellowButton @click="validateForm">Оставить заявку</UYellowButton>
    </div>
  </div>
</template>
