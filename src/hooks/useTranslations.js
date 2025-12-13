import { useLanguage } from '../providers/LanguageProvider'
import { translations } from '../utils/translations'

export const useTranslations = () => {
  const { language } = useLanguage()

  const t = (key) => {
    const translation = translations[language]?.[key]
    return translation || key
  }

  return { t, language }
}
