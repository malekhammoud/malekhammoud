import { Container } from '@/components/Container'

export const metadata = {
  title: 'Book a Meeting',
  description: 'Schedule a 15-minute meeting with me.',
}

export default function Meet() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Let’s connect.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Pick a time that works for you for a 15-minute introductory meeting.
        </p>
      </header>
      <div className="w-full">
        {/* Google Calendar Appointment Scheduling begin */}
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0l3xC50zCsAVuXPaX0_QncbfIsohYnOZRwIAeGXkKo5sLR9UEuBrYVsNW0CEMBAbXIuMhnrQ-w?gv=true" 
          style={{ border: 0, overflow: 'hidden' }} 
          width="100%" 
          height="2700"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar Appointment Scheduling"
        ></iframe>
        {/* end Google Calendar Appointment Scheduling --> */}
      </div>
    </Container>
  )
}
