<script setup>
const { selectedPercentage, selectedPeriod, listButtonsPeriod, listButtonsPercantage, inputSum } = useStorage();
</script>
<template>
    <div>
        <h1 class="text-2xl">Расчет доходности по вкладу</h1>
        <div>
            <CustomInput title="Сумма вклада" value="10000" v-model="inputSum"/>
        </div>
        <div class="flex gap-12 mt-6">
            <div>
                <h3 class="text-secondary font-light">Выплата процентов</h3>
                <div class="flex basis-1/2 gap-4">
                    <ButtonList 
                        :options='listButtonsPercantage'
                        v-model="selectedPercentage"/>
                </div>
            </div>
            <div>
                <h3 class="text-secondary font-light">Срок вклада</h3>
                <div class="flex basis-1/2 gap-4">
                    <ButtonList 
                        :options='listButtonsPeriod'
                        v-model="selectedPeriod"/>
                </div>
            </div>
        </div>
        <div class="my-7">
            <p class="font-light text-sm">*Расчет по вкладу является предварительным при условии открытия вклада онлайн</p>
            <ULink>Подробные условия</ULink>
        </div>
    </div>
</template>