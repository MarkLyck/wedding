import Image from 'next/image'

import { cormorantGaramond } from '@/lib/fonts'

type SectionProps = {
  title: string
  date: string
  imageSrc: string
  description: string
  direction: 'left' | 'right'
}

export const Section = ({ title, date, imageSrc, description, direction }: SectionProps) => {
  return (
    <section
      className={`flex ${
        direction === 'left' ? 'flex-row-reverse' : 'flex-row'
      } w-full justify-center gap-24`}
    >
      <div className="flex w-1/2 justify-end">
        <Image
          src={imageSrc}
          alt={title}
          height={320}
          width={320}
          className="h-80 rounded object-cover object-center"
        />
      </div>
      <div className="flex w-1/2 flex-col gap-2">
        <h3 className={`${cormorantGaramond.className} text-4xl`}>{title}</h3>
        <h4 className={`${cormorantGaramond.className} text-2xl`}>{date}</h4>
        <p className="max-w-sm">{description}</p>
      </div>
    </section>
  )
}
