export function isValueEqual(
  value: string,
  sign: string,
  direct: string,
): boolean {
  if (direct === 'first') {
    return value.slice(0, sign.length) === sign ? true : false
  } else if (direct === 'last') {
    return value.slice(-1) === sign ? true : false
  } else {
    return false
  }
}
