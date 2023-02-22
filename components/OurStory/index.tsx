import { SectionHeader } from '@/ui/SectionHeader'

import { Section } from './Section'

export const OurStory = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <SectionHeader
        title="A short timeline of our story"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud."
      />
      <div className="relative flex flex-col gap-8 p-8">
        <div className="absolute inset-y-4 left-1/2 w-0.5 bg-zinc-300" />
        <Section
          title="How we met"
          date="06. 02. 2019"
          description="We met when we were both solo-traveling in Medellin, Columbia. We happened to go on the same bus tour to El Peñón de Guatapé, a giant monolith surrounded by beautiful lakes. We met on 649 steps to the top of the monolith. The climb was followed by a tour to the nearby local town where we visited a small margarita bar."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="right"
        />
        <Section
          title="Moved to New York"
          date="Fall 2019"
          description="After our trip Grace moved to New York to specialize in pediatric dentistry where Mark joined slightly after."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="left"
        />
        <Section
          title="Got engaged"
          date="October 2021"
          description="After our trip Grace moved to New York to specialize in pediatric dentistry where Mark joined slightly after."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="right"
        />
        <Section
          title="Married in D.C."
          date="November 2022"
          description="After our trip Grace moved to New York to specialize in pediatric dentistry where Mark joined slightly after."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="left"
        />
      </div>
    </div>
  )
}
