import Image from 'next/image'

import { cva } from 'class-variance-authority'

import { cormorantGaramond } from '@/lib/fonts'

type SectionProps = {
  title: string
  date: string
  imageSrc: any
  description: string
  direction: 'left' | 'right'
}

const sectionStyles = cva(
  ['flex', 'w-full', 'justify-center', 'gap-24', 'items-center'],
  {
    variants: {
      direction: {
        right: ['flex-row'],
        left: ['flex-row-reverse'],
      },
    },
  }
)

const imageStyles = cva(
  ['flex', 'w-1/2', 'animate-in', 'fade-in', 'duration-1000'],
  {
    variants: {
      direction: {
        right: ['justify-end', 'slide-in-from-left'],
        left: ['justify-start', 'slide-in-from-right'],
      },
    },
  }
)

const textContainerStyles = cva(['flex', 'w-1/2', 'flex-col', 'gap-2'], {
  variants: {
    direction: {
      right: ['text-left'],
      left: ['text-right'],
    },
  },
})

const descriptionStyles = cva(['max-w-sm'], {
  variants: {
    direction: {
      right: ['text-left', 'mr-auto'],
      left: ['text-right', 'ml-auto'],
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
      <h3 className={`${cormorantGaramond.className} text-4xl`}>{title}</h3>
      <h4 className={`${cormorantGaramond.className} text-2xl`}>{date}</h4>
      <p className={descriptionStyles({ direction })}>{description}</p>
    </div>
  </section>
)
