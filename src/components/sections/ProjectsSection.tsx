import { Button } from '@/components/ui/Button'
import { ContentCard } from '@/components/ui/ContentCard'
import { Link } from '@/navigation'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutGridIcon,
  LayoutIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

// Extended Project interface with image/gif URL and alt text
export interface ProjectWithMedia {
  title: string
  year: number
  description: string
  url: string
  imageUrl: string
  alt: string
  codeSnippet?: string
}

// Sample project data with images and code snippets
const projectsData: ProjectWithMedia[] = [
  {
    title: 'AlbaForm',
    year: 2023,
    description:
      'A comprehensive platform connecting part-time job seekers with employers. Features include job listings, application tracking, employer profiles, resume builder, and real-time notifications. Built with React, Node.js, and MongoDB.',
    url: '/blog/albaform-project',
    imageUrl: '/notion-images/albaform/job-list.png',
    alt: 'AlbaForm job listing page showing various part-time jobs',
    codeSnippet: `// AlbaForm Job Listing Component
import React, { useState, useEffect } from 'react';
import { fetchJobs, JobType } from '../api/jobs';

export const JobListing: React.FC = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
      setLoading(false);
    };

    loadJobs();
  }, []);

  return (
    <div className="job-listing">
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
};`,
  },
  {
    title: 'Portfolio Site',
    year: 2023,
    description:
      'Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Includes responsive design, dark mode support, internationalization, interactive project showcases, and a custom blog system with MDX support.',
    url: '/site-build',
    imageUrl: '/notion-images/albaform/create-form.png',
    alt: 'Portfolio website homepage with interactive elements',
    codeSnippet: `// Portfolio Dark Mode Toggle
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};`,
  },
  {
    title: 'Project Three',
    year: 2022,
    description:
      'An e-learning platform with course management, video lectures, interactive quizzes, progress tracking, and certification. Implemented with Vue.js frontend, Django backend, and AWS for media storage and delivery.',
    url: 'https://example.com/',
    imageUrl: '/notion-images/albaform/login.png',
    alt: 'Project three screenshot showing the main interface',
    codeSnippet: `// E-Learning Course Component
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCourseById } from '@/api/courses';

export default {
  setup() {
    const route = useRoute();
    const course = ref(null);
    const loading = ref(true);

    onMounted(async () => {
      const courseId = route.params.id;
      course.value = await fetchCourseById(courseId);
      loading.value = false;
    });

    return {
      course,
      loading
    };
  }
};`,
  },
]

const ProjectsSection: React.FC = () => {
  const t = useTranslations('HomePage')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isGalleryView, setIsGalleryView] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Handle scroll is no longer needed with transform-based carousel
  const handleScroll = () => {
    // This function is kept for compatibility but no longer used
  }

  // Set the selected item
  const scrollToItem = (index: number) => {
    setActiveIndex(index)
  }

  // Navigate to previous project
  const scrollToPrev = () => {
    const newIndex = Math.max(0, activeIndex - 1)
    scrollToItem(newIndex)
  }

  // Navigate to next project
  const scrollToNext = () => {
    const newIndex = Math.min(projectsData.length - 1, activeIndex + 1)
    scrollToItem(newIndex)
  }

  // Toggle gallery view
  const toggleGalleryView = () => {
    setIsGalleryView(!isGalleryView)
  }

  // No need for scroll event listener with transform-based carousel
  useEffect(() => {
    // This effect is kept for potential future enhancements
  }, [])

  return (
    <section id="projects" className="w-full py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('footer.projects')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.caption-description')}
          </p>
        </div>

        <ContentCard
          title={t('projects.caption-title')}
          className="w-full"
        >
          <div className="flex justify-end mb-8">
            {/* View toggle button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleGalleryView}
              aria-label={
                isGalleryView
                  ? 'Switch to carousel view'
                  : 'Switch to gallery view'
              }
              className="rounded-full"
            >
              {isGalleryView ? (
                <LayoutIcon className="h-5 w-5" />
              ) : (
                <LayoutGridIcon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {!isGalleryView ? (
            <div className="relative flex">
              {/* Carousel container */}
              <div
                ref={carouselRef}
                className="flex overflow-hidden relative w-full max-w-2xl"
              >
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4 mb-8"
                    style={{
                      transform: `translateX(${-100 * activeIndex}%)`,
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  >
                    {/* Project header with title and year */}
                    <div className="mb-4">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-sm text-gray-500">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Two cards container with vertical layout */}
                    <div className="flex flex-col gap-4">
                      {/* Screenshot card */}
                      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-1">
                        <div className="relative h-64 w-full">
                          <Image
                            src={project.imageUrl}
                            alt={project.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      {/* Code block card */}
                      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-1">
                        {/* Declare the codeSnippet variable outside JSX */}
                        {(() => {
                          const codeSnippet =
                            project.codeSnippet || '// No code snippet available'
                          return (
                            <pre className="p-4 text-responsive-sm h-64 bg-gray-900 text-gray-100 whitespace-pre-wrap break-words">
                              <code>{codeSnippet}</code>
                            </pre>
                          )
                        })()}
                      </div>
                    </div>

                    {/* View more link */}
                    <div className="mt-4 text-right">
                      <Link
                        href={project.url}
                        className="text-primary hover:underline"
                      >
                        {t('hero.view-more')}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center mt-8 gap-4 max-w-2xl mx-auto">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollToPrev}
                  disabled={activeIndex === 0}
                  className="rounded-full"
                  aria-label="Previous project"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </Button>

                <div className="flex space-x-2">
                  {projectsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToItem(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeIndex
                          ? 'bg-primary'
                          : 'bg-gray-300 dark:bg-gray-700'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollToNext}
                  disabled={activeIndex === projectsData.length - 1}
                  className="rounded-full"
                  aria-label="Next project"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </Button>
              </div>

              {/* Caption area with fixed height */}
              <div className="mt-8 text-center h-24 overflow-hidden max-w-2xl mx-auto">
                <p className="text-lg font-medium">
                  {t('projects.caption-title')}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('projects.caption-description')}
                </p>
              </div>
            </div>
          ) : (
            /* Gallery grid view */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <div key={index} className="space-y-4">
                  {/* Project header with title and year */}
                  <div className="mb-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="text-sm text-gray-500">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Two cards container with vertical layout */}
                  <div className="flex flex-col gap-4">
                    {/* Screenshot card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-1">
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.imageUrl}
                          alt={project.alt}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>

                    {/* Code block card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-1">
                      {/* Declare the codeSnippet variable outside JSX */}
                      {(() => {
                        const codeSnippet =
                          project.codeSnippet || '// No code snippet available'
                        return (
                          <pre className="p-4 text-responsive-sm h-48 bg-gray-900 text-gray-100 whitespace-pre-wrap break-words">
                            <code>{codeSnippet}</code>
                          </pre>
                        )
                      })()}
                    </div>
                  </div>

                  {/* View more link */}
                  <div className="text-right">
                    <Link
                      href={project.url}
                      className="text-primary hover:underline text-sm"
                    >
                      {t('hero.view-more')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ContentCard>
      </div>
    </section>
  )
}

export default ProjectsSection