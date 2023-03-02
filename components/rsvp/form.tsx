'use client'

import { useEffect, useState } from 'react'

import { useDebounce } from 'ahooks'
import { Plus, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import posthog from 'posthog-js'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { analyticsIdentify } from '@/lib/analytics'

import { guestList } from './guests'
import type { Guest } from './guests'

type FormState = {
  name: string
  guests: Guest[]
  number_of_guests: number
  is_attending: boolean | null
  welcome_dinner: boolean | null
  saturday_brunch: boolean | null
  food_restrictions: boolean | null
  need_transportation: boolean | null
  notes: string
}

// const getGuests = async () => {
//   return await fetch(
//     'https://api.airtable.com/v0/appDPPY0ly7ZgzTd2/Table%201?maxRecords=3&view=Grid%20view',
//     {
//       headers: {
//         Authorization: `Bearer ${AIRTABLE_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   )
// }

const initialFormState = {
  name: '',
  guests: [],
  number_of_guests: 0,
  is_attending: null,
  welcome_dinner: null,
  saturday_brunch: null,
  food_restrictions: null,
  need_transportation: null,
  notes: '',
}

export type SubmitData = {
  name: string
  guests: string
  guest_names: string
  number_of_guests: number
  is_attending: boolean
  welcome_dinner: boolean
  saturday_brunch: boolean
  food_restrictions: boolean
  need_transportation: boolean
  notes: string
}

type RSVPFormProps = {
  submit: (data: SubmitData) => void
  isLoading: boolean
}

export const RSVPForm = ({ submit, isLoading }: RSVPFormProps) => {
  const t = useTranslations('rsvp_form')
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const debouncedName = useDebounce(formState.name, { wait: 1000 })

  const isAttending = formState.is_attending

  const mainGuest = guestList.find(
    (guest) => guest.name === formState.name.toLowerCase()
  )
  const guestFound = mainGuest !== undefined

  useEffect(() => {
    if (mainGuest) {
      analyticsIdentify({
        id: mainGuest.name.replace(' ', '_'),
        firstName: mainGuest.name.split(' ')[0],
        lastName: mainGuest.name.split(' ')[1],
      })
      const additionalGuests: Guest[] =
        mainGuest.linkedGuests?.map((name) => ({
          name,
          foodRestriction: 'none',
        })) ?? []

      setFormState((prev) => ({
        ...prev,
        number_of_guests: additionalGuests.length + 1,
        guests: [
          {
            name: mainGuest.name,
            foodRestriction: 'none',
          },
          ...additionalGuests,
        ],
      }))
    }
  }, [mainGuest])

  const handleSubmit = () => {
    const submitData = {
      name: formState.name,
      guests: JSON.stringify(
        formState.guests.map((guest) => ({
          name: guest.name,
          foodRestriction: guest.foodRestriction,
        }))
      ),
      guest_names: formState.guests.map((guest) => guest.name).join(', '),
      number_of_guests: formState.number_of_guests,
      is_attending: formState.is_attending ?? false,
      welcome_dinner: formState.welcome_dinner ?? false,
      saturday_brunch: formState.saturday_brunch ?? false,
      food_restrictions: formState.food_restrictions ?? false,
      need_transportation: formState.need_transportation ?? false,
      notes: formState.notes,
    }
    posthog.capture('rsvp', submitData)

    submit(submitData)
  }

  return (
    <div>
      <div className="grid gap-6 py-4">
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="name" className="text-right">
            {t('first_and_last_name')}
          </Label>
          <Input
            id="name"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...initialFormState,
                name: e.target.value.toLowerCase(),
              })
            }
            className="col-span-3 capitalize"
            placeholder={t('first_and_last_name')}
          />
        </div>
        {mainGuest ? (
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="wedding_rsvp" className="text-right">
              {t('are_you_attending')}
            </Label>
            <Select
              onValueChange={(value: 'yes' | 'no') => {
                setFormState((prev) => ({
                  ...prev,
                  is_attending: value === 'yes',
                  number_of_guests: value === 'yes' ? prev.number_of_guests : 0,
                }))
              }}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">
                  {t('yes_im_coming_to_the_wedding')}
                </SelectItem>
                <SelectItem value="no" className="text-red-600">
                  {t('no_i_cant_make_it')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        ) : null}
        {/* render error if invitation not found */}
        {!guestFound &&
        formState.name === debouncedName &&
        debouncedName.includes(' ') ? (
          <Alert>
            <p className="flex flex-col">
              <span>
                {t('invitation_for')} "
                <span className="font-bold">{formState.name}</span>"{' '}
                {t('not_found')}.
              </span>
              <span>
                {t('if_mistake')}{' '}
                <a
                  className="inline text-zinc-800 underline"
                  href="mailto:hello@marklyck.com"
                >
                  hello@marklyck.com
                </a>
              </span>
            </p>
          </Alert>
        ) : null}
        {/* additional guests */}
        {isAttending
          ? [
              <div
                key="additional_guests"
                className="flex flex-col items-start gap-4"
              >
                <Label htmlFor="wedding_rsvp" className="text-right">
                  {t('who_is_attending')}
                </Label>
                {formState.guests.map((guest, index) => (
                  <div key={index} className="grid w-full grid-cols-8 gap-4 ">
                    <Input
                      className="col-span-4 capitalize"
                      value={guest.name}
                      placeholder={t('name')}
                      onChange={(e) => {
                        setFormState((prev) => {
                          const newGuests = [...prev.guests]
                          newGuests[index] = {
                            ...prev.guests[index],
                            name: e.target.value.toLowerCase(),
                          }
                          return { ...prev, guests: newGuests }
                        })
                      }}
                      // Don't allow main guest to delete themselves
                      disabled={guest.name === formState.name}
                    />
                    <Select
                      value={guest.foodRestriction}
                      onValueChange={(
                        value: 'none' | 'vegetarian' | 'allergy'
                      ) => {
                        setFormState((prev) => {
                          const newGuests = [...prev.guests]
                          newGuests[index] = {
                            ...prev.guests[index],
                            foodRestriction: value,
                          }

                          const anyGuestHasFoodRestriction = newGuests.some(
                            (guest) => guest.foodRestriction !== 'none'
                          )

                          return {
                            ...prev,
                            food_restrictions: anyGuestHasFoodRestriction,
                            guests: newGuests,
                          }
                        })
                      }}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">
                          {t('no_food_restrictions')}
                        </SelectItem>
                        <SelectItem value="vegetarian">
                          {t('vegetarian')}
                        </SelectItem>
                        <SelectItem value="allergy" className="text-red-600">
                          {t('food_allergies')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {guest.name !== formState.name ? (
                      <Button
                        variant="outline"
                        className="col-span-1 p-0 text-black"
                        disabled={guest.name === formState.name}
                        onClick={() => {
                          setFormState((prev) => {
                            const newGuests = prev.guests.filter(
                              (_, i) => i !== index
                            )
                            return { ...prev, guests: newGuests }
                          })
                        }}
                      >
                        <X className="h-4 text-black" />
                      </Button>
                    ) : null}
                  </div>
                ))}
                {mainGuest?.additionalGuests &&
                formState.guests.length < mainGuest?.additionalGuests + 1 ? (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setFormState((prev) => ({
                        ...prev,
                        guests: [
                          ...prev.guests,
                          {
                            name: '',
                            linkedGuests: [],
                            additionalGuests: 0,
                            foodRestriction: 'none',
                          },
                        ],
                      }))
                    }}
                  >
                    <Plus className="mr-1 h-4 w-4" />
                    {t('add_a_guest')}
                  </Button>
                ) : null}
              </div>,
              <div
                key="transportation"
                className="flex flex-col items-start gap-4"
              >
                <Label className="text-right">
                  {t('do_you_need_transportation')}
                </Label>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="need_transportation"
                    onCheckedChange={(value: boolean) => {
                      setFormState((prev) => ({
                        ...prev,
                        need_transportation: value,
                      }))
                    }}
                  />
                  <Label
                    htmlFor="need_transportation"
                    className="text-right font-normal"
                  >
                    {t('yes_need_transportation')}
                  </Label>
                </div>
              </div>,
              <div
                key="optional_activities"
                className="flex flex-col items-start gap-4"
              >
                <Label className="text-right">{t('optional_activities')}</Label>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="welcome_dinner"
                    onCheckedChange={(value: boolean) => {
                      setFormState((prev) => ({
                        ...prev,
                        welcome_dinner: value,
                      }))
                    }}
                  />
                  <Label
                    htmlFor="welcome_dinner"
                    className="text-right font-normal"
                  >
                    {t('attending_optional_welcome_dinner')}
                  </Label>
                </div>
                <div className="flex items-center gap-2 ">
                  <Checkbox
                    id="saturday_brunch"
                    onCheckedChange={(value: boolean) => {
                      setFormState((prev) => ({
                        ...prev,
                        saturday_brunch: value,
                      }))
                    }}
                  />
                  <Label
                    htmlFor="saturday_brunch"
                    className="text-right font-normal"
                  >
                    {t('attending_optional_saturday_brunch')}
                  </Label>
                </div>
              </div>,
              <div
                key="other_notes"
                className="flex flex-col items-start gap-4"
              >
                <Label htmlFor="thursday_dinner" className="text-right">
                  {t('other_notes')}
                </Label>
                <Textarea
                  placeholder="dietary restrictions, comments, or anything else you think we should know."
                  onChange={(e) => {
                    setFormState((prev) => ({
                      ...prev,
                      notes: e.target.value,
                    }))
                  }}
                />
              </div>,
            ]
          : null}
      </div>
      <DialogFooter>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={!guestFound || isLoading || formState.is_attending === null}
        >
          {t('submit')}
        </Button>
      </DialogFooter>
    </div>
  )
}
