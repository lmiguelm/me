import { AnimatedBorderEffect } from '@/components/animated-border-effect'
import { MotionDiv } from '@/components/motion-div'

import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'
import { AboutSection } from './sections/about-section'
import { AvatarSection } from './sections/avatar-section'
import { CardsSection } from './sections/cards-section'
import { ContactSection } from './sections/contact-section'
import { LogoSection } from './sections/logo-section'
import { ProjectsSection } from './sections/projects-section'
import { SocialMediaSection } from './sections/social-media-section'
import { StacksSection } from './sections/stacks-section'
import { TitleSection } from './sections/title-section'

export default async function Home() {
  return (
    <div className="min-h-screen px-[200px] max-lg:px-0 flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/5 via-secondary to-background/from-background/5">
      <AnimatedBorderEffect>
        <MotionDiv
          initial={{
            opacity: 0.75,
            scale: 0.9,
            translateY: 20,
            rotateX: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            translateY: 0,
            rotateX: 0,
          }}
          transition={{
            type: 'spring',
          }}
        >
          <div className="flex-1 p-3 rounded-lg grid gap-3 max-sm:p-[30px] bg-background">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">
              <div className="flex flex-col gap-3">
                <Suspense fallback={<Skeleton className="h-[168px]" />}>
                  <StacksSection />
                </Suspense>

                <Suspense fallback={<Skeleton className="flex-1" />}>
                  <CardsSection />
                </Suspense>
              </div>

              <div className="flex flex-col gap-3">
                <LogoSection />

                <div className="flex flex-1 gap-3 max-lg:flex-col">
                  <Suspense fallback={<Skeleton className="flex-1" />}>
                    <AvatarSection />
                  </Suspense>

                  <div className="flex flex-col flex-1 gap-3">
                    <TitleSection />

                    <Suspense
                      fallback={<Skeleton className="flex-1 rounded" />}
                    >
                      <AboutSection />
                    </Suspense>

                    <Suspense
                      fallback={<Skeleton className="flex-1 rounded" />}
                    >
                      <SocialMediaSection />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-2">
              <Suspense fallback={<Skeleton className="col-span-2 rounded" />}>
                <ProjectsSection />
              </Suspense>

              <Suspense fallback={<Skeleton className="flex-1 rounded" />}>
                <ContactSection />
              </Suspense>
            </div>
          </div>
        </MotionDiv>
      </AnimatedBorderEffect>
    </div>
  )
}
