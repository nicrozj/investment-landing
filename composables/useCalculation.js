const { inputSum, selectedPercentage, selectedPeriod } = useStorage();

const percent = ref();
const income = ref();
const finalAmount = ref();

recalculate()
watch([selectedPercentage, selectedPeriod, inputSum], recalculate)

function recalculate() {
    if (selectedPercentage.value == 'Ежемесячно' && selectedPeriod.value == '2 года') {
        percent.value = 0.062;
    } else if (selectedPercentage.value == 'В конце срока' && selectedPeriod.value == '2 года') {
        percent.value = 0.066;
    } else if (selectedPercentage.value == 'Ежемесячно' && selectedPeriod.value == '3 года') {
        percent.value = 0.0675;
    } else if (selectedPercentage.value == 'В конце срока' && selectedPeriod.value == '3 года') {
        percent.value = 0.075;
    }
    income.value = percent.value * inputSum.value * parseInt(selectedPeriod.value.slice(0, 1));
    finalAmount.value = +inputSum.value + +income.value;
}

export function useCalculation() {
    return({
        percent,
        income,
        finalAmount,
    });
}

