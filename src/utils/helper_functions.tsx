export function substringItem(payload: string, start: number, finish: number, endingCharacters: string = '') {
  return payload.substring(start, finish) + endingCharacters
}