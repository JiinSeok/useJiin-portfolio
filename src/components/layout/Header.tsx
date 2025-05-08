'use client'

import { useRouter } from 'next/navigation'

const Header = ({ title }: { title: string }) => {
  const router = useRouter()

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="relative">
              <button
                onClick={() => router.push('/me')}
                className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*<header className="flex items-center justify-between mb-8 p-4 bg-gradient-to-r from-gray-50 to-white-50 rounded-xl shadow-sm">*/}
      {/*  <Link*/}
      {/*    href="/"*/}
      {/*    className="flex items-center hover:opacity-90 transition-opacity"*/}
      {/*  >*/}
      {/*    <Image*/}
      {/*      src="/images/nexca/logo.svg"*/}
      {/*      alt="NEXCA Logo"*/}
      {/*      width={120}*/}
      {/*      height={60}*/}
      {/*      style={{ height: 'auto' }}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </Link>*/}
      {/*  <p className="text-gray-700">Next Generation Cost Analytics</p>*/}
      {/*</header>*/}
    </>
  )
}

export default Header
