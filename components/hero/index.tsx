import { cormorantGaramond } from '@/lib/fonts';
import { Navigation } from '@/components/Navigation';

export const Hero = () => {
  return (
    <div className="p-8 bg-white h-screen">
      <div className={`relative h-full bg-hero bg-cover bg-top`}>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-red-200 bg-opacity-10" />
        <Navigation />
        <div
          className={`${cormorantGaramond.className} flex flex-col items-center justify-center mt-40`}
        >
          <h2 className="text-lg font-semibold text-black">Let's Celebrate</h2>
          <p
            className={`text-4xl font-500 tracking-tight text-black sm:text-5xl lg:text-6xl mb-4`}
          >
            Mark & Grace
          </p>
          <p className={`mx-auto max-w-xl text-xl text-black`}>
            On Friday June 2nd, 2023 in Copenhagen
          </p>
        </div>
      </div>
    </div>
  );
};
