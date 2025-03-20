/** Handle the checkbox checked and unchecked state */
export const getCheckBoxValues = (
  prevValues: string[],
  currentValue: string,
  checked: boolean
) => {
  if (checked) {
    return [...prevValues, currentValue];
  }
  return prevValues.filter((value) => value !== currentValue);
};
