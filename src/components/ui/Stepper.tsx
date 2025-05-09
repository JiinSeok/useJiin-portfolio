'use client'

import { cn } from '@/lib/utils/classnames'
import React, { createContext, useContext, useState } from 'react'

interface StepperContextType {
  currentStep: number
  totalSteps: number
  goToStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

interface StepperProps {
  children: React.ReactNode
  initialStep?: number
  className?: string
}

interface StepProps {
  children: React.ReactNode
  title: string
  description?: string
  className?: string
}

interface StepContentProps {
  children: React.ReactNode
  step: number
  className?: string
}

interface StepNavigationProps {
  className?: string
  nextLabel?: string
  prevLabel?: string
  finishLabel?: string
  onFinish?: () => void
}

// Context
const StepperContext = createContext<StepperContextType | undefined>(undefined)

export const useStepper = () => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a Stepper component')
  }
  return context
}

// Main Stepper Component
export const Stepper: React.FC<StepperProps> & {
  Step: React.FC<StepProps>
  Content: React.FC<StepContentProps>
  Navigation: React.FC<StepNavigationProps>
} = ({ children, initialStep = 0, className }) => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const childrenArray = React.Children.toArray(children)
  const totalSteps = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === Step,
  ).length

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        totalSteps,
        goToStep,
        nextStep,
        prevStep,
        isFirstStep,
        isLastStep,
      }}
    >
      <div className={cn('w-full', className)}>
        <div className="mb-8 w-full">
          <div className="flex items-center justify-between">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const isActive = index === currentStep
              const isCompleted = index < currentStep

              return (
                <React.Fragment key={index}>
                  {/* Step circle */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold',
                        {
                          'border-primary bg-primary text-primary-foreground':
                            isActive,
                          'border-primary bg-primary-foreground text-primary':
                            isCompleted,
                          'border-muted-foreground bg-background text-muted-foreground':
                            !isActive && !isCompleted,
                        },
                      )}
                    >
                      {isCompleted ? (
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    {/* Step title */}
                    <div className="absolute mt-16 text-center">
                      {React.Children.toArray(children)
                        .filter(
                          (child): child is React.ReactElement<StepProps> =>
                            React.isValidElement(child) && child.type === Step,
                        )
                        .map((child, i) => {
                          if (React.isValidElement(child) && i === index) {
                            return (
                              <div
                                key={i}
                                className="w-32 px-2 flex-col items-center"
                              >
                                <div
                                  className={cn('text-sm font-medium', {
                                    'text-primary': isActive || isCompleted,
                                    'text-muted-foreground':
                                      !isActive && !isCompleted,
                                  })}
                                >
                                  {child.props.title}
                                </div>
                                {child.props.description && (
                                  <div className="text-xs text-muted-foreground">
                                    {child.props.description}
                                  </div>
                                )}
                              </div>
                            )
                          }
                          return null
                        })}
                    </div>
                  </div>
                  {/* Connector line */}
                  {index < totalSteps - 1 && (
                    <div
                      className={cn('h-0.5 w-full flex-1', {
                        'bg-primary': index < currentStep,
                        'bg-muted': index >= currentStep,
                      })}
                    />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>

        {/* Step content */}
        <div className="mt-16">{children}</div>
      </div>
    </StepperContext.Provider>
  )
}

// Step Component (for header/title)
const Step: React.FC<StepProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return <div className={className}>{children}</div>
}

// Step Content Component
const StepContent: React.FC<StepContentProps> = ({
  children,
  step,
  className,
}) => {
  const { currentStep } = useStepper()

  if (step !== currentStep) return null

  return <div className={cn('animate-fadeIn', className)}>{children}</div>
}

// Step Navigation Component
const StepNavigation: React.FC<StepNavigationProps> = ({
  className,
  nextLabel = 'Next',
  prevLabel = 'Back',
  finishLabel = 'Submit',
  onFinish,
}) => {
  const { nextStep, prevStep, isFirstStep, isLastStep } = useStepper()

  return (
    <div className={cn('mt-8 flex justify-between', className)}>
      {!isFirstStep && (
        <button
          type="button"
          onClick={prevStep}
          className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary/10"
        >
          {prevLabel}
        </button>
      )}
      <div className="flex-1" />
      {isLastStep ? (
        <button
          type="button"
          onClick={onFinish}
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          {finishLabel}
        </button>
      ) : (
        <button
          type="button"
          onClick={nextStep}
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          {nextLabel}
        </button>
      )}
    </div>
  )
}

// Attach subcomponents
Stepper.Step = Step
Stepper.Content = StepContent
Stepper.Navigation = StepNavigation

export default Stepper
