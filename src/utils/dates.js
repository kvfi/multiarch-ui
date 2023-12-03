export const datetimeToHumanDate = (input) => {
  const d = new Date(input)
  return d.getFullYear()
}
