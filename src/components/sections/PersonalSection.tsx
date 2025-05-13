/**
 * Personal section component for the homepage
 *
 * This component displays personal information and appeal using profile image
 * and showcasing personal interests and characteristics.
 * 
 * Refactored to use Compound Component Pattern for better separation of concerns.
 */
'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { createContext, useContext, ReactNode } from 'react'

// Context type definition
type PersonalSectionContextType = {
  t: (key: string) => string
}

// Create context
const PersonalSectionContext = createContext<PersonalSectionContextType | undefined>(undefined)

// Hook to use the context
const usePersonalSection = () => {
  const context = useContext(PersonalSectionContext)
  if (!context) {
    throw new Error('usePersonalSection must be used within a PersonalSectionProvider')
  }
  return context
}

// Main component
export default function PersonalSection() {
  const t = useTranslations('HomePage')

  // Context value
  const contextValue = {
    t
  }

  return (
    <PersonalSectionContext.Provider value={contextValue}>
      <section id="personal" className="w-full py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-3">
          <PersonalSection.Header />
          <div className="flex flex-row md:flex-col items-center gap-10">
            <PersonalSection.ProfileImage />
            <PersonalSection.PersonalInfo />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PersonalSection.Interests />
            <PersonalSection.Values />
            <PersonalSection.Strengths />
            <PersonalSection.Motivations />
          </div>
        </div>
      </section>
    </PersonalSectionContext.Provider>
  )
}

// Header Component
PersonalSection.Header = function Header() {
  const { t } = usePersonalSection()
  
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">
        {t('personal.about-title')}
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto break-keep">
        {/*{t('personal.subtitle')}*/}
      </p>
      <h2 className="text-2xl font-bold mb-4 break-keep">
        {/*{t('personal.about-title')}*/}
      </h2>
      <p className="text-lg mb-6 break-keep">
        {/*{t('personal.about-description')}*/}
      </p>
    </div>
  )
}

// Profile Image Component
PersonalSection.ProfileImage = function ProfileImage() {
  return (
    <div className="md:w-1/3 flex justify-center md:pl-4">
      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
        <Image
          src="/profile.jpg"
          alt="Jiin Seok Profile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

// Personal Info Component
PersonalSection.PersonalInfo = function PersonalInfo() {
  return (
    <div className="md:w-2/3 md:px-6">
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #제로투원
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #고객중심
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #에러처리
        </span>{' '}
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #리팩토링
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #FeatureSlicedDesign
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #SEO
        </span>{' '}
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #모바일퍼스트
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #문제정의
        </span>{' '}
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #분석적
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #아이디어뱅크
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #취미는설정
        </span>
        <span className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #특기는QA
        </span>
        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-responsive-xs font-medium">
          #쇼핑은앱스토어
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-4 break-keep">
        {/*{t('personal.about-title')}*/}
      </h3>
      <p className="text-lg mb-6 break-keep">
        {/*{t('personal.about-description')}*/}
      </p>
    </div>
  )
}

// Interests Component
PersonalSection.Interests = function Interests() {
  const { t } = usePersonalSection()
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-3 flex items-center">
        <span className="mr-2">🌟</span> {t('personal.interests-title')}
      </h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="mr-2">🎮</span>
          <span className="break-keep">{t('personal.interest-1')}</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">📚</span>
          <span className="break-keep">{t('personal.interest-2')}</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">🎵</span>
          <span className="break-keep">{t('personal.interest-3')}</span>
        </li>
      </ul>
    </div>
  )
}

// Values Component
PersonalSection.Values = function Values() {
  const { t } = usePersonalSection()
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-3 flex items-center">
        <span className="mr-2">💖</span> {t('personal.values-title')}
      </h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="mr-2">🤝</span>
          <span className="break-keep">{t('personal.value-1')}</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">🔍</span>
          <span className="break-keep">{t('personal.value-2')}</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">🌱</span>
          <span className="break-keep">{t('personal.value-3')}</span>
        </li>
      </ul>
    </div>
  )
}

// Strengths Component
PersonalSection.Strengths = function Strengths() {
  const { t } = usePersonalSection()
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">💪</span>{' '}
        {t('motivation-fit.strengths-title')}
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="mr-3 text-primary text-xl">✓</span>
          <div>
            <h4 className="font-semibold text-lg">
              {t('motivation-fit.strength-1-title')}
            </h4>
            <p className="text-muted-foreground break-keep">
              {t('motivation-fit.strength-1-description')}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-primary text-xl">✓</span>
          <div>
            <h4 className="font-semibold text-lg">
              {t('motivation-fit.strength-2-title')}
            </h4>
            <p className="text-muted-foreground break-keep">
              {t('motivation-fit.strength-2-description')}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-primary text-xl">✓</span>
          <div>
            <h4 className="font-semibold text-lg">
              {t('motivation-fit.strength-3-title')}
            </h4>
            <p className="text-muted-foreground break-keep">
              {t('motivation-fit.strength-3-description')}
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

// Motivations Component
PersonalSection.Motivations = function Motivations() {
  const { t } = usePersonalSection()
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔥</span>{' '}
        {t('motivation-fit.motivations-title')}
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="mr-3 text-primary text-xl">✓</span>
          <div>
            <h4 className="font-semibold text-lg">
              {t('motivation-fit.motivation-1-title')}
            </h4>
            <p className="text-muted-foreground break-keep">
              {t('motivation-fit.motivation-1-description')}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-primary text-xl">✓</span>
          <div>
            <h4 className="font-semibold text-lg">
              {t('motivation-fit.motivation-2-title')}
            </h4>
            <p className="text-muted-foreground break-keep">
              {t('motivation-fit.motivation-2-description')}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-primary text-xl">✓</span>
          <div>
            <h4 className="font-semibold text-lg">
              {t('motivation-fit.motivation-3-title')}
            </h4>
            <p className="text-muted-foreground break-keep">
              {t('motivation-fit.motivation-3-description')}
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}