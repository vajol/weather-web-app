export function convertKelvinToCelsius(tempInKelvin: number): number {
  const temInCelsius = tempInKelvin - 273.15;
  return Math.floor(temInCelsius);
}