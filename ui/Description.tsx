type DescriptionProps = {
  children: React.ReactNode
  className?: string
}

export const Description = ({ children, className }: DescriptionProps) => {
  return (
    <p
      className={`font-400 mx-auto max-w-xl whitespace-pre-line text-center text-zinc-900 ${className}`}
    >
      {children}
    </p>
  )
}
