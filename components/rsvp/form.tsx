'use client'

import { useEffect, useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { useDebounce } from 'ahooks'
import { Plus, X } from 'lucide-react'

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

type SubmitData = {
  name: string
  guests: string
  number_of_guests: number
  is_attending: boolean
  welcome_dinner: boolean
  saturday_brunch: boolean
  food_restrictions: boolean
  need_transportation: boolean
  notes: string
}

const AIRTABLE_API_KEY =
  'pat9RxLTubLn628rL.c4dc6feeec3a99abdc8cd996e884df1eb6e474b75e7777e552227098cd0a83d2'

const getGuests = async () => {
  return await fetch(
    'https://api.airtable.com/v0/appDPPY0ly7ZgzTd2/Table%201?maxRecords=3&view=Grid%20view',
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  )
}

const createGuest = async (data: SubmitData) => {
  return fetch('https://api.airtable.com/v0/appDPPY0ly7ZgzTd2/Table%201', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: data,
        },
      ],
    }),
  })
}

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

export const RSVPForm = () => {
  const { mutate: submitFormData } = useMutation({
    mutationKey: ['create-guest'],
    mutationFn: createGuest,
  })
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const [guests, setGuests] = useState<Guest[]>([])
  const debouncedName = useDebounce(formState.name, { wait: 1000 })

  const isAttending = formState.is_attending

  const mainGuest = guestList.find(
    (guest) => guest.name === formState.name.toLowerCase()
  )
  const guestFound = mainGuest !== undefined

  useEffect(() => {
    if (mainGuest) {
      const additionalGuests: Guest[] =
        mainGuest.linkedGuests?.map((name) => ({
          name,
          dietaryRestriction: 'none',
        })) ?? []

      setGuests([mainGuest, ...additionalGuests])
    }
  }, [mainGuest])

  const handleSubmit = () => {
    submitFormData({
      name: formState.name,
      guests: JSON.stringify(formState.guests),
      number_of_guests: formState.number_of_guests,
      is_attending: formState.is_attending ?? false,
      welcome_dinner: formState.welcome_dinner ?? false,
      saturday_brunch: formState.saturday_brunch ?? false,
      food_restrictions: formState.food_restrictions ?? false,
      need_transportation: formState.need_transportation ?? false,
      notes: formState.notes,
    })
  }

  return (
    <div>
      <div className="grid gap-6 py-4">
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="name" className="text-right">
            First and Last name
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
            placeholder="First & Last name"
          />
        </div>
        {mainGuest ? (
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="wedding_rsvp" className="text-right">
              Are you able to attend?
            </Label>
            <Select
              onValueChange={(value: 'yes' | 'no') => {
                setFormState((prev) => ({
                  ...prev,
                  is_attending: value === 'yes',
                }))
              }}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">
                  Yes, I am coming to the wedding.
                </SelectItem>
                <SelectItem value="no" className="text-red-600">
                  No, I can't make it.
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
                invitation for "
                <span className="font-bold">{formState.name}</span>" not found.
              </span>
              <span>
                If this is a mistake please send an email to{' '}
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
                  Who's attending?
                </Label>
                {guests.map((guest, index) => (
                  <div key={index} className="grid w-full grid-cols-8 gap-4 ">
                    <Input
                      className="col-span-4 capitalize"
                      value={guest.name}
                      placeholder="Name"
                      onChange={(e) => {
                        setGuests((prev) => {
                          const newGuests = [...prev]
                          newGuests[index] = {
                            ...prev[index],
                            name: e.target.value.toLowerCase(),
                          }

                          return newGuests
                        })
                      }}
                      // Don't allow main guest to delete themselves
                      disabled={guest.name === formState.name}
                    />
                    <Select
                      value={guest.dietaryRestriction}
                      onValueChange={(
                        value: 'none' | 'vegetarian' | 'allergy'
                      ) => {
                        setGuests((prev) => {
                          const newGuests = [...prev]
                          newGuests[index] = {
                            ...prev[index],
                            dietaryRestriction: value,
                          }

                          return newGuests
                        })
                      }}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">
                          No food restrictions
                        </SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="allergies" className="text-red-600">
                          Food Allergies
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {guest.name !== formState.name ? (
                      <Button
                        variant="outline"
                        className="col-span-1 p-0 text-black"
                        disabled={guest.name === formState.name}
                        onClick={() => {
                          setGuests((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }}
                      >
                        <X className="h-4 text-black" />
                      </Button>
                    ) : null}
                  </div>
                ))}
                {mainGuest?.additionalGuests &&
                guests.length < mainGuest?.additionalGuests + 1 ? (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      setGuests((prev) => [
                        ...prev,
                        {
                          name: '',
                          linkedGuests: [],
                          additionalGuests: 0,
                          dietaryRestriction: 'none',
                        },
                      ])
                    }
                  >
                    <Plus className="mr-1 h-4 w-4" />
                    Add guest
                  </Button>
                ) : null}
              </div>,
              <div
                key="optional_activities"
                className="flex flex-col items-start gap-4"
              >
                <Label className="text-right">Optional activities</Label>
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
                    Attending the optional Thursday dinner
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
                    Attending the optional Saturday brunch
                  </Label>
                </div>
              </div>,
              <div
                key="transportation"
                className="flex flex-col items-start gap-4"
              >
                <Label className="text-right">
                  Do you need transportation from Copenhagen to and from
                  Herthadalen?
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
                    Yes, we need transportation
                  </Label>
                </div>
              </div>,
              <div
                key="other_notes"
                className="flex flex-col items-start gap-4"
              >
                <Label htmlFor="thursday_dinner" className="text-right">
                  Other notes
                </Label>
                <Textarea placeholder="food allergies, comments or anything else you think we should know." />
              </div>,
            ]
          : null}
      </div>
      <DialogFooter>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogFooter>
    </div>
  )
}
