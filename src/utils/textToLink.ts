export const textToLink = (text: string): string => {
  const lowerText = text.toLowerCase()
  return lowerText.replaceAll(' ', '-')
}
