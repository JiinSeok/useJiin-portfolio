'use client'

import { NEXCA_LOGO } from '@/constants/images'
import { menuItems } from '@/constants/messages'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function SideBar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`${collapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out shadow-sm`}
    >
      {/* 로고 행 */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/" className="flex items-center">
          {/* 사이드바 접힘 */}
          {collapsed ? (
            <div className="flex justify-center w-full">
              <Image
                src={NEXCA_LOGO.src}
                alt={NEXCA_LOGO.alt}
                width={32}
                height={32}
                className="transition-all duration-300"
              />
            </div>
          ) : (
            /* 사이드바 펼쳐짐 */
            <div className="flex items-center">
              <Image
                src={NEXCA_LOGO.src}
                alt={NEXCA_LOGO.alt}
                width={32}
                height={32}
                className="mr-3 transition-all duration-300"
              />
              <h1 className="text-xl font-bold text-gray-800">NEXCA.</h1>
            </div>
          )}
        </Link>

        {/* 사이드바 접기 버튼 */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 메뉴 항목 */}
      <nav className="mt-6">
        <ul>
          {/*{(isAdmin ? menuItems.ADMIN : menuItems.USER)*/}
          {menuItems.USER.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`flex items-center py-3 px-4 ${
                  pathname === item.path
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                } transition-colors`}
              >
                <span className={collapsed ? 'mx-auto' : 'mr-3'}>
                  {item.icon}
                </span>
                {/* 사이드바 접히면 이름 숨김 */}
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
