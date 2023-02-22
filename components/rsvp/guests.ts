export type Guest = {
  name: string
  linkedGuests?: string[]
  additionalGuests?: number
  foodRestriction: 'none' | 'vegetarian' | 'allergy'
}

export const guestList: Guest[] = [
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
    name: 'mark lyck',
    linkedGuests: ['grace park'],
    additionalGuests: 1,
  },
  {
    name: 'grace park',
    linkedGuests: ['mark lyck'],
    additionalGuests: 1,
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
].map((guest) => ({ ...guest, foodRestriction: 'none' }))
