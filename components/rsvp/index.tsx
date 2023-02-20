'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { RSVPForm } from './form'

export function RSVPDialog() {
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
        <RSVPForm />
      </DialogContent>
    </Dialog>
  )
}
