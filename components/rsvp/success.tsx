import { CheckCircle2 } from 'lucide-react'

export const Success = ({ isAttending }: { isAttending: boolean }) => (
  <div className="flex flex-col items-center justify-center gap-8 text-center text-zinc-600">
    <CheckCircle2 className="h-10 w-10 text-zinc-500" />
    {isAttending ? (
      <p>
        Thank you for your RSVP
        <br />
        <br />
        We're looking forward to seeing you at our wedding!
      </p>
    ) : (
      'Thank you for your RSVP!'
    )}
  </div>
)
