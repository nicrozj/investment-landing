export function useButtonList() {
  const selectedPeriod = ref();
  const selectedPercentage = ref();

  return({
    selectedPeriod,
    selectedPercentage,
  });
}
