'use client'

import { useEffect, useState } from 'react'

import { useDebounce } from 'ahooks'
import { Plus, X } from 'lucide-react'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { guestList } from './guests'
import type { Guest } from './guests'

export function RSVPDialog() {
  const [name, setName] = useState('')
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
    <Dialog>
      <DialogTrigger asChild>
        <a className="after:content-[' '] before👈 relative cursor-pointer px-4 py-2 text-zinc-500 transition-colors duration-200 after:absolute after:top-1/2 after:left-0 after:block after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-neutral-600 hover:text-black">
          RSVP
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>RSVP</DialogTitle>
          <DialogDescription>
            Please RSVP latest by May 1st, 2023, using the form below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
            <Alert text={`invitation for "${name}" not found.`} />
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
                        className="col-span-3 capitalize"
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
                        <SelectTrigger className="col-span-4">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">
                            No food restrictions
                          </SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem
                            value="allergies"
                            className="text-red-600"
                          >
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
              ]
            : null}
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
