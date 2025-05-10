import { getRequestConfig, RequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  const initialLocale = locale || 'ko'

  return {
    locale: initialLocale,
    messages: (await import(`@/constants/locales/${initialLocale}.json`))
      .default,
  }
})
