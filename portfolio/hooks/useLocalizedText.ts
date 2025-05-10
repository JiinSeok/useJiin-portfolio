'use client'

import { useIntl } from "react-intl";

export const useLocalizedText = () => {
  const { formatMessage } = useIntl();
  return (id: string, values?: Record<string, string | number>) =>
    formatMessage({ id }, values);
};