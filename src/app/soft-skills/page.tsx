'use client'

import React from 'react';
import { softSkillEntries } from './soft-skills-data';
import FooterSection from '@/components/sections/FooterSection';
import { NAVIGATION_ITEMS } from '@/constants/sections/navigation';
import { Link } from '@/navigation';
import { ROUTER } from '@/constants/router';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function SoftSkills() {
  const t = useTranslations('HomePage')
  const softSkillsT = useTranslations('SoftSkillsPage')

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{softSkillsT('title')}</title>
        <meta name="description" content={softSkillsT('description')} />
      </Head>
      {/* Navigation */}
      <nav className="w-full sticky top-0 bg-background z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">Jiin Seok</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.id === 'soft-skills' ? ROUTER.SoftSkills.path : { pathname: '/', hash: item.id }}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t(item.translationKey)}
              </Link>
            ))}
            <Link
              href={ROUTER.Contact.path}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <section>
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">{softSkillsT('title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {softSkillsT('subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {softSkillEntries.map((entry, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h2 className="text-2xl font-medium text-primary mb-2 md:mb-0">
                    {entry.url ? (
                      <a 
                        href={entry.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {entry.title}
                      </a>
                    ) : (
                      entry.title
                    )}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
