'use client'

import { useEffect, useState } from 'react'

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
  numberOfGuests: number
  isAttendingWedding: boolean | null
  isAttendingThursdayDinner: boolean | null
  isAttendingSaturdayBrunch: boolean | null
  foodRestrictions: boolean | null
  needTransportation: boolean | null
  willSubmitContent: 'yes' | 'no' | 'maybe' | null
  notes: string
}

export const RSVPForm = () => {
  const [name, setName] = useState('')
  const [formState, setFormState] = useState<FormState>({
    name: '',
    guests: [],
    isAttendingWedding: null,
    isAttendingThursdayDinner: null,
    isAttendingSaturdayBrunch: null,
    numberOfGuests: 0,
    foodRestrictions: null,
    needTransportation: null,
    willSubmitContent: null,
    notes: '',
  })
  const [guests, setGuests] = useState<Guest[]>([])
  const [rsvp, setRsvp] = useState<string | null>(null)
  const debouncedName = useDebounce(name, { wait: 1000 })

  const isAttending = rsvp === 'yes'

  const mainGuest = guestList.find((guest) => guest.name === name.toLowerCase())
  const guestFound = mainGuest !== undefined

  useEffect(() => {
    setGuests([])
    setRsvp(null)
  }, [name])
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

  return (
    <div>
      <div className="grid gap-6 py-4">
        <div className="flex flex-col items-start gap-4">
          <Label htmlFor="name" className="text-right">
            First and Last name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
            className="col-span-3 capitalize"
            placeholder="First & Last name"
          />
        </div>
        {mainGuest ? (
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="wedding_rsvp" className="text-right">
              Are you able to attend?
            </Label>
            <Select onValueChange={setRsvp}>
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
        name === debouncedName &&
        debouncedName.includes(' ') ? (
          <Alert>
            <p className="flex flex-col">
              <span>
                invitation for "<span className="font-bold">{name}</span>" not
                found.
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
                      disabled={guest.name === name}
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
                    {guest.name !== name ? (
                      <Button
                        variant="outline"
                        className="col-span-1 p-0 text-black"
                        disabled={guest.name === name}
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
                key="additional_guests"
                className="flex flex-col items-start gap-4"
              >
                <Label htmlFor="thursday_dinner" className="text-right">
                  Optional activities
                </Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="thursday_dinner" />
                  <Label
                    htmlFor="thursday_dinner"
                    className="text-right font-normal"
                  >
                    Attending the optional Thursday dinner
                  </Label>
                </div>
                <div className="flex items-center gap-2 ">
                  <Checkbox id="sunday_brunch" />
                  <Label
                    htmlFor="sunday_brunch"
                    className="text-right font-normal"
                  >
                    Attending the optional Saturday brunch
                  </Label>
                </div>
              </div>,
              <div
                key="additional_guests"
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
        <Button type="submit">Submit</Button>
      </DialogFooter>
    </div>
  )
}
