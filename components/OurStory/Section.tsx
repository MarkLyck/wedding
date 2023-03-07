import Image from 'next/image'

import { cva } from 'class-variance-authority'

import { fancyFont } from '@/lib/fonts'

type SectionProps = {
  title: string
  date: string
  imageSrc: any
  description: string
  direction: 'left' | 'right'
}

const sectionStyles = cva(
  ['flex', 'flex-col', 'w-full', 'justify-center', 'gap-24', 'items-center'],
  {
    variants: {
      direction: {
        right: ['md:flex-row'],
        left: ['md:flex-row-reverse'],
      },
    },
  }
)

const imageStyles = cva(
  [
    'flex',
    'justify-center',
    'w-full',
    'md:w-1/2',
    'animate-in',
    'fade-in',
    'duration-1000',
  ],
  {
    variants: {
      direction: {
        right: ['md:justify-end', 'md:slide-in-from-left'],
        left: ['md:justify-start', 'md:slide-in-from-right'],
      },
    },
  }
)

const textContainerStyles = cva(
  ['flex', 'w-full', 'md:w-1/2', 'flex-col', 'gap-2', 'text-center'],
  {
    variants: {
      direction: {
        right: ['md:text-left'],
        left: ['md:text-right'],
      },
    },
  }
)

const descriptionStyles = cva(['max-w-sm', 'text-center', 'text-[15px]'], {
  variants: {
    direction: {
      right: ['md:text-left', 'md:mr-auto'],
      left: ['md:text-right', 'md:ml-auto'],
    },
  },
})

export const Section = ({
  title,
  date,
  imageSrc,
  description,
  direction,
}: SectionProps) => (
  <section className={sectionStyles({ direction })}>
    <div className={imageStyles({ direction })}>
      <Image
        src={imageSrc}
        alt={title}
        height={320}
        width={320}
        className={`h-80 rounded object-cover object-center `}
      />
    </div>
    <div className={textContainerStyles({ direction })}>
      <h3 className={`${fancyFont.className} text-4xl`}>{title}</h3>
      <h4 className={`${fancyFont.className} text-2xl`}>{date}</h4>
      <p className={descriptionStyles({ direction })}>{description}</p>
    </div>
  </section>
)
