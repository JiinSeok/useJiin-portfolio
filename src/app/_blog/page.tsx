import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Blog',
  description: 'Jiin Blog',
}

export default function BlogPosts() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Our Blog</h1>
      <div>
        <Link
          href="/src/app/_blog/sample-post"
          className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
        >
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
            <p className="text-black dark:text-white tracking-tight">
              아직 포스트가 없어요.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              Jan 1, 2023
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
