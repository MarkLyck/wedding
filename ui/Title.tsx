import { cormorantGaramond } from '@/lib/fonts'

type TitleProps = {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={`${cormorantGaramond.className} font-400 text-center text-3xl capitalize text-zinc-900 ${className}`}
    >
      {children}
    </h2>
  )
}
