'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { cva } from 'class-variance-authority'
import { useTranslations } from 'next-intl'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

import { RSVPForm } from './form'
import type { SubmitData } from './form'
import { Success } from './success'

const createGuest = async (data: SubmitData) => {
  return await axios.post('/api/rsvp', data)
}

const dialogContentStyles = cva(
  [
    'overflow-y-auto',
    'max-h-[calc(100vh-100px)]',
    'sm:max-h-[calc(100vh-60px)]',
  ],
  {
    variants: {
      isSuccess: {
        true: 'sm:max-w-[400px]',
        false: 'sm:max-w-[600px]',
      },
    },
  }
)

export function RSVP() {
  const t = useTranslations('rsvp_form')
  const { toast } = useToast()
  const {
    mutate,
    data: response,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ['create-guest'],
    mutationFn: createGuest,
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Error: Submission failed :(',
        description: 'please try again or contact hello@marklyck.com',
      })
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="after:content-[' '] before👈 relative cursor-pointer px-4 py-2 text-zinc-500 transition-colors duration-200 after:absolute after:left-0 after:top-1/2 after:block after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-neutral-600 hover:text-black">
          {t('rsvp')}
        </a>
      </DialogTrigger>
      <DialogContent className={cn(dialogContentStyles({ isSuccess }))}>
        {isSuccess ? (
          <Success
            isAttending={
              response?.data?.records?.[0]?.fields?.is_attending ?? false
            }
          />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{t('rsvp')}</DialogTitle>
              <DialogDescription>{t('rsvp_latest_by')}</DialogDescription>
            </DialogHeader>
            <RSVPForm submit={mutate} isLoading={isLoading} />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
