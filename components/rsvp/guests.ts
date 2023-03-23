export type Guest = {
  name: string
  linkedGuests?: string[]
  additionalGuests?: number
  foodRestriction: 'none' | 'vegetarian' | 'allergy'
}

export const guestList: Guest[] = [
  {
    name: 'mark lyck',
    linkedGuests: ['grace park'],
    additionalGuests: 1,
  },
  {
    name: 'grace park',
    linkedGuests: ['mark lyck'],
    additionalGuests: 1,
  },
  // guests
  {
    name: 'lone nygaarden',
    linkedGuests: ['søren lassen'],
    additionalGuests: 1,
  },
  {
    name: 'søren lassen',
    linkedGuests: ['lone nygaarden'],
    additionalGuests: 1,
  },
  {
    name: 'thomas lyck',
    linkedGuests: ['marie lauritzen', 'anna lyck', 'liv lyck'],
    additionalGuests: 3,
  },
  {
    name: 'marie lauritzen',
    linkedGuests: ['thomas lyck', 'anna lyck', 'liv lyck'],
    additionalGuests: 3,
  },
  {
    name: 'søren lyck',
    linkedGuests: [],
    additionalGuests: 3,
  },
  {
    name: 'helle thrane',
    linkedGuests: ['jakob thrane', 'emilie thrane', 'oscar thrane'],
    additionalGuests: 3,
  },
  {
    name: 'jakob thrane',
    linkedGuests: ['helle thrane', 'emilie thrane', 'oscar thrane'],
    additionalGuests: 3,
  },
  {
    name: 'jette grønkjær',
    linkedGuests: ['peter grønkjær', 'gustav grønkjær', 'maria grønkjær'],
    additionalGuests: 3,
  },
  {
    name: 'peter grønkjær',
    linkedGuests: ['jette grønkjær', 'gustav grønkjær', 'maria grønkjær'],
    additionalGuests: 3,
  },
  {
    name: 'vibeke harbøl',
    linkedGuests: [],
    additionalGuests: 0,
  },
  {
    name: 'ole lyck',
    linkedGuests: ['kirsten la cour'],
    additionalGuests: 1,
  },
  {
    name: 'kirsten la cour',
    linkedGuests: ['ole lyck'],
    additionalGuests: 1,
  },
  {
    name: 'louise lauritzen',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'peter lauritzen',
    linkedGuests: ['marianne lauritzen'],
    additionalGuests: 1,
  },
  {
    name: 'marianne lauritzen',
    linkedGuests: ['peter lauritzen'],
    additionalGuests: 1,
  },
  {
    name: 'søren lyck',
    linkedGuests: [],
    additionalGuests: 3,
  },
  {
    name: 'bent kristiansen',
    linkedGuests: [],
    additionalGuests: 0,
  },
  {
    name: 'andreas orloff',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'sonae park',
    linkedGuests: ['steve park'],
    additionalGuests: 1,
  },
  {
    name: 'steve park',
    linkedGuests: ['sonae park'],
    additionalGuests: 1,
  },
  {
    name: 'sam park',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'susan park',
    linkedGuests: ['david yang', 'william yang'],
    additionalGuests: 2,
  },
  {
    name: 'david yang',
    linkedGuests: ['susan park', 'william yang'],
    additionalGuests: 2,
  },
  {
    name: 'jeannie kang',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'lucy nguy',
    linkedGuests: ['ryan nguy'],
    additionalGuests: 1,
  },
  {
    name: 'ryan nguy',
    linkedGuests: ['lucy nguy'],
    additionalGuests: 1,
  },
  {
    name: 'sarah elsamanoudi',
    linkedGuests: ['ahad ahmed'],
    additionalGuests: 1,
  },
  {
    name: 'ahad ahmed',
    linkedGuests: ['sarah elsamanoudi'],
    additionalGuests: 1,
  },
  {
    name: 'shranna yi',
    linkedGuests: ['daniel lim'],
    additionalGuests: 1,
  },
  {
    name: 'daniel lim',
    linkedGuests: ['shranna yi'],
    additionalGuests: 1,
  },
  {
    name: 'barbara weyzen',
    linkedGuests: ['joe weyzen'],
    additionalGuests: 1,
  },
  {
    name: 'joe weyzen',
    linkedGuests: ['barbara weyzen'],
    additionalGuests: 1,
  },
  {
    name: 'joe lee',
    linkedGuests: [],
    additionalGuests: 0,
  },
  {
    name: 'diana lee',
    linkedGuests: ['sam lee'],
    additionalGuests: 1,
  },
  {
    name: 'sam lee',
    linkedGuests: ['diana lee'],
    additionalGuests: 1,
  },
  {
    name: 'minnie lee',
    linkedGuests: ['david lee'],
    additionalGuests: 1,
  },
  {
    name: 'david lee',
    linkedGuests: ['minnie lee'],
    additionalGuests: 1,
  },
  {
    name: 'alex cooke',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'tomasz rekawek',
    linkedGuests: ['amanda oliver'],
    additionalGuests: 1,
  },
  {
    name: 'amanda oliver',
    linkedGuests: ['tomasz rekawek'],
    additionalGuests: 1,
  },
  {
    name: 'falk schwiefert',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'rasa pokvytyte',
    linkedGuests: ['vytautas pranskunas'],
    additionalGuests: 1,
  },
  {
    name: 'rapolas micevicius',
    linkedGuests: [],
    additionalGuests: 1,
  },
  {
    name: 'rafael anachoreta',
    linkedGuests: ['vanessa anachoreta'],
    additionalGuests: 1,
  },
  {
    name: 'vanessa anachoreta',
    linkedGuests: ['rafael anachoreta'],
    additionalGuests: 1,
  },
  {
    name: 'christine kim',
    linkedGuests: [],
    additionalGuests: 0,
  },
  {
    name: 'amanda schuck',
    linkedGuests: [],
    additionalGuests: 1,
  },
].map((guest) => ({ ...guest, foodRestriction: 'none' }))
