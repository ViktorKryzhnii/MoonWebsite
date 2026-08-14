export function isRequired(value: string): boolean {
  return value.trim().length > 0
}

export function isValidName(value: string): boolean {
  return /^[\p{L}\s'-]+$/u.test(value.trim())
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isValidPhone(value: string): boolean {
  return /^[+\d][\d\s()-]{6,}$/.test(value.trim())
}

export function isValidCardNumber(value: string): boolean {
  const digits = value.replace(/\s+/g, '')
  return /^\d{13,19}$/.test(digits)
}

export function isValidExpiry(value: string): boolean {
  const match = value.trim().match(/^(\d{2})\/(\d{2})$/)
  if (!match) return false

  const month = Number(match[1])
  const year = Number(match[2])
  if (month < 1 || month > 12) return false

  const now = new Date()
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1

  if (year < currentYear) return false
  if (year === currentYear && month < currentMonth) return false

  return true
}

export function isValidCvc(value: string): boolean {
  return /^\d{3,4}$/.test(value.trim())
}
