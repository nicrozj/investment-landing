const form = ref({
  name: "",
  surname: "",
  patrynomic: "",
  birthDate: "",
  phone: "",
  personalData: "",
});

const formErrors = ref({
  name: "",
  surname: "",
  patrynomic: "",
  birthDate: "",
  phone: "",
  personalData: "",
});

const ERROR_MESSAGES = {
  required: "Поле необходимо заполнить",
};

function validateForm() {
  const requiredFields = [
    "name",
    "surname",
    "patrynomic",
    "birthDate",
    "phone",
		"personalData"
  ];
  requiredFields.forEach((field) => {
    formErrors.value[field] = form.value[field] ? "" : ERROR_MESSAGES.required;
  });

  const hasErrors = Object.values(formErrors.value).some(
    (error) => error !== ""
  );

  if (!hasErrors) {
    console.log(form.value);
  }
}

export function useApplicationForm() {
  return {
    form,
    formErrors,
    validateForm,
  };
}
