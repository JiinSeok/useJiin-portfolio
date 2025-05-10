import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language");
  let detectedLocale = "en"; // 기본값

  if (acceptLanguage) {
    const languages = acceptLanguage.split(",").map((lang) => lang.split(";")[0]);
    if (languages.includes("ko")) {
      detectedLocale = "ko";
    }
  }

  const url = req.nextUrl.clone();

  // 기본 경로(`/`)로 접근 시 리다이렉트
  if (url.pathname === "/") {
    url.pathname = `/${detectedLocale}`;
    return NextResponse.redirect(url);
  }
}