'use client'

import SiteBuildSection from '@/components/sections/SiteBuildSection'
import FooterSection from '@/components/sections/FooterSection'
import { useTranslations } from 'next-intl'

/**
 * SiteBuildPage component
 *
 * This page explains how the website was built, including technologies used,
 * development process, site structure, applied methods, and new learnings.
 */
export default function SiteBuildPage() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex flex-col items-center">
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        {/* Title moved to SiteBuildSection component to avoid duplication */}
      </div>

      <SiteBuildSection />
      <FooterSection />
    </div>
  )
}
