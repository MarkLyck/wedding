import { cormorantGaramond } from '@/lib/fonts';

type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <h2
      className={`${cormorantGaramond.className} text-zinc-900 text-3xl text-center font-400`}
    >
      {children}
    </h2>
  );
};
