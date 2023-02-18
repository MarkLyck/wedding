import { Navigation } from '@/components/Navigation'
import { cormorantGaramond } from '@/lib/fonts'

export const Hero = () => {
  return (
    <div className="bg-white h-screen p-8">
      <div className={`relative h-full bg-hero bg-cover bg-top`}>
        <Navigation />
        <div
          className={`${cormorantGaramond.className} mt-40 flex flex-col items-center justify-center`}
        >
          <h2 className="text-black text-lg font-semibold">Let's Celebrate</h2>
          <p className={`font-500 text-black mb-4 text-4xl tracking-tight sm:text-5xl lg:text-6xl`}>
            Mark & Grace
          </p>
          <p className={`text-black mx-auto max-w-xl text-xl`}>
            On Friday June 2nd, 2023 in Copenhagen
          </p>
        </div>
      </div>
    </div>
  )
}
