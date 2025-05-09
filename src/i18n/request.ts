import { getRequestConfig, RequestConfig } from 'next-intl/server'

export default getRequestConfig(async (): Promise<RequestConfig> => {
  const locale = 'ko'

  return {
    locale,
    messages: (await import(`@/constants/locales/${locale}.json`)).default,
  }
})
