export const Salary = (salary) => {
  return salary.replaceAll('k', '000').replace('-', '—')
}
