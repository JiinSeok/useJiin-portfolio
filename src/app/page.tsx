'use client'

import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import FooterSection from '@/components/sections/FooterSection'
import HeroSection from '@/components/sections/HeroSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import TechStackSection from '@/components/sections/TechStackSection'
import UXDesignSection from '@/components/sections/UXDesignSection'
import StepperDialog from '@/components/ui/Modal/StepperDialog'
import { NAVIGATION_ITEMS } from '@/constants/portfolio'
import { useModal } from '@/hooks/useModal'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

/**
 * HomePage component
 *
 * This is the main page of the portfolio site. It includes various sections
 * such as hero, UX design, tech stack, FAQ, newsletter, and footer.
 */
export default function HomePage() {
  const t = useTranslations('HomePage')
  const { modalName, openModal, closeModal } = useModal()

  return (
    <div className="flex flex-col items-center">
      {/* Contact Dialog */}
      <StepperDialog
        isOpen={modalName === 'contactDialog'}
        onRequestClose={closeModal}
      />

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">Jiin Seok</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={{ pathname: '/', hash: item.id }}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t(item.translationKey)}
            </Link>
          ))}
          <button
            onClick={() => openModal('contactDialog')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </button>
        </div>
        <div className="flex items-center space-x-4"></div>
      </nav>

      {/* Main Content Sections */}
      <HeroSection />
      <UXDesignSection />
      <TechStackSection />
      <CTASection />
      <FAQSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  )
}
