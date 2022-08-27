export const calculateAge = (year: number): number => {
  return new Date().getFullYear() - year + 1;
}