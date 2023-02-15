type DescriptionProps = {
  children: React.ReactNode
}

export const Description = ({ children }: DescriptionProps) => {
  return <p className="font-400  mx-auto max-w-lg text-center text-zinc-900">{children}</p>
}
