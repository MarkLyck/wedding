import dk from './dk.json'
import en from './en.json'

export const getMessages = (locale: string) => {
  if (locale === 'dk') {
    return dk
  }
  return en
}
