'use client'

import {SupportedLocales} from "../lib/types";
import {ReactNode} from "react";
import {IntlProvider} from "react-intl";
import enMessages from "../../locales/en.json";
import koMessages from "../../locales/ko.json";

const messages: Record<string, Record<string, string>> = {
  en: enMessages,
  ko: koMessages,
};

export default function ClientSideSetUp({ children, locale}: { children: ReactNode, locale: SupportedLocales }) {

  const selectedMessages = messages[locale] || messages.en;

  return (
    <IntlProvider locale={locale} messages={selectedMessages}>
      {children}
    </IntlProvider>
  )
}