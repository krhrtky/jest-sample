export const str: string = 'sample';

export const toNumber = (strNum: string): number => {
  const converted = Number(strNum)
  return isNaN(converted) ? 0 : converted
}
