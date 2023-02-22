import { cormorantGaramond } from '@/lib/fonts'

type TitleProps = {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h2
      className={`${cormorantGaramond.className} font-400 text-center text-3xl text-zinc-900`}
    >
      {children}
    </h2>
  )
}
