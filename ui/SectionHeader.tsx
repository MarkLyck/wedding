import Image from 'next/image'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

import separator from '../public/images/ui/separator.png'

type titleProps = {
  title: string
  description: string
}

export const SectionHeader = ({ title, description }: titleProps) => {
  return (
    <div>
      <Title>{title}</Title>
      <Image
        src={separator}
        width={160}
        height={16}
        alt="separator"
        className="mx-auto my-4"
      />
      <Description>{description}</Description>
    </div>
  )
}
