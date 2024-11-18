const Buttons = {
    Monthly: "Ежемесячно",
    AtEnd: "В конце срока",
  };
  const ButtonsPeriod = {
    TwoYears: "2 года",
    ThreeYeats: "3 года",
  };
  
  const listButtonsPercantage = [Buttons.Monthly, Buttons.AtEnd];
  const listButtonsPeriod = [ButtonsPeriod.TwoYears, ButtonsPeriod.ThreeYeats];

  const selectedPeriod = ref(listButtonsPeriod[0]);
  const selectedPercentage = ref(listButtonsPercantage[0]);

  const inputSum = ref(10000);

export function useStorage() {
  return {
    selectedPeriod,
    selectedPercentage,
    listButtonsPercantage,
    listButtonsPeriod,
    inputSum,
  };
}
