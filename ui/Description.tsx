type DescriptionProps = {
  children: React.ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return (
    <p className="text-zinc-900  text-center font-400 max-w-lg mx-auto">
      {children}
    </p>
  );
};
