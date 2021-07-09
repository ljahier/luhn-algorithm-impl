/**
 *
 * @param {number} nbr
 * @returns
 */

export const checkSumLuhn = (nbr: string): boolean => {
  if (!Number(nbr)) {
    return false;
  }
  const digitsLength: number = nbr.length - 1;
  let sumNbr: number = 0;
  let isOdd: boolean = false;

  for (let i: number = digitsLength; i >= 0; i--) {
    let digit: number = Number(nbr.charAt(i));

    if (isOdd) {
      digit = digit * 2;
      if (digit > 9) {
        digit = digit - 9;
      }
    }
    isOdd = !isOdd;
    sumNbr += digit;
  }

  return (sumNbr % 10 === 0);
};