const form = ref({
  name: "",
  surname: "",
  patrynomic: "",
  birthDate: "",
  phone: "",
  personalData: "true",
});

function validateForm() {
  const hasEmptyField = Object.values(form.value).some((value) => !value);
  if (!hasEmptyField) {
    console.log(form.value);
  } else {
      console.log("Не все поля заполнены!")
  }
}

export function useApplicationForm() {
  return {
    form,
    validateForm,
  };
}
