'use client'

import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import FooterSection from '@/components/sections/FooterSection'
import HeroSection from '@/components/sections/HeroSection'
import PersonalSection from '@/components/sections/PersonalSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TechStackSection from '@/components/sections/TechStackSection'
import UXDesignSection from '@/components/sections/UXDesignSection'
import StepperDialog from '@/components/ui/Modal/StepperDialog'
import { NAVIGATION_ITEMS } from '@/constants/sections/navigation'
import { ROUTER } from '@/constants/router'
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
      <nav
        className="w-full sticky top-0 bg-background z-40 shadow-sm"
        style={{ '--navbar-height': '64px' } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-3 py-6 flex flex-row sm:flex-row justify-between items-center">
          <div className="flex items-center min-w-fit mb-4 sm:mb-0">
            <span className="text-responsive-2xl font-bold text-primary">
              Jiin Seok
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={
                  item.id === 'til'
                    ? ROUTER.TIL.path
                    : item.id === 'soft-skills'
                      ? ROUTER.SoftSkills.path
                      : item.id === 'resume'
                        ? ROUTER.Resume.path
                        : { pathname: '/', hash: item.id }
                }
                className="text-responsive-base text-foreground hover:text-primary transition-colors"
              >
                {t(item.translationKey)}
              </Link>
            ))}
            <button
              onClick={() => openModal('contactDialog')}
              className="text-responsive-base text-foreground hover:text-primary transition-colors"
            >
              {/*{t('nav.contact')}*/}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <HeroSection />
      <PersonalSection />
      <ProjectsSection />
      <TechStackSection />
      <UXDesignSection />

      {/*<MotivationFitSection />*/}
      <FAQSection />
      <CTASection />
      {/*<BugReportSection />*/}
      {/*<FunFactsSection />*/}
      <FooterSection />
    </div>
  )
}
