import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { Gift } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
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
  href: string
}

const RegistryItem = ({ title, description, src, href }: RegistryItemProps) => {
  const t = useTranslations('registry')

  return (
    <li className="flex w-56 flex-col rounded border-[1px] border-zinc-200 bg-white p-4">
      <Image
        src={src}
        alt={title}
        height={240}
        width={240}
        className="mb-4 rounded"
      />
      <h3 className={`text-md mb-4 font-medium`}>{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="mb-auto mt-4" />
      <a href={href} target="_blank" rel="noreferrer">
        <Button className="flex-end w-full" variant="outline">
          <Gift className="mr-2 h-4 w-4" />
          {t('contribute')}
        </Button>
      </a>
    </li>
  )
}

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
          href="https://www.zola.com/registry/collection-item/63d17087da115036e7968acf"
        />
        <RegistryItem
          src={dateNightImg}
          title={t('gift_2_title')}
          description={t('gift_2_description')}
          href="https://www.zola.com/registry/collection-item/63d170910741181b7e639129"
        />
        <RegistryItem
          src={adventureImg}
          title={t('gift_3_title')}
          description={t('gift_3_description')}
          href="https://www.zola.com/registry/collection-item/63d1709c58680c0c7828b635"
        />
        <RegistryItem
          src={roadTripImg}
          title={t('gift_4_title')}
          description={t('gift_4_description')}
          href="https://www.zola.com/registry/collection-item/63d170a5da115036e7968ad9"
        />
        <RegistryItem
          src={cookingClassImg}
          title={t('gift_5_title')}
          description={t('gift_5_description')}
          href="https://www.zola.com/registry/collection-item/63d170d04c680e51ef1e358b"
        />
        <RegistryItem
          src={bakingClassImg}
          title={t('gift_6_title')}
          description={t('gift_6_description')}
          href="https://www.zola.com/registry/collection-item/63d170d81de6501f895a684f"
        />
        <RegistryItem
          src={houseSavingsImg}
          title={t('gift_7_title')}
          description={t('gift_7_description')}
          href="https://www.zola.com/registry/collection-item/6408e0f318b8f212b8e98a5e"
        />
        <RegistryItem
          src={foodSubImg}
          title={t('gift_8_title')}
          description={t('gift_8_description')}
          href="https://www.zola.com/registry/collection-item/6408e12818b8f212b8e98a67"
        />
      </ul>
    </div>
  )
}
