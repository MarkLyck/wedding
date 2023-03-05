import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { useTranslations } from 'next-intl'

// import { fancyFont } from '@/lib/fonts'
import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

import adventureImg from './images/adventure.jpeg'
import bakingClassImg from './images/baking_class.jpeg'
import cookingClassImg from './images/cooking_class.jpeg'
import dateNightImg from './images/datenight.jpeg'
import foodSubImg from './images/food_sub.jpeg'
import houseSavingsImg from './images/house_savings.jpg'
import resortImg from './images/resort.jpeg'
import roadTripImg from './images/roadtrip.jpeg'

type RegistryItemProps = {
  title: string
  description: string
  src: StaticImageData
}

const RegistryItem = ({ title, description, src }: RegistryItemProps) => (
  <li className="w-56 rounded border-[1px] border-zinc-200 bg-white p-4">
    <Image
      src={src}
      alt={title}
      height={240}
      width={240}
      className="mb-4 rounded"
    />
    <h3 className={`text-md mb-4 font-medium`}>{title}</h3>
    <p className="text-sm">{description}</p>
  </li>
)

export const Registry = () => {
  const t = useTranslations('registry')

  return (
    <div className="flex flex-col items-center gap-8">
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <ul className="flex flex-wrap justify-center gap-4">
        <RegistryItem
          src={resortImg}
          title={t('gift_1_title')}
          description={t('gift_1_description')}
        />
        <RegistryItem
          src={dateNightImg}
          title={t('gift_2_title')}
          description={t('gift_2_description')}
        />
        <RegistryItem
          src={adventureImg}
          title={t('gift_3_title')}
          description={t('gift_3_description')}
        />
        <RegistryItem
          src={roadTripImg}
          title={t('gift_4_title')}
          description={t('gift_4_description')}
        />
        <RegistryItem
          src={cookingClassImg}
          title={t('gift_5_title')}
          description={t('gift_5_description')}
        />
        <RegistryItem
          src={bakingClassImg}
          title={t('gift_6_title')}
          description={t('gift_6_description')}
        />
        <RegistryItem
          src={houseSavingsImg}
          title={t('gift_7_title')}
          description={t('gift_7_description')}
        />
        <RegistryItem
          src={foodSubImg}
          title={t('gift_8_title')}
          description={t('gift_8_description')}
        />
      </ul>
    </div>
  )
}
