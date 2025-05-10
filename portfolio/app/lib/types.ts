import {ReactNode} from "react";

export type SupportedLocales = "en" | "ko"

export type Locale = {
  locale: SupportedLocales;
};

export type Params = {
  params: Locale
};

export type LayoutProps = {
  children: ReactNode;
  params: Locale
};