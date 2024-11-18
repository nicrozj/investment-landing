<script setup>
const { percent, income, finalAmount } = useCalculation();

function formatMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
</script>

<template>
    <div class="bg-gray-100 rounded-xl p-6 flex flex-col justify-between w-[340px] mx-auto">
        <div>
            <h3 class="text-secondary font-light">Выплата процентов</h3>
            <h1 class="text-2xl font-light">{{ (percent * 100).toFixed(2) }}%</h1>
        </div>
        <div>
            <h3 class="text-secondary font-light">Доход</h3>
            <h1 class="text-2xl font-light">{{ formatMoney(Math.ceil(income)) }} рублей</h1>
        </div>
        <div>
            <h3 class="text-secondary font-light">Сумма в конце срока*</h3>
            <h1 class="text-2xl font-light">{{ formatMoney(Math.ceil(finalAmount)) }} рублей</h1>
        </div>
        <UYellowButton>Оставить заявку</UYellowButton>
    </div>
</template>