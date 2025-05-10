import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - Page not found
      </h1>
      <p className="mb-4">
        페이지가 존재하지 않습니다.
      </p>
    </section>
  );
}
