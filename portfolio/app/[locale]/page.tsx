import PageContent from "./PageContent";
import {supportedLocales} from "../components/nav";

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default function LocalePage() {
  // if (!supportedLocales.includes(locale)) {
  //   notFound();
  // }
  return <PageContent />
}