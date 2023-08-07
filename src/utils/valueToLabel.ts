const valueToLabel = (value: string): string => {
  value = value.replace(/([A-Z])/g, ' $1')
  const label = value.charAt(0).toUpperCase() + value.slice(1)
  return label
}

export default valueToLabel
