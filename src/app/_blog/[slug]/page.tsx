import type { Metadata } from 'next'

interface Params {
  params: {
    slug: string
  }
}

export function generateMetadata(): Metadata {
  return {
    title: 'Sample Post',
    description: 'This is a sample post',
  }
}

export default function Blog() {
  return (
    <section>
      <h1 className="title mb-3 font-medium text-2xl tracking-tight">
        Sample Post
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Jan 1, 2023
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <p>This is a sample post content.</p>
      </article>
    </section>
  )
}
