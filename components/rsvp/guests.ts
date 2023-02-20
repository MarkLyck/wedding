export type Guest = {
  name: string
  linkedGuests?: string[]
  additionalGuests?: number
  dietaryRestriction: 'none' | 'vegetarian' | 'allergy'
}

export const guestList: Guest[] = [
  {
    name: 'thomas lyck',
    linkedGuests: ['marie lauritzen', 'anna lyck', 'liv lyck'],
    additionalGuests: 3,
    dietaryRestriction: 'none',
  },
  {
    name: 'marie lauritzen',
    linkedGuests: ['thomas lyck', 'anna lyck', 'liv lyck'],
    additionalGuests: 3,
    dietaryRestriction: 'none',
  },
  {
    name: 'mark lyck',
    linkedGuests: ['grace park'],
    additionalGuests: 1,
    dietaryRestriction: 'none',
  },
  {
    name: 'grace park',
    linkedGuests: ['mark lyck'],
    additionalGuests: 1,
    dietaryRestriction: 'none',
  },
  {
    name: 'søren lyck',
    linkedGuests: [],
    additionalGuests: 3,
    dietaryRestriction: 'none',
  },
  {
    name: 'helle thrane',
    linkedGuests: ['jakob thrane', 'emilie thrane', 'oscar thrane'],
    additionalGuests: 3,
    dietaryRestriction: 'vegetarian',
  },
  {
    name: 'jakob thrane',
    linkedGuests: ['helle thrane', 'emilie thrane', 'oscar thrane'],
    additionalGuests: 3,
    dietaryRestriction: 'none',
  },
]
